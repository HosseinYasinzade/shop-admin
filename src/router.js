import Home from "./Components/Home";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";

function routers(items, setNewItem) {
  return [
    {
      path: "/",
      element: <Home items={items} setNewItem={setNewItem} />,
    },
    {
      path: "/form1",
      element: <Form1 />,
    },
    {
      path: "/form2",
      element: <Form2 />,
    },
  ];
}

export default routers;