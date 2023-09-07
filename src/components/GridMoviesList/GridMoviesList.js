import React, { useEffect, useState } from "react";
import "./GridMoviesList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";
import CardSkeleton from "../CardSkeleton/CardSkeleton";

const GridMoviesList = () => {
    const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const { type} = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  useEffect(() => {
    // Fetch data based on the new genreId
    fetchPopularMovies(currentPage);
  }, [type, currentPage]);
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
    setIsLoading(true);
    window.scrollTo(0, 0);
    fetchPopularMovies(newPage);
  };

  const fetchPopularMovies = (page) => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
        setTotalPages(data.total_pages);
      })
      .catch((error) => console.error("Error fetching genre movies:", error))
      .finally(() => {
        setIsLoading(false); // Set isLoading to false after data is fetched
      });
  };
  
  return (
    <div>
      <div className="header-genre">
        <h1>{type.toUpperCase()}</h1>
      </div>

      <div className="container">
        {isLoading ? (
          // Show loading indicator or skeleton here
          <CardSkeleton/>
        ) : (
          // Show movies when not loading
          movieList?.map((result) => <Cards movie={result} />)
        )}
      </div>
      <div className="pagination">
        <button className="button-1"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button className="button-1"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GridMoviesList;
