import { useEffect } from "react";
import { PanelHeading } from "../page-builder/styled";
import { useRefEditor } from "../sidebar/useEditor";
import HeroIcons from "./hero-icons.component";

type Props = {};

const Navbar: React.FC<Props> = ({ children }) => {
  const { pnltl, pnltc, pnlbl, editor } = useRefEditor();

  const changeDevice = () => {
    editor && editor.setDevice("Desktop");
  };

  const undo = () => {
    let cm = editor && editor.Commands;
    let dv = editor && editor.DeviceManager;

    // console.log("run undo", cm.runCommand("undo"));

    console.log("run undo", cm.getAll());
    console.log("device desktop", cm.isActive("custom:set-device-desktop"));
    console.log("getActive", cm.getActive());
    console.log("device", dv.Device);

    cm.run("core:undo");
  };

  return (
    <div className="divide-y divide-gray-400 bg-white">
      <div className="h-16 border p-2 w-full">
        <div className="flex justify-between items-center w-full h-full">
          <HeroIcons text="Library" icon="library" disabled={true} />
          <HeroIcons icon="undo" func={undo} />
          <HeroIcons icon="pc" func={changeDevice} />

          <div className="flex space-x-2 h-full">
            {/* <HeroIcons icon="undo" />
            <HeroIcons icon="redo" /> */}
            <PanelHeading ref={pnlbl}></PanelHeading>
          </div>
          <div className="flex space-x-2 h-full">
            {/* <HeroIcons icon="tablet" />
            <HeroIcons icon="mobile" />  */}
            <PanelHeading ref={pnltc}></PanelHeading>
          </div>
          <div className="h-full">
            <PanelHeading ref={pnltl}></PanelHeading>

            {/* <PanelHeading ref={pnltl}></PanelHeading>
            <PanelHeading ref={pnltl}></PanelHeading> */}

            {/* <div ref={pnltl}></div> */}
            {/* <HeroIcons icon="history" />
            <HeroIcons text="Preview" />
            <HeroIcons text="Publish" /> */}
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Navbar;
