import * as types from "../actions/types";

const initialState = {
  category: [], //categoryData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CATEGORY:
      const { newCategory } = action.payload;

      return {
        ...state,
        category: [...state.category, newCategory],
      };
    case types.DELETE_CATEGORY:
      return {
        ...state,
        category: state.category.filter(
          (category) => category.id !== action.payload.categoryId
        ),
      };
    case types.UPDATE_CATEGORY:
      const { updatedCategory } = action.payload;
      return {
        ...state,
        category: state.category.map((category) =>
          category.id === updatedCategory.id ? updatedCategory : category
        ),
      };
    case types.FETCH_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

export default reducer;
