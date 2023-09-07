import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

const Header = ({ genres }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  const handleHover = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
        <img
        className="header__logo-image"
        src="https://yt3.googleusercontent.com/qnCt2qqpfw5LSGDzcsPr_MMQTxKHhnDpVQFBr3fH65Jg0O8Y9Gh7nyhFprWOMapSmKxTr5t9GQ=s900-c-k-c0x00ffffff-no-rj"
        alt="Your Logo"
      />
        </Link>

        <Link to="/gridMoviesList/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/gridMoviesList/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <div
      className="movie-container"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <span >Catogary</span>
      {isHovering && (
        <div className="genre-list">
          <h3>Genres:</h3>
          <div className="flex-container">
            {genres.map((genre) => (
              <Link
              key={genre.id}
              className="flex-item"
              to={`/genre/${genre.id}`} // Generate URL with the genre name
            >
              {genre.name}
            </Link>
            ))}
          </div>
        </div>
      )}
    </div>
      </div>
      <div className="headerLeft-mobile">
        
        <Menu isOpen={isMenuOpen} onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)} customBurgerIcon={ <img src="https://cdn-icons-png.flaticon.com/512/660/660376.png" alt=""/> }>
        <Link to="/gridMoviesList/popular" style={{ textDecoration: "none" }} onClick={handleMenuClose}>
          <span>Popular</span>
        </Link>
        <Link to="/gridMoviesList/top_rated" style={{ textDecoration: "none" }} onClick={handleMenuClose} >
          <span>Top Rated</span>
        </Link>
        <div
      className="movie-container"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <span >Catogary</span>
      {isHovering && (
        <div className="genre-list">
          <h3>Genres:</h3>
          <div className="flex-container">
            {genres.map((genre) => (
              <Link
              key={genre.id}
              className="flex-item"
              to={`/genre/${genre.id}`} // Generate URL with the genre name
              onClick={handleMenuClose}
            >
              {genre.name}
            </Link>
            
            ))}
          </div>
        </div>
      )}
    </div>
    </Menu>
    <Link to="/">
          <img
            className="header__icon"
            src="https://yt3.googleusercontent.com/qnCt2qqpfw5LSGDzcsPr_MMQTxKHhnDpVQFBr3fH65Jg0O8Y9Gh7nyhFprWOMapSmKxTr5t9GQ=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </Link>
      </div>
      <div className="headerRight ">
      <i className="material-icons">account_circle</i>

      </div>
    </div>
  );
};

export default Header;
