// import React, { useState } from 'react';


// const MovieDashboard = () => {
//   // Sample movie data (you would typically fetch this from an API)
//   const movies = [
//     {
//       id: 1,
//       name: 'Movie 1',
//       category: 'UA',
//       language: 'English',
//       description: 'Description for Movie 1',
//       cast: 'Cast for Movie 1',
//       reviews: 'Reviews for Movie 1',
//       poster: 'movie1.jpg',
//     },
//     // Add more movie objects as needed
//   ];

//   // State to track the selected movie
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   // Function to handle the "Movie Details" button click
//   const handleMovieDetailsClick = (movieId) => {
//     const selected = movies.find((movie) => movie.id === movieId);
//     setSelectedMovie(selected);
//   };

//   return (
//     <div>
//       <h1>Movie Booking Dashboard</h1>
//       <div className="movie-list">
//         {movies.map((movie) => (
//           <div key={movie.id} className="movie-card">
//             <img src={movie.poster} alt={movie.name} />
//             <h2>{movie.name}</h2>
//             <p>Category: {movie.category}</p>
//             <p>Language: {movie.language}</p>
//             <button onClick={() => handleMovieDetailsClick(movie.id)}>
//               Movie Details
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Movie Details Popup */}
//       {selectedMovie && (
//         <div className="movie-details-popup">
//           <div className="popup-content">
//             <img src={selectedMovie.poster} alt={selectedMovie.name} />
//             <h2>{selectedMovie.name}</h2>
//             <p>Description: {selectedMovie.description}</p>
//             <p>Cast: {selectedMovie.cast}</p>
//             <p>Reviews: {selectedMovie.reviews}</p>
//             <button onClick={() => setSelectedMovie(null)}>Close</button>
//             <button>Book Ticket</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieDashboard;
import React from 'react'
// import "../screens/Sticker.css"
const Sticker = () => {
  return (
    
    <div className="sticker">
        <span className="text">New</span>
    </div>
   
  )
}

export default Sticker