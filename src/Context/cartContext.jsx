import axios from "axios";
import { createContext } from "react";

export let CartContext = createContext();

export default function CartContextProvider(props) {
  let headers = {
    token: localStorage.getItem("userToken"),
  };
  function getCartItems() {
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", {
        headers: headers,
      })
      .then((response) => response)
      .catch((error) => error);
  }
  function addToCart(id) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart/`,
        {
          productId: id,
        },
        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }
  function deleteProduct(id) {
    return axios
      .delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,

        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }
  function clearCart() {
    return axios
      .delete(
        `https://ecommerce.routemisr.com/api/v1/cart`,

        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }
  function updateCart(id, count) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {
          count: count,
        },
        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }
  function checkoutCart(id, url, formValues) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${url}`,
        {
          shippingAddress: formValues,
        },
        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }

  return (
    <CartContext.Provider
      value={{
        getCartItems,
        addToCart,
        updateCart,
        deleteProduct,
        clearCart,
        checkoutCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
