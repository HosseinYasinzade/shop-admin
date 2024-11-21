function Form1() {
  return (
    <form className="form-1">
      <input type="text" required placeholder="Product" autoFocus />
      <input type="text" required placeholder="brand" />
      <input type="text" required placeholder="Model" />
      <input type="text" required placeholder="Color" />
      <textarea placeholder="Summery"></textarea>
      <button type="submit" className="submit-1">
        Go to next page
      </button>
    </form>
  );
}

export default Form1;
