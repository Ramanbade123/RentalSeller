import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Notfound } from "./Components/NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "*", element: <Notfound /> },
]);

export default Router;
