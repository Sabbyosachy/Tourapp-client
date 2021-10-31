import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './Service.css';

const Service = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState([]);
    const [select, setSelect] = useState({});
   
    // load service data
    
    useEffect(()=>{
        fetch('/Service.JSON')
        .then(res=> res.json())
        .then(data=>setService(data));
    },[])
    // find service via id
    useEffect(()=>{
        setSelect(service.find(iteam=>(iteam.id===serviceId)));
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[service]);
    console.log(select);
 
    //Display select service info
   
    return (
        <div className="service__container text-center py-5 mt-5">
            <div className="service__img">
                <img src={select?.image} alt="" />
            </div>
            <h1>{select?.name}</h1>
            <p className="px-5">{select?.description}</p>
            <h6>Total Cost: {select?.cost}</h6>
            <h6>Package: {select?.time}</h6>
            <br />
            <Link to="/home"><button className="btn_regu">Go to Home</button></Link>
        </div>
    );
};

export default Service;