import ReactFlowRenderer from "./ReactFlowRenderer";
import { useGraphStore } from "../src/ReactFlowRenderer/GraphStore";
function App() {
  return (
    <div>
      {/* <useGraphStore.Provider> */}
        <ReactFlowRenderer />
      {/* </useGraphStore.Provider> */}
    </div>
  );
}

export default App;


