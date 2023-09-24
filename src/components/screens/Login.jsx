
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  const inputHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validation for email (example: valid email format)
    if (!user.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    // Validation for password (example: required field)
    if (!user.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };


  const addHandler = () => {
    if (validateForm()) {

    axios.post("http://localhost:5000/api/login", user).then((response) => {
      if (response.data.message === "Login Success") {
        const token = response.data.token;
        const user_id = response.data.data._id;
        const role = response.data.data.role;
        sessionStorage.setItem("userToken", token);
        sessionStorage.setItem("userId", user_id);
        sessionStorage.setItem("userrole", role);
        alert(response.data.message);
        if (role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/movie');
        }
      } else {
        alert('Login failed');
      }
    });
  };
  }
  return (
    <div>
              <h2 className="mb-4 text-success"  style={{ fontWeight: "bold",marginTop:"30px",textAlign:'center', padding: "20px", fontSize: "40px",marginBottom:"20px",letterSpacing:"3px"  }}>Experience MovieMagic</h2>

    <div className="container-fluid  d-flex justify-content-center align-items-center">
    <div className="card p-5" style={{maxWidth: "700px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",background:"rgba(255, 251, 251, 0.15)" }}>
      <div className="card-body text-white" >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="text" className="form-control" id="email" name="email" onChange={inputHandler} />
          {errors.email && <p className="text-danger">{errors.email}</p>}

        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" onChange={inputHandler} />
          {errors.password && <p className="text-danger">{errors.password}</p>}

        </div>
        <div className="mb-3">
          <button className="btn btn-success btn-block " onClick={addHandler} style={{ borderRadius: "5px", fontWeight: "bold",marginLeft:"70px" }}>Submit</button>
        </div>
        <a className="btn btn-link text-danger" href="/sign" style={{  textDecoration: "none",marginLeft:"45px",textShadow:"2px 2px 4px #000000",letterSpacing:"3px" }}>I'm a new user!</a>
      </div>
    </div>
  </div>
  </div>
  );
};

export default Login;
