import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = '47bfa4a25a050a107732ad42f4920fb6'
const genreMovieBaseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=b80d59c33d6d57ed9c7e3713f91c188a"

const getTrendingVideos=axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`)

const getMovieByGenreId =(id) => axios.get(genreMovieBaseUrl+"&with_genres="+id)

const searchMovie = async (q) => {
  const search = await axios.get(
    `${movieBaseUrl}/search/movie?query=${q}&page=1&&api_key=${api_key}`
  );
  return search.data;
};

export default {
    getTrendingVideos, getMovieByGenreId, searchMovie
}