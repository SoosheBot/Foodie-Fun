import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import Select from "react-dropdown-select";

import styled from "styled-components";
import Signup from "../images/Signup.png";

const StyledAddRestaurant = styled.div`
  margin-top: 8%;
  height: 80vh;
  color: #e8964a;
  display: block;
  width: 80%;
  margin: 2rem auto;

  form {
    width: 70%;
    margin: 1% auto 2% auto;
    padding: 3rem 1rem;
    border-radius: 5rem;

    ::before {
      background-image: url(${Signup});
      background-size: cover;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
      opacity: 0.8;
    }

    input[type="text"],
    input[type="number"] {
      border: 1px solid #e76e3c;
      border-radius: 5px;
      width: 80%;
      display: block;
      margin: 1rem auto 2rem auto;
      padding: 0.8rem 0;
    }

    label {
      display: block;
      width: 80%;
      margin: 2rem auto;
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
  }
  p {
    color: black;
    background-color: white;
    width: 50%;
    margin: 0 auto;
    padding: 1rem;
  }

  a {
    color: #e8964a;
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }
  }
`;

const AddRestaurant = props => {
  const [restaurants, setRestaurants] = useState({
    name: "",
    cuisine_id: "",
    location: "",
    hours_of_operation: "",
    img_url: "",
    created_by: localStorage.getItem("created_by")
  });

  

  const handleChange = e => {
    setRestaurants({ ...restaurants, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/restaurants", restaurants)
      .then(res => {
        setRestaurants({
          ...restaurants,
          name: "",
          cuisine_id: "",
          location: "",
          hours_of_operation: "",
          img_url: "",
          created_by: localStorage.getItem("created_by")
        });
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("add Restaurant error", err);
      });
  };

  return (
    <StyledAddRestaurant>
      <div className="addRestaurant-form">
        <h1>Add a new Restaurant</h1>
        <form onSubmit={submitForm}>
          <input
            type="text"
            className="restaurantName"
            placeholder="Enter Restaurant name..."
            name="name"
            value={restaurants.name}
            onChange={handleChange}
          />
          <input 
            type="text"
            className="cuisine"
            placeholder="Enter cuisine..."
            name="cuisine_id"
            value={restaurants.cuisine_id}
            onChange={handleChange}
          />
          <input
            type="text"
            className="address"
            placeholder="Enter address..."
            name="location"
            value={restaurants.location}
            onChange={handleChange}
          />
          <input
            type="text"
            className="hours"
            placeholder="Enter hours..."
            name="hours_of_operation"
            value={restaurants.hours_of_operation}
            onChange={handleChange}
          />
          <input
            type="text"
            className="URL"
            placeholder="Enter URL..."
            name="img_url"
            value={restaurants.img_url}
            onChange={handleChange}
          />
          {/* <input
            type="text"
            className="created-by"
            placeholder="Created by..."
            name="created_by"
            value={restaurants.created_by}
            onChange={handleChange}
          /> */}
          <button type="submit">Add Restaurant</button>
        </form>
      </div>
    </StyledAddRestaurant>
  );
};

export default AddRestaurant;
