import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValue = {
  id:'',
  item_review:''
}


const EditReview = props => {
  const [updates, setUpdates] = useState(initialValue);

  // const [items, setItems] = useState();
  // const reviewed = localStorage.getItem("reviewed_by");

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`api/users/${reviewed}/reviews`)
  //     .then(res => {
  //       // console.log("reviews res.data", res.data);
  //       setUpdates(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, [reviewed]);


  const handleChange = ev => {
    ev.persist();
    setUpdates({ ...updates, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .put(`api/reviews/${props.myreview.id}`, updates)
      .then(res => {
        // props.history.push("/dashboard");
        props.setMyReviews(res.data)
        console.log('res.data', res.data)
        setUpdates(initialValue)

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
        <button type="submit" >Submit Edits</button>
      </form>

    </div>
  );
};

  // const editReview = () => {
  //   useEffect(() => {
  //     axiosWithAuth()
  //     .put(`api/reviews/${updates.id}`, updates)
  //     .then(res => {
  //       console.log(res);
  //       props.history.push("/dashboard");
  //     })
  //     .catch(err => {
  //       console.log("Error making update request", err);
  //     });
      
  //   },[updates]);
      
  // }


  // return (
  //   <div className="edit-reviews">
  //     {updates &&
  //       updates.map((update, index) => {
  //         return (
  //           <div key={index}>
  //             <div className="edit-review" key={update.id} update={update}>
  //               <h3>Review: {update.item_review}</h3>
  //             </div>
  //             <button type='submit' onClick={() => editReview(update)}>Edit</button>
  //           </div>
  //         );
  //       })}
        
  //   </div>
  // );

  

export default EditReview;

// OLD CODE
// const editReview = (id, item) => {
//   // e.preventDefault();
//   axiosWithAuth()
//     .put(`api/reviews/${id}`, item)
//     .then(res => {
//       console.log("editReview is firing", res.data);
//       const updatedItem = res.data
//       console.log('items', items)
//       const newItems = items.map(item => {
//         if(item.id !== updatedItem.id){
//           return item;
//         }
//         return updatedItem;
//       })
//       setItems(newItems);
//       props.history.push('/dashboard');
//     })
//     .catch(err => {
//       console.log("Error", err);
//     });
// };
