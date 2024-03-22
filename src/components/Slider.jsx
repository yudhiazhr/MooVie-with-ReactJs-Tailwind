import { useEffect, useState } from "react"
import GlobalApi from "../services/GlobalApi.jsx"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { useRef } from "react"

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth

export function Slider() {
  const [movieList, setMovieList] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const elementRef = useRef()

  useEffect(() => {
    getTrendingMovies()

    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % movieList.length
      setCurrentSlide(nextSlide)
      sliderRight(elementRef.current)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide, movieList.length])

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      setMovieList(resp.data.results)
    })
  }

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 44
    if (currentSlide === movieList.length - 1) {
      setTimeout(() => {
        element.scrollLeft = 0
      }, 2000)
    }
  }

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 44
  }

  return (
    <>
      <div>
        <HiChevronLeft
          className="  text-light text-[30px] absolute mx-8 mt-[160px] md:mt-[280px]  cursor-pointer"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight
          className=" text-light text-[30px] absolute mx-16 mt-[160px] md:mt-[280px] cursor-pointer right-0"
          onClick={() => sliderRight(elementRef.current)}
        />

        <div
          className=" pt-14 flex overflow-x-auto w-full mx-auto py-4 scroll-smooth no-scrollbar"
          ref={elementRef}
        >
          {movieList.map((item) => (
            <img
              key={item.id}
              src={IMAGE_BASE_URL + item.backdrop_path}
              className=" min-w-full md:h-[510px] object-cover object-left-top mr-5 rounded-2xl hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
            />
          ))}
        </div>
      </div>
    </>
  )
}
