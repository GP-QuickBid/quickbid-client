import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {" "}
        <h1>TESTING /</h1>
      </>
    ),
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: (
      <>
        {" "}
        <h1>TESTING LOGIN</h1>
      </>
    ),
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
