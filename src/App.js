import { useState } from "react";
import routers from "./router";
import { useRoutes, useNavigate } from "react-router-dom";
import React from "react";
import { LocalStorage, setItemsToLocalStorage } from "./Storage";
import { createNewItem, resetItem } from "./CreateItem";

function App() {
  const navigate = useNavigate();

  const [items, setNewItem] = useState(() => LocalStorage("items"));

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
    const myNewItem = createNewItem(items, newItem);
    const updatedItems = [...items, myNewItem];

    setNewItem(updatedItems);

    setItemsToLocalStorage("items", updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/form2");
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    addItem();
    setItems(resetItem());
    navigate("/");
  };

  const routes = routers(items, setItems, handleSubmit, handleSubmit2);
  const router = useRoutes(routes);
  return <div className="App">{router}</div>;
}

export default App;
