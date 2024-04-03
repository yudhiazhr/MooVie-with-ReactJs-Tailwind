import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number);
};

export const DetailMovies = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_REACT_APP_APIKEY}`
      );
      const json = await res.json();
      setMovie(json);
      console.log(json);
    }
    fetchMovie();
  }, [params.id]);
  

  return (
    <>
      <section>
        <div className="container">
          <div className="pt-24 pb-12 flex flex-wrap md:flex-nowrap gap-16">
            <div className="max-w-sm">
              <img
                src={import.meta.env.VITE_REACT_APP_BASEIMGURL + movie.poster_path}
                className=" rounded-lg"
              />
            </div>
            <div className="text-left">
                <h1 className="text-light font-bold text-[36px] mb-6">
                  {movie.original_title}
                </h1>
              <p className="text-light text-base text-justify">
                {movie.overview}
              </p>
              {movie.genres ? (
                <p className="my-7 flex flex-wrap gap-2 text-light">
                  {movie.genres.map((genre) => (
                    <span
                      className="mr-2 border border-light rounded-lg p-2"
                      key={genre.id}
                    >
                      {genre.name}
                    </span>
                  ))}
                </p>
              ) : (
                ""
              )}
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Rating star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <p className="ml-2 text-gray-900 dark:text-white">
                  {movie.vote_average}
                </p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <span className="text-gray-900 dark:text-white">
                  {movie.vote_count} reviews
                </span>
              </div>

              <p className="my-4">
                <span className="mr-2 font-bold text-light">Runtime:</span>
                <span className="text-light">{movie.runtime} min.</span>
              </p>

              <p className="my-4">
                <span className="mr-2 font-bold text-light">Budget:</span>
                <span className="text-light">{formatNumber(movie.budget)}</span>
              </p>

              <p className="my-4">
                <span className="mr-2 font-bold text-light">Revenue:</span>
                <span className="text-light">
                  {formatNumber(movie.revenue)}
                </span>
              </p>

              <p className="my-4">
                <span className="mr-2 font-bold text-light">Release Date:</span>
                <span className="text-light">{movie.release_date}</span>
              </p>

              <p className="my-4">
                <span className="mr-2 font-bold text-light">IMDB Code:</span>
                <a
                  className="text-light"
                  href={`https://www.imdb.com/title/${movie.imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {movie.imdb_id}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
