import { useEffect } from "react";
import "../App.css";

function Header() {
  useEffect(() => {
    // Navbar fixed
    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Hamburger menu
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    const handleHamburgerClick = () => {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    };

    hamburger.addEventListener("click", handleHamburgerClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      hamburger.removeEventListener("click", handleHamburgerClick);
    };
  }, []);

  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-xl text-primary block py-6 lg:text-2xl"
              >
                MooVies
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line transition duration-300 ease-in-out  origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out  origin-bottom-left"></span>
              </button>
              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-secondary shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-light py-2 mx-8 flex group-hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-light py-2 mx-8 flex group-hover:text-primary"
                    >
                      Movie
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-light py-2 mx-8 flex group-hover:text-primary"
                    >
                      Tv Series
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-light py-2 mx-8 flex group-hover:text-primary"
                    >
                      Genres
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
