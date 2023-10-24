import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetState } from "./redux/moviesStore";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Popular from "./pages/Popular/Popular";
import NowPlaying from "./pages/NowPlaying/NowPlaying";
import MyFavorites from "./pages/MyFavorites/MyFavorites";
import MoviePage from "./pages/MoviePage/MoviePage";
import "./global.css";
import BackToTopButton from "./component/BackToTopButton/BackToTopButton";

const Dashboard = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <div className="flex mx-auto w-[90%]">
        <Outlet />
      </div>
      <BackToTopButton />
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
  const dispatch = useDispatch();

  useEffect(() => {
    const moviesLikes = localStorage.getItem("movieLikes");
    // console.log(moviesLikes);
    if (moviesLikes) {
      dispatch(resetState(moviesLikes));
    }
  }, []);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
