import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Service.css';

const Service = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState([]);
    const { user } = useAuth();
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/orders',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Purches SuccessFully')
                reset();
            }
        })
    }

   
    // load service data
    useEffect(()=>{
        fetch(`http://localhost:5000/tours/${serviceId}`)
        .then(res=> res.json())
        .then(data=>setService(data));
    },[])
   
    return (
        <div className="service__container text-center py-5 mt-5">  
            <div className="service__img">
                <img src={service.image} alt="" />
            </div>
            <h1>{service.name}</h1>
            <p className="px-5">{service.description}</p>
            <h6>Total Cost: {service.cost}</h6>
            <h6>Package: {service.time}</h6>
            <div className=" addproduct">
      <h2 className="fw-bold text-warning world pt-5 pb-3" >Place Your Order</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} value={user?.displayName} required />    
      <input type="text" {...register("address")} placeholder="Address" required />    
      <input type="email" {...register("email")} value={user?.email}  required/>   
      <input type="number" {...register("cost")} placeholder="Cost" required />   
      <input type="text" {...register("time")} placeholder="Package" required />      
      <input className="btn_regu" type="submit"  /> 
    </form>
    </div>
        </div>
    );
};

export default Service;