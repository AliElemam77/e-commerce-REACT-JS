import { createContext } from "react";
import { useState } from "react";

export let CounterContext = createContext(0);

export default function CounterContextPorvider(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ali");

  return (
    <CounterContext.Provider value={{ count, name, setCount, setName }}>
      {props.children}
    </CounterContext.Provider>
  );
}
