import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
export default function Layout() {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <Navbar />
      <div className="container  p-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
