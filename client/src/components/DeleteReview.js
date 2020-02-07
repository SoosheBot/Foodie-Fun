import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const DeleteReview = (props) => {
  const handleDelete = e => {
    e.preventDefault();
    axiosWithAuth()
    .delete(`api/reviews/${props.myreview.id}`)
    .then(res => {
      console.log('res.data', res.data);
      window.location.reload(false);
    })
    .catch(err => {
      console.log(err);
    })
  };

  return (
    <div className="delete-button-wrapper">
      <button type='submit' className="delete-button" onClick={handleDelete}>
        Delete Review
      </button>
    </div>
  );
};

export default DeleteReview;
