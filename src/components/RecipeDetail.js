import { Redirect, useParams } from "react-router-dom";

// Components
import IngredientList from "./IngredientList";

// Styling

import { useSelector } from "react-redux";
// import UpdateButton from "./buttons/UpdateButton";

const RecipeDetail = () => {
  const { recipeSlug } = useParams();

  const recipe = useSelector((state) =>
    state.recipeReducer.recipe.find((recipe) => recipe.slug === recipeSlug)
  );

  const allIngredients = useSelector(
    (state) => state.ingredientReducer.ingredient
  );

  if (!recipe) return <Redirect to="/recipes" />;

  const ingredients = recipe.ingredients.map((ingredient) =>
    allIngredients.find((_ingredient) => _ingredient.id === ingredient.id)
  );
  return (
    <>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <IngredientList ingredients={ingredients} />
      {/* <UpdateButton slug={recipe.slug} />
      <DeleteButton recipeId={recipe.id} /> */}
    </>
  );
};

export default RecipeDetail;
