import { UserComponent, useNode } from "@craftjs/core";
import ButtonSetting from "./ButtonSetting";

type Props = {
  text?: string;
};

const Button: UserComponent<Props> = ({ text }) => {
  const {
    connectors: { connect, drag },
    isClicked,
    // Props manipulation#
    actions: { setProp },
    // isHovered,
  } = useNode((state) => ({
    isClicked: state.events.selected,
    // isHovered: state.events.hovered,
  }));

  return (
    <div ref={(ref) => ref && connect(drag(ref))}>
      <button className="px-4 py-2 bg-slate-200 rounded-sm">{text}</button>
    </div>
  );
};

Button.craft = {
  displayName: "Button",
  // Default Props
  defaultProps: {
    text: "Hi there",
  },
  // Specify drag/drop rules

  related: {
    settings: ButtonSetting,
  },
};

export default Button;
