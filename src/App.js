import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Home page</h1>,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
