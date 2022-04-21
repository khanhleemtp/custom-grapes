import { ChevronLeftIcon } from "@heroicons/react/outline";
import { ChartPieIcon } from "@heroicons/react/solid";
import { Tab } from "@headlessui/react";
import TabLabel from "../tab/tab-label.component";
import { useState } from "react";
import clsx from "clsx";
import ListElementEditor from "../list-element-editor/element-editor.component";
import Navbar from "../header/navbar.component";
import CategoryElement from "../list-element-editor/category-element.component";

type Props = {};

const Sidebar: React.FC<Props> = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div
      className={clsx(
        "flex transform transition-all delay-150 duration-200 w-full",
        isShowing && "-translate-x-72 w-[calc(100%_+_18rem)]"
      )}
    >
      <div className="relative min-h-screen max-h-screen">
        <div
          className="absolute z-50 bg-white top-1/2 -right-6 w-6 h-14 rounded-r-md flex items-center justify-center cursor-pointer border border-gray-400"
          onClick={() => setIsShowing(!isShowing)}
        >
          <ChevronLeftIcon
            className={clsx(
              "text-gray-400 w-full h-full transform transition-all ease-in-out",
              isShowing && "rotate-180"
            )}
          />
        </div>

        <div className="w-72 min-h-screen max-h-screen overflow-hidden ring-1 ring-gray-400 relative">
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
                    Content 1 Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Nisi assumenda, perferendis doloremque deleniti
                    tempora minima incidunt laudantium nesciunt sed cupiditate
                    non asperiores alias! Expedita minus odit nam ducimus aut
                    ipsa? Content 1 Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nisi assumenda, perferendis doloremque
                    deleniti tempora minima incidunt laudantium nesciunt sed
                    cupiditate non asperiores alias! Expedita minus odit nam
                    ducimus aut ipsa? Content 1 Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Nisi assumenda, perferendis
                    doloremque deleniti tempora minima incidunt laudantium
                    nesciunt sed cupiditate non asperiores alias! Expedita minus
                    odit nam ducimus aut ipsa? Content 1 Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Nisi assumenda,
                    perferendis doloremque deleniti tempora minima incidunt
                    laudantium nesciunt sed cupiditate non asperiores alias!
                    Expedita minus odit nam ducimus aut ipsa? Content 1 Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Nisi
                    assumenda, perferendis doloremque deleniti tempora minima
                    incidunt laudantium nesciunt sed cupiditate non asperiores
                    alias! Expedita minus odit nam ducimus aut ipsa? Content 1
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi assumenda, perferendis d nesciunt sed cupiditate non
                    asperiores alias! Expedita minus odit nam ducimus aut ipsa?
                    Content 1 Lorem ipsum
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-screen max-h-screen overflow-y-auto">
        <Navbar>
          <div className="h-full bg-gray-100 p-2">
            <div className="h-[calc(100vh-5.2rem)]">
              <div className="h-full bg-white">{children}</div>
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
};
export default Sidebar;
