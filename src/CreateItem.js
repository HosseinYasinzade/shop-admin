export const createNewItem = (items, newItem) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  return { id, ...newItem };
};

export const resetItem = () => ({
  product: "",
  brand: "",
  color: "",
  model: "",
  summery: "",
  type: "",
  size: "",
  price: "",
});
