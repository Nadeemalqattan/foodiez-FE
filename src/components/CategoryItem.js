// Styling
import { ItemWrapper, Imagecard } from "../styles";

import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const category = props.category;
  return (
    <ItemWrapper>
      <div>
        <Link to={`/categories/${category.slug}`}>
          <img alt={category.name} src={category.image} class="card-img-top" />
        </Link>
        <div class="card-body">
          <h4 class="card-title text-center">{category.name}</h4>
        </div>
      </div>
    </ItemWrapper>
  );
};

export default CategoryItem;
