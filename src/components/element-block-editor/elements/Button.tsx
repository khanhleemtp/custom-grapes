import { useNode, UserComponent } from "@craftjs/core";
import { EditorComponent } from "../model";
import { ButtonSettings } from "./ButtonSettings";

type ButtonProps = {
  btnText: string;
};

export const Button: EditorComponent<ButtonProps> = ({ btnText }) => {
  const {
    connectors: { connect, drag },
    isClicked,
    actions: { setProp },
  } = useNode((state) => ({
    isClicked: state.events.selected,
  }));

  return (
    <div className="flex">
      <div ref={(dom) => (dom ? connect(drag(dom)) : null)}>
        <button className="bg-red-200 p-2">{btnText}</button>
      </div>
      {isClicked ? <ButtonSettings /> : null}
    </div>
  );
};

export const ButtonDefaultProps = {
  btnText: "Click me",
};

Button.craft = {
  displayName: "Button test",
};
