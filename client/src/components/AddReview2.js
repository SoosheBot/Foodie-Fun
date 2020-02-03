//trying react-form-hook

import React from 'react';
import { useForm } from 'react-hook-form';
import styled from "styled-components";
import LogIn from '../images/LogIn.png';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  const StyledAddReview = styled.div`
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
        background-image: url(${LogIn});
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
        border-radius:5px;
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
        border-radius:5px;
        color: white;
        font-weight:bold;
        border: 1px solid #e76e3c;
  
        &:hover{
          background-color: #e8964a;
          border: 1px solid #e76e3c;
          color: #181212;
          font-weight:bold;
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
  
  return (
    <StyledAddReview>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
      type="text" 
      placeholder="Add menu item" 
      name="Add menu item" 
      ref={register({required: true, maxLength: 20})} 
      />
      <input 
      type="number" 
      placeholder="Price"
      name="Price" 
      ref={register({required: true, max: 100, min: 0, maxLength: 5})} 
      />
      <select 
      name="rating" 
      ref={register({ required: true })}>
        <option value="1">1 star</option>
        <option value=" 2"> 2 stars</option>
        <option value=" 3"> 3 stars</option>
        <option value=" 4"> 4 stars</option>
        <option value=" 5"> 5 stars</option>
      </select>
      <textarea name="Review Description" ref={register} />

      <input type="submit" />
    </form>
    </StyledAddReview>  
  );
}