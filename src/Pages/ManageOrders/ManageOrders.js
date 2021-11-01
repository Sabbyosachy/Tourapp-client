import React, { useEffect, useState } from 'react';
import './ManageOrders.css';

const ManageOrders = () => {
    const [order, setOrder] = useState([]);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://macabre-zombie-68363.herokuapp.com/orders')
            .then(response => response.json())
            .then(data => setOrder(data));
    }, [])
    const handleDelete = (id) => {
        const sure = window.confirm("Do you want to delete this plan? ");
        if (sure) {
          fetch(`https://macabre-zombie-68363.herokuapp.com/deleteorder/${id}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                alert("Deleted Successfully");
                const remainingPlans = orders.filter((order) => order._id !== id);
                setOrders(remainingPlans);
              }
            });
        }
      };
    return (
        <div className="py-5 pt-5">
            <h3 className="py-5 fw-bold text-warning">Manage All Orders</h3>
            {
                    order.map(service=>
                        <div key={service._id}>
                            <div className="orders shadow">
                                <h4 className="title">User Name: {service.name}</h4>
                                <h6 className="ordersinfo" >Email: {service.email}</h6>
                                <h6 className="ordersinfo" >Package: {service.time}</h6>
                                <h6 className="ordersinfo" >Address: {service.address}</h6>
                                <h6 className="ordersinfo" >Total cost: {service.cost}</h6>
                                <br />
                                <button onClick={() => handleDelete(service._id)} className="btn_regu">Delete</button>
                            </div>
                        </div>
                        )
                }
        </div>
    );
};

export default ManageOrders;