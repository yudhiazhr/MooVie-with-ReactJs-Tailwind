import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = '47bfa4a25a050a107732ad42f4920fb6'
//https://api.themoviedb.org/3/trending/all/day?api_key=47bfa4a25a050a107732ad42f4920fb6
const getTrendingVideos=axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`)

export default{
    getTrendingVideos
}