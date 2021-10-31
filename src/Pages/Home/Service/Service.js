import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './Service.css';

const Service = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState([]);
   
    // load service data
    useEffect(()=>{
        fetch(`http://localhost:5000/tours/${serviceId}`)
        .then(res=> res.json())
        .then(data=>setService(data));
    },[])
   
    return (
        <div className="service__container text-center py-5 mt-5">
             <h2  className="fw-bold text-warning world py-2">Place Order</h2>     
            <div className="service__img">
                <img src={service.image} alt="" />
            </div>
            <h1>{Service.name}</h1>
            <p className="px-5">{service.description}</p>
            <h6>Total Cost: {Service.cost}</h6>
            <h6>Package: {service.time}</h6>
            <br />
            <Link to="/home"><button className="btn_regu">Go to Home</button></Link>
        </div>
    );
};

export default Service;