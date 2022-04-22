import { useEditor } from "@craftjs/core";
import { createElement } from "react";

type Props = {};

const Toolbar = () => {
  /*
    read & manipulate he entire editor's internal state
  */
  const { actions, selected } = useEditor((state, query) => {
    const [currentNodeId] = state.events.selected;
    // console.log("collected", collected);
    // .values().next().value

    // console.log("state.nodes", state.nodes[currentNodeId]);
    // console.log(
    //   `descendants node of ${currentNodeId}`,
    //   query.node(currentNodeId).descendants()
    // );

    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    console.log("selected", currentNodeId);
    return {
      selected,
    };
  });

  return (
    <div>
      Toolbar
      {selected && selected.settings && createElement(selected.settings)}
    </div>
  );
};

export default Toolbar;
