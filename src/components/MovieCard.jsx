/* eslint-disable react/prop-types */

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

// eslint-disable-next-line react/prop-types
const MovieCard = ({movie}) => {
    return (
        <>
            <img src={IMAGE_BASE_URL+movie.poster_path}
            className='w-[210px] h-[210px] my-8 rounded-lg
            hover:border-[3px] border-gray-400 cursor-pointer
            hover:scale-110 transition-all duration-150 ease-in'/>
           
        </>
    )
}   

export default MovieCard