import { useState } from "react";
import routers from "./router";
import { useRoutes, useNavigate } from "react-router-dom";
import React from "react";

function App() {
  const navigate = useNavigate();

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

  const [newItem, setItems] = useState({
    product: "",
    brand: "",
    color: "",
    model: "",
    summery: "",
    type: "",
    size: "",
    price: "",
  });

  const addItem = () => {
    const id = items.length ? items[items.length - 1].id + 1 : 1; // محاسبه ID جدید
    const myNewItem = { id, ...newItem };
    setNewItem((prevItems) => [...prevItems, myNewItem]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
    setItems({
      product: "",
      brand: "",
      color: "",
      model: "",
      summery: "",
      type: "",
      size: "",
      price: "",
    });
    navigate("/form2");
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    addItem();
    setItems({
      product: "",
      brand: "",
      color: "",
      model: "",
      summery: "",
      type: "",
      size: "",
      price: "",
    });
    navigate("/");
  };

  const routes = routers(items, setItems, handleSubmit, handleSubmit2);
  const router = useRoutes(routes);
  return <div className="App">{router}</div>;
}

export default App;
