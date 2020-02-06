import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import DashBoard from '../images/DashBoard.png';

  const StyledSearchFilter = styled.div`
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

    .reviews {
      z-index: front;
      display: flex;

      img {
        width: 10%;
      }
    }
  }

  button {
    width: 30%;
    margin 4rem;
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

const SearchFilter = props => {
    return (
        <StyledSearchFilter>
          <div className='SearchBy'>
              <h1>Search by</h1>
            <Link to='/SearchReview'>
                <button type ='button'>Menu item Search</button>
            </Link>
            <Link to='/SearchRestaurant'>
                <button type='button'>Restaurant Search</button>
            </Link>


                <button>Search Restaurants by rating</button>


            <Link to='/SearchCuisine'>
                <button type='button'>Search Restaurants by Cuisine</button>
            </Link>
            
            <button>Search Menu items by Price</button>
            <button>Search Menu items by Rating</button>
            <button>Date Late Visited</button>
            

              
              
          </div>  
        </StyledSearchFilter>

    )
}

export default SearchFilter;