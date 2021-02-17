import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

// Actions
import { fetchCategories } from "./actions/categoryActions";
import { fetchIngredient } from "./actions/ingredientActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchCategories());
store.dispatch(fetchIngredient());

export default store;
