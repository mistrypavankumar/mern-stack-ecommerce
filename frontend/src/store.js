import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productReducer,
} from "./reducers/productReducer";
import {
  profileReducer,
  userReducer,
  forgotPasswordReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

// for multiple reducer
const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
});

// initialstate
let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

// middle ware
const middleware = [thunk];

// Create a store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
