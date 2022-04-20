import { useEditor, Element } from "@craftjs/core";
import Container from "./Container";
import TextComponent from "./TextComponent";

import { useEffect } from "react";

const Toolbox = () => {
  const { connectors } = useEditor();

  useEffect(() => {});

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Toolbox</h1>
      <div className="space-x-2">
        <button
          className="p-2 border-2"
          ref={(ref) =>
            ref && connectors.create(ref, <TextComponent text="demo" />)
          }
        >
          Text Component
        </button>
        <button
          className="p-2 border-2"
          ref={(ref) =>
            ref && connectors.create(ref, <Element canvas is={Container} />)
          }
        >
          Container
        </button>
      </div>
    </div>
  );
};

export default Toolbox;
