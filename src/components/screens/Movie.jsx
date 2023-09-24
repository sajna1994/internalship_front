
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Modal from 'react-modal'; // Import the Modal component
// import { Link } from 'react-router-dom';

// Modal.setAppElement('#root'); // Set the root element for accessibility

// const Movie = () => {
//   const [data, setData] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [userrole, setUserRole] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

//   const fetchDataFromApi = () => {
//     axios.get("http://localhost:5000/api/movielist").then((response) => {
//       console.log(response.data);
//       setData(response.data);
//     });
//   };

//   const handleMovieDetailsClick = (movie) => {
//     setSelectedMovie(movie);
//     setIsModalOpen(true); // Open the modal when the button is clicked
//   };

//   useEffect(() => {
//     const storedUserRole = sessionStorage.getItem('userrole');
//     setUserRole(storedUserRole);
//     fetchDataFromApi();
//   }, []);

//   return (
//     <div>
      
//       <div className="container m-3 p-3">
//         <div>
        
//           <div className="movie-container d-flex" style={{border:"solid white"}}>

//             {data.map((value, index) => (
//               <div key={index} className="movie-card  p-4  text-center  " style={{color:"rgb(167, 165, 165)", marginBottom:"10px" }} >
//                 <div className="card m-3 "  style={{ width:"30vh",background:"rgba(255,255,255,0)",objectFit: "contain !important"}}>
//                   <img  src={value.image} alt={value.moviename} />
//                 </div>
//                 <div className='grid mt-5' >
//                   <h2 className=' text-uppercase text-danger'>{value.moviename}</h2>
               
//                 <div>
//                   <h5>Category: {value.category}</h5>
//                 </div>
//                 <div>
//                   <h5>Language: {value.language}</h5>
//                 </div>
//                 <div>
//                   <button className='bg-success text-white' onClick={() => handleMovieDetailsClick(value)}>
//                     Movie Details
//                   </button>
//                 </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
      
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={() => setIsModalOpen(false)} // Close the modal
//         style={{
//           content: {
//             width: '40%',
//             height: '89%',
//             display: 'flex',
//             flexDirection: "column",
//             alignItems: "center",
//             background: "rgb(64, 75, 67)",
//             color: "white",
//             marginLeft: "30%"
//           }
//         }}


//       >

//         {selectedMovie && (
//           <div>
//             <h1 className='text-danger text-uppercase text-center'>{selectedMovie.moviename}</h1>
//             <img src={selectedMovie.image} alt={selectedMovie.moviename} style={{ maxWidth: '50vh',maxHeight:"50vh" }} />
//            <div style={{color:"rgb(167, 165, 165)"}}>
//             <div className='text-yellow'>RS: {selectedMovie.ticket_rates}</div>
//             <p>Description: {selectedMovie.description}</p>
//             <p>Cast: {selectedMovie.cast_details}</p>
//             <p>Review: {selectedMovie.review}</p>
//             </div>
//             {/* Add more details here */}
//           </div>
//         )}
//         <button style={{ background: "hsl(156, 96%, 28%)", color: " white" }}><Link to="/booking" style={{ textDecoration: "none", color: "white" }}>Book Ticket</Link></button>
//         <button style={{ background: "red", color: " white", marginTop: "20px" }} onClick={() => setIsModalOpen(false)}>Close</button>
//       </Modal>
//     </div>
//   );
// };

// export default Movie;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal'; // Import the Modal component
import { Link } from 'react-router-dom';

Modal.setAppElement('#root'); // Set the root element for accessibility

const Movie = () => {
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [userrole, setUserRole] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  const fetchDataFromApi = () => {
    axios.get("http://localhost:5000/api/movielist").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  const handleMovieDetailsClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true); // Open the modal when the button is clicked
  };

  useEffect(() => {
    const storedUserRole = sessionStorage.getItem('userrole');
    setUserRole(storedUserRole);
    fetchDataFromApi();
  }, []);

  return (
    <div>
      <div className="container mt-3 mb-3" >
        <div className="row">
          {data.map((value, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="movie-card card p-4 text-center" style={{background:"rgba(255,255,255,0)", color: "rgb(167, 165, 165)", marginBottom: "10px" }}>
                <div className="card-body">
                  <img src={value.image} alt={value.moviename} className="card-img-top" style={{ width: "100%", height: "60vh", objectFit: "cover",cursor: "pointer" }} />
                  <h2 className="card-title text-uppercase text-danger mt-3">{value.moviename}</h2>
                  <div>
                    <h5>Category: {value.category}</h5>
                  </div>
                  <div>
                    <h5>Language: {value.language}</h5>
                  </div>
                  <button className="btn bg-success text-white" onClick={() => handleMovieDetailsClick(value)}>
                    Movie Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)} // Close the modal
        style={{
          content: {
            width: '55%', // Adjust the width for smaller screens
            height: 'auto', // Allow height to adjust dynamically
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            background: "black",
            color: "white",
            marginLeft: "22%", // Center the modal horizontally
          }
        }}
      >
        {selectedMovie && (
          <div>
            <h1 className='text-danger text-uppercase text-center'>{selectedMovie.moviename}</h1>
            <img src={selectedMovie.image} alt={selectedMovie.moviename} style={{ width: '100%', maxWidth: '50vh', maxHeight: "50vh", objectFit: "cover" }} />
            <div style={{ color: "rgb(167, 165, 165)" }}>
              <div className='text-yellow'>RS: {selectedMovie.ticket_rates}</div>
              <p>Description: {selectedMovie.description}</p>
              <p>Cast: {selectedMovie.cast_details}</p>
              <p>Review: {selectedMovie.review}</p>
            </div>
          </div>
        )}
        <button style={{ background: "hsl(156, 96%, 28%)", color: " white" }}><Link to="/booking" style={{ textDecoration: "none", color: "white" }}>Book Ticket</Link></button>
        <button style={{ background: "red", color: " white", marginTop: "20px" }} onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default Movie;
