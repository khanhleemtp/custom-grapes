import { Tab } from "@headlessui/react";
import TabLabel from "./tab-label.component";
import { useState } from "react";
import clsx from "clsx";
import CategoryElement from "../list-element-editor/category-element.component";
import { useRefEditor } from "../sidebar/useEditor";
import { PanelHeading, PanelContent } from './../page-builder/styled/index';

type Props = {};

const SettingTabs: React.FC<Props> = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);


  const {switcherContainer, switcher, blm, stylm, lym } =  useRefEditor();

  return (
      <div  ref={switcherContainer}>
      <div ref={switcher}></div>
      <div className="absolute left-0 w-full h-[calc(100vh-10rem)] flex flex-col bg-transparent">
        <div className="overflow-y-scroll w-full scrollbar-custom scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-200 scrollbar-track-gray-50 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <PanelContent ref={blm}></PanelContent>
              <PanelContent ref={stylm}></PanelContent>
              <PanelContent ref={lym}></PanelContent>
        </div>
      </div>
      </div>
  );
};
export default SettingTabs;
