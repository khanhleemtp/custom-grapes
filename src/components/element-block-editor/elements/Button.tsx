import { useNode, UserComponent } from "@craftjs/core";
import { EditorComponent } from "../model";
import { ButtonSettings } from "./ButtonSettings";

type ButtonProps = {
  btnText: string;
};

export const Button: EditorComponent<ButtonProps> = ({ btnText }) => {
  return (
    <div>
      <button className="bg-red-200 p-2">{btnText}</button>
    </div>
  );
};

export const ButtonDefaultProps = {
  btnText: "Click me",
};

Button.craft = {
  props: ButtonDefaultProps,
  displayName: "LDK",
  defaultProps: ButtonDefaultProps,
  related: {
    settings: ButtonSettings,
  },
};
