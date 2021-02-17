// Styling
import { ListWrapper } from "../styles";
// Components
import CategorieItem from "./CategorieItem";
// Data
import categories from "../categories";

const CategorieList = (props) => {
  const categorieList = categories.map((categorie) => (
    <CategorieItem categorie={categorie} key={categorie.id} />
  ));
  return <ListWrapper>{categorieList}</ListWrapper>;
};

export default CategorieList;
