// Styling
import { ItemWrapper, Imagecard } from "../styles";

import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const category = props.category;
  return (
    <ItemWrapper>
      <Link to={`/categories/${category.slug}`}>
        <Imagecard alt={category.name} src={category.image} />
      </Link>
      <h3>{category.name}</h3>
    </ItemWrapper>
  );
};

export default CategoryItem;
