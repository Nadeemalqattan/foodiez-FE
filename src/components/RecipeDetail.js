import { Redirect, useParams } from "react-router-dom";

// Components
// import DeleteButton from "./buttons/DeleteButton";
// Styling

import { useSelector } from "react-redux";
// import UpdateButton from "./buttons/UpdateButton";

const RecipeDetail = () => {
  const { recipeSlug } = useParams();
  // const recipe = useSelector((state) =>
  //   state.recipeReducer.recipes.find(
  //     (recipe) => recipe.slug === recipeSlug
  //   )
  // );
  const recipe = useSelector((state) =>
    state.recipeReducer.recipe.find((recipe) => recipe.slug === recipeSlug)
  );
  if (!recipe) return <Redirect to="/recipes" />;

  return (
    <>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />

      {/* <UpdateButton slug={recipe.slug} />
      <DeleteButton recipeId={recipe.id} /> */}
    </>
  );
};

export default RecipeDetail;
