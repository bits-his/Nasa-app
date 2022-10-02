
import {  useRoutes } from "react-router-dom";
import Eley from "../Form";
import Home from "../Home";
import SingIn from "../Login";
import Profile from "../profile";
import SignUp from "../Signup";

function AppNavigation() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <SingIn /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/publish', element: <Eley /> },
    { path: '/profile', element: <Profile /> },
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
