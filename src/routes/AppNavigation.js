
import { Navigate, useRoutes } from "react-router-dom";
import Home from "../Home";
import SingIn from "../Login";
import SignUp from "../Signup";

function AppNavigation() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <SingIn /> },
    { path: '/sign-up', element: <SignUp /> },
    {
      path: "app",
      element: <Home />,
      children: [


      ],
    },
    {
      path: "auth",
      children: [
       
      ],
    },
    { path: "*", element: <Home /> },
  ]);

  return element;
}

export default AppNavigation;
