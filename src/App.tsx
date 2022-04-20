import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import BaseBuilder from "./components/element-block-editor/element-block-editor";
import Column from "./components/others/Column";
import { ButtonSettings } from "./components/element-block-editor/elements/ButtonSettings";
import BaseBuilder from "./test/BaseBuilder";
import Sidebar from "./components/sidebar/sidebar.component";
import Navbar from "./components/header/navbar.component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div >
      <Sidebar>
        <BaseBuilder />
      </Sidebar>
    </div>
  );
}

export default App;
