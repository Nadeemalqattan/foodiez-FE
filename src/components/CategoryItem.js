// Styling
import { ItemWrapper } from "../styles";

import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const category = props.category;
  return (
    <ItemWrapper>
      <Link to={`/categories/${category.slug}`}>
        <img alt={category.name} src={category.image} />
      </Link>
      <p>{category.name}</p>
    </ItemWrapper>
  );
};

export default CategoryItem;
