import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialItem = {
  id: "",
  item_review: ""
};
const EditReview = props => {
  const [updates, setUpdates] = useState({ initialItem });

  useEffect(() => {
    console.log("props test", props.items);
    const editingItem = props.items.find(thing => {
      return thing.id === Number(props.match.params.id);
    });
    if (editingItem) {
      setUpdates(editingItem);
    }
  }, [props.items, props.match.params]);

  const handleChange = ev => {
    ev.persist();
    let value = ev.target.value;
    console.log("updates", updates);
    setUpdates({ ...updates, [ev.target.name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = Number(props.match.params.id);
    props.editReview(id, updates);
  };

  return (
    <div className="edit-reviews">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="item_review"
          onChange={handleChange}
          value={updates.item_review}
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

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
