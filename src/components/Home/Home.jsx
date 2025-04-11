import { useState, useEffect, useContext } from "react";
import { CounterContext } from "../../Context/counterContext";
import RecentProduct from "../recentProduct/recentProduct";
import CategorySlider from "../CategorySlider/CategorySlider";

export default function Home() {
  let { count, setCount, name, setName } = useContext(CounterContext);
  
  // console.log(x);
  // const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <div className="container  py-6">
        <CategorySlider />
        <RecentProduct />
      </div>
    </>
  );
}
