import { Col, Row } from "reactstrap";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characters = props.characters.slice(
    0,
    props.characters.length > 10 ? 10 : props.characters.length
  );
  return (
    <Row>
      {characters.map((character) => {
        return (
          <Col
            xs={12}
            sm={6}
            lg={3}
            key={character.char_id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CharacterCard character={character} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CharacterList;
