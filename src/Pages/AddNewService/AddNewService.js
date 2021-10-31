import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewService.css';

const AddNewService = () => {
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/tours',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Added SuccessFully')
                reset();
            }
        })
    }
   
    return (
        <div className="py-5 pt-5 addproduct">
            <h3 className="pt-5 fw-bold text-warning">App New Services</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} placeholder="name" required />   
      <input type="text" {...register("description")} placeholder="description"  required/>   
      <input type="number" {...register("cost")} placeholder="cost" required />   
      <input type="text" {...register("time")} placeholder="time" required />   
      <input type="url" {...register("image")} placeholder="image-url" required />   
      <input className="btn_regu" type="submit"  /> 
    </form>
        </div>
    );
};

export default AddNewService;