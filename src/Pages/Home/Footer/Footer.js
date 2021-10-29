import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
        <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-12">
                <div className="first">
                  <h1 className="head">Take A Tour</h1>
                  <div className="icons-container d-flex">
                    <div className="icon">
                    <i class="fab fa-facebook"></i>
                    </div>
                    <div className="icon">
                    <i class="fab fa-youtube"></i>
                    </div>
                    <div className="icon">
                    <i class="fab fa-twitter-square"></i>
                    </div>
                  </div>
                  <p className="mt-3 ">Here You can find the best travel package and ideas..</p>
                  <p className="mt-1">Copywrite © 2021 take a tour</p>
                </div>
              </div>
              <div className="col-md-2 col-12">
                <div className="menu-container">
                
                    <p className="menu">Home</p>
                    <p className="menu">Service</p>
                    <p className="menu"> About Us</p>
                    <p className="menu">Contact</p>
                    
                </div>
              </div>
              <div className="col-md-5 col-12">
                <div className="text-start iteams">
                <p><i class="fas fa-map-marker-alt"></i>  New York, NV-1234 US</p>
               <p> <i class="fas fa-envelope"></i>  takeatour@gmail.com</p>
                <p><i class="fas fa-phone-square-alt"></i>  +01 980 778 16</p>
                <p><i class="fas fa-phone-square-alt"></i>  + 01 145 908 23</p>
                           
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    );
};

export default Footer;