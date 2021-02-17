import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import CategoryList from "./components/CategoryList";
import CategoryForm from "./components/CategoryForm";
import CategoryDetail from "./components/CategoryDetail";
import IngredientList from "./components/IngredientList";
import IngredientForm from "./components/IngredientForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/categories/:categorySlug">
          <CategoryDetail />
        </Route>
        <Route path="/categories/new">
          <CategoryForm />
        </Route>
        <Route path="/ingredients/new">
          <IngredientForm />
        </Route>
        <Route path="/ingredients">
          <IngredientList />
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
