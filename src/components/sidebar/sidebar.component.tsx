import { ChevronLeftIcon } from "@heroicons/react/outline";
import { ChartPieIcon } from "@heroicons/react/solid";
import { Tab } from "@headlessui/react";
import TabLabel from "../tab/tab-label.component";
import {  useState } from "react";
import clsx from "clsx";
import ListElementEditor from './../list-element-editor/list-element-editor.component';
import Navbar from "../header/navbar.component";

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
          className="absolute z-20 top-1/2 -right-6 w-6 h-14 rounded-r-md flex items-center justify-center cursor-pointer border border-l-0 border-gray-400"
          onClick={() => setIsShowing(!isShowing)}
        >
            <ChevronLeftIcon className={clsx("text-gray-400 w-full h-full transform transition-all ease-in-out", isShowing && 'rotate-180' )} />
          
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

            <div className="w-full h-full">
              <Tab.Group>
                <Tab.List className="flex">
                  <TabLabel text="Elements" />
                  <TabLabel text="Settings" />
                </Tab.List>
                <div className="absolute left-0 h-full w-full flex flex-col bg-white shadow-lg">
                  <Tab.Panels className="overflow-auto h-full w-full scrollbar-custom scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    <Tab.Panel className="flex mx-4">
                      Content 1 Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Nisi assumenda, perferendis doloremque
                      deleniti tempora minima incidunt laudantium nesciunt sed
                      cupiditate non asperiores alias! Expedita minus odit nam
                      ducimus aut ipsa? Content 1 Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Nisi assumenda, perferendis
                      doloremque deleniti tempora minima incidunt laudantium
                      nesciunt sed cupiditate non asperiores alias! Expedita
                      minus odit nam ducimus aut ipsa? Content 1 Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Nisi
                      assumenda, perferendis doloremque deleniti tempora minima
                      incidunt laudantium nesciunt sed cupiditate non asperiores
                      alias! Expedita minus odit nam ducimus aut ipsa? Content 1
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi assumenda, perferendis doloremque deleniti tempora
                      minima incidunt laudantium nesciunt sed cupiditate non
                      asperiores alias! Expedita minus odit nam ducimus aut
                      ipsa? Content 1 Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Nisi assumenda, perferendis doloremque
                      deleniti tempora minima incidunt laudantium nesciunt sed
                      cupiditate non asperiores alias! Expedita minus odit nam
                      ducimus aut ipsa? Content 1 Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Nisi assumenda, perferendis
                      doloremque deleniti tempora minima incidunt laudantium
                      nesciunt sed cupiditate non asperiores alias! Expedita
                      minus odit nam ducimus aut ipsa? Content 1 Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Nisi
                      assumenda, perferendis doloremque deleniti tempora minima
                      incidunt laudantium nesciunt sed cupiditate non asperiores
                      alias! Expedita minus odit nam ducimus aut ipsa? Content 1
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi assumenda, perferendis doloremque deleniti tempora
                      minima incidunt laudantium nesciunt sed cupiditate non
                      asperiores alias! Expedita minus odit nam ducimus aut
                      ipsa? Content 1 Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Nisi assumenda, perferendis doloremque
                      deleniti tempora minima incidunt laudantium nesciunt sed
                      cupiditate non asperiores alias! Expedita minus odit nam
                      ducimus aut ipsa? Content 1 Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Nisi assumenda, perferendis
                      doloremque deleniti tempora minima incidunt laudantium
                      nesciunt sed cupiditate non asperiores alias! Expedita
                      minus odit nam ducimus aut ipsa? Content 1 Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Nisi
                      assumenda, perferendis doloremque deleniti tempora minima
                      incidunt laudantium nesciunt sed cupiditate non asperiores
                      alias! Expedita minus odit nam ducimus aut ipsa? Content 1
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi assumenda, perferendis doloremque deleniti tempora
                      minima incidunt laudantium nesciunt sed cupiditate non
                      asperiores alias! Expedita minus odit nam ducimus aut
                      ipsa? Content 1 Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Nisi assumenda, perferendis doloremque
                      deleniti tempora minima incidunt laudantium nesciunt sed
                      cupiditate non asperiores alias! Expedita minus odit nam
                      ducimus aut ipsa? Content 1 Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Nisi assumenda, perferendis
                      doloremque deleniti tempora minima incidunt laudantium
                      nesciunt sed cupiditate non asperiores alias! Expedita
                      minus odit nam ducimus aut ipsa? Content 1 Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Nisi
                      assumenda, perferendis doloremque deleniti tempora minima
                      incidunt laudantium nesciunt sed cupiditate non asperiores
                      alias! Expedita minus odit nam ducimus aut ipsa?
                    </Tab.Panel>
                    <Tab.Panel>
                      <ListElementEditor/>
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Navbar>
        {children}
        </Navbar>
        </div>
    </div>
  );
};
export default Sidebar;
