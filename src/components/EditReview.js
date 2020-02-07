import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValue = {
  id:'',
  item_review:''
}

const EditReview = props => {
  const [updates, setUpdates] = useState(initialValue);

  const handleChange = ev => {
    ev.persist();
    setUpdates({ ...updates, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .put(`api/reviews/${props.myreview.id}`, updates)
      .then(res => {
        console.log('res.data', res.data)
        window.location.reload(false);
      })
      .catch(err => {
        console.log("Error making update request", err);
      });
  }

  return (
    <div className="edit-reviews">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="item_review"
          placeholder="Edit your review"
          onChange={handleChange}
          value={updates.item_review}
        />
        <button type="submit">Submit Edits</button>
      </form>

    </div>
  );
};

export default EditReview;