import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);

  return (
    <h1> { greeting } </h1>
  );
};

export default Greeting