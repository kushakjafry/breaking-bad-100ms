import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import { API_URL } from "../Config/api-url";
import { stringParser } from "../Helper/api-helper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../styles/components/character-detail/character-detail.css";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
SwiperCore.use([Pagination]);
const CharacterDetail = (props) => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacterData = async () => {
      setError(null);
      setIsLoading(true);
      try {
        let resCharacterData = await axios.get(
          API_URL + "characters/" + characterId
        );
        let [characterData] = resCharacterData.data;
        let characterName = characterData.name;
        let resQoutesData = await axios.get(
          API_URL + "quote?author=" + stringParser(characterName)
        );
        let qoutesData = resQoutesData.data;
        setCharacter({
          ...characterData,
          qoutes: qoutesData,
        });
        setIsLoading(false);
      } catch (err) {
        let msg = "Failed to fetch Character";
        if (err?.response?.status) {
          msg = "Today's API Limit Reached";
        }
        toast.error(msg, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setError(err);
        setIsLoading(false);
      }
    };
    fetchCharacterData();
  }, []);
  if (isLoading && !error) {
    return (
      <div className="character_section">
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "100vh", margin: 0, padding: 0 }}
        >
          <ClipLoader
            color={"#ffffff"}
            loading={isLoading && !error}
            size={150}
          />
        </Row>
      </div>
    );
  } else if (!isLoading && error) {
    return (
      <div className="character_section">
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "100vh", margin: 0, padding: 0 }}
        >
          <div className="text-center">
            Ohh! Snap there was a error! Kindly try after sometime
          </div>
        </Row>
      </div>
    );
  } else {
    return (
      <div className="character_section">
        <Container>
          <Row className="pt-5 pb-5" style={{ minHeight: "100vh" }}>
            <Col xs={12}>
              <Link to="/characters">
                <Button>Go Back</Button>
              </Link>
            </Col>
            <Col xs={12} md={8}>
              <h1 className="h2 text-center text-md-start">{character.name}</h1>
              <hr />
              <Row>
                <Col xs={6}>
                  <strong>Date of Birth:</strong>
                </Col>
                <Col xs={6}>{character.birthday}</Col>
                <Col xs={6}>
                  <strong>Status:</strong>
                </Col>
                <Col xs={6}>{character.status}</Col>
                <Col xs={6}>
                  <strong>Nickname:</strong>
                </Col>
                <Col xs={6}>
                  {character.nickname !== "" ? character.nickname : "none"}
                </Col>
                <Col xs={6}>
                  <strong>Actor:</strong>
                </Col>
                <Col xs={6}>{character.portrayed}</Col>
                <Col xs={6} className="pt-3">
                  <strong>Occupation</strong>
                </Col>
                <Col xs={6} className="pt-3">
                  <ul className="p-0">
                    {character.occupation.map((occupation, index) => {
                      return (
                        <li key={index} style={{ listStyle: "none" }}>
                          {occupation}
                        </li>
                      );
                    })}
                  </ul>
                </Col>
                <Col xs={6} className="pt-2">
                  <strong>Seasons</strong>
                </Col>
                <Col xs={6} className="pt-2 mb-5">
                  {character.appearance.join(",")}
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xs={12} className="pt-5 text-center">
                  <h4>Quotes</h4>
                </Col>
                <Col xs={12} className="pt-2">
                  <Swiper
                    pagination={{ dynamicBullets: true }}
                    style={{ height: "120px" }}
                  >
                    {character.qoutes.map((qoute) => {
                      return (
                        <SwiperSlide
                          key={qoute.quote_id}
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div className="p-3 text-center">{qoute.quote}</div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Col>
              </Row>
            </Col>
            <Col
              xs={12}
              md={4}
              className="d-none d-md-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url("${character.img}")`,
                backgroundPosition: "top",
                backgroundSize: "cover",
              }}
            ></Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default CharacterDetail;
