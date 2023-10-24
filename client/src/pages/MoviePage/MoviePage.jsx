import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { isMobile } from "react-device-detect";
import { SendRequestById } from "../../functions/SendRequest";
import { ENDPOINT } from "../../urls";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteLike } from "../../redux/moviesStore";
import { openModalAction } from "../../redux/moviesPopupSlice";
import { AiOutlineClose } from "react-icons/ai";

const MoviePage = () => {
  const [isLike, setIsLike] = useState(false);
  const [popularMovies, setPopularMovies] = useState({});
  const [error, setError] = useState(null);
  const [dateArray, setDateArray] = useState([]);

  const dispatch = useDispatch();
  const moviesLikes = useSelector((state) => state.likes);
  const popup = useSelector((state) => state.popup);

  const handleLike = () => {
    if (!isLike) {
      dispatch(add(popularMovies));
      setIsLike(true);
    } else {
      dispatch(deleteLike(popularMovies.id));
      setIsLike(false);
    }
  };

  const handleOnClose = (e) => {
    console.log(e.target.id);
    if (
      e.target.id === "container" ||
      e.target.id === "close-icon" ||
      e.target.id === "close-icon-div"
    ) {
      dispatch(openModalAction(false));
    }
  };

  useEffect(() => {
    const PopularMovies = async () => {
      try {
        const popular = await SendRequestById(
          "get",
          ENDPOINT.MOVIE_BY_ID,
          true,
          popup.movieId
        );
        // console.log(`request ${popular}`);
        setPopularMovies(popular.data);
        setDateArray(popular.data.release_date.split("-"));
      } catch (error) {
        setError(error);
      }
    };
    PopularMovies();
  }, []);

  useEffect(() => {
    if (error) {
      setError(null);
      message.error({
        content: error.message,
        duration: 3,
      });
    }
  }, [error]);

  useEffect(() => {
    localStorage.setItem("movieLikes", JSON.stringify(moviesLikes.moviesLikes));
  }, [moviesLikes]);

  useEffect(() => {
    moviesLikes.moviesLikes.map((movie) => {
      console.log(movie.id);
      console.log(popularMovies.id);
      if (movie.id === popularMovies.id) {
        setIsLike(true);
      }
    });
  }, [moviesLikes, popularMovies]);

  if (!popup.openModal) return null;

  return (
    <>
      <div
        id="container"
        onClick={handleOnClose}
        className="fixed mt-3 md:mt-0 top-0 left-0 right-0 inset-0 z-10 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="bg-gradient-to-r from-gray-800 to-purple-950 p-2 rounded-lg h-auto md:h-max w-[95%] flex justify-center items-center text-white relative py-5 md:py-32">
          <img
            src={
              isMobile
                ? `${ENDPOINT.MOVIE_IMG}${
                    popularMovies.belongs_to_collection
                      ? popularMovies.belongs_to_collection.backdrop_path
                      : popularMovies.backdrop_path
                  }`
                : `${ENDPOINT.MOVIE_IMG_POSTER}${
                    popularMovies.belongs_to_collection
                      ? popularMovies.belongs_to_collection.backdrop_path
                      : popularMovies.backdrop_path
                  }`
            }
            className=" w-full h-full object-cover absolute mix-blend-overlay rounded-lg opacity-50"
          />
          <div
            id="close-icon-div"
            onClick={handleOnClose}
            className="absolute top-2 left-2 md:top-5 md:left-5 cursor-pointer"
          >
            <AiOutlineClose id="close-icon" className="" />
          </div>

          <div className="z-40 grid grid-cols-1 md:grid-cols-4 gap-4 md:w-[90%] m-auto">
            <div className=" flex justify-center">
              <img
                src={`${ENDPOINT.MOVIE_IMG}${popularMovies.poster_path}`}
                className=" object-contain rounded-lg"
              />
            </div>

            <div className="md:col-span-3">
              <div className=" p-8 md:p-20">
                <h1 className="w-full text-3xl font-bold text-white uppercase">
                  {popularMovies.title}{" "}
                  <span className=" text-gray-400">({dateArray[0]})</span>
                </h1>
                <h1 className="w-full text-md text-white mb-2">
                  {dateArray[2]}/{dateArray[1]}/{dateArray[0]} -{" "}
                  {popularMovies.genres &&
                    popularMovies.genres.map((g, index) => (
                      <span key={index} className=" mr-1">
                        {g.name} -
                      </span>
                    ))}
                  {popularMovies.runtime}m
                </h1>
                <h1 className="w-full text-md text-white mb-2">
                  {popularMovies.overview}
                </h1>
                <div className=" cursor-pointer" onClick={handleLike}>
                  {isLike ? (
                    <FcLike size={20} />
                  ) : (
                    <FcLikePlaceholder size={20} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePage;

{
  /* <div className=" text-white">
<p>movie paGE</p>
<div onClick={handleLike}>
  {isLike ? <FcLike size={20} /> : <FcLikePlaceholder size={20} />}
</div>
<p>{JSON.stringify(popularMovies)}</p>
{popularMovies && <p>{JSON.stringify(popularMovies)}</p>}
</div> */
}
