import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

export default function CategorySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [imageSlider, setImageSlider] = useState([]);

  async function getCategories() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories`
    );
    // console.log(data.data);
    setImageSlider(data.data);
    // console.log(imageSlider, "imageSlider");

    // setProductDetails(data.data);
  }
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <h1 className="text-xl mt-3  font-bold text-gray-700 py-6 border-b-2 border-gray-200 w-full text-center bg-gray-100 shadow-md  ">
        Shop populer categories
      </h1>
      <Slider {...settings} className="m-4">
        {imageSlider.map((cat) => {
          return (
            <div className="w-30 h-32 " key={cat._id}>
              <img src={cat.image} className="p-3 w-full h-full " alt="" />
              <h4
                className="
              text-center
              text-lg
              font-bold
              text-gray-700
              
              border-gray-800
              w-full
              bg-gray-100
              shadow-md
              "
              >
                {cat.name}
              </h4>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
