import {
  faBars,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`sticky top-0 z-50 bg-white shadow-sm transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between pt-4 pb-6 md:max-w-[90%] mx-auto px-4">
        {/* Left */}
        <div className="flex gap-4 items-center text-sm">
          <p className="cursor-pointer flex items-center gap-1">
            <FontAwesomeIcon icon={faBars} /> Menu
          </p>
          {!isSmallScreen && (
            <p className="cursor-pointer flex items-center gap-1">
              <FontAwesomeIcon icon={faSearch} /> Search
            </p>
          )}
        </div>

        {/* Center */}
        <p className="md:text-3xl text-xl font-medium text-center">
          LOUIS VUITTON
        </p>

        {/* Right */}
        <div className="flex gap-4 items-center text-sm">
          {!isSmallScreen && <p className="cursor-pointer">Call Us</p>}
          {!isSmallScreen && (
            <FontAwesomeIcon icon={faHeart} className="cursor-pointer" />
          )}
          <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
