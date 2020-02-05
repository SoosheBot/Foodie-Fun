import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
//   const [menu_item, setMenu_item] = useState({});  
  
//   item_price,
//   item_rating,
//   item_review,
//   restaurant_id,
//   date_visited

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect((callback, isSubmitting) => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;