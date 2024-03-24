import React from "react";
import { FaRegCopyright } from "react-icons/fa";

function getCurrentYear() {
  return new Date().getFullYear();
}


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">E Khaja</div>
          <div className="right">
            <p>32900, Butwal</p>
            <p>Open: 10:00 AM - 10:00 PM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By SHOOMAN</p>
          </div>
          <div className="right">
            <p> <span><FaRegCopyright /></span> {getFullYear()}All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;