import React from "react";
import { ENDPOINT } from "../../urls";
import MovieContainer from "../../component/MoviesContainer/MoviesContainer";

const NowPlaying = () => {
  return (
    <>
      <div className=" text-white">
        <MovieContainer url={ENDPOINT.MIVIE_NOW_PLAYING} />
      </div>
    </>
  );
};

export default NowPlaying;
