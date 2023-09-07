import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/header';
import Home from './pages/Home/Home';
import GenreMovies from './components/genreMovies/GenreMovies'
import Movie from './pages/movie/details';
import { useEffect, useState } from 'react';
import GridMoviesList from './components/GridMoviesList/GridMoviesList';
import Footer from './components/Footer/Footer';
function App() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((error) => console.error("Error fetching genres:", error));
  }, []);
  return (
    <div className="App">
    <Router>
      <Header genres={genres}/>
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path="movie/:id" element={<Movie />}></Route>
            <Route path="gridMoviesList/:type" element={<GridMoviesList />}></Route>
            <Route path="/genre/:genreId" element={<GenreMovies genres={genres}/>}></Route>
            <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
        <Footer/>
    </Router>
</div>
  );
}

export default App;
