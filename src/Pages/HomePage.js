import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "../styles/components/home-page/homePage.css";

const HomePage = (props) => {
  return (
    <div
      className="home-section"
      style={{
        background: `url("/BreakingBad.jpg"), rgba(0,0,0,0.5)`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <Container style={{ minHeight: "100vh" }}>
        <div className="home_movie_details align-items-center align-items-sm-start">
          <div className="home_release_date mb-3">20th Jan 2008</div>
          <div className="home_movie_name display-1 mb-3 fw-bold">
            Breaking Bad
          </div>
          <div className="home_movie_buttons">
            <Link
              to="/characters"
              className="cast_and_crew me-4 p-3 fw-bolder border border-white"
            >
              Characters
            </Link>
            <a
              href="https://www.youtube.com/watch?v=HhesaQXLuRY"
              target="_blank"
              rel="noreferrer"
              className="watch_trailer p-3 border border-white"
            >
              Watch Trailer
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
