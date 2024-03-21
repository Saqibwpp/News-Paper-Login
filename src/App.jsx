import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Components/newsletter-signin";
import { Success } from "./Components/success/success";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
