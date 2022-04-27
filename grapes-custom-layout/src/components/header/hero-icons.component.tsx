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
} from "react-icons/md";

type HeroIconsProps = {
  icon?: string;
  text?: string;
  func?: () => void;
  disabled?: boolean;
};
const HeroIcons: React.FC<HeroIconsProps> = ({
  icon,
  text,
  func = () => {},
  disabled = false,
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
      default:
        return null;
    }
  }, [icon]);

  return (
    <button
      className={clsx(
        "h-full bg-gray-200 px-4 rounded-lg flex items-center space-x-1 hover:bg-gray-100 font-medium",
        disabled && "bg-gray-100 cursor-not-allowed text-gray-400"
      )}
      onClick={func}
      disabled={disabled}
    >
      {Icon && <Icon className="w-6 h-6" />}
      <p className="text-sm">{text}</p>
    </button>
  );
};

export default HeroIcons;
