import { Disclosure } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import BlockIcon from "./block-icon.component";

type Props = {};

const ElementEditor = (props: Props) => {
  return (
    <div className="">
      <Disclosure defaultOpen>
        {({ open }) => (
          <div className="border p-4">
            <Disclosure.Button className="flex uppercase text-lg font-medium items-center justify-between  w-full">
              <div>layout</div>
              {/*
            Use the `open` render prop to rotate the icon when the panel is open
          */}
              <div className="w-6 h-6">
                <ChevronLeftIcon
                  className={clsx(
                    "h-full w-full transform transition-all",
                    open && "-rotate-90"
                  )}
                />
              </div>
            </Disclosure.Button>

            <Disclosure.Panel>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <BlockIcon icon="row" text="Row" />
                <BlockIcon icon="row" text="Row" />
                <BlockIcon icon="row" text="Row" />
                <BlockIcon icon="row" text="Row" />
                <BlockIcon icon="row" text="Row" />
                <BlockIcon icon="row" text="Row" />
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default ElementEditor;
