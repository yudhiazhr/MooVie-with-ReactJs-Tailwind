import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <div className="container">
        <Header />
        <section className=" min-h-[66dvh]">
          <Outlet />
        </section>
      </div>
      <Footer/>
    </>
  );
};
