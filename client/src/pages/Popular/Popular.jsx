import { useEffect, useState } from "react";
import SendRequest from "../../functions/SendRequest";
import { ENDPOINT } from "../../urls";
import { message } from "antd";
import MoviesList from "../../component/MoviesList/MoviesList";
import MovieCard from "../../component/MovieCard/MovieCard";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);

  console.log(popularMovies);

  useEffect(() => {
    const PopularMovies = async () => {
      try {
        const popular = await SendRequest("get", ENDPOINT.MIVIE_POPULAR, 1);
        console.log(`request ${popular}`);
        setPopularMovies(popular.data.results);
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

  return (
    <>
      <div className=" text-white">
        {/* {popularMovies.map((popular) => (
          <MovieCard movie={popular} />
        ))} */}
        {popularMovies && <MoviesList movies={popularMovies} />}
      </div>
    </>
  );
};

export default Popular;
