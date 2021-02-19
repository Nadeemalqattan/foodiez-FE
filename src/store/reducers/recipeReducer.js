import * as types from "../actions/types";

const initialState = {
  recipe: [], //recipeData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_RECIPE:
      const { newRecipe } = action.payload;

      return {
        ...state,
        recipe: [...state.recipe, newRecipe],
      };
    case types.DELETE_RECIPE:
      return {
        ...state,
        recipe: state.recipe.filter(
          (recipe) => recipe.id !== action.payload.recipeId
        ),
      };
    case types.UPDATE_RECIPE:
      const { updatedRecipe } = action.payload;
      return {
        ...state,
        recipe: state.recipe.map((recipe) =>
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        ),
      };
    case types.FETCH_RECIPE:
      return { ...state, recipe: action.payload };
    default:
      return state;
  }
};

export default reducer;
