import Home from "./Components/Home";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";
import Register from "./Components/Register";

function makeRoute(path, Component, props) {
  return {
    path,
    element: <Component {...props} />,
  };
}

function routers(items, setItems, handleSubmit, handleSubmit2) {
  const props = { items, setNewItem: setItems };

  return [
    makeRoute("/", Register, props),
    makeRoute("/home", Home, props),
    makeRoute("/form1", Form1, { ...props, handleSubmit }),
    makeRoute("/form2", Form2, { ...props, handleSubmit2 }),
  ];
}

export default routers;
