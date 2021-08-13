import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ActorDetail from "./Pages/ActorDetail";
import Cast from "./Pages/Cast";
import HomePage from "./Pages/HomePage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/actors" exact>
          <Cast />
        </Route>
        <Route path="/actors/:actorId" exact>
          <ActorDetail />
        </Route>
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
