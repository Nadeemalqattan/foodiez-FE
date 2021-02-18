// Styling
import { ListWrapper } from "../styles";
import { BsFillPlusSquareFill } from "react-icons/bs";
// Components
import RecipeItem from "./RecipeItem";
// Data

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RecipeList = (props) => {
  const recipes = useSelector((state) => state.recipeReducer.recipe);
  const recipeList = recipes.map((recipe) => (
    <RecipeItem recipe={recipe} key={recipe.id} />
  ));
  return (
    <div>
      <h1>Food Recipes</h1>
      <ListWrapper>
        {recipeList}
        <Link to="/recipes/new">
          <BsFillPlusSquareFill size="2em" />
        </Link>
      </ListWrapper>
    </div>
  );
};

export default RecipeList;
