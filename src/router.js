import Home from "./Components/Home";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";

const routers = [
  { path: "/", element: <Home /> },
  { path: "/form1", element: <Form1 /> },
  { path: "/form2", element: <Form2 /> },
];
export default routers;
