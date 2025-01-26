import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./components/Login";
import Signup from "./components/Signup";
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
      element: <Signup/>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
