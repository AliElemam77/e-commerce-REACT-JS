import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState(0);
  const [relatedProduct, setRelatedProduct] = useState([]);
  let { id, category } = useParams();
  async function getProductdetails(id) {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    // console.log(data.data);
    setProductDetails(data.data);
  }
  async function getRelatedProductdetails() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
    console.log(data.data);
    let AllProducts = data.data;
    let relatedProduct = AllProducts.filter(
      (product) => product.category.name === category
    );
    console.log(AllProducts);
    console.log(relatedProduct);
    setRelatedProduct(relatedProduct);

    // setProductDetails(data.data);
  }
  useEffect(() => {
    getProductdetails(id);
    getRelatedProductdetails();
  }, [id, category]);
  return (
    <>
      <div>
        <div className="flex py-10 items-center">
          <div className="w-1/4">
            <img className="w-full" src={productDetails.imageCover} alt="" />
          </div>
          <div className="w-3/4 p-5">
            <h4>{productDetails.title}</h4>
            <p>{productDetails.description}</p>
            <span>{productDetails?.category?.name}</span>
            <div className="flex py-6 justify-between ">
              <span>{productDetails.price} EGP</span>
              <span>
                <i className="fa-solid fa-star text-yellow-300 me-2"></i>
                {productDetails.ratingsAverage}
              </span>
            </div>
            <button className="bg-green-500 w-full p-4 rounded text-white text-xl  hover:shadow-lg transition delay-150">
              Add to cart
            </button>
          </div>
        </div>
        <h1 className=" text-xl font-bold text-gray-700 py-6 border-b-2 border-gray-200 w-full text-center bg-gray-100 shadow-md">
          Related Products
        </h1>
        <div className="flex flex-wrap py-6">
          {relatedProduct.map((product) => (
            <div
              key={product.id}
              className=" md:w-1/4 lg:w-1/6  px-7 py-4 shadow-md"
            >
              <Link
                to={`/productDetails/${product.id}/${product.category.name}`}
              >
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
              <button className="bg-green-500 w-full p-3 rounded text-white text-xl  hover:shadow-lg transition delay-150">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
