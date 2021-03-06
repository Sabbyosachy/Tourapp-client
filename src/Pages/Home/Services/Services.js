import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Services.css';

//Load api to show all tours to book 

const Services = () => {
    const [services, setServices] = useState([]);
    const {isLoading} = useAuth();
    useEffect(() => {
        fetch('https://macabre-zombie-68363.herokuapp.com/tours')
            .then(response => response.json())
            .then(data => setServices(data));
    }, [])
    
    if(isLoading){
        return <h4 className="text-danger text-center py-5 pt-5 mt-5">Loading.........</h4>;
     
    }
    
    //All detail show about the tours 
    return (
        <div className="services" id="services">
            
            <h2 className="fw-bold text-warning">Book For A Trip</h2>
            {/* show all services */}
            <div className="show__item">
                {
                    services.map(service=>
                        <div className="service" key={service._id}>
                            <div>
                            <img src={service.image} alt="" />
                            </div>
                            <div className="info">
                                <h4 className="title">{service.name}</h4>
                                <p>{service.description}</p>
                                <h6>Package: {service.time}</h6>
                                <h6>Total Cost: {service.cost}</h6>
                                <br />
                                <Link to ={`services/${service._id}`}>
                                    <button className="btn_regu">Book Now</button>
                                </Link>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Services;