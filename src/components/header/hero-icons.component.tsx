import { ViewGridAddIcon } from "@heroicons/react/outline";
import { useMemo } from "react";
import {
  MdOutlineUndo,
  MdOutlineRedo,
  MdOutlineHistory,
  MdLaptopMac,
  MdOutlineTabletMac,
  MdOutlineSmartphone,
} from "react-icons/md";

type HeroIconsProps = {
  icon?: string;
  text?: string;
};
const HeroIcons: React.FC<HeroIconsProps> = ({ icon, text }) => {
  const Icon = useMemo(() => {
    switch (icon) {
      case "library":
        return ViewGridAddIcon;
      case "undo":
        return MdOutlineUndo;
      case "redo":
        return MdOutlineRedo;
      case "mobile":
        return MdOutlineSmartphone;
      case "tablet":
        return MdOutlineTabletMac;
      case "pc":
        return MdLaptopMac;
      case "history":
        return MdOutlineHistory;
      default:
        return null;
    }
  }, [icon]);

  return (
    <button className="h-full bg-gray-200 px-4 rounded-lg flex items-center space-x-1 hover:bg-gray-100 font-medium">
      {Icon && <Icon className="w-6 h-6 text-gray-600" />}
      <p className="text-sm">{text}</p>
    </button>
  );
};

export default HeroIcons;
