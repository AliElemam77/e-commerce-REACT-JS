import { useState, useEffect, useContext } from "react";
import style from "./navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg";
import { CounterContext } from "../../Context/counterContext";
import { UserContext } from "../../Context/userContext";

export default function Navbar() {
  let { userLog, setUserLog } = useContext(UserContext);
  let navigate = useNavigate();
  // const [count, setCount] = useState(0);

  function logout() {
    localStorage.removeItem("userToken");
    setUserLog(null);
    navigate("/login");
  }
  useEffect(() => {}, []);
  return (
    <>
      <nav className="z-50 bg-gray-200 lg:fixed top-0 right-0 left-0">
        <div className="p-4 lg:items-center flex flex-col lg:flex-row lg:justify-between">
          <div className="logo lg:items-center flex flex-col lg:flex-row">
            <img width={110} src={logo} alt="" />
            <ul className="flex flex-col lg:flex-row">
              {userLog !== null ? (
                <>
                  <li className="px-3 py-2">
                    <NavLink to="">Home</NavLink>
                  </li>
                  <li className="px-3 py-2">
                    <NavLink to="product">Products</NavLink>
                  </li>
                  <li className="px-3 py-2">
                    <NavLink to="cart">Cart</NavLink>
                  </li>
                  <li className="px-3 py-2">
                    <NavLink to="brands">Brands</NavLink>
                  </li>
                  <li className="px-3 py-2">
                    <NavLink to="categories">Categories</NavLink>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
          <div className="">
            <ul className="flex lg:items-center flex-col lg:flex-row">
              {userLog === null ? (
                <>
                  <li className="px-3 py-2">
                    <NavLink to="register">Register</NavLink>
                  </li>
                  <li className="px-3 py-2">
                    <NavLink to="login">Login</NavLink>
                  </li>
                </>
              ) : (
                <li onClick={logout} className="px-3 py-2 cursor-pointer">
                  <span>Logout</span>
                </li>
              )}

              <li>
                <i className="fab px-3 py-2 fa-facebook"></i>
                <i className="fab px-3 py-2 fa-youtube"></i>
                <i className="fab px-3 py-2 fa-twitter"></i>
                <i className="fab px-3 py-2 fa-spotify"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
