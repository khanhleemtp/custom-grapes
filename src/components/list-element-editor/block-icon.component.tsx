import { useMemo } from "react";
import { MdOutlineViewWeek } from "react-icons/md";

type BlockIconProps = {
  icon?: string;
  text?: string;
};
const BlockIcon: React.FC<BlockIconProps> = ({ icon, text }) => {
  const Icon = useMemo(() => {
    switch (icon) {
      case "row":
        return MdOutlineViewWeek;
      default:
        return null;
    }
  }, [icon]);

  return (
    <button className="flex flex-col items-center text-lg p-4 border justify-between">
      {Icon && <Icon className="w-12 h-12 text-gray-600" />}
      <p className="text-sm">{text}</p>
    </button>
  );
};

export default BlockIcon;
