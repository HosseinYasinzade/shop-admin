function Form1({ items, setNewItem, handleSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };
  return (
    <form className="form-1" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Product"
        name="product"
        autoFocus
        value={items.product}
        onChange={handleChange}
      />
      <input
        type="text"
        required
        placeholder="brand"
        name="brand"
        value={items.brand}
        onChange={handleChange}
      />
      <input
        type="text"
        required
        placeholder="Model"
        name="model"
        value={items.model}
        onChange={handleChange}
      />
      <input
        type="text"
        required
        placeholder="Color"
        name="color"
        value={items.color}
        onChange={handleChange}
      />
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
