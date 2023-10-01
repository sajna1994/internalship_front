import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Admin from './Admin';
const AdminDashBoard = () => {

    const [data, setData] = useState([]);
    const [userrole, setUserRole] = useState('');
    const [userToken, setUserToken] = useState(sessionStorage.getItem('userToken'));
    const [update, setUpdate] = useState(false);
    const [singleValue, setSingleValue] = useState(null);


    const fetchDataFromApi = () => {
        const storedUsertoken = sessionStorage.getItem('userToken');
        setUserToken(storedUsertoken);
        axios.get("http://localhost:5000/api/movielist").then((response) => {
          console.log(response.data);
          setData(response.data);
        });
      };

      useEffect(() => {
        const storedUserRole = sessionStorage.getItem('userrole');
        setUserRole(storedUserRole);
        fetchDataFromApi();
      }, []);
      const deleteMovie = (id) => {
        console.log('id delete');
        console.log(id);
        axios.delete('http://localhost:5000/api/movielist/' + id).then((response) => {
          alert(response.data.message);
          window.location.reload(false);
        });
      };
      const updateMovie = (val) => {
        setUpdate(true);
        setSingleValue(val);
      };

let finalJSX=<div className="container mt-3 mb-3" >
<div className="row">
  {data.map((value, index) => (
    <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3">
      <div className="movie-card card p-4 text-center" style={{background:"rgba(255,255,255,0)", color: "rgb(167, 165, 165)", marginBottom: "10px" }}>
        <div className="card-body">
        {/* <div>{value._id}</div> */}

          <img src={value.image} alt={value.moviename} className="card-img-top" style={{ width: "100%", height: "60vh", objectFit: "cover",cursor: "pointer" }} />
          <h2 className="card-title text-uppercase text-danger mt-3">{value.moviename}</h2>
          <div className='bb' style={{textAlign:"left" , color:"white"}}>
          {/* <div>
            <h5>Date:{value.date}</h5>
            {value.date && <h5>Date: {value.date}</h5>}
          </div>
          <div>
          {value.time && <h5>Time: {value.time}</h5>}
            <h5>Time: {value.time}</h5>
          </div> */}

          <div style={{color:"yellow"}}>
            <h5>Rating  : {value.rating}</h5>
          </div>
          <div>
            <h5>Category: {value.category}</h5>
          </div>
          <div>
            <h5>Language: {value.language}</h5>
          </div>
          <div>
            <h6>Description: {value.description}</h6>
          </div>
          <div>
            <h6>Casting: {value.cast_details}</h6>
          </div>
         
          <div style={{color:"orange"}}>
            <h5>Ticket Rate: {value.ticket_rates}</h5>
          </div>
          </div>
          <button class="btn btn-danger" onClick={()=>deleteMovie(value._id)}>Delete</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
       <button class="btn btn-success" onClick={()=>updateMovie(value)}>Update</button>
          {/* <button className="btn bg-success text-white" onClick={() => handleMovieDetailsClick(value)}>
            Movie Details
          </button> */}
        </div>
      </div>
    </div>
  ))}
</div>
</div>

if (update) finalJSX=<Admin method='put' data={singleValue}/>

  return (
    finalJSX
  )
}

export default AdminDashBoard