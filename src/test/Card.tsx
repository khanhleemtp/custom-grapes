import { UserComponent } from "@craftjs/core";
import Button from "./Button";
import Container from "./Container";
import TextComponent from "./TextComponent";

type Props = {};
const Card: UserComponent<Props> = (props: Props) => {
  return (
    <Container>
      <TextComponent text="abc" />
      {/* <TextComponent /> */}
      <Button text="button" />
    </Container>
  );
};
export default Card;
