import { useHistory } from "react-router-dom";
import { Button, Row } from "reactstrap";
import { historyUrlGenerator } from "../../Helper/api-helper";

const PaginationCharacterList = (props) => {
  const history = useHistory();
  return (
    <>
      <div className="d-flex flex-direction-row justify-content-center align-items-center">
        <Button
          className="m-2"
          disabled={!props.hasPrev}
          onClick={() => {
            history.push(
              historyUrlGenerator(
                history.location.pathname,
                parseInt(props.page) - 1,
                props.search,
                props.category
              )
            );
          }}
        >
          Prev
        </Button>
        <Button className="m-2" disabled>
          {props.page}
        </Button>
        <Button
          onClick={() => {
            history.push(
              historyUrlGenerator(
                history.location.pathname,
                parseInt(props.page) + 1,
                props.search,
                props.category
              )
            );
          }}
          disabled={!props.hasNext}
          className="m-2"
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default PaginationCharacterList;
