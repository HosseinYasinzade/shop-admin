import InputGenerator from "../InputGenerator";

function Form2({ items, setNewItem, handleSubmit2 }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const inputFields = [
    {
      name: "type",
      type: "text",
      placeholder: "type",
      value: items.type,
      autoFocus: true,
    },
    {
      name: "size",
      type: "number",
      placeholder: "size",
      value: items.size,
    },
    {
      name: "price",
      type: "number",
      placeholder: "price",
      value: items.price,
      required: true,
    },
  ];
  return (
    <form className="form-2" onSubmit={handleSubmit2}>
      {InputGenerator(inputFields, handleChange)}
      <button type="submit" className="submit-1">
        Submit
      </button>
    </form>
  );
}

export default Form2;
