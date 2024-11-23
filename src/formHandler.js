export const handleSubmit = (e, navigate) => {
  e.preventDefault();
  navigate("/form2");
};

export const handleSubmit2 = (
  e,
  addItem,
  setItems,
  resetItemState,
  navigate
) => {
  e.preventDefault();
  addItem();
  setItems(resetItemState());
  navigate("/");
};
