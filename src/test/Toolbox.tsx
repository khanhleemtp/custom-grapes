import { useEditor, Element, Editor, Frame, NodeData } from "@craftjs/core";
import Container from "./Container";
import TextComponent from "./TextComponent";
import { useEffect } from "react";
import { generateHtml } from "../utils/generateHTML";

const craftJsNodes = {
  ROOT: {
    type: { resolvedName: "TextComponent" },
    nodes: [],
    props: {},
    custom: {},
    hidden: false,
    parent: "",
    isCanvas: false,
    displayName: "TextComponent",
    linkedNodes: {},
  },
};

type Root = {
  ROOT: any;
};

let d = {
  ROOT: {
    custom: {},
    displayName: "div",
    hidden: false,
    parent: "",
    isCanvas: true,
    linkedNodes: {},
    nodes: ["rwV039IXwZ"],
    props: { className: "bg-red-200" },
    type: "div",
  },
};

const Toolbox = () => {
  const { actions, query, enabled, connectors } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  // console.log(JSON.parse(query.serialize()).ROOT)
  console.log(generateHtml(d));

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
        {/* <Preview data={query.serialize()} /> */}
      </div>
    </div>
  );
};

export default Toolbox;
