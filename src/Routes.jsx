import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import { Notfound } from "./Components/NotFound";
import BestSeller from "./Pages/Collections/BestSeller";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // 👈 Default route (renders HomePage)
        element: <HomePage />,
      },
      {
        path: "collections",
        element: <BestSeller />,
      },
    ],
  },
  { path: "*", element: <Notfound /> },
]);

export default Router;
