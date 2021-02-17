import { addCategory, updateCategory } from "../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

const CategoryForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { categorySlug, shopId } = useParams();
  const foundCategory = useSelector((state) =>
    state.category.find((category) => category.slug === categorySlug)
  );

  const [category, setCategory] = useState(
    foundCategory ?? {
      //shopId: shopId,
      name: "",
      image: "",
    }
  );

  const handleChange = (event) =>
    setCategory({ ...category, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setCategory({ ...category, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundCategory) dispatch(updateCategory(category));
    else dispatch(addCategory(category));
    history.push("/categories");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>{foundCategory ? "Update" : "Create"} Category</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={category.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Image</label>
        <input
          type="file"
          // value={category.image}
          onChange={handleImage}
          name="image"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-info float-right">
        {foundCategory ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default CategoryForm;
