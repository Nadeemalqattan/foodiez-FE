import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import CategorieList from "./components/CategorieList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/categorie">
          <CategorieList />
        </Route>
        <Route>
          <Home path="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
