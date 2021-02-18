import instance from "./instance";
// ACTION TYPES
import * as types from "./types";

// ACTIONS
export const addIngredient = (newIngredient) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newIngredient) formData.append(key, newIngredient[key]);
    const res = await instance.post(
      // "/ingredients",
      `/categories/${newIngredient.categoryId}/ingredients`,
      formData
    );
    dispatch({
      type: types.ADD_INGREDIENT,
      payload: { newIngredient: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateIngredient = (updatedIngredient) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedIngredient)
      formData.append(key, updatedIngredient[key]);
    const res = await instance.put(
      `/ingredients/${updatedIngredient.id}`,
      formData
    );

    dispatch({
      type: types.UPDATE_INGREDIENT,
      payload: { updatedIngredient: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchIngredient = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/ingredients");
      dispatch({ type: types.FETCH_INGREDIENT, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};
