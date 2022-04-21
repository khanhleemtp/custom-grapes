import { useNode, UserComponent } from "@craftjs/core";

type TextProps = {
  text: string;
};

const TextComponent: UserComponent<TextProps> = ({ text }) => {
  const {
    connectors: { connect, drag },
    isClicked,
    actions: { setProp },
    // isHovered,
  } = useNode((state) => ({
    isClicked: state.events.selected,
    // isHovered: state.events.hovered,
  }));

  return (
    <div ref={(ref) => ref && connect(drag(ref))}>
      <h2>{text}</h2>
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
};

export default TextComponent;
