import { useNode } from "@craftjs/core";

type Props = {};
const TextComponentSetting = (props: Props) => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));

  return (
    <div>
      <h2>Text settings</h2>
      <select
        onChange={(e) =>
          setProp((prop: any) => (prop.fontSize = e.target.value))
        }
      >
        <option value={"xl"}>Large</option>
        <option value={"sm"}>Small</option>
      </select>
    </div>
  );
};

export default TextComponentSetting;
