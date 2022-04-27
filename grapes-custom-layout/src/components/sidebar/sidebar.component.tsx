import { ChevronLeftIcon } from "@heroicons/react/outline";
import { ChartPieIcon } from "@heroicons/react/solid";
import { useState } from "react";
import clsx from "clsx";
import Navbar from "../header/navbar.component";
import SettingTabs from "../tab/tab-group.component";

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
            <SettingTabs />
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
