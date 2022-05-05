import PageBuilder from "./components/page-builder";
// import BaseBuilder from "./components/element-block-editor/element-block-editor";
import Sidebar from "./components/sidebar/sidebar.component";
import { EditorProvider } from "./components/sidebar/useEditor";

function App() {
  return (
    <div>
      <EditorProvider>
        <Sidebar></Sidebar>
      </EditorProvider>
    </div>
  );
}

export default App;
