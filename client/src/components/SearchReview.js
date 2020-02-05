// import AddRestaurant from "./AddRestaurant"

// Need to build a search function.


// Search by:

// AddRestaurant
// $ of item 
// cuisine
// most recent visit 
// menu rating 
// Restaurant rating 


import React, { useEffect, useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function ReviewsList() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
      axiosWithAuth()
        .get('api/reviews')
        .then(response => {
          const reviews = response.data.results.filter(
            review =>
              review.name
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
        <h1>List of Reviews</h1>  
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
      </div>  

        <div className="review">
          {data.map(data => {
            return (
            <div key={data.id}>
            <h3>Name: = {data.menu_item}</h3>
            <h3>Rating: = {data.item_rating} stars </h3>
            <p>Review = {data.item_review}</p>
            <h4>Last Visit: {data.date_visited}</h4>
            </div>
             )
          })}
        </div>  
      </section>
    );
}
