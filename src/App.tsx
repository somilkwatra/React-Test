import TreeView from "./components/TreeNode/TreeView";
import { initialTreeData } from "./data/treeData";
import "./styles/global.css";

function App() {
  return (
    <div className="app-container">
      <h2>Tree View Component</h2>
      <TreeView data={initialTreeData} />
    </div>
  );
}

export default App;
