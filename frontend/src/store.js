import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productReducer,
} from "./reducers/productReducer";

// for multiple reducer
const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
});

// initialstate
let initialState = {};

// middle ware
const middleware = [thunk];

// Create a store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;