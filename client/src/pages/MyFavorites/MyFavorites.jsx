import { useSelector } from "react-redux";
import MoviesList from "../../component/MoviesList/MoviesList";
import MoviePage from "../MoviePage/MoviePage";

const MyFavorites = () => {
  const moviesLikes = useSelector((state) => state.likes);
  const popup = useSelector((state) => state.popup);
  return (
    <>
      <div className=" text-white">
        {moviesLikes.moviesLikes && (
          <MoviesList movies={moviesLikes.moviesLikes} />
        )}
        {popup.openModal && <MoviePage />}
      </div>
    </>
  );
};

export default MyFavorites;
