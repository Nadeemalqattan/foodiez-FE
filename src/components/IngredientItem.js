// Styling
import { ItemWrapper, Imagecard } from "../styles";

import { Link } from "react-router-dom";
import { useState } from "react";

const IngredientItem = (props) => {
  //let [id, setId] = useState(null);

  // id = [];
  // id.push(id);
  //console.log(id);
  const ingredient = props.ingredient;

  //storing ingredient ids into an array (مايشتغل عدل)
  // let ingredients = [];
  // ingredients.push(id);
  // console.log(ingredients);

  return (
    <div>
      {/* {ingredients} */}
      <div class="row">
        <div>
          <ItemWrapper>
            <div class="form-check">
              <input
                onChange={() => props.setId(ingredient.id)}
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <Link to={`/ingredients/${ingredient.slug}`}>
                <Imagecard alt={ingredient.name} src={ingredient.image} />
              </Link>
              <label class="form-check-label" for="flexCheckDefault"></label>
            </div>
            <p>{ingredient.name}</p>
          </ItemWrapper>
        </div>
      </div>
    </div>
  );
};

export default IngredientItem;
