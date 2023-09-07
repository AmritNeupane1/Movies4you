import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Movies4you</p>
        <p>Made by Amrit Neupane <i class="far fa-heart"></i></p>
        <div className="social-icons">
          <a href="#" target="_blank" className="icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank" className="icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" className="icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/AmritNeupane1" target="_blank" className="icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/amrit-neupane-4788b720b/" target="_blank" className="icon">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
