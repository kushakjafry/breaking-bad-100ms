import { useEffect, useState } from "react";
import { Col, Container, Input, Row, Spinner } from "reactstrap";
import ActorList from "../Components/Cast/ActorList";
import {
  getAllCharactersUrl,
  historyUrlGenerator,
  stringParser,
} from "../Helper/api-helper";
import "../styles/components/cast/cast.css";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { useHistory, useLocation } from "react-router-dom";
import PaginationActorList from "../Components/Cast/PaginationActorList";

const Cast = (props) => {
  const [cast, setCast] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  //page query
  const page = queryParams.has("page") ? parseInt(queryParams.get("page")) : 1;
  const hasNextPage = cast.length === 11;
  const hasPrev = page === 1 ? false : true;
  const offset = (page - 1) * 10;

  //search query
  const search = queryParams.has("search") ? queryParams.get("search") : "";

  //category query
  const category = queryParams.has("category")
    ? queryParams.get("category")
    : "";

  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [isInputBlur, setIsInputBlur] = useState(false);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState(search);
  const [categoryInput, setCategoryInput] = useState(category);
  const [categoryInputTouched, setCategoryInputTouched] = useState(false);

  useEffect(() => {
    fetchCastData(offset, 11, category, search);
  }, [offset, search, category]);

  useEffect(() => {
    if (isInputBlur && !category) {
      let timer = setTimeout(() => {
        history.push(
          historyUrlGenerator(
            history.location.pathname,
            1,
            stringParser(searchInput),
            stringParser(category)
          )
        );
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchInput, isInputBlur, history]);

  useEffect(() => {
    if (categoryInputTouched) {
      if (categoryInput === "0") {
        history.push(
          historyUrlGenerator(history.location.pathname, 1, null, null)
        );
      } else {
        history.push(
          historyUrlGenerator(
            history.location.pathname,
            1,
            null,
            stringParser(categoryInput)
          )
        );
      }
    }
  }, [categoryInput, categoryInputTouched]);

  async function fetchCastData(offset, limit, category, name) {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch(
        getAllCharactersUrl(offset, limit, category, name)
      );
      const data = await response.json();
      setCast(data);
    } catch (err) {
      toast.error("Failed to fetch Cast", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setError(err);
    }
    setIsLoading(false);
  }

  return (
    <div className="cast_section">
      <Container className="pt-5" style={{ minHeight: "100vh" }}>
        <Row style={{ alignItems: "center" }}>
          <Col xs={12} md={6} className="h1 text-center text-md-start">
            Cast
          </Col>
          <Col xs={12} md={3} className="">
            <Input
              type="select"
              value={categoryInput}
              onChange={(e) => {
                setCategoryInputTouched(true);
                setCategoryInput(e.target.value);
              }}
            >
              <option value="0">Select any Category</option>
              <option value="Breaking Bad">Breaking Bad</option>
              <option value="Better Call Saul">Better Call Saul</option>
            </Input>
          </Col>
          <Col
            xs={12}
            md={3}
            className="d-md-flex d-none justify-content-md-end"
          >
            <Input
              type="text"
              disabled={category}
              placeholder="search"
              value={searchInput}
              onChange={(e) => {
                setIsInputBlur(true);
                setSearchInput(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row className="p-5 justify-content-center align-items-center">
          <ClipLoader
            color={"#ffffff"}
            loading={isLoading && !error}
            size={150}
          />
        </Row>
        {!isLoading && error && (
          <Row className="p-5 justify-content-center align-items-center">
            <div className="text-center">
              Ohh! Snap there was a error! Kindly try after sometime
            </div>
          </Row>
        )}
        {!isLoading && !error && cast.length === 0 && (
          <div className="text-center p-5">Ohh! snap no data</div>
        )}
        {!isLoading && !error && (
          <>
            <ActorList cast={cast} />
            <PaginationActorList
              page={page}
              hasNext={hasNextPage}
              hasPrev={hasPrev}
              search={search}
              category={category}
            />
          </>
        )}
      </Container>
    </div>
  );
};

export default Cast;
