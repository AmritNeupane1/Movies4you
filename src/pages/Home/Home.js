import React, { useEffect, useState } from "react"
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";


const Home = () => {

    const [ now_playing, setnow_playing ] = useState([])
    const popular="popular";
    const top_rated="top_rated";
    const upcoming="upcoming";
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(data => setnow_playing(data.results))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        now_playing.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        <span>{movie ? movie.release_date : ""}</span>
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <span className="icon special-icon">
                                            <i className="material-icons">star</i>{" "}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList type={popular}/>
                <MovieList type={top_rated}/>
                <MovieList type={upcoming}/>
            </div>
        </>
    )
}

export default Home