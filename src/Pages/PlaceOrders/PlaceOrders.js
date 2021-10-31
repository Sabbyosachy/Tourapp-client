import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const PlaceOrders = () => {
    const {serviceId}=useParams();
    const[service,setService]=useState({});
    useEffect(()=>{
        fetch(`./service.json/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className="py-5">
            <h1 className="py-5 fw-bold text-warning">Orders</h1>
            <div className="singleService">
            <img src={service.image} alt="" srcset="" />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <h5>{service.time}</h5>
            <h6>{service.cost}</h6>
        </div>
        </div>
    );
};

export default PlaceOrders;