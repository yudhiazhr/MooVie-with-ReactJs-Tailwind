import { Layout } from "../components/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { DetailMovies } from "../pages/DetailMovies";

export const MainRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path ="/" element ={<Layout/>}>
                        <Route index element={<Home/>} title="home"/>
                        <Route path="home" element={<Home />} />
                        <Route path="detail-movies" element={<DetailMovies />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}