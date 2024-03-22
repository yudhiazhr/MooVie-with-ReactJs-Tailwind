import { useEffect } from "react";
import GlobalApi from "../services/GlobalApi";
import { useState } from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"


// eslint-disable-next-line react/prop-types
const MovieList = ({ genreId }) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      /* console.log(resp.data.results) */
      setMovieList(resp.data.results);
    });
  };

  return (
    <>
      <div className="flex gap-6 overflow-x-hidden px-4">
        {movieList.map((item) => (
          <img key={item.id}
          src={IMAGE_BASE_URL+item.poster_path}
            className='w-[210px] h-[310px] my-4 rounded-lg 
            hover:border-[3px] border-gray-400 cursor-pointer
            hover:scale-110 transition-all duration-150 ease-in'
          >
          </img>
        ))}
        h2
      </div>
    </>
  );
};

export default MovieList;
