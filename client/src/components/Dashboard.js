import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Reviews from './Reviews';


import styled from "styled-components";
import DashBoard from "../images/DashBoard.png";

const StyledDashBoard = styled.div`
  background-image: url(${DashBoard});
  background-size: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
      width: 10%;
      padding: 2%;
      text-decoration: none;
      font-size: 1.8vw;
      font-weight: bold;
      text-align: center;
      &:hover {
        color: #c45228;
      }
      @media (max-width: 500px) {
        font-size: 0.5rem;
        display: flex;
        flex-direction: column;
      }
      @media (max-width: 825px) {
        font-size: 1rem;
      }
    }
  }

  h1 {
    color: #c45228;
    text-shadow: 1px 2px #181212;
  }

  h2,
  h3 {
    color: #c45228;
    text-shadow: 1px 2px #181212;
  }

  h4 {
    color: #181212;
    font-weight: bold;
    font-size: 1.4rem;
    text-shadow: 1px 1px #181212;
  }

  p {
    color: #181212;
    color: #c45228;
    text-shadow: 1px 2px #181212;
    margin: 0 auto;
  }

  a {
    color: #e8964a;
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }


  }

  .dashboard {
    margin-top: 10%;
    width: 100%;
    background-color: black;
    opacity: 0.8;
    z-index: -2;
    display: flex;

    .restaurants {
      z-index: front;
      display: flex;
      flex-wrap:wrap;
      padding: 20px;
    }

    img {
      width: 20%;
    }

  }

  button {
    width: 50%;
    padding: 1rem;
    background-color: #c45228;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    border: 1px solid #e76e3c;

    &:hover {
      background-color: #e8964a;
      border: 1px solid #e76e3c;
      color: #181212;
      font-weight: bold;
    }
  }
`;

const Dashboard = () => {
  const [restos, setRestos] = useState([]);
  
  const userid = localStorage.getItem("created_by");
  

  useEffect(() => {
    axiosWithAuth()
      .get(`api/users/${userid}/restaurants`)
      .then(res => {
        // console.log("setRestos firing", res.data)
        setRestos(res.data);
      })
      .catch(err => {
        console.log("get restos error", err);
      });
  }, [userid]);

  return (
    <StyledDashBoard>
      <nav>
        <h1>Welcome User!</h1>
        <a
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          alt="Homepage"
        >
          Home
        </a>
        <Link to="/login">Log Out</Link>
        <Link to="/">Search</Link>
      </nav>

      <div className="dashboard"> 
      {restos &&
          restos.map((resto, index) => {
            return (
            <div key={index}>
                <div className='restaurant' key={resto.id} resto={resto}>
                  <h3>Restaurant Name: {resto.name}</h3>
                  <figure>
                    <img src={resto.img_url} alt="Menu item" />
                  </figure>
                  <h3>Cuisine: {resto.cuisine_name}</h3>
                  <h3>Hours: {resto.hours_of_operation}</h3>  
            <h3>Location: {resto.location}</h3>
                </div> 
                
               </div>
              
            );
          })}
        <Reviews />
      </div>

      
      <nav>
      <Link to="/add-review">Add Review</Link>
      <Link to="/add-restaurant">Add a Restaurant</Link>
      </nav>
    </StyledDashBoard>
  );
};

export default Dashboard;
