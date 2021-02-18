import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import CategoryList from "./CategoryList";
import { Imagecard } from "../styles";
//import UpdateButton from "./buttons/UpdateButton";
const CategoryDetail = () => {
  const allCategory = useSelector(
    (state) => state.ingredientReducer.ingredient
  );
  const { categorySlug } = useParams();
  const category = useSelector((state) =>
    state.categoryReducer.category.find(
      (category) => category.slug === categorySlug
    )
  );
  if (!category) return <Redirect to="/categories" />;
  // const ingredients = category.ingredient.map((ingredient) =>
  //   allCategory.find((_ingredient) => _ingredient.id === ingredient.id)
  // );

  return (
    <>
      <h4>{category.name}</h4>
      <Imagecard src={category.image} alt={category.name} />
      {/* <CategoryList ingredients={ingredients} /> */}
      {/* <UpdateButton ingredients={category.ingredients} /> */}
      <Link to={`/categories/${category.id}/ingredients/new`}>
        <BsFillPlusSquareFill className="float-right" size="2em" />
      </Link>
    </>
  );
};
export default CategoryDetail;
