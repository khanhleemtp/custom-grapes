import ElementEditor from "./element-editor.component";

type Props = {};
const CategoryElement = (props: Props) => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
        <ElementEditor key={item} />
      ))}
    </>
  );
};

export default CategoryElement;
