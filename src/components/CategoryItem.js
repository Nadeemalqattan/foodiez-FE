// Styling
import { ItemWrapper } from "../styles";

const CategoryItem = (props) => {
  const category = props.category;
  return (
    <ItemWrapper>
      <img alt={category.name} src={category.image} />
      <p>{category.name}</p>
    </ItemWrapper>
  );
};

export default CategoryItem;
