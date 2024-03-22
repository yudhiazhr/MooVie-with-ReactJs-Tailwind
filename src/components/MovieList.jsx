import { useEffect } from "react";
import GlobalApi from "../services/GlobalApi";
import { useState } from "react";
import MovieCard from "./MovieCard";

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
      <div className="flex ">
        {movieList.map((item) => (
          <div key={item.id}>
            <MovieCard movie={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
