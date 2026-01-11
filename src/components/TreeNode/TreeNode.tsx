import type { TreeNode } from "./TreeView.types";

interface Props {
  node: TreeNode;
  onToggle: (node: TreeNode) => void;
  onAdd: (node: TreeNode) => void;
  onEdit: (node: TreeNode) => void;
  onDelete: (id: string) => void;
}

const TreeNodeComponent = ({
  node,
  onToggle,
  onAdd,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <div className="tree-node">
      {/* Node Row */}
      <div className="tree-node-content">
        {/* Circle Avatar */}
        <div className="node-avatar">
          {node.name.charAt(0).toUpperCase()}
        </div>

        {/* Label Card */}
        <div className="node-label">
          {/* Expand / Collapse */}
          {node.hasChildren && (
            <span
              className="expand-btn"
              onClick={() => onToggle(node)}
            >
              {node.isExpanded ? "−" : "+"}
            </span>
          )}

          <span className="node-text">{node.name}</span>

          {/* Actions */}
          <div className="node-actions">
            <button onClick={() => onAdd(node)}>＋</button>
            <button onClick={() => onEdit(node)}>✎</button>
            <button onClick={() => onDelete(node.id)}>🗑</button>
          </div>
        </div>
      </div>

      {/* Children */}
      {node.isExpanded && node.children && (
        <div className="tree-children">
          {node.children.map((child) => (
            <TreeNodeComponent
              key={child.id}
              node={child}
              onToggle={onToggle}
              onAdd={onAdd}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNodeComponent;
