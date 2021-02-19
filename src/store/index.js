import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

// Actions
import { fetchCategories } from "./actions/categoryActions";
import { fetchIngredient } from "./actions/ingredientActions";
import { fetchRecipe } from "./actions/recipeActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchCategories());
store.dispatch(fetchIngredient());
store.dispatch(fetchRecipe());

export default store;
