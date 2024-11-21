import Home from "./Components/Home";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";

function routers(items, setNewItem, handleSubmit, handleSubmit2) {
  return [
    {
      path: "/",
      element: <Home items={items} setNewItem={setNewItem} />,
    },
    {
      path: "/form1",
      element: (
        <Form1
          items={items}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
      ),
    },
    {
      path: "/form2",
      element: (
        <Form2
          items={items}
          setNewItem={setNewItem}
          handleSubmit2={handleSubmit2}
        />
      ),
    },
  ];
}

export default routers;
