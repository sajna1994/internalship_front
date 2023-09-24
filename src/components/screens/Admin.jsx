import React, { useState } from 'react';
import axios from 'axios';
import '../screens/Admin.css'; // Import your CSS stylesheet

const Admin= () => {
  const [formData, setFormData] = useState({
    moviename: '',
    image: '',
    category: '',
    language: '',
    description: '',
    cast_details: '',
    review: '',
    ticket_rates:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to your server to save the movie data
    axios.post('http://localhost:5000/api/addmovie', formData)
      .then((response) => {
        // Handle success, reset the form, or provide feedback
        console.log('Movie data added successfully:', response.data);
        setFormData({
          moviename: '',
          image: '',
          category: '',
          language: '',
          description: '',
          cast_details: '',
          // review: '',
          ticket_rates:'',
        });
      })
      .catch((error) => {
        // Handle errors
        console.error('Error adding movie data:', error);
      });
  };

  return (
    <div className="admin-form-container">
      <h2 className="form-heading">Add Movie Data</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Movie Name:
          <input
            type="text"
            name="moviename"
            value={formData.moviename}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Image:
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-input"
          />
        </label>
       
        <label className="form-label">
          Ticket Rate:
          <input
            type="text"
            name="ticket_rates"
            value={formData.ticket_rates}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
        Language:
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
        Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
        Cast details:
          <input
            type="text"
            name="cast_details"
            value={formData.cast_details}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        {/* <label className="form-label">
        Review:
          <input
            type="text"
            name="review"
            value={formData.review}
            onChange={handleChange}
            className="form-input"
          />
        </label> */}
        {/* Repeat similar label and input elements for other movie attributes */}
        <button type="submit" className="submit-button">Add Movie</button>
      </form>
    </div>
  );
};

export default Admin;