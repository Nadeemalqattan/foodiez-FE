// Styling
import { ListWrapper } from "../styles";
import { BsFillPlusSquareFill } from "react-icons/bs";
// Components
import IngredientItem from "./IngredientItem";
// Data

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const IngredientList = (props) => {
  const ingredients = useSelector(
    (state) => state.ingredientReducer.ingredient
  );
  const ingredientList = ingredients.map((ingredient) => (
    <IngredientItem ingredient={ingredient} key={ingredient.id} />
  ));
  return (
    <div>
      <h1>Food Ingredients</h1>
      <ListWrapper>
        {ingredientList}
        <Link to="/ingredients/new">
          <BsFillPlusSquareFill size="2em" />
        </Link>
      </ListWrapper>
    </div>
  );
};

export default IngredientList;
