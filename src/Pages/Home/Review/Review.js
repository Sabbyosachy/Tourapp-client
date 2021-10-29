import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar } from '@fortawesome/free-solid-svg-icons'
import './Review.css';
const Review = () => {
    return (
        <div className="container">
           <h2 className="fw-bold text-warning">Clients Reviews</h2>
           <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
  <div class="col px-4">
    <div class="card shadow">
      <img className="p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwDWGu8qH-aQvDAfZ4uhge-ErwppDzWFvaQ&usqp=CAU" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Jhon Kibriyan</h3>
        <p class="card-text">This is the best tour planner company They offer advice on destinations, plan trip itineraries, and make travel arrangements for clients</p>
         <p className="icons"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
         <button className="btn_regu">See More</button>  
      </div>
    </div>
  </div>
  <div class="col px-4">
    <div class="card shadow">
      <img className="p-3" src="https://www.clydeco.com/getattachment/ffb01c93-0273-4da8-9350-8b4b1d5de05b/personimage?variant=PersonThumbnailVariant" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Young Huns</h3>
        <p class="card-text">Vacation packages generally offer lower prices than booking separately, this may not be the case every time.Cheaper flight than the options available in a package.</p>
        <p className="icons"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
        <button className="btn_regu">See More</button> 
      </div>
    </div>
  </div>
  <div class="col px-4">
    <div class="card shadow">
      <img className="p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxsAuITWTZyiEkObofkuxxSwKTsn5KSh6cQ&usqp=CAU" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Hazards Mark</h3>
        <p class="card-text">They offer advice on destinations, plan trip itineraries,clients arranging transportation,tours, and trips for travelers.</p>
        <p className="icons"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
        <button className="btn_regu">See More</button> 
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Review;