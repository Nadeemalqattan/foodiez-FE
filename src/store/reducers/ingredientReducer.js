import * as types from "../actions/types";

const initialState = {
  ingredient: [], //ingredientData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      const { newIngredient } = action.payload;

      return {
        ...state,
        ingredient: [...state.ingredient, newIngredient],
      };
    case types.DELETE_INGREDIENT:
      return {
        ...state,
        ingredient: state.ingredient.filter(
          (ingredient) => ingredient.id !== action.payload.ingredientId
        ),
      };
    case types.UPDATE_INGREDIENT:
      const { updatedIngredient } = action.payload;
      return {
        ...state,
        ingredient: state.ingredient.map((ingredient) =>
          ingredient.id === updatedIngredient.id
            ? updatedIngredient
            : ingredient
        ),
      };
    case types.FETCH_INGREDIENT:
      return { ...state, ingredient: action.payload };
    default:
      return state;
  }
};

export default reducer;
