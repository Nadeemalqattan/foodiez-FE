import {
  addIngredient,
  updateIngredient,
} from "../store/actions/ingredientActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

const IngredientForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { ingredientSlug, categoryId } = useParams();
  const foundIngredient = useSelector((state) =>
    state.ingredientReducer.ingredient.find(
      (ingredient) => ingredient.slug === ingredientSlug
    )
  );

  const [ingredient, setIngredient] = useState(
    foundIngredient ?? {
      categoryId: categoryId,
      name: "",
      image: "",
    }
  );

  const handleChange = (event) =>
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setIngredient({ ...ingredient, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundIngredient) dispatch(updateIngredient(ingredient));
    else dispatch(addIngredient(ingredient));
    history.push("/ingredients");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>{foundIngredient ? "Update" : "Create"} Ingredient</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={ingredient.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Image</label>
        <input
          type="file"
          // value={ingredient.image}
          onChange={handleImage}
          name="image"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-dark float-right">
        {foundIngredient ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default IngredientForm;
