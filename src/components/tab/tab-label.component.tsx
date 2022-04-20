import { ChevronLeftIcon } from "@heroicons/react/outline";
import { ChartPieIcon } from "@heroicons/react/solid";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";

type TabLabelType = {
  text: string;
};

const TabLabel: React.FC<TabLabelType> = ({ text }) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <div className="flex-1 border-b-2 text-center cursor-pointer">
          <button className="p-3">{text}</button>
          <div className={clsx(selected && "bg-blue-400 h-1 w-full")}></div>
        </div>
      )}
    </Tab>
  );
};

export default TabLabel;
