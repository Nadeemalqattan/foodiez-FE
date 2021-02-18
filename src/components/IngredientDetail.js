import { Redirect, useParams } from "react-router-dom";

// Components
// import DeleteButton from "./buttons/DeleteButton";
// Styling

import { useSelector } from "react-redux";
// import UpdateButton from "./buttons/UpdateButton";

const IngredientDetail = () => {
  const { ingredientSlug } = useParams();
  // const ingredient = useSelector((state) =>
  //   state.ingredientReducer.ingredients.find(
  //     (ingredient) => ingredient.slug === ingredientSlug
  //   )
  // );
  const ingredient = useSelector((state) =>
    state.ingredientReducer.ingredient.find(
      (ingredient) => ingredient.slug === ingredientSlug
    )
  );
  if (!ingredient) return <Redirect to="/ingredients" />;

  return (
    <>
      <h1>{ingredient.name}</h1>
      <img src={ingredient.image} alt={ingredient.name} />

      {/* <UpdateButton slug={ingredient.slug} />
      <DeleteButton ingredientId={ingredient.id} /> */}
    </>
  );
};

export default IngredientDetail;
