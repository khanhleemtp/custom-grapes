import {
  NodeElementProps,
  useNode,
  UserComponent,
  useEditor,
} from "@craftjs/core";
import { useCallback } from "react";
import TextComponentSetting from "./TextComponentSetting";
import { AiOutlineDrag } from "react-icons/ai";
import clsx from "clsx";

type TextProps = {
  text?: string;
  fontSize?: string;
};

const TextComponent: UserComponent<TextProps> = ({ text, fontSize }) => {
  // Collecting Node's state
  const {
    connectors: { connect, drag },
    // Props manipulation#
    actions: { setProp },
    // isHovered,
  } = useNode((state) => ({
    // isHovered: state.events.hovered,
  }));

  const renderFontsize = useCallback(() => {
    switch (fontSize) {
      case "xl":
        return "text-xl";
      case "sm":
        return "text-sm";
      default:
        return "";
    }
  }, [fontSize]);

  return (
    <div
      ref={(ref) => ref && connect(ref)}
      // onClick={() => {
      //   setProp((props: any) => (props.text = "abc"));
      // }}
      className={clsx(renderFontsize(), "relative my-2")}
    >
      <h2>{text}</h2>
      <div
        ref={(ref) => ref && drag(ref)}
        className="absolute left-1/2 top-0 bg-gray-400 flex items-center justify-center"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <AiOutlineDrag />
        </div>
      </div>
      {/* {isClicked && (
        <MyDialog>
          <input
            type="text"
            value={text}
            onChange={(e) => setProp(e.target.value)}
          />
        </MyDialog>
      )} */}
    </div>
  );
};

TextComponent.craft = {
  displayName: "TextComponent",
  // Default Props
  defaultProps: {
    text: "Hi there",
  },
  // Specify drag/drop rules
  // rules: {
  //   canDrag: (node) => !!(node.data.props.text == "Hi theree"),
  // },
  related: {
    settings: TextComponentSetting,
  },
};

export default TextComponent;
