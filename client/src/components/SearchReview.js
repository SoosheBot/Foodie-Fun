
// Search by:

// Restaurant
// $ of item 
// cuisine
// most recent visit 
// menu rating 
// Restaurant rating 


import React, { useEffect, useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';
import Signup from '../images/Signup.png';

const StyledSearchReview = styled.div`
  background-image: url(${Signup});
  background-size: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  opacity: 0.5;

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

//   button {
//     width: 30%;
//     margin 4rem;
//     padding: 1rem;
//     background-color: #c45228;
//     border-radius: 5px;
//     color: white;
//     font-weight: bold;
//     border: 1px solid #e76e3c;

//     &:hover {
//       background-color: #e8964a;
//       border: 1px solid #e76e3c;
//       color: #181212;
//       font-weight: bold;
//     }
//   }
`;





export default function ReviewsList() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
      axiosWithAuth()
        .get('api/reviews')
        .then(res => {
            //console.log('results', res)
          const reviews = res.data.filter(
            review =>
              review.menu_item
                .toLowerCase()
                .includes(query.toLowerCase())
          );
         setData(reviews);
        });
    }, [query]);
    
    const handleInputChange = event => {
      setQuery(event.target.value);
    };
    return (
     <section>
      <div className="reviews">
       </div>   
    <h1>List of Reviews</h1>  
             
      <StyledSearchReview>   
       <form className="search">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search by Reviews"
            autoComplete="off"
          />
        </form>
        </StyledSearchReview>

        <div className="review">
          {data.map(data => {
            return (
            <div key={data.id}>
            <h3>Name: {data.menu_item}</h3>
            <h3>Rating: {data.item_rating} stars </h3>
            <p>Review: {data.item_review}</p>
            <h4>Last Visit: {data.date_visited}</h4>
            </div>
            )
          })}
        </div>  
      </section>
    );
}
