import { useRef, useEffect } from "react";
import TextComponent from "./TextComponent";
import { Editor, Frame, Canvas, Element } from "@craftjs/core";
import Toolbox from "./Toolbox";
import Container from "./Container";
import Button from "./Button";
// import FramePreview from "../components/frame-preview/frame-preview.component";
import Toolbar from "./Toolbar";
import Card from "./Card";

const BaseBuilder = () => {
  return (
    <Editor
      resolver={{ TextComponent, Container, Button, Card }}
      indicator={{
        thickness: 8,
        success: "blue",
        error: "red",
      }}
    >
      {/* // Editable area starts here */}
      <Frame>
        <Element is="div" canvas>
          <TextComponent />
          {/* <Card /> */}
          <Button />
        </Element>
      </Frame>
      <Toolbox />
      <Toolbar />
    </Editor>
  );
};

export default BaseBuilder;
