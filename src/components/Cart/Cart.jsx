import { useState, useEffect, useContext } from "react";
import style from "./cart.module.css";
import { CartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState(null);

  let { getCartItems, updateCart, deleteProduct, clearCart } =
    useContext(CartContext);

  async function getCart() {
    let response = await getCartItems();
    console.log(response.data.data.products);
    setCartItems(response.data.data);
  }

  async function updateCartProducts(id, count) {
    let response = await updateCart(id, count);
    console.log(response.data.data);
    setCartItems(response.data.data);
  }

  async function deleteCartProduct(id) {
    let response = await deleteProduct(id);
    console.log(response.data.data);
    setCartItems(response.data.data);
  }
  async function clearCartProducts() {
    let response = await clearCart();
    console.log(response.data.data);
    setCartItems(response.data.data);
  }
  // console.log(getCartItems);
  useEffect(() => {
    getCart();
  }, []);
  return (
    <>
      <div className=" shadow-md sm:rounded-lg lg:mt-20">
        <div class="  shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.products.map((product) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img
                      src={product.product.imageCover}
                      className="w-16 md:w-32 max-w-full max-h-full"
                      alt="Apple Watch"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.product.title}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => {
                          updateCartProducts(
                            product.product.id,
                            product.count - 1
                          );
                        }}
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <span>{product.count}</span>
                      </div>
                      <button
                        onClick={() => {
                          updateCartProducts(
                            product.product.id,
                            product.count + 1
                          );
                        }}
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      onClick={() => {
                        deleteCartProduct(product.product.id);
                      }}
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl py-4 text-gray-500 text-center">
          total price
          <span className="text-green-400 text-2xl text-center mx-3">
            {cartItems?.totalCartPrice} EGP
          </span>
        </h3>
        <Link to="/checkout">
          <button className="bg-green-500 text-white text-center w-full py-2 rounded-md  hover:bg-green-600 transition duration-200 ease-in-out transform hover:scale-105 mt-4">
            Checkout
          </button>
        </Link>
        <button
          onClick={() => {
            clearCartProducts();
          }}
          className="bg-red-500 text-white text-center w-full py-2 rounded-md  hover:bg-red-600 transition duration-200 ease-in-out transform hover:scale-105 mt-4"
        >
          Clear Cart
        </button>
      </div>
    </>
  );
}
