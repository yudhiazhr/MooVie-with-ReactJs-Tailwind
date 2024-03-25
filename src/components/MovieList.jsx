import { useEffect } from "react";
import GlobalApi from "../services/GlobalApi";
import { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useRef } from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

// eslint-disable-next-line react/prop-types
const MovieList = ({ genreId }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      /* console.log(resp.data.results) */
      setMovieList(resp.data.results);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <>
      <div className="relative">
        <IoChevronBackOutline
          onClick={() => slideLeft(elementRef.current)}
          className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
           hidden  md:block   absolute md:mt-[110px] lg:mt-[150px]
             `}
        />
        <IoChevronForwardOutline
          onClick={() => slideRight(elementRef.current)}
          className={`text-[50px] text-white hidden  md:block  
           p-2 cursor-pointer z-10 top-0
            absolute right-0 md:mt-[110px] lg:mt-[150px]
            `}
        />

        <div
          ref={elementRef}
          className=" flex gap-6 overflow-x-auto px-4 scrollbar-none scroll-smooth no-scrollbar"
        >
          {movieList.map((item) => (
            <img
              key={item.id}
              src={IMAGE_BASE_URL + item.poster_path}
              className="w-[150px] h-[240px] lg:w-[210px] lg:h-[310px] my-4 rounded-lg 
            hover:border-[3px] border-gray-400 cursor-pointer
            hover:scale-110 transition-all duration-150 ease-in"
            ></img>
          ))}
        </div>

        
      </div>
    </>
  );
};

export default MovieList;
