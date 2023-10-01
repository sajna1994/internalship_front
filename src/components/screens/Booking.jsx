import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  useNavigate, useParams } from 'react-router-dom';
import '../screens/Seat.css'
const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [ticketRate] = useState(100); // Set your ticket rate here

  const { movieId, userId } = useParams();
  const [bookingId, setBookingId] = useState(null);
  const [showEmailField, setShowEmailField] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [validationError, setValidationError] = useState(null);
  const [email, setEmail] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [bookingData, setBookingData] = useState({
    userName: null, // or null
    email: null, // or null
    numTickets: 1,
    seatNumbers: [],
    // bookingDate: '',
    // ticketPrice: 100,
    bookingTime: '',
    totalTicketPrice: 0,
  });
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(100);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [alreadyBookedSeats, setAlreadyBookedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  const numRows = 8;
  const seatsPerRow = 10;
  const totalSeats = Array.from({ length: numRows * seatsPerRow }, (_, index) => `A ${index + 1}`);




  useEffect(() => {
    console.log('userId:', userId);
    if (selectedDate) {
      axios
      .get(`http://localhost:5000/api/movielist/${movieId}/${selectedDate}`)
      .then((response) => {
        
        const bookedSeatsData = response.data;
        setBookedSeats(bookedSeatsData);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
    
  }, [movieId, selectedDate]);
  



  const selectDateChange = (e) => {
    e.preventDefault();
    setSelectedDate(e.target.value);
    setTotalPrice(0);
    setSelectedSeats([]);
  };


  
  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }

    calculateTotalPrice(selectedSeats.length + 1);
  };
  const calculateTotalPrice = (numSeats) => {

  const price = numSeats * bookingData.ticketPrice;
    setTotalPrice(price);
  };





  const renderSeatRows = (handleSeatClick) => {
    // Define the number of rows and seats per row

    const seatRows = [];
    for (let row = 0; row < numRows; row++) {
      const rowSeats = totalSeats.slice(row * seatsPerRow, (row + 1) * seatsPerRow);
      seatRows.push(
        <div className="seat-row" key={`row-${row}`}>
          {rowSeats.map((seat) => (
            <button
              key={seat}
              className={`seat ${bookedSeats.includes(seat) ? 'booked' : selectedSeats.includes(seat) ? 'selected' : 'available'}`}
              onClick={(e) => { handleSeatClick(seat) }}
              disabled={bookedSeats.includes(seat)}
              style={{ width: '60px', height: '60px', borderRadius: '3px' }}
            >
              {seat}
            </button>
          ))}
        </div>
      );
    }
    return seatRows;
  };
  //   const seatGrid = [];


  //   for (let row = 1; row <= numRows; row++) {
  //     const seatRow = [];
  //     for (let seatNum = 1; seatNum <= seatsPerRow; seatNum++) {
  //       const seatNumber = `${row}-${seatNum}`;
  //       const isSelected = selectedSeats.includes(seatNumber);
  //       const isBooked = alreadyBookedSeats.includes(seatNumber);
  //       const isAlreadyBooked = isBooked ? 'already-booked' : '';

  //       seatRow.push(
  //         <div
  //           key={seatNumber}
  //           className={`seat ${isSelected ? 'selected' : ''} ${isAlreadyBooked ? 'already-booked' : ''}`}
  //           onClick={handleSeatClick}
  //           data-seatNumber={seatNumber}
  //           disabled={isAlreadyBooked} // Disable the seat if it's already booked

  //         >
  //           {seatNumber}
  //         </div>
  //       );
  //     }
  //     seatGrid.push(
  //       <div key={row} className="seat-row">
  //         {seatRow}
  //       </div>
  //     );
  //   }

  //   return seatGrid;
  // };




  const submitBooking = () => {
    console.log('Selected seats:', selectedSeats);
    console.log('Number of tickets:', bookingData.numTickets);





    // alert('Booking created successfully.');
    // const nextUrl = `/detail/${bookingData._id}`;
    setShowEmailField(true)


  }

  const navigateToDetails = (e) => {
    e.preventDefault();
    if (!email) {
      setValidationError('Please enter a mobile number or email.');
      return;
    }

    const newBooking = {
      userId: userId,
      movieId: movieId,
      bookingDate: bookingData.date,
      seatNumbers: selectedSeats,
      numTickets: bookingData.numTickets,
      totalTicketPrice: totalPrice, // Use the calculated total price
      email: email,
      ticketPrice: bookingData.ticketPrice,
      movieName: bookingData.movieName,

      bookingTime: bookingData.time,
    };

    axios
      .post('http://localhost:5000/api/booking', newBooking)
      .then((response) => {
        if (response.status === 201) {

          axios
            .post('http://localhost:5000/api/sendconfirmationemail', {
              email: email, // Use the email address entered by the user
              message: 'Thank you for your booking!', // Customize your confirmation message
            })
            .then(() => {
              alert('Booking successful! Confirmation email sent.');
              const confirmBookingId = response.data.booking._id;
              setBookingId(confirmBookingId);
              navigate(`/detail/${bookingData._id}`)
            })
            .catch((error) => {
              alert('Booking successful, but confirmation email could not be sent.');
              console.error('Error sending confirmation email:', error);
            });
        } else {
          alert('Booking failed: ' + response.data.message);
        }
        setShowConfirmation(false);
      })
  }
  const handleConfirmBooking = () => {
    setShowConfirmation(true);
  };

  const handleCancelBooking = () => {
    setShowConfirmation(false);
  };
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  return (
    <div>
      <div className="container w-50 mt-2">
        <div className="card-header bg-transparent text-success text-center" style={{ height: "80px", padding: "20px", fontSize: "40px", fontWeight: "bold", textShadow: "2px 2px 4px #000000", letterSpacing: "2px" }}>Book Your Movie Ticket Here.</div>
        <div className="row">
          <div className="col-12 text-center">
            <h1 className='text-danger text-uppercase'> {selectedMovie?.moviename}</h1>
            <h5 style={{ color: "orange" }}>INR: ${ticketRate} per seat</h5>

            <h5 style={{ color: "orange" }}>Show Dates : October 10 2023</h5>
            <h5 style={{ color: "orange" }}> October 12 2023</h5>
            <h5 style={{ color: "orange" }}> October 14 2023</h5>

            <h5 style={{ color: "yellow" }}>Time: 4.00 PM</h5>

          </div>
        </div>


        <div className="row">
          <div className="col-lg-12" style={{ maxHeight: 'auto', maxWidth: "auto", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
            <div className="card" style={{ background: "rgba(255, 251, 251, 0.15)" }}>
              <div className="card-body p-5 text-white">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <label htmlFor="username" className="form-label">Name</label>
                    <input type="text" className="form-control" name="userName" onChange={inputHandler} value={bookingData.userName} required />
                  </div>

                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <label htmlFor="userEmail" className="form-label">Email Id</label>
                    <input type="text" className="form-control" name="userEmail" onChange={inputHandler} value={bookingData.userEmail} required />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <label htmlFor="date" className="form-label"> Date</label>
                    <input type="date" className="form-control" name="date" onChange={(e) => selectDateChange(e)} value={selectedDate} required />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <label htmlFor="time" className="form-label">Time</label>
                    <input type="time" className="form-control" name="time" onChange={inputHandler} value={bookingData.time} required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <label htmlFor="numTickets" className="form-label">
                      Number Of Tickets
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="numTickets"
                      onChange={inputHandler}
                      value={bookingData.numTickets}
                      required />
                  </div>

                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <h5 style={{ color: "orange" }}>Total Ticket Price: {totalPrice}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 text-center text-danger m-4" style={{ maxHeight: 'auto', maxWidth: "auto", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
          <h1>Select Your Seat Here</h1>
          <div className="card col-lg-12" style={{ background: "rgba(255, 251, 251, 0.15)", maxWidth: "auto" }}>
            <div className="booking-content col-lg-12" style={{ display: 'flex', maxWidth: "auto" }}>
              <div className="seat-layout col-lg-12" style={{ maxWidth: "auto" }}>

                {renderSeatRows(handleSeatClick)}
              </div>
            </div>

          </div>
        </div>
        <button type="button" className=' text-white bg-success mt-1' style={{ marginLeft: "550px", marginBottom: "30px", borderRadius: "5px" }} onClick={submitBooking}>

          Confirm Ticket
        </button>
        {/* <Link to={`/detail/${bookingData._id}`} style={{ textDecoration: "none", color: "white" }}>

      Confirm Ticket
      </Link> */}

        {showEmailField && (
          <div className="col-lg-12 text-center">
            <label htmlFor="userEmail" className="form-label">Enter Email:</label>
            <input
              type="email"
              className="form-control"
              name="userEmail"
              onChange={inputHandler}
              value={bookingData.userEmail}
              required
            />
            <button
              type="button"
              className="btn btn-success mt-2"
              onClick={navigateToDetails}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;
