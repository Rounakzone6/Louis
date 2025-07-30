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

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm transition-transform duration-300">
      <div className="max-w-screen-xl w-full mx-auto px-4">
        <div className="flex items-center justify-between pt-4 pb-6">
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
    </div>
  );
};

export default Navbar;
