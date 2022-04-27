import "./App.css";
import PageBuilder from "./components/page-builder";
// import BaseBuilder from "./components/element-block-editor/element-block-editor";
import Sidebar from "./components/sidebar/sidebar.component";
import { TabContextProvider } from "./contexts/tab-setting-context";

function App() {
  return (
    <div>
      <TabContextProvider>
        <Sidebar>{/* <PageBuilder /> */}</Sidebar>
      </TabContextProvider>
    </div>
  );
}

export default App;
