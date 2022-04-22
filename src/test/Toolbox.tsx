import { useEditor, Element, Editor, Frame, NodeData } from "@craftjs/core";
import { useEffect } from "react";
import Container from "./Container";
import TextComponent from "./TextComponent";
import Button from "./Button";

const Toolbox = () => {
  const { actions, query, enabled, connectors } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  // useEffect(() => {
  //   let c = document.getElementsByClassName("craftjs-renderer")[0].innerHTML;
  //   console.log(c);
  // }, []);

  // console.log(JSON.parse(query.serialize()).ROOT)

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Toolbox</h1>
      <div className="space-x-2">
        <button
          className="p-2 border-2"
          ref={(ref) => ref && connectors.create(ref, <TextComponent />)}
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
        <button
          className="p-2 border-2"
          ref={(ref) =>
            ref && connectors.create(ref, <Element is={Button} text="test" />)
          }
        >
          Button
        </button>
        {/* <Preview data={query.serialize()} /> */}
      </div>
    </div>
  );
};

export default Toolbox;
