import "./App.css";
import PageBuilder from "./components/page-builder";
// import BaseBuilder from "./components/element-block-editor/element-block-editor";
import Sidebar from "./components/sidebar/sidebar.component";
import { EditorProvider } from "./components/sidebar/useEditor";
import { TabContextProvider } from "./contexts/tab-setting-context";

function App() {
  return (
    <div>
      <EditorProvider>
        <TabContextProvider>
          <Sidebar></Sidebar>
        </TabContextProvider>
      </EditorProvider>
    </div>
  );
}

export default App;
