import { addRecipe, updateRecipe } from "../store/actions/recipeActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

const RecipeForm = ({ id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { recipeSlug, ingredientId } = useParams();
  const foundRecipe = useSelector((state) =>
    state.recipeReducer.recipe.find((recipe) => recipe.slug === recipeSlug)
  );

  const [recipe, setRecipe] = useState(
    foundRecipe ?? {
      ingredients: id,
      name: "",
      image: "",
      description: "",
    }
  );

  const handleChange = (event) =>
    setRecipe({ ...recipe, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundRecipe) dispatch(updateRecipe(recipe));
    else dispatch(addRecipe(recipe));
    history.push("/recipes");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>{foundRecipe ? "Update" : "Create"} Recipe</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={recipe.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      {/* <div className="mb-3">
        <label className="form-label">Ingredients</label>
        <input
          type="text"
          value={id}
          onChange={handleChange}
          name="id"
          className="form-control"
        />
      </div> */}
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          value={recipe.description}
          onChange={handleChange}
          name="description"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image</label>
        <input
          type="file"
          // value={recipe.image}
          onChange={handleImage}
          name="image"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-info float-right">
        {foundRecipe ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default RecipeForm;
