import { useState } from "react";
import routers from "./router";
import { useRoutes } from "react-router-dom";
import React from "react";

function App() {
  const [items, setNewItem] = useState([
    {
      id: 1,
      product: "shoes",
      brand: "nike",
      color: "green",
      model: "CR7",
      summery: "Hi this is very Cool",
      type: "leather",
      size: "44",
      price: 25,
    },
    {
      id: 2,
      product: "shoes",
      brand: "Adidas",
      color: "red",
      model: "zx",
      summery: "Hi its nice",
      type: "Plastic",
      size: "38",
      price: 20,
    },
    {
      id: 3,
      product: "shirt",
      brand: "Zara",
      color: "black",
      model: "ABC",
      summery: "very bad",
      type: "cotton",
      size: "XL",
      price: 17,
    },
  ]);
  const routes = routers(items, setNewItem);
  const router = useRoutes(routes);
  return <div className="App">{router}</div>;
}

export default App;
