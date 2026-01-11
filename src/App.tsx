import TreeView from "./components/TreeNode/TreeView";
import { initialTreeData } from "./data/treeData";
import "./styles/global.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <h2>Tree View Component</h2>
      <TreeView data={initialTreeData} />

      <button className="btn-blue" onClick={() => navigate("/todolist")}>
        Go to Todo List
      </button>
    </div>
  );
}

export default App;
