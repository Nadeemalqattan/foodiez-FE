// Styling
import { ListWrapper } from "../styles";
import { BsFillPlusSquareFill } from "react-icons/bs";
// Components
import CategoryItem from "./CategoryItem";
// Data
//import categories from "../categories";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CategoryList = (props) => {
  const categories = useSelector((state) => state.categoryReducer.category);
  const categoryList = categories.map((category) => (
    <CategoryItem category={category} key={category.id} />
  ));
  return (
    <ListWrapper>
      <Link to="/categories/new">
        <BsFillPlusSquareFill />
      </Link>
      {categoryList}
    </ListWrapper>
  );
};

export default CategoryList;
