import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./Service.JSON')
            .then(response => response.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="services" id="services">
            
            <h2 className="fw-bold text-warning">All Services</h2>
            {/* show all services */}
            <div className="show__item">
                {
                    services.map(service=>
                        <div className="service" key={service.id}>
                            <div>
                            <img src={service.image} alt="" />
                            </div>
                            <div className="info">
                                <h4 className="title">{service.name}</h4>
                                <p>{service.description}</p>
                                <h6>Package: {service.time}</h6>
                                <h6>Total Cost: {service.cost}</h6>
                                <br />
                                <Link to ={`services/${service.id}`}>
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