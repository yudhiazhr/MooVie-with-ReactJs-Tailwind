import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

// eslint-disable-next-line react/prop-types
export const CardMovies = ({ movie }) => {
  const { id } = movie;
  return (
    <>
      <Link to={`/movie/${id}`}>
        <img
          src={IMAGE_BASE_URL + movie.poster_path}
          className="min-w-[150px] h-[240px] lg:min-w-[210px] lg:h-[310px] my-4 rounded-lg 
            hover:border-[3px] border-gray-400 cursor-pointer
            hover:scale-110 transition-all duration-150 ease-in"
        ></img>
          <h1 className="text-[18px] text-light text-left font-bold">
            {movie.title}
          </h1>
      </Link>
    </>
  );
};
