import MovieList from "./MovieList";
import GenresList from "/src/Constant/GenreList.jsx";

export const GenreMovieList = () => {
  return (
    <>
      <div>
        {GenresList.genere.map(
          (item, index) =>
            index <= 1 && (
              <div key={item.id} className="p-12 px-8 md:px-16">
                <h2 className="flex mb-4 text-[20px] text-light font-bold">
                  {item.name}
                </h2>
                <MovieList genreId={item.id}/>
              </div>
            )
        )}
      </div>
    </>
  );
};
