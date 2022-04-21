import { useRef, useEffect } from "react";
import TextComponent from "./TextComponent";
import { Editor, Frame, Canvas, Element } from "@craftjs/core";
import Toolbox from "./Toolbox";
import Container from "./Container";

const BaseBuilder = () => {
  return (
    <Editor resolver={{ TextComponent, Container }}>
      {/* // Editable area starts here */}
      <Frame>
        <Element is="div" canvas className="bg-red-200">
          <TextComponent text="12345" />
        </Element>
      </Frame>
      <Toolbox />
    </Editor>
  );
};

export default BaseBuilder;
