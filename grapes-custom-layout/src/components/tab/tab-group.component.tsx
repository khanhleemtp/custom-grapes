import { Tab } from "@headlessui/react";
import TabLabel from "./tab-label.component";
import { useState } from "react";
import clsx from "clsx";
import CategoryElement from "../list-element-editor/category-element.component";

type Props = {};

const SettingTabs: React.FC<Props> = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Tab.Group>
      <Tab.List className="flex">
        <TabLabel text="Elements" />
        <TabLabel text="Settings" />
      </Tab.List>
      <div className="absolute left-0 w-full h-[calc(100vh-10rem)] flex flex-col bg-transparent">
        <Tab.Panels className="overflow-y-scroll w-full scrollbar-custom scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-200 scrollbar-track-gray-50 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          <Tab.Panel className="mr-4">
            <CategoryElement />
          </Tab.Panel>
          <Tab.Panel className="flex mx-4">
            Content 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nisi assumenda, perferendis doloremque deleniti tempora minima
            incidunt laudantium nesciunt sed cupiditate non asperiores alias!
            Expedita minus odit nam ducimus aut ipsa? Content 1 Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nisi assumenda,
            perferendis doloremque deleniti tempora minima incidunt laudantium
            nesciunt sed cupiditate non asperiores alias! Expedita minus odit
            nam ducimus aut ipsa? Content 1 Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nisi assumenda, perferendis doloremque
            deleniti tempora minima incidunt laudantium nesciunt sed cupiditate
            non asperiores alias! Expedita minus odit nam ducimus aut ipsa?
            Content 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nisi assumenda, perferendis doloremque deleniti tempora minima
            incidunt laudantium nesciunt sed cupiditate non asperiores alias!
            Expedita minus odit nam ducimus aut ipsa? Content 1 Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nisi assumenda,
            perferendis doloremque deleniti tempora minima incidunt laudantium
            nesciunt sed cupiditate non asperiores alias! Expedita minus odit
            nam ducimus aut ipsa? Content 1 Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nisi assumenda, perferendis d nesciunt
            sed cupiditate non asperiores alias! Expedita minus odit nam ducimus
            aut ipsa? Content 1 Lorem ipsum
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};
export default SettingTabs;
