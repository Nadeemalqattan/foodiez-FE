// Styling
import { ListWrapper } from "../styles";
import { BsFillPlusSquareFill } from "react-icons/bs";
// Components
import RecipeItem from "./RecipeItem";
// Data

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  // const recipes = useSelector((state) => state.recipeReducer.recipe);
  const recipeList = recipes.map((recipe) => (
    <RecipeItem recipe={recipe} key={recipe.id} />
  ));
  console.log("whatever");
  return (
    <div class="container-md">
      <h2>Food Recipes</h2>
      <div class="card-deck">{recipeList}</div>

      <Link to="/recipes/new">
        <BsFillPlusSquareFill size="2em" color="#85d28e" />
      </Link>
    </div>
  );
};

export default RecipeList;
