// Styling
import { ItemWrapper } from "../styles";

const CategorieItem = (props) => {
  const categorie = props.categorie;
  return (
    <ItemWrapper>
      <img alt={categorie.name} src={categorie.image} />
      <p>{categorie.name}</p>
    </ItemWrapper>
  );
};

export default CategorieItem;
