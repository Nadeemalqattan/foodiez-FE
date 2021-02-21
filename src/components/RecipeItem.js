// Styling
import { ItemWrapper } from "../styles";

import { Link } from "react-router-dom";

const RecipeItem = (props) => {
  const recipe = props.recipe;
  return (
    <ItemWrapper>
      <div>
        <Link to={`/recipes/${recipe.slug}`}>
          <img alt={recipe.name} src={recipe.image} class="card-img-top" />
        </Link>
        <div class="card-body">
          <h4 class="card-title text-center">{recipe.name}</h4>
        </div>
      </div>
    </ItemWrapper>
  );
};

export default RecipeItem;
