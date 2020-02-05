import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  console.log('callback is', callback);
  console.log('validate is', validate);

  const [reviews, setReviews] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log('reviews is firing', reviews);

  useEffect(() => {
    console.log('useEffect firing')
    if (Object.keys(errors).length === 0 && isSubmitting === true) {
      callback();
    }
  }, [errors, callback, isSubmitting]);

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