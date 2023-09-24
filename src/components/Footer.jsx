
import React from 'react';
import '../styles/Footer.css'; // Create a CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span> About the MovieMagic</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
      ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
    </p>
    <div className="icons">
      <a to="/"><i className="fa fa-facebook"></i></a>
      <a to="/"><i className="fa fa-twitter"></i></a>
      <a to="/"><i className="fa fa-linkedin"></i></a>
      <a to="/"><i className="fa fa-google-plus"></i></a>
      <a to="/"><i className="fa fa-instagram"></i></a>
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span> Kugyug uhiu 5432</span> Mnnjkj, India</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <p> (+91) 8643 765 925</p>
    </div>
    <div>
      <i className="fa fa-envelope"></i>
      <p><a to="#"> MovieMagic@res.com</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <h2> MovieMagic</h2>
    <p className="menu">
      <a to="#"> Home</a> |
      <a to="#"> About</a> |
      <a to="#"> Services</a> |
      <a to="#"> Portfolio</a> |
      <a to="#"> News</a> |
      <a to="#"> Contact</a>
    </p>
    <p className="name"> MovieMagic &copy; 2023</p>
  </div>
    </footer>
  );
}

export default Footer;