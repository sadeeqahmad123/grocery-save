import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./components/Login";
import Signup from "./components/Signup";
import Categories from "./pages/Categories";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <SignIn/>,
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/categories",
      element: <Categories/>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
