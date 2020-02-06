import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const DeleteReview = props => {
  console.log('delete props', props);
//   const reviewed = localStorage.getItem("reviewed_by");

  const handleDelete = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`api/reviews/${props.myreview.item_review}`)
      //   console.log('delete call', `api/${reviewed}/${reviewed.menu_item}`)
      .then(res => {
        console.log("deleteReview is firing", res.data);
        props.setMyReviews(res.data)
      })
      .catch(err => {
        console.log("Delete review error", err);
      });
  };
  return (
    <div className="delete-button-wrapper">
      <button type='submit' className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteReview;
