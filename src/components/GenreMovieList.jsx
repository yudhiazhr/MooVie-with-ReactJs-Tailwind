import MovieList from "./MovieList";
import GenresList from "/src/Constant/GenreList.jsx";

export const GenreMovieList = () => {
  return (
    <>
      <div className="pb-24">
        {GenresList.genere.map(
          (item, index) =>
            index <= 4 && (
              <div key={item.id} className="pt-12 px-0">
                <h2 className="flex pl-4 md:text-[24px] text-light font-bold">
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
