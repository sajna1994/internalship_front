import React from 'react';

const SelectedSeats = ({ selectedSeats }) => {
  return (
    <div className="selected-seats">
      <h3>Selected Seats:</h3>
      <p>{selectedSeats.join(', ')}</p>
    </div>
  );
};

export default SelectedSeats;
