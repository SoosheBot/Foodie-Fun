import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import EditReview from "./EditReview";

// import EditReview from './EditReview';

const Reviews = (props) => {
  const [myReviews, setMyReviews] = useState([]);


  const reviewed = localStorage.getItem("reviewed_by");

  useEffect(() => {
    axiosWithAuth()
      .get(`api/users/${reviewed}/reviews`, myReviews)
      .then(res => {
        // console.log("reviews res.data", res.data);
        setMyReviews(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [reviewed]);

  const editReview = (id, item) => { 
    // e.preventDefault();
    axiosWithAuth()
      .put(`api/reviews/${id}`, item)
      .then(res => {
        console.log("editReview is firing", res.data);
        const updatedItem = res.data
        const newItems = myReviews.map(item => {
          if(item.id !== updatedItem.id){
            return item;
          }
          return updatedItem;
        })
        setMyReviews(newItems);
        props.history.push('/dashboard');
      })
      .catch(err => {
        console.log("Error", err);
      });
  };


  return (
    <div className="my-reviews">
      {myReviews &&
        myReviews.map((myreview, index) => {
          return (
            <div key={index}>
              <div className="review" key={myreview.id} myreview={myreview}>
                <h3>Review: {myreview.item_review}</h3>
              </div>
              <div className="edit-reviews">
              <div className="edit-reviews">
      <button type='submit' className="edit-button" onClick={editReview}>
        Edit
      </button>
    </div>               
                <button
                  type="submit"
                  className="delete-button"
                  
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Reviews;
