import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CharacterDetail from "./Pages/CharacterDetail";
import Character from "./Pages/Character";
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
        <Route path="/characters" exact>
          <Character />
        </Route>
        <Route path="/characters/:characterId">
          <CharacterDetail />
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
