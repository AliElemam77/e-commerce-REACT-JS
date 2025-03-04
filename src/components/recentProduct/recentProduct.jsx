import { useState, useEffect, useContext } from "react";
import style from "./recentProduct.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";
import toast from "react-hot-toast";

export default function RecentProduct() {
  const [recentProduct, setRecentProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prodId, setProdId] = useState(null);
  let { addToCart } = useContext(CartContext);

  async function addItemToCart(prodId) {
    setProdId(prodId);
    setLoading(true);
    let response = await addToCart(prodId);
    console.log(response);
    if (response.data.status === "success") {
      setLoading(false);
      toast.success(response.data.message, {
        duration: 2000,
        position: "bottom-right",
      });
    } else {
      setLoading(false);
      toast.error(response.data.message, {
        duration: 2000,
        position: "bottom-right",
      });
    }
  }
  async function getRecentProduct() {
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    // console.log(data.data);
    setRecentProduct(data.data);
  }
  useEffect(() => {
    getRecentProduct();
    // addItemToCart();
  }, []);
  return (
    <>
      <div className="flex flex-wrap py-6">
        {recentProduct.map((product) => (
          <div
            key={product.id}
            className=" md:w-1/4 lg:w-1/6  px-7 py-4 shadow-md"
          >
            <Link to={`productDetails/${product.id}/${product.category.name}`}>
              <div>
                <img src={product.imageCover} alt="" />
                <span className="text-green-500 text-xl">
                  {product.category.name}
                </span>
                <h4>{product.title.split(" ").slice(0, 2).join(" ")}</h4>
                <div className="flex py-6 justify-between ">
                  <span>{product.price} EGP</span>
                  <span>
                    <i className="fa-solid fa-star text-yellow-300 me-2"></i>
                    {product.ratingsAverage}
                  </span>
                </div>
              </div>
            </Link>
            <button
              onClick={() => {
                addItemToCart(product.id);
              }}
              className="bg-green-500 w-full p-3 rounded text-white text-xl  hover:shadow-lg transition delay-150"
            >
              {loading && prodId == product.id ? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                "Add to Cart"
              )}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
