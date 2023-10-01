
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

const navigate = useNavigate();
  const inputHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};


 // Validation for username (example: required field)
 if (!inputs.username) {
  newErrors.username = 'Username is required';
  isValid = false;
}

  // Validation for email (example: valid email format)
  if (!inputs.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
    newErrors.email = 'Enter a valid email address';
    isValid = false;
  }

  if (!inputs.location) {
    newErrors.location = 'location is required';
    isValid = false;
  }

 // Validation for password (example: required field)
 if (!inputs.password || inputs.password.length < 4) {
  newErrors.password = 'Password is required and must be at least 4 characters';
  isValid = false;
}

 // Validate password
//  if (!inputs.password) {
//   newErrors.password = 'Password is required';
// } else if (inputs.password.length < 4) {
//   newErrors.password = 'Password must be at least 4 characters long';
// }


setErrors(newErrors);
return isValid;
};






  const submitHandler = () => {
    if (validateForm()) {

    const dataToSend = {
      ...inputs,
      role: 'user', // Replace 'user' with the desired userrole value
    };

    axios.post("http://localhost:5000/api/user", dataToSend)
      .then((response) => {
        console.log('response')
        console.log(response.data.message)
        if (response.data.message === "Registered Successfully") {
          alert(response.data.message);
          navigate('/login');
        }
        else {
            alert('Please try once again');   
        }
      })
      .catch(err => console.log(err));
    }
  };
  return (
    <div>

    <div className="container w-50 mt-5">
    <div className="card-header bg-transparent text-success text-center" style={{ padding: "20px", fontSize: "40px", fontWeight: "bold",marginBottom:"20px",textShadow:"2px 2px 4px #000000",letterSpacing:"2px" }}>Start Your Movie Journey With Us</div>

    <div className="row">
      <div className="col-lg-12"  style={{ maxWidth: "700px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
        <div className="card " style={{ background:"rgba(255, 251, 251, 0.15)"}}>
          <div className="card-body p-5 text-white" >
            <div className="row g-3">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" name="username" onChange={inputHandler} />
                {errors.username && <p className="text-danger">{errors.username}</p>}

              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="email" className="form-label">Email Id</label>
                <input type="text" className="form-control" name="email" onChange={inputHandler} />
                {errors.email && <p className="text-danger">{errors.email}</p>}

              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="location" className="form-label">Location</label>
                <input type="text" className="form-control" name="location" onChange={inputHandler} />
                {errors.location && <p className="text-danger">{errors.location}</p>}

              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" onChange={inputHandler} />
                {errors.password && <p className="text-danger">{errors.password}</p>}

              </div>
            </div>
            <button className="btn btn-success m-3" onClick={submitHandler} style={{ borderRadius: "5px", fontWeight: "bold",letterSpacing:"2px" }}>Submit</button>
            <Link to="/login" className="btn btn-outline-success m-3" style={{ fontWeight: "bold",color:"white",letterSpacing:"1px" }}>Already a user? Login</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};
export default Signup;