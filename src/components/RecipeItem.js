// Styling
import { ItemWrapper, Imagecard } from "../styles";

import { Link } from "react-router-dom";

const RecipeItem = (props) => {
  const recipe = props.recipe;
  return (
    <ItemWrapper>
      <Link to={`/recipes/${recipe.slug}`}>
        <Imagecard alt={recipe.name} src={recipe.image} />
      </Link>
      <p>{recipe.name}</p>
    </ItemWrapper>
  );
};

export default RecipeItem;
