import MovieCard from "../MovieCard/MovieCard";

const MoviesList = ({ movies }) => {
  const moviesList = movies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });

  return <div className=" flex flex-wrap justify-evenly">{moviesList}</div>;
};

export default MoviesList;

// grid grid-cols-2 md:grid-cols-5 gap-5  <MovieCard key={movie.id} movie={movie} />
