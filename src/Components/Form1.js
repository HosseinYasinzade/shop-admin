import React, { useRef, useEffect } from "react";
import InputGenerator from "../InputGenerator";

function Form1({ items, setNewItem, handleSubmit }) {
  const firstInputRef = useRef();

  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };
  const inputFields = [
    {
      name: "product",
      type: "text",
      placeholder: "product",
      value: items.product,
      ref: firstInputRef,
      required: true,
      autoFocus: true,
    },
    {
      name: "brand",
      type: "text",
      placeholder: "brand",
      value: items.brand,
      required: true,
    },
    {
      name: "model",
      type: "text",
      placeholder: "model",
      value: items.model,
      required: true,
    },
    {
      name: "color",
      type: "text",
      placeholder: "color",
      value: items.color,
      required: true,
    },
  ];
  return (
    <form className="form-1" onSubmit={handleSubmit}>
      {InputGenerator(inputFields, handleChange)}
      <textarea
        placeholder="Summery"
        name="summery"
        value={items.summery}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className="submit-1">
        Go to next page
      </button>
    </form>
  );
}

export default Form1;
