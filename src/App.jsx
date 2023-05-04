import { useState } from "react";
import "./App.css";
import StateChangeMistake from "./components/StateChangeMistake";
// import FunctionCallMistakes from "./components/FunctionCallMistakes";
// import ArrayMapMistakes from "./components/ArrayMapMistakes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <FunctionCallMistakes /> */}
      {/* <ArrayMapMistakes /> */}
      <StateChangeMistake />
    </div>
  );
}

export default App;
