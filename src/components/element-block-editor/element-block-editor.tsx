import {
  Editor,
  Frame,
  Element,
  UserComponent,
  useEditor,
  Canvas,
} from "@craftjs/core";
import { Button } from "./elements";

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
        <Button btnText="Btn t" />
      </Frame>
      {/* <Toolbox /> */}
    </Editor>
  );
}
