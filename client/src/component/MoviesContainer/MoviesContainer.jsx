import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendRequest } from "../../functions/SendRequest";
import { ENDPOINT } from "../../urls";
import { message } from "antd";
import MoviesList from "../../component/MoviesList/MoviesList";
import MovieCard from "../../component/MovieCard/MovieCard";
import MoviePage from "../../pages/MoviePage/MoviePage";
import Loader from "../Loader/Loader";

const PAGE_NUMBER = 1;
const TOTAL_PAGEA = 500;

const MovieContainer = ({ url }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  //   const [pageNow, setPageNow] = useState(1);

  const pageNow = useSelector((state) => state.pagination);
  const popup = useSelector((state) => state.popup);

  console.log(popularMovies);
  console.log(`page ${page}`);

  useEffect(() => {
    console.log("in request useEffect");
    const PopularMovies = async () => {
      try {
        const popular = await SendRequest("get", url, page);
        // console.log(`request ${popular.data.results}`);
        console.log("in request succsess");
        setPopularMovies(popular.data.results);
        setLoading(false);
        window.scrollTo({
          top: 0,
          behavior: "auto",
        });
      } catch (error) {
        setError(error);
      }
    };
    PopularMovies();
  }, [page]);

  useEffect(() => {
    console.log("in error useEffect");
    if (error) {
      setError(null);
      message.error({
        content: error.message,
        duration: 3,
      });
    }
  }, [error]);

  return (
    <>
      <div className=" text-white">
        {popularMovies && <MoviesList movies={popularMovies} />}
        {popup.openModal && <MoviePage />}
        {loading && <Loader />}
        <div className="flex justify-center my-6 mb-10">
          <button
            onClick={() => {
              if (page > 1) {
                setLoading(true);
                setPage(page - 1);
              }
            }}
            className=" bg-white rounded-full px-4 text-black mr-2 hover:bg-slate-500 hover:font-bold"
          >
            Prev
          </button>
          {page}
          <button
            onClick={() => {
              if (page < popularMovies.total_pages || page < TOTAL_PAGEA) {
                setLoading(true);
                setPage(page + 1);
              }
            }}
            className=" bg-white rounded-full px-4 text-black ml-2 hover:bg-slate-500 hover:font-bold"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieContainer;
