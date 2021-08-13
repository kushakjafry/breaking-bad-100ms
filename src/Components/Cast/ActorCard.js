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
const ActorCard = (props) => {
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
              <CardTitle tag="h5">{props.actor.name}</CardTitle>
              <hr />
              <CardText>
                <small>
                  <strong>Occupation:</strong> {props.actor.occupation}
                </small>
              </CardText>
              <CardText>
                <small>
                  <strong>Date of Birth:</strong> {props.actor.birthday}
                </small>
              </CardText>
              <CardText>
                <small>
                  <strong>Status:</strong> {props.actor.status}
                </small>
              </CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Link to={"/actors/" + props.actor.char_id}>
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
            backgroundImage: `url(${props.actor.img})`,
          }}
        ></div>
      </FlippingCardFront>
    </FlippingCard>
  );
};

export default ActorCard;
