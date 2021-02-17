import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import CategoryList from "./components/CategoryList";
import CategoryForm from "./components/CategoryForm";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/categories/new">
          <CategoryForm />
        </Route>
        <Route path="/categories">
          <CategoryList />
        </Route>
        <Route>
          <Home path="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
