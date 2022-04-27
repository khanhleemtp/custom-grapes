import React from "react";
import HeroIcons from "./hero-icons.component";

type Props = {};

const Navbar: React.FC<Props> = ({ children }) => {
  return (
    <div className="divide-y divide-gray-400 bg-white">
      <div className="h-16 border p-2 w-full">
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex space-x-2 h-full">
            <HeroIcons text="Library" icon="library" disabled={true} />
            <HeroIcons icon="undo" />
            <HeroIcons icon="redo" />
          </div>
          <div className="flex space-x-2 h-full">
            <HeroIcons icon="pc" />
            <HeroIcons icon="tablet" />
            <HeroIcons icon="mobile" />
          </div>
          <div className="flex space-x-2 h-full">
            <HeroIcons icon="history" />
            <HeroIcons text="Preview" />
            <HeroIcons text="Publish" />
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Navbar;
