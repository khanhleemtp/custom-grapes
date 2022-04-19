import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import BaseBuilder from "./components/element-block-editor/element-block-editor";
import Column from "./components/others/Column";
import { ButtonSettings } from "./components/element-block-editor/elements/ButtonSettings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App min-h-screen w-full bg-red-100">
      Hello LD
      <div className="flex min-h-screen w-full">
        <BaseBuilder />
      </div>
    </div>
  );
}

export default App;
