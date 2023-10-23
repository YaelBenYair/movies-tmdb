import { ENDPOINT } from "../../urls";

const MovieCard = ({ movie }) => {
  const dateArray = movie.release_date.split("-");

  return (
    <div
      onClick={() => {
        console.log("clicked");
      }}
      className=" w-[250px] max-w-[100%] rounded-lg m-5 flex flex-col cursor-pointer hover:opacity-80"
    >
      <img
        src={`${ENDPOINT.MOVIE_IMG}${movie.poster_path}`}
        alt="poster"
        className=" w-full self-center rounded-md h-[350px] object-cover"
      />
      <div>
        <h3 className=" my-1 text-xl">{movie.title}</h3>
        <h3 className=" my-1 text-xl">{dateArray[0]}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
