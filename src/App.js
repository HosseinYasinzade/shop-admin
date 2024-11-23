import React, { useState } from "react";
import routers from "./router";
import { useRoutes, useNavigate } from "react-router-dom";
import { LocalStorage, setItemsToLocalStorage } from "./Storage";
import { createNewItem, resetItem } from "./CreateItem";
import { handleSubmit, handleSubmit2 } from "./formHandler";

function App() {
  const navigate = useNavigate();

  const [items, setNewItem] = useState(() => LocalStorage("items"));
  const [newItem, setItems] = useState(resetItem());

  const addItem = () => {
    const myNewItem = createNewItem(items, newItem);
    const updatedItems = [...items, myNewItem];
    setNewItem(updatedItems);
    setItemsToLocalStorage("items", updatedItems);
  };

  const router = useRoutes(
    routers(
      items,
      setItems,
      (e) => handleSubmit(e, navigate),
      (e) => handleSubmit2(e, addItem, setItems, resetItem, navigate)
    )
  );
  return <div className="App">{router}</div>;
}
export default App;
