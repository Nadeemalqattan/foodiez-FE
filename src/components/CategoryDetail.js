import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import IngredientList from "./IngredientList";
//import UpdateButton from "./buttons/UpdateButton";
const CategoryDetail = () => {
  const allIngredients = useSelector(
    (state) => state.ingredientReducer.ingredient
  );
  const { categorySlug } = useParams();

  const category = useSelector((state) =>
    state.categoryReducer.category.find(
      (category) => category.slug === categorySlug
    )
  );

  if (!category) return <Redirect to="/categories" />;
  const ingredients = category.ingredients.map((ingredient) =>
    allIngredients.find((_ingredient) => _ingredient.id === ingredient.id)
  );
  console.log(allIngredients);
  return (
    <>
      <h4>{category.name}</h4>
      <img src={category.image} />
      <IngredientList ingredients={ingredients} />
      {/* <UpdateButton ingredients={category.ingredients} /> */}
      <Link to={`/categories/${category.id}/ingredients/new`}>
        <BsFillPlusSquareFill className="float-right" size="2em" />
      </Link>
    </>
  );
};
export default CategoryDetail;
