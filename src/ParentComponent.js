
import React from 'react';
import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";
function OfficeDesk() {
    let navigate = useNavigate();

  return (
      
    <div className="officeDesk">
        
      <button onClick={() =>             navigate("/Table")} className='btn btn-primary'>officeDesk</button>
      

    </div>
  );
}

 
   

export default OfficeDesk;

