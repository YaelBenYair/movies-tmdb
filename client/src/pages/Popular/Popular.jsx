import React from "react";
import { ENDPOINT } from "../../urls";
import MovieContainer from "../../component/MoviesContainer/MoviesContainer";

const Popular = () => {
  return (
    <>
      <div className=" text-white">
        <MovieContainer url={ENDPOINT.MIVIE_POPULAR} />
      </div>
    </>
  );
};

export default Popular;
