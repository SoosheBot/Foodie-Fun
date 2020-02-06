import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Reviews = (props) => {
  const [myReviews, setMyReviews] = useState();
  const reviewed = localStorage.getItem("reviewed_by");

  useEffect(() => {
    axiosWithAuth()
      .get(`api/users/${reviewed}/reviews`)
      .then(res => {
        console.log("reviews res.data", res.data);
        setMyReviews(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

//   const editReview = e => {
//     e.preventDefault();
//     axiosWithAuth()
//       .put(`api/reviews/${}`, myReviews)
//       .then(res => {
//         console.log("editReview is firing", res.data);
//         props.setReview(res.data);
//       })
//       .catch(err => {
//         console.log("Edit review error", err);
//       });
//   };

  const deleteReview = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`api/reviews/${reviewed.id}`)
    //   console.log('delete call', `api/reviews/${reviewed.id}`)
      .then(res => {
        console.log("deleteReview is firing", res);
      })
      .catch(err => {
        console.log("Delete review error", err);
      });
  };

  return (
    <>
      <div className="my-reviews">
        {myReviews &&
          myReviews.map(myReview => {
            return (
              <div className="resta">
                <div key {...myReview.id} myReview={myReview}>
                  <h3>Review: {myReview.item_review}</h3>
                  {/* <button className="edit-button" onClick={editReview}>
                    Edit Review
                  </button> */}
                  <button className="delete-button" onClick={deleteReview}>
                    Delete Review
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Reviews;
