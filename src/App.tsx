import TreeView from "./components/TreeNode/TreeView";
import KanbanBoard from "./components/Kanban/KanbanBoard";
import { initialTreeData } from "./data/treeData";

function App() {
  return (
    <div>
      <h2>Question 1 – Tree View</h2>
      <TreeView data={initialTreeData} />

      <hr />

      <h2>Question 2 – Kanban Board</h2>
      <KanbanBoard />
    </div>
  );
}

export default App;
