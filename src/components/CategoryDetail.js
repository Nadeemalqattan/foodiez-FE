import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import IngredientList from "./IngredientList";
import { ItemWrapper } from "../styles";
import IngredientItem from "./IngredientItem";
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
  // const ingredients = category.ingredients.map(
  //   (ingredient) => <IngredientItem /> //ingredients={ingredient} />
  //   //allIngredients.find((_ingredient) => _ingredient.id === ingredient.id)
  // );
  //change line 21 to bring the ingredient list
  return (
    <ItemWrapper>
      {/* {ingredients} */}
      <h4>{category.name}</h4>
      <img src={category.image} alt={category.name} />
      <IngredientList />
      {/* ingredients={ingredients} /> */}
      {/* <UpdateButton ingredients={category.ingredients} /> */}
      <Link to={`/categories/${category.id}/ingredients/new`}>
        <BsFillPlusSquareFill className="float-right" size="2em" />
      </Link>
    </ItemWrapper>
  );
};
export default CategoryDetail;
