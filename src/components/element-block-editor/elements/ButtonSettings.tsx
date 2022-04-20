import { useNode } from "@craftjs/core";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

type FormData = {
  btnText: string;
};

export const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  //  onChange={(e) => setProp((props) => (props.variant = e.target.value))}

  const btnText = useWatch({ control, name: "btnText" });

  useEffect(() => {
    setProp(btnText);
  }, []);

  return (
    <form onSubmit={onSubmit} className="bg-green-400">
      <label htmlFor="">Size</label>
      <input type="text" placeholder="Text button" {...register("btnText")} />
    </form>
  );
};
