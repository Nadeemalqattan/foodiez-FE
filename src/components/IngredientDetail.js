import { Redirect, useParams } from "react-router-dom";

// Components
// import DeleteButton from "./buttons/DeleteButton";
import RecipeList from "./RecipeList";
// Styling

import { useSelector } from "react-redux";
// import UpdateButton from "./buttons/UpdateButton";

const IngredientDetail = () => {
  const { ingredientSlug } = useParams();

  const ingredient = useSelector((state) =>
    state.ingredientReducer.ingredient.find(
      (ingredient) => ingredient.slug === ingredientSlug
    )
  );

  const allRecipes = useSelector((state) => state.recipeReducer.recipe);

  if (!ingredient) return <Redirect to="/ingredients" />;

  const recipes = ingredient.recipes.map((recipe) =>
    allRecipes.find((_recipe) => _recipe.id === recipe.id)
  );
  return (
    <>
      <h1>{ingredient.name}</h1>
      <img src={ingredient.image} alt={ingredient.name} />
      <RecipeList recipes={recipes} />
      {/* <UpdateButton slug={ingredient.slug} />
      <DeleteButton ingredientId={ingredient.id} /> */}
    </>
  );
};

export default IngredientDetail;
