import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import html2canvas from 'html2canvas';

import axios from 'axios';


function Detail() {
  const [bookingData, setBookingData] = useState({});

  const [booking, setBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
  const { bookingId } = useParams();
  console.log(bookingId)


//   useEffect(() => {
//     // Fetch booking details based on the booking ID from the URL
  
//     axios
//       .get(`http://localhost:5000/api/bookingdetails/${bookingId}`)
//       .then((response) => {
//         console.log(response.data.bookingDetails)
//         setBooking(response.data.bookingDetails);
//         console.log('booking',booking)
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setIsLoading(false);
//       });
//   }, [bookingId]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!booking) {
//     return <div>Booking not found</div>;
//   }


//   const handleDownloadTicket = () => {
//    // Show the content with download button
//     const ticketContainer = document.querySelector("#ticket");
    
//     html2canvas(ticketContainer).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");

//       const a = document.createElement("a");
//       a.href = imgData;
//       a.download = "ticket.png";
//       a.click();
//     });
//   };
  
  return (
    <div>
    {/* Conditionally render the content */}

{/* //       <div id="ticket">
       
//           <h2>Booking Details</h2>
//           <ul style={{ listStyleType: 'none', padding: 0 }}>
//             <li>Booking ID: {booking.movieId}</li>
//             <li>Movie Name: {booking.movieName}</li>
//             <li>Date: {new Date(booking.date).toDateString()}</li>
//             <li>Seats: {booking.seatNumbers.join(', ')}</li>
//             <li>Ticket Price: INR {booking.ticketPrice}</li>
//             <li>Total Price: INR {booking.totalPrice}</li>
//           </ul>
       
//       </div>
   
//       <button onClick={handleDownloadTicket}>Download Ticket</button> */}

  </div>
  );
}

export default Detail;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const Detail = () => {
//   const { bookingId } = useParams();
//   const [bookingDetails, setBookingDetails] = useState(null);

//   useEffect(() => {
//     if (bookingId) {
//       axios.get(`http://localhost:5000/api/bookingdetails/${bookingId}`)
//         .then((response) => {
//           setBookingDetails(response.data.bookingDetails);
//         })
//         .catch((error) => {
//           console.error('Error fetching booking details:', error);
//         });
//     }
//   }, [bookingId]);

//   if (!bookingId) {
//     // Handle the case when bookingId is not defined
//     return <div>No booking ID provided.</div>;
//   }

//   if (!bookingDetails) {
//     // Handle the case when booking details are still loading or not found
//     return <div>Loading...</div>;
//   }

//   // Render your component with the booking details
//   return (
//     <div>
//       <h2>Booking Details</h2>
//       {/* Render booking details here */}
//     </div>
//   );
// };

// export default Detail;

