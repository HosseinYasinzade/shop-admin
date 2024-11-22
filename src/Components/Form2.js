function Form2({ items, setNewItem, handleSubmit2 }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };
  return (
    <form className="form-2" onSubmit={handleSubmit2}>
      <input
        type="text"
        required
        placeholder="Type"
        name="type"
        autoFocus
        value={items.type}
        onChange={handleChange}
      />
      <input
        type="number"
        required
        placeholder="Size"
        name="size"
        value={items.size}
        onChange={handleChange}
      />
      <input
        type="number"
        required
        placeholder="Price"
        name="price"
        value={items.price}
        onChange={handleChange}
      />
      <button type="submit" className="submit-1">
        Submit
      </button>
    </form>
  );
}

export default Form2;
