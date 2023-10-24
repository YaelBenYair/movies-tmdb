import { useNavigate } from "react-router-dom";
import { ENDPOINT } from "../../urls";
import { useDispatch } from "react-redux";
import { openModalAction, setMovieId } from "../../redux/moviesPopupSlice";

const MovieCard = ({ movie }) => {
  const dateArray = movie.release_date.split("-");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(openModalAction(true));
        dispatch(setMovieId(movie.id));
        // navigate(`/${movie.id}`);
      }}
      className=" w-[250px] max-w-[100%] rounded-lg m-5 flex flex-col cursor-pointer hover:opacity-80"
    >
      <img
        src={`${ENDPOINT.MOVIE_IMG}${movie.poster_path}`}
        alt="poster"
        className=" w-full self-center rounded-md h-[350px] object-cover"
      />
      <div>
        <h3 className=" my-1 text-xl">
          <span className=" mr-2 text-yellow-400">&#9733;</span>
          {movie.vote_average}
        </h3>
        <h3 className=" my-1 text-xl font-bold">
          {movie.title}{" "}
          <span className=" my-1 text-xl text-gray-300"> - {dateArray[0]}</span>
        </h3>
        {/* <h3 className=" my-1 text-xl text-gray-300">{dateArray[0]}</h3> */}
      </div>
    </div>
  );
};

export default MovieCard;
