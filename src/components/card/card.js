import React, { useEffect, useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import CardSkeleton from "../CardSkeleton/CardSkeleton";

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <CardSkeleton /> // Show the skeleton loader while loading
      ) : (
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
          <div className="cards">
            <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt="" />
            <div className="cards__overlay">
              <div className="card__title">{movie ? movie.original_title : ""}</div>
              <div className="card__runtime">
                {movie ? movie.release_date : ""}
                <span className="card__rating">
                  {movie ? movie.vote_average : ""}
                  <span className="icon"><i className="material-icons">star</i>{" "}</span>
                </span>
              </div>
              <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
            </div>
          </div>
        </Link>
        )
        }
    </>
  );
};

export default Cards;
