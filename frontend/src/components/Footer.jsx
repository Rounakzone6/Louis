import React, { useEffect, useState } from "react";
import { india } from "../assets";
import AccordionSection from "./Accordion/AccordionSection";
import FollowUs from "./FollowUs";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const handleShow = () => {
    setShouldRender((prev) => !prev);
    setTimeout(() => setVisible(true), 10);
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setShouldRender(false), 500);
  };

  return (
    <div>
      <hr className="border-t border-gray-300 mt-4" />
      <div className="max-w-[90%] my-4 text-gray-600 mx-auto">
        <div className="block md:hidden">
          <p className="text-center text-2xl font-medium py-2">LOUIS VUITTON</p>
          <AccordionSection handleShow={handleShow} />
        </div>
        <div className="hidden md:flex justify-between">
          <ul className="px-4 max-w-[24vw] flex flex-col gap-2">
            <li className="font-light mb-2">HELP</li>
            <li>
              A Client Advisor is available at{" "}
              <span className="underline cursor-pointer">1800 103 9988</span>.
              You can also{" "}
              <span className="underline cursor-pointer">chat</span> or
              <span className="underline cursor-pointer">email us</span>.
            </li>
            <li>FAQ</li>
            <li>Product Care</li>
            <li>Stores</li>
          </ul>
          <ul className="px-4 flex flex-col gap-2">
            <li className="font-light mb-2">SERVICES</li>
            <li>Repairs</li>
            <li>Personalisation</li>
            <li>Art of Gifting</li>
            <li>Download our Apps</li>
          </ul>
          <ul className="px-4 flex flex-col gap-2">
            <li className="font-light mb-2">About Louis Vuitton</li>
            <li>Fashion Shows</li>
            <li>Arts & Culture</li>
            <li>La Maison</li>
            <li>Sustainability</li>
            <li>Latest News</li>
            <li>Careers</li>
            <li>Foundation Louis Vuitton</li>
          </ul>
          <ul className="px-4 max-w-[30vw] flex flex-col gap-2">
            <li className="font-light mb-2">Connect</li>
            <li>
              <span className="underline cursor-pointer">Sign up</span> for
              Louis Vuitton emails and receive the latest news from the Maison,
              including exclusive online pre-launches and new collections.
            </li>
            <li className="cursor-pointer hover:underline" onClick={handleShow}>
              Follow Us
            </li>
          </ul>
        </div>
      </div>
      {shouldRender && <FollowUs visible={visible} onClose={handleClose} />}
      <hr className="border-t border-gray-300 my-4" />
      <div className="flex flex-col max-w-[90%] mx-auto justify-between">
        <div className="flex gap-2 items-center">
          <img className="w-4 h-4 object-cover" src={india} alt="India" />
          <p className="underline cursor-pointer">India</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-baseline justify-between">
          <div className="text-gray-500 md:max-w-[30vw] text-xs md:text-sm">
            <p className="font-bold py-2 md:py-4 text-gray-600">
              Full Name and Address of the Manufacturer
            </p>
            <p className="md:pr-60">
              Louis Vuitton Malletier SAS 2 Rue du Pont Neuf 75034 Paris CEDEX
              01 FRANCE
            </p>
            <p>
              Please refer to the product label for specific country of origin
              for each product.
            </p>
          </div>
          <div className="text-gray-500 md:max-w-[30vw] text-xs md:text-sm">
            <p className="font-bold py-2 md:py-4 text-gray-600">
              Full Name and Address of the Importer
            </p>
            <p className="md:pr-48">
              Louis Vuitton India Retail Private Limited 901A Ninth Floor, Time
              Tower, MG Road Gurgaon, Haryana - 122002 INDIA
            </p>
          </div>
          <div className="flex text-xs md:text-sm gap-6">
            <p>Sitemap</p>
            <p>Legal & Privacy</p>
          </div>
        </div>
      </div>
      <p className="text-center text-2xl font-medium py-6">LOUIS VUITTON</p>
    </div>
  );
};

export default Footer;
