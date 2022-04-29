import { useEffect, useState } from "react";
import { PanelHeading } from "../page-builder/styled";
import { useRefEditor } from "../sidebar/useEditor";
import HeroIcons from "./hero-icons.component";

type Props = {};

type Device = "Desktop" | "Mobile portrait" | "Tablet";

const Navbar: React.FC<Props> = ({ children }) => {
  const { pnltl, pnlbl, editor } = useRefEditor();

  const changeDevice = (device: Device) => () => {
    editor && editor.setDevice(device);
    setDevice(device);
  };

  const [device, setDevice] = useState<Device>("Desktop");

  const undo = () => {
    let cm = editor.Commands;
    // let dv =  editor.DeviceManager;
    let um = editor.UndoManager;
    console.log("has undo", um.hasUndo());

    // // console.log("run undo", cm.runCommand("undo"));

    // console.log("run undo", cm.getAll());
    // console.log("device desktop", cm.isActive("custom:set-device-desktop"));
    console.log("getActive", cm.getActive());
    console.log("device", cm.getAll());
    console.log(cm);
    console.log("um", um);
    console.log(cm.run);
    cm.run("custom:undo");
  };

  const redo = () => {
    let cm = editor && editor.Commands;
    // let dv = editor && editor.DeviceManager;

    // console.log("run undo", cm.runCommand("undo"));

    // console.log("run undo", cm.getAll());
    // console.log("device desktop", cm.isActive("custom:set-device-desktop"));
    // console.log("getActive", cm.getActive());
    // console.log("device", dv.getAll());

    cm.run("custom:redo");
  };

  return (
    <div className="divide-y divide-gray-400 bg-white">
      <div className="h-16 border p-2 w-full">
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex space-x-2 h-full">
            <HeroIcons text="Library" icon="library" disabled={true} />

            <HeroIcons icon="undo" func={undo} />
            <HeroIcons icon="redo" func={redo} />
          </div>
          <div className="flex space-x-2 h-full">
            <HeroIcons
              icon="pc"
              func={changeDevice("Desktop")}
              active={device === "Desktop"}
            />
            <HeroIcons
              icon="tablet"
              func={changeDevice("Tablet")}
              active={device === "Tablet"}
            />
            <HeroIcons
              icon="mobile"
              func={changeDevice("Mobile portrait")}
              active={device === "Mobile portrait"}
            />
          </div>
          <div className="flex space-x-2 h-full">
            {/* <HeroIcons icon="undo" />
            <HeroIcons icon="redo" /> */}
            {/* <PanelHeading ref={pnlbl}></PanelHeading> */}
          </div>
          {/* <div className="flex space-x-2 h-full">
            <PanelHeading ref={pnltc}></PanelHeading>
          </div> */}
          {/* <HeroIcons icon="tablet" />
            <HeroIcons icon="mobile" />  */}
          <div className="flex space-x-2 h-full">
            {/* <PanelHeading ref={pnltl}></PanelHeading> */}

            {/* <PanelHeading ref={pnltl}></PanelHeading>
            <PanelHeading ref={pnltl}></PanelHeading> */}

            {/* <div ref={pnltl}></div> */}
            {/* <HeroIcons icon="history" />
            
            <HeroIcons text="Preview" />
            <HeroIcons text="Publish" />
            
            */}

            <HeroIcons text="Preview" />
            <HeroIcons text="Publish" disabled={true} />
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Navbar;
