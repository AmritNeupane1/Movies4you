import React, { useEffect, useRef, useState } from "react";
import "./movieList.css";

import Cards from "../card/card";

const MovieList = ({type}) => {
  const [movieList, setMovieList] = useState([]);
  const [scrollX, setScrollX] = useState(0);
  const sliderRef = useRef(null);

  const handleScroll = (amount) => {
    const newScrollX = scrollX + amount;

    // Get the total width of the slider content
    const contentWidth = sliderRef.current.scrollWidth;

    // Get the width of the slider's viewport
    const viewportWidth = sliderRef.current.clientWidth;

    // Check if scrolling to the right is possible
    const canScrollRight = newScrollX + viewportWidth < contentWidth;

    if (canScrollRight) {
      setScrollX(newScrollX >= 0 ? newScrollX : 0);
    }
  };

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="slider">
        <button onClick={() => handleScroll(-400)} className="arrows prev">
        <i className="material-icons">arrow_back_ios</i>
        </button>
        <div className="list__cards-container">
          <div
            className="list__cards"
            style={{ transform: `translateX(-${scrollX}px)` }}
            ref={sliderRef}
          >
            {movieList.map((movie) => (
              <Cards movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
        <button onClick={() => handleScroll(400)} className="arrows next">
        <i className="material-icons">arrow_forward_ios</i>
        </button>
      </div>
    </div>
  );
};

export default MovieList;
