import { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import type {TreeNode} from "./TreeView.types"
import { fetchTreeChildren } from "../../api/treeApi";
import TreeNodeComponent from "./TreeNode";
import "./TreeView.css";

interface Props {
  data: TreeNode[];
}

const TreeView = ({ data }: Props) => {
  const [treeData, setTreeData] = useState<TreeNode[]>(data);

  const toggleNode = async (node: TreeNode) => {
    if (!node.isExpanded && node.hasChildren && !node.children) {
      node.children = await fetchTreeChildren(node.id);
    }
    node.isExpanded = !node.isExpanded;
    setTreeData([...treeData]);
  };

  const addNode = (parent: TreeNode) => {
    const name = prompt("Enter node name");
    if (!name) return;

    parent.children = parent.children || [];
    parent.children.push({
      id: Date.now().toString(),
      name,
    });

    parent.isExpanded = true;
    setTreeData([...treeData]);
  };

  const editNode = (node: TreeNode) => {
    const name = prompt("Edit name", node.name);
    if (name) {
      node.name = name;
      setTreeData([...treeData]);
    }
  };

  const deleteNode = (id: string, nodes: TreeNode[]): TreeNode[] => {
    return nodes
      .filter((n) => n.id !== id)
      .map((n) => ({
        ...n,
        children: n.children ? deleteNode(id, n.children) : undefined,
      }));
  };

  const removeNode = (id: string) => {
    if (!confirm("Delete this node?")) return;
    setTreeData(deleteNode(id, treeData));
  };

  return (
    <DragDropContext onDragEnd={() => {}}>
      {treeData.map((node) => (
        <TreeNodeComponent
          key={node.id}
          node={node}
          onToggle={toggleNode}
          onAdd={addNode}
          onEdit={editNode}
          onDelete={removeNode}
        />
      ))}
    </DragDropContext>
  );
};

export default TreeView;
