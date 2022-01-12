import { ADD_TO_CART, REMOVE_CART_ITEM } from "../constants/cartConstants";
import axios from "axios";

// Add to cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.image[0].url, // needt to change image to images
      stock: data.product.stock,
      quantity,
    },
  });

  //   storing added cart items into localstorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// remove item from cart

export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: REMOVE_CART_ITEM, payload: id });

  //   storing added cart items into localstorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
