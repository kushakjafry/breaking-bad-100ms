import { useHistory } from "react-router-dom";
import { Button, Row } from "reactstrap";
import { historyUrlGenerator } from "../../Helper/api-helper";

const PaginationActorList = (props) => {
  const history = useHistory();
  return (
    <>
      <div className="d-flex flex-direction-row justify-content-center align-items-center">
        <Button
          className="m-2"
          disabled={!props.hasPrev}
          onClick={() => {
            // props.fetchCastData((parseInt(props.page) - 1) * 10 - 10, 11);
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
            // props.fetchCastData(parseInt(props.page) * 10, 11);
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

export default PaginationActorList;
