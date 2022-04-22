import { useNode } from "@craftjs/core";

type Props = {};
const ButtonSetting = (props: Props) => {
  const {
    text,
    actions: { setProp },
  } = useNode((node) => ({
    text: node.data.props.text,
  }));

  return (
    <div>
      ButtonSetting
      <input
        type="text"
        placeholder="Change text button"
        onChange={(e) => setProp((prop: any) => (prop.text = e.target.value))}
        defaultValue={text}
      />
    </div>
  );
};
export default ButtonSetting;
