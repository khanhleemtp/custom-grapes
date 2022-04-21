// this is your serialized json
// I've saved it locally but you can read it from anywhere
import Container from "./Container";
import TextComponent from "./TextComponent";

// This gets called on every request

const Preview = ({ data }: any) => {
  return (
    <div className="h-screen flex flex-col ">
      <Node node={data.ROOT} data={data} />
    </div>
  );
};

const Node = ({ node, data }: { node: any; data: any }) => {
  let typeName = "";
  if (typeof node.type === "object") {
    typeName = node.type.resolvedName;
  } else {
    typeName = node.type;
  }

  const Children = node.nodes.map((x: any, index: any) => {
    return <Node key={x} node={data[x]} data={data} />;
  });
  switch (typeName) {
    case "Container":
      return <Container {...node.props}>{Children}</Container>;
    case "TextComponent":
      return <TextComponent {...node.props} />;
    default:
      return null;
  }
};
export default Preview;
