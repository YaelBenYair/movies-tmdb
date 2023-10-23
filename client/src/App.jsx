import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./global.css";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Popular from "./pages/Popular/Popular";
import NowPlaying from "./pages/NowPlaying/NowPlaying";
import MyFavorites from "./pages/MyFavorites/MyFavorites";

const Dashboard = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <div className="flex mx-auto w-[90%]">
        <Outlet />
      </div>
    </div>
  );
};

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Popular />,
      },
      {
        path: "/now-playing",
        element: <NowPlaying />,
      },
      {
        path: "/my-favorite",
        element: <MyFavorites />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
