import { createContext, useEffect, useState } from "react";

export let UserContext = createContext(0);

export default function UserContextProvider(props) {
  const [userLog, setUserLog] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserLog(localStorage.getItem("userToken"));
    }
  }, []);
  return (
    <UserContext.Provider value={{ userLog, setUserLog }}>
      {props.children}
    </UserContext.Provider>
  );
}
