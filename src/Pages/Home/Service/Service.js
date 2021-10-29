import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, cost, time, description, image } = service;
    return (
        <div>
            <div className="service pb-3">
            <img src={image} alt="" />
            <h4 className="py-2">{name}</h4>
           
            <p className="px-3">{description}</p>
            <h5>Cost: {cost}</h5>
            <h6>Package: {time}</h6>
            <button className="btn btn_regu mt-3">Book Now</button>
           
        </div>

        </div>
    );
};

export default Service;