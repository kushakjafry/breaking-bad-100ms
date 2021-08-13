import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  CardFooter,
} from "reactstrap";
import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";
import { Link } from "react-router-dom";
const CharacterCard = (props) => {
  return (
    <FlippingCard>
      <FlippingCardBack>
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#E1F0F0",
          }}
        >
          <Card
            style={{
              color: "black",
              background: "#E1F0F0",
              width: "100%",
              height: "100%",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">{props.character.name}</CardTitle>
              <hr />
              <CardText>
                <small>
                  <strong>Occupation:</strong> {props.character.occupation}
                </small>
              </CardText>
              <CardText>
                <small>
                  <strong>Date of Birth:</strong> {props.character.birthday}
                </small>
              </CardText>
              <CardText>
                <small>
                  <strong>Status:</strong> {props.character.status}
                </small>
              </CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Link to={"/characters/" + props.character.char_id}>
                <Button color="primary">Read more</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </FlippingCardBack>
      <FlippingCardFront>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${props.character.img})`,
          }}
        ></div>
      </FlippingCardFront>
    </FlippingCard>
  );
};

export default CharacterCard;
