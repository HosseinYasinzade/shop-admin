import Home from "./Components/Home";
import routers from "./router";
import { useRoutes } from "react-router-dom";

function App() {
  const router = useRoutes(routers);
  return (
    <div className="App">
      <Home />
      {router}
    </div>
  );
}

export default App;
