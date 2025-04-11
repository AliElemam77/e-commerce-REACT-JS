import { useState, useEffect } from "react";

export default function Notfound() {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <div className="grid h-screen place-content-center bg-white px-4">
        <h1 className="tracking-widest text-gray-500 uppercase">
          404 | Not Found
        </h1>
      </div>
    </>
  );
}
