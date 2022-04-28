import { ViewGridAddIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { useMemo } from "react";
import {
  MdOutlineUndo,
  MdOutlineRedo,
  MdOutlineHistory,
  MdLaptopMac,
  MdOutlineTabletMac,
  MdOutlineSmartphone,
  MdOutlinePreview,
  MdOutlineFullscreen,
} from "react-icons/md";

type HeroIconsProps = {
  icon?: string;
  text?: string;
  func?: () => void;
  disabled?: boolean;
  active?:boolean
};
const HeroIcons: React.FC<HeroIconsProps> = ({
  icon,
  text,
  func = () => {},
  disabled = false,
  active=false
}) => {
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
      case "preview":
        return MdOutlinePreview;
      case "fullscreen":
        return MdOutlineFullscreen;
      default:
        return null;
    }
  }, [icon]);

  return (
    <button    
      className={clsx(
        "h-full bg-gray-200 rounded-lg flex flex-col hover:bg-gray-100 font-medium",
        disabled && "bg-gray-100 cursor-not-allowed text-gray-400",
      )}
      onClick={func}
      disabled={disabled}
    >
    <div className={clsx("flex items-center space-x-1 flex-1 px-4 border-b-2 rounded-lg",{ 'border-blue-400': active})}>
      {Icon && <Icon className="w-6 h-6" />}
      <p className="text-sm">{text}</p>
    </div>
    
      {/* <div className="absolute w-full h-1 right-0 left-0 bottom-0 bg-red-500 rounded-b-lg"></div> */}
    </button>
  );
};

export default HeroIcons;
