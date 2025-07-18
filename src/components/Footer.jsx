import React, { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full z-30 px-2 md:px-0 bg-titusDarkBG text-[#fff] py-10 md:py-16 border-t-[1px] border-t-[#ffffff1f]">
      <div className="text-sm text-center mt-8 text-[#ffffff87]">
        © 2025 {import.meta.env.VITE_APP_NAME}. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
