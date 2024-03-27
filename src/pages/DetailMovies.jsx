import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

export const DetailMovies = () => {
    const params = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        async function fetchMovie () {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=47bfa4a25a050a107732ad42f4920fb6`)
            const json = await res.json()
            setMovie(json)
            console.log(json)
        }
        fetchMovie()
    },[params.id])


    return (
        <>
            <section>
                <div className="container mt-36">
                    <h1 className="text-light">{movie.original_title}</h1>
                </div>
            </section>
        </>
    )
}