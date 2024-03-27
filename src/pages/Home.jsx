import { GenreMovieList } from "./GenreMovieList.jsx";
import ProductionHouse from "../components/ProductionHouse.jsx";
import { Slider } from "../components/Slider.jsx";

export const Home = () => {
  return (
    <>
      <Slider />

      <ProductionHouse />

      <GenreMovieList />
    </>
  );
};
