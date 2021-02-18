// Styling
import { ItemWrapper, Imagecard } from "../styles";

import { Link } from "react-router-dom";

const IngredientItem = (props) => {
  const ingredient = props.ingredient;
  return (
    <ItemWrapper>
      <Link to={`/ingredients/${ingredient.slug}`}>
        <Imagecard alt={ingredient.name} src={ingredient.image} />
      </Link>
      <p>{ingredient.name}</p>
    </ItemWrapper>
  );
};

export default IngredientItem;
