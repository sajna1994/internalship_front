// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-success " style={{ position: "sticky"}}>
//         <div className="container-fluid">
//           <Link className="navbar-brand fs-1 fst-italic" to="/">MovieMagic</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto mb-2">
//               <li className="nav-item">
//                 <Link className="nav-link active fs-5 mt-3" aria-current="page" to="/">Home</Link>
//               </li>
//               </ul>
//              <div className='d-flex'>
//                 <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
              
//                 <Link className="btn bg-white text-success mx-1" to="/sign">Sign Up</Link>
//                 </div>

           
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
                <Link className="nav-link active fs-5 mt-3" aria-current="page" to="/">Home</Link>
              </li>
            </ul>
            <div className='d-flex'>
              <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
              <Link className="btn bg-white text-success mx-1" to="/sign">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
