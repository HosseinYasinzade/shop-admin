export const LocalStorage = (key) => {
  const storedItems = localStorage.getItem(key);
  return storedItems ? JSON.parse(storedItems) : [];
};

export const setItemsToLocalStorage = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};
