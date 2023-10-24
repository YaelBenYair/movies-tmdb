const Hero = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-purple-800 w-full h-96 relative">
        <img
          src="https://observer.case.edu/wp-content/uploads/2020/09/Mulan.jpg"
          className=" w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="p-20 pt-44">
          <h1 className="w-full text-3xl font-bold text-white">MOVIE-TMDB.</h1>
          <h1 className="w-full text-lg text-white">
            Many movies in one place, what's your movie?
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
