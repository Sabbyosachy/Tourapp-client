import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css';

const Notfound = () => {
    return (
        <div className="container mt-5">
        <img className="pt-5" width="75%" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/page_not_found_su7k.svg" alt=""/>
        <div className="text-center py-5">
        <Link to="/home"><button className="btn_regular">Go to Home</button></Link>
        </div>
    </div>
    );
};

export default Notfound;