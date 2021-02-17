import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import CategoryList from "./CategoryList";
//import UpdateButton from "./buttons/UpdateButton";
const CategoryDetail = () => {
  const allCategory = useSelector(
    (state) => state.ingredientReducer.ingredients
  );
  const { categorySlug } = useParams();
  const category = useSelector((state) =>
    state.categoryReducer.category.find(
      (category) => category.slug === categorySlug
    )
  );
  if (!category) return <Redirect to="/categorys" />;
  const ingredients = category.ingredients.map((ingredient) =>
    allCategory.find((_ingredient) => _ingredient.id === ingredient.id)
  );

  return (
    <>
      <h4>{category.name}</h4>
      <img src={category.image} alt={category.name} />
      <CategoryList ingredients={ingredients} />
      {/* <UpdateButton ingredients={category.ingredients} /> */}
      <Link to={`/categorys/${category.id}/ingredients/new`}>
        <BsPlusCircle className="float-right" size="2em" />
      </Link>
    </>
  );
};
export default CategoryDetail;
