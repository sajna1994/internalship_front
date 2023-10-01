import React, { useState } from 'react';
import axios from 'axios';
import '../screens/Admin.css'; // Import your CSS stylesheet
import { useNavigate } from 'react-router-dom';

const Admin = (props) => {
  const navigate = useNavigate();
  const [userToken] = useState(sessionStorage.getItem('userToken'));
  const [userId] = useState(sessionStorage.getItem('userId'));

  const [formData, setFormData] = useState({
    ...props.data,
    area: props.data?.area || '',
    category: props.data?.category || '',
    date: [], // Store selected dates in an array
    time: [], // Store selected times in an array
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle multi-select by creating an array of selected options
    if (e.target.multiple) {
      const selectedOptions = Array.from(e.target.options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setFormData({ ...formData, [name]: selectedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    let data = {
      userId: userId,
      token: userToken,
      moviename: formData.moviename,
      rating: formData.rating,
      image: formData.image,
      category: formData.category,
      language: formData.language,
      description: formData.description,
      cast_details: formData.cast_details,
      ticket_rates: formData.ticket_rates,
    };


    if (props.method === 'post') {
      axios
        .post('http://localhost:5000/api/addmovie', data)
        .then((response) => {
          if (response.data.message === 'Created Succesfully') {
            alert(response.data.message);
            navigate('/admindash');
          } else {
            alert(response.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (props.method === 'put') {
      axios
        .put('http://localhost:5000/api/movielist/' + formData._id, formData)
        .then((response) => {
          if (response.data.message === 'Updated successfully') {
            alert(response.data.message);
            navigate('/admindash');
          } else {
            alert(response.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="admin-form-container text-white" style={{maxWidth: "700px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",background:"rgba(255, 251, 251, 0.15)",marginTop:"30px" }}>
      <h1 className="form-heading text-white text-uppercase">Add Movie Data</h1>
      <form onSubmit={handleSubmit}>
        {/* ... Other input fields */}
        
        {/* Modified Date Input */}
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
          Rating:
          <input
            type="text"
            name="rating"
            value={formData.rating}
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
          Ticket Rate:
          <input
            type="text"
            name="ticket_rates"
            value={formData.ticket_rates}
            onChange={handleChange}
            className="form-input"
          />
        </label> */}
        {/* Repeat similar label and input elements for other movie attributes */}
        <button type="submit" className="submit-button bg-success">
          {props.method === 'post' ? 'Add Movie' : 'Update Movie'}
        </button>      </form>
    </div>
  );
};

export default Admin;