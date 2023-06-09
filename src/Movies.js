import React from 'react'
import Single from './Single';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context'
import Navbar from './Navbar';
import './Movie.css'
const imgUrl = "https://via.placeholder.com/200/200";
const Movies = () => {
  const { movie, isLoading, page, setPage, isMore } = useGlobalContext();

  if (isLoading) {
    return
    <div className="loading">Loading....</div>;
  }
  const clicked = (val, id) => {
    return <>return<Single /></>
  }

  const id = 4;
  return (
    <>
      <section className="movie-page">


        {
          isLoading && <h4>Loading...</h4>
        }
        <div className="movies_wrapper">
          {movie
            ?


            movie.map((curmovie) => {
                const { imdbID, Title, Poster } = curmovie;
                const movieName = Title.substring(0, 15);
                const id = imdbID;
                return (
                  <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className="card" >
                      <div className="card-info">
                        <h2>
                          {movieName.length > 10 ? `${movieName}...` : movieName}
                        </h2>
                        <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" onClick={() => { clicked(movieName, id) }} />
                      </div>
                    </div>
                  </NavLink>
                );
              }
              )
            : ""}
        </div>

        {
          movie && 
          <div className='pagination'>
          <p>Page : {page} </p>
          <button disabled={page === 1 || isLoading} className='prev' onClick={() => setPage((prev) => Math.max(1, prev - 1))}>Prev</button>

          <button disabled={!isMore || isLoading} className='next' onClick={() => setPage((prev) => Math.max(1, prev + 1))}>Next </button>
        </div>
        }
      </section>
    </>
  );
};

export default Movies
