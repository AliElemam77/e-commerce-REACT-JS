import { useState, useEffect } from "react";
import style from "./protectRoutes.module.css";
import { Navigate } from "react-router-dom";

export default function ProtectRoutes(props) {
  // console.log(props);
  const [count, setCount] = useState(0);

  if (localStorage.getItem("userToken") !== null) {
    //have access
    return props.children;
  } else {
    //login
    return <Navigate to="/login" />;
  }
  useEffect(() => {}, []);
  return <></>;
}
