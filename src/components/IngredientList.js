// Styling
import { ListWrapper } from "../styles";
import { BsFillPlusSquareFill } from "react-icons/bs";
// Components
import IngredientItem from "./IngredientItem";
// Data
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RecipeForm from "./RecipeForm";

const IngredientList = ({ ingredients }) => {
  let [id, setId] = useState([]);
  console.log(id);

  const ingredientList = ingredients.map((ingredient) => (
    <IngredientItem ingredient={ingredient} key={ingredient.id} setId={setId} />
  ));

  return (
    <div>
      <h1>Food Ingredients</h1>
      <ListWrapper>
        {ingredientList}
        {id.length >= 1 ? (
          <>
            <Link to="/recipes/new">
              <BsFillPlusSquareFill size="2em" />
            </Link>
            <RecipeForm id={id} />
          </>
        ) : (
          ""
        )}
      </ListWrapper>
    </div>
  );
};

export default IngredientList;
