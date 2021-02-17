import * as types from "../actions/types";

const initialState = {
  category: [], //categoryData,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CATEGORY:
      const { newCAtegory } = action.payload;

      return {
        ...state,
        category: [...state.category, newCAtegory],
      };
    case types.DELETE_CATEGORY:
      return {
        ...state,
        category: state.category.filter(
          (category) => category.id !== action.payload.categoryId
        ),
      };
    case types.UPDATE_CATEGORY:
      const { updatedCAtegory } = action.payload;
      return {
        ...state,
        category: state.category.map((category) =>
          category.id === updatedCAtegory.id ? updatedCAtegory : category
        ),
      };
    case types.FETCH_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

export default categoryReducer;
