import React from 'react';
import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";

export default function Table() {
    let navigate = useNavigate()
    return (
        <div>
            <div className="table"></div>
            <button onClick={() => navigate("/Laptop")} className='btn btn-primary'>Table</button>
           
            <div className="table1"></div>
            <button onClick={()=>  navigate("/mobile")}className='btn btn-primary'>Mobile</button>
            <div className="table2"></div>
            <button onClick={()=>  navigate("/Bottle")}className='btn btn-primary'>Bottle</button>
            <div className="table3"></div>
            <button onClick={()=>  navigate("/Ball")}className='btn btn-primary'>Ball</button>
            <div className="table4"></div>
            <button onClick={()=>  navigate("/Book")}className='btn btn-primary'>Book'</button>
        </div>
    )
}
