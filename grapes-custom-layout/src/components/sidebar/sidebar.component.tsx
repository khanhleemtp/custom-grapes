import clsx from "clsx";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { ChartPieIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import Navbar from "../header/navbar.component";
import SettingTabs from "../tab/tab-group.component";

/* impliment grapesjs */
import "../page-builder/gjs.scss";

import {
  EditorGrid,
  PanelSection,
  EditorAside,
  AsideTop,
  PanelHeading,
  PanelContent,
  EditorMain,
  EditorCanvas,
} from "../page-builder/styled";
import { useRefEditor } from "./useEditor";

type Props = {};

const Sidebar: React.FC<Props> = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [test, setTest] = useState(new Date());
  // console.log(useRefEditor());

  const { editor, canvas } = useRefEditor();

  return (
    <div
      className={clsx(
        "relative left-0 flex transform transition-all delay-150 duration-200 w-full",
        isShowing && "w-[calc(100vw_+_18rem)] -left-[19rem]"
      )}
    >
      <div className="relative min-h-screen max-h-screen">
        {/* <div
          className="absolute z-50 bg-white top-1/2 -right-6 w-6 h-14 rounded-r-md flex items-center justify-center cursor-pointer border border-gray-400"
          onClick={() => {
            setIsShowing(!isShowing);
            console.log(editor.Canvas.getCanvas());
            editor.Canvas.getWindow();
          }}
        >
          <ChevronLeftIcon
            className={clsx(
              "text-gray-400 w-full h-full transform transition-all ease-in-out",
              isShowing && "rotate-180"
            )}
          />
        </div> */}

        <div className="w-75 min-h-screen max-h-screen overflow-hidden ring-1 ring-gray-400 relative">
          <div className="divide-y divide-gray-400">
            {/* 1 - Logo & link */}
            <div className="text-blue-500 font-semibold text-xl text-opacity-95 flex items-center space-x-2 p-2 h-16">
              <div>
                <ChartPieIcon className="w-8 h-auto" />
              </div>
              <div className="text-left truncate">
                <h3>LD Page</h3>
                <p className="text-gray-400 font-normal text-xs cursor-pointer">
                  /pages/ld-page
                </p>
              </div>
            </div>
            {/* 2- Tab */}
            <SettingTabs />
          </div>
        </div>
      </div>
      <div
        className={clsx("flex-grow min-h-screen max-h-screen overflow-y-auto")}
      >
        <Navbar>
          <div className="h-full bg-gray-100 p-2">
            <div className="h-[calc(100vh-5.2rem)]">
              <div className="h-full bg-white">
                <EditorGrid id="editor-grid">
                  <EditorMain id="main_panel">
                    {/* Main canvas */}
                    <EditorCanvas id="editor-canvas" ref={canvas}>
                      {() => null}
                    </EditorCanvas>
                  </EditorMain>
                </EditorGrid>
              </div>
            </div>
          </div>
          {children}
        </Navbar>
      </div>
    </div>
  );
};
export default Sidebar;
