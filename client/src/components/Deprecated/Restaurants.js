import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";


const Restaurants = ({ updates }) => {
  const [restos, setRestos] = useState();
  
  const userid = localStorage.getItem("created_by");
  

  useEffect(() => {
    axiosWithAuth()
      .get(`api/users/${userid}/restaurants`, restos)
      .then(res => {
        // console.log("setRestos firing", res.data)
        setRestos(res.data);
      })
      .catch(err => {
        console.log("get restos error", err);
      });
  }, []);
 
return (
      <div className="dashboard">
        {updates &&
          updates.map((resto, index) => {
            return (
            <div key={index}>
                <div className='restaurant' key={resto.id} resto={resto}>
                  <h3>Restaurant Name: {resto.name}</h3>
                  <figure>
                    <img src={resto.img_url} alt="Menu item" />
                  </figure>
                  <h3>Cuisine ID: {resto.cuisine_id}</h3>
                  <h3>Hours: {resto.hours_of_operation}</h3>  
                </div> 
                
               </div>
              
            );
          })}
        
          
   </div>
 );
};

export default Restaurants;
