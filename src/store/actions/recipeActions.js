import instance from "./instance";
// ACTION TYPES
import * as types from "./types";

// ACTIONS
export const addRecipe = (newRecipe) => async (dispatch) => {
  console.log(newRecipe);
  try {
    const formData = new FormData();
    for (const key in newRecipe) formData.append(key, newRecipe[key]);
    const res = await instance.post(
      `/ingredients/${newRecipe.ingredientId}/recipes`,
      formData
    );
    dispatch({
      type: types.ADD_RECIPE,
      payload: { newRecipe: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateRecipe = (updatedRecipe) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedRecipe) formData.append(key, updatedRecipe[key]);
    const res = await instance.put(`/recipes/${updatedRecipe.id}`, formData);

    dispatch({
      type: types.UPDATE_RECIPE,
      payload: { updatedRecipe: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchRecipe = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/recipes");
      dispatch({ type: types.FETCH_RECIPE, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};
