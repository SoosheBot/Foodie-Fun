import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  console.log('callback is', callback);
  console.log('validate is', validate);

  const [reviews, setReviews] = useState({});
  const [errors, setErrors] = useState({});
//   const [menu_item, setMenu_item] = useState({});  
  
//   item_price,
//   item_rating,
//   item_review,
//   restaurant_id,
//   date_visited

  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log('reviews is firing', reviews);

<<<<<<< HEAD
  useEffect((callback, isSubmitting) => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  
=======
  useEffect(() => {
    console.log('useEffect firing')
    if (Object.keys(errors).length === 0 && isSubmitting === true) {
      callback();
    }
  }, [errors, callback, isSubmitting]);
>>>>>>> 42abaa8ae08ac2813831d4e6a7a3cca035119a1e

  const handleSubmit = (event) => {
    console.log('handleSubmit event', event)
    if (event) {
    event.preventDefault(); 
    setErrors(validate(reviews));
    setIsSubmitting(true); 
    } else {
      return console.log('handleSubmit error')
    }
  };

  const handleChange = (event) => {
    event.persist();
    setReviews(reviews => ({ ...reviews, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    reviews,
    errors,
  }
};

export default useForm;