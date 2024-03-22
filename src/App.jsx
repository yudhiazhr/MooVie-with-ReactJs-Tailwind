import "./App.css";
import { GenreMovieList } from "./components/GenreMovieList.jsx";
import Header from "./components/Header.jsx";
import ProductionHouse from "./components/ProductionHouse.jsx";
import { Slider } from "./components/Slider.jsx";



function App() {

  
  return (
    <>
    <Header/>
    
    <Slider/>

    <ProductionHouse/>

    <GenreMovieList/>
    </>
  );
}

export default App;
