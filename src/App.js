import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import CategoryList from "./components/CategoryList";
import CategoryForm from "./components/CategoryForm";
import CategoryDetail from "./components/CategoryDetail";
import IngredientList from "./components/IngredientList";
import IngredientForm from "./components/IngredientForm";
import IngredientDetail from "./components/IngredientDetail";
import RecipeDetail from "./components/RecipeDetail";
import RecipeList from "./components/RecipeList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          path={["/categories/:categoryId/ingredients/new", "/ingredients/new"]}
        >
          <IngredientForm />
        </Route>
        <Route path="/categories/new">
          <CategoryForm />
        </Route>
        <Route path="/categories/:categorySlug">
          <CategoryDetail />
        </Route>
        <Route path="/ingredients/:ingredientSlug">
          <IngredientDetail />
        </Route>
        <Route path="/ingredients">
          <IngredientList />
        </Route>
        <Route path="/recipes">
          <RecipeList />
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
