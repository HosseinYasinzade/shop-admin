function Form2() {
  return (
    <form className="form-2">
      <input type="text" required placeholder="Type" autoFocus />
      <input type="number" required placeholder="Size" />
      <input type="number" required placeholder="Price" />
      <button type="submit" className="submit-1">
        Submit
      </button>
    </form>
  );
}

export default Form2;
