import { Editor, Frame, Element, UserComponent } from "@craftjs/core";
import { Button } from "./elements";
import { ButtonSettings } from "./elements";

// Editable area starts here
type Props = {};
export default function BaseBuilder({}: Props) {
  return (
    <Editor
      resolver={{
        Button,
      }}
    >
      <Frame>
        <Button btnText="LDK" />
      </Frame>
      {/* <ButtonSettings /> */}
    </Editor>
  );
}
