import { Col, Row } from "reactstrap";
import ActorCard from "./ActorCard";

const ActorList = (props) => {
  const actors = props.cast.slice(
    0,
    props.cast.length > 10 ? 10 : props.cast.length
  );
  return (
    <Row>
      {actors.map((actor) => {
        return (
          <Col
            xs={12}
            sm={6}
            lg={3}
            key={actor.char_id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActorCard actor={actor} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ActorList;
