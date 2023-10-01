import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [userrole, setUserRole] = useState('');
    useEffect(() => {
        const storedUserRole = sessionStorage.getItem('userrole');
        setUserRole(storedUserRole);
      }, []);
      if (userrole === 'admin') {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-success nav-fixed" style={{ position: "sticky", top: "0" }}>        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">MovieMagic</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5 mt-3" aria-current="page" to="/admin"><i class="fa fa-plus" aria-hidden="true"></i> Add✍🏼️</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5 mt-3" aria-current="page" to="/admindash"><i className="fa fa-bars"></i> DashBoard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5 mt-3" aria-current="page" to="/detail">Details</Link>
              </li>
            </ul>
            <div className='d-flex'>
              <Link className="btn bg-white text-success mx-1" to="/"> Log out</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
} else {
    return (
        <div>






          
        <nav className="navbar navbar-expand-lg navbar-dark bg-success nav-fixed" style={{ position: "sticky", top: "0" }}>        <div className="container-fluid">
                  <Link className="navbar-brand fs-1 fst-italic" to="/">MovieMagic</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2">
                     
                      <li className="nav-item">
                        <Link className="nav-link active fs-5 mt-3" aria-current="page" to="/"><i className="fa fa-home" aria-hidden="true"></i>Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active fs-5 mt-3" aria-current="page" to="/detail"><i className="fa fa-bars"></i> Dashboard</Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link className="nav-link active fs-5 mt-3" aria-current="page" to="/booking"><i class="fa fa-ticket" aria-hidden="true"></i> Booking</Link>
                      </li> */}
                      <li className="nav-item">
                        <Link className="nav-link active fs-5 mt-3" aria-current="page" to="/user"><i class="fa fa-user" aria-hidden="true"></i> User Profile</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active fs-5 mt-3" aria-current="page" to="/feedback"><i class="fa fa-comments-o" aria-hidden="true"></i> Feedback</Link>
                      </li>
                    </ul>
                    <div className='d-flex'>
                      <Link className="btn bg-white text-success mx-1" to="/"> Log out</Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
      )
  }
}

export default Header;