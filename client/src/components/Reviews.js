import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import EditReview from "./EditReview";

// import EditReview from './EditReview';

const Reviews = props => {
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
                <EditReview myreview={myreview}/>
                {/* <button type="submit" className="delete-button">
                  Delete
                </button> */}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Reviews;
