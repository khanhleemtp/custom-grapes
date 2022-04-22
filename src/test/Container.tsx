import { UserComponent, useNode, useEditor } from "@craftjs/core";

const Container: UserComponent = ({ children }) => {
  const {
    connectors: { drag, connect },
    id,
  } = useNode();

  const {
    actions: { add },
    query: { createNode, node },
  } = useEditor();

  return (
    <div
      ref={(ref) => ref && connect(drag(ref))}
      className="bg-red-300 min-h-fit w-full"
    >
      {children ? children : "Drag in here"}
    </div>
  );
};

export default Container;
