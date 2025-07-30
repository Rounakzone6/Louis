import {
  faFacebookF,
  faFoursquare,
  faInstagram,
  faSnapchat,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FollowUs = ({ visible, onClose }) => {
  return (
    <div
      className={`
        max-w-[90%] mx-auto p-4 mt-4 rounded-xl bg-white shadow-md transition-all duration-500 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
      `}
    >
      <div className="flex justify-between items-center mb-4">
        <div></div> 
        <p className="text-lg font-semibold">Follow Us</p>
        <FontAwesomeIcon
          onClick={onClose}
          icon={faX}
          className="cursor-pointer text-gray-600 hover:text-black"
          aria-label="Close follow us section"
        />
      </div>

      <div className="flex gap-4 justify-center text-2xl items-center text-gray-700">
        <FontAwesomeIcon className="cursor-pointer hover:text-pink-500" icon={faInstagram} />
        <FontAwesomeIcon className="cursor-pointer hover:text-blue-600" icon={faFacebookF} />
        <FontAwesomeIcon className="cursor-pointer hover:text-black" icon={faXTwitter} />
        <FontAwesomeIcon className="cursor-pointer hover:text-red-600" icon={faYoutube} />
        <FontAwesomeIcon className="cursor-pointer hover:text-yellow-500" icon={faSnapchat} />
        <FontAwesomeIcon className="cursor-pointer hover:text-purple-600" icon={faFoursquare} />
      </div>
    </div>
  );
};

export default FollowUs;
