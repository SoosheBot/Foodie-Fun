// //trying react-form-hook

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { axiosWithAuth } from '../utils/axiosWithAuth'
// import styled from "styled-components";
// import LogIn from '../images/LogIn.png';



//   const StyledAddReview = styled.div`
// margin-top: 8%;
//   height: 80vh;
//   color: #e8964a;
//   display: block;
//   width: 80%;
//   margin: 2rem auto;

// form {
//     width: 70%;	    
//     margin: 1% auto 2% auto;	    
//     padding: 3rem 1rem;	      
//     border-radius: 5rem;	     

//     ::before {
//         background-image: url(${LogIn});
//         background-size: cover;
//         content: "";
//         display: block;
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         z-index: -2;
//         opacity: 0.8;
//       }   
      
//       input[type="text"],
//       input[type="number"] {
//         border: 1px solid #e76e3c;
//         border-radius:5px;
//         width: 80%;
//         display: block;
//         margin: 1rem auto 2rem auto;
//         padding: 0.8rem 0;
//       }

//       label {
//         display: block;
//         width: 80%;
//         margin: 2rem auto;
//       }

//       button {
//         width: 80%;
//         padding: .5rem 1rem;
//         background-color: #c45228;
//         border-radius:5px;
//         color: white;
//         font-weight:bold;
//         border: 1px solid #e76e3c;
  
//         &:hover{
//           background-color: #e8964a;
//           border: 1px solid #e76e3c;
//           color: #181212;
//           font-weight:bold;
//         }
//       }
//     }
//     p {
//         color: black;
//         background-color: white;
//         width: 50%;
//         margin: 0 auto;
//         padding: 1rem;
//       }
    
//       a {
//         color: #e8964a;
//         text-decoration: none;
    
//         &: hover {
//           text-decoration: underline;

//         }
//       }

// `;
// export default function AddReview2(props) {
//     const [review, setReview] = useState({
//         menuItem: "",
//         price: "",
//         rating: "",
//         reviewDesc: ""
//       });
//     const { register, handleSubmit, errors } = useForm();
//     const onSubmit = data => console.log(data);
//     console.log(errors);

//     const handleChange = e => {
//         setReview({ ...review, [e.target.name]: e.target.value });
//       };
    
//       const submitForm = e => {
//         e.preventDefault();
//         axiosWithAuth()
//           .post()
//           .then(res => {
//             localStorage.setItem("token", res.data.payload);
//             props.history.push("/protected");
//           })
//           .catch(err => {
//             console.log("add Review error", err);
//           });
//       };

//   return (
//     <StyledAddReview>
//         <h1>Add a new Review</h1>
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//       type="text" 
//       placeholder="Add menu item" 
//       name="add_menu_item" 
//       ref={register({required: true, maxLength: 20})} 
//       />
//       {errors.add_menu_item && 'Menu item is required'}
//       <input 
//       type="number" 
//       placeholder="Price"
//       name="price" 
//       ref={register({required: true, max: 100, min: 0, maxLength: 5})} 
//       />
//       {errors.price && 'Price is required'}
//       <input 
//       type='number'
//       placeholder='put your rating here...'
//       name="rating" 
//       ref={register({required: true, max: 5, min: 1, pattern: /^\S+@\S+$/i})}/>
//       {errors.rating && 'a Rating is required'}
//       <input
//       type='text'
//       name="review_description" 
//       placeholder='Provide a short review here...'
//       ref={register({required: true, minLength: 10, maxLength: 500})}
//       />
//       {errors.review_description && 'a Review is required'}
//       <button>
//       <input type="submit" />
//       </button>  
//     </form>
//     </StyledAddReview>  
//   );
// }


// // const AddReview = (props) => {
// //   const {
// //     menu_item,
// //     item_price,
// //     item_rating,
// //     item_review,
// //     restaurant_id,
// //     date_visited,
// //         reviews,
// //         errors,
// //         handleChange,
// //         handleSubmit,
// //       } = useForm();

// //       function add() {
// //         console.log('No errors, submit callback called!');
// //       }

// //     // const [review, setReview] = useState({
// //     //   menu_item: "",
// //     //   item_price: "",
// //     //   item_rating: "",
// //     //   item_review: "",
// //     //   restaurant_id: '',
// //     //   date_visited: ''
// //     // });

// //     // const handleChange = e => {
// //     //   setReview({ ...review, [e.target.name]: e.target.value });
// //     // };

// //     const submitForm = e => {
// //       e.preventDefault();
// //       axiosWithAuth()
// //         .post('api/reviews')
// //         .then(res => {
// //           //localStorage.setItem("token", res.data.payload);
// //           props.history.push("/dashboard");
// //         })
// //         .catch(err => {
// //           console.log("add Review error", err);
// //         });
// //     };

// //     return (
// //       <StyledAddReview>
// //       <div className="addReview-form">
// //            <h1>Add a new Review</h1>
// //           <form onSubmit={handleSubmit(submitForm)} noValidate>
// //             <input
// //               type="text"
// //               className="MenuName"
// //               placeholder="Enter Menu item name..."
// //               value={reviews.menu_item || ''}
// //               onChange={handleChange}
// //               required
// //             />
// //             {errors.menu_item && <p>Menu item is required!</p>}
// //             <input
// //               type="number"
// //               className="enter price"
// //               placeholder="Enter price..."
// //               value={reviews.item_price || ''}
// //               onChange={handleChange}
// //               required
// //             />
// //             {errors.item_price && <p>Price is required!</p>}
// //             <input
// //               type="number"
// //               className="rating"
// //               placeholder="Enter rating..."
// //               value={reviews.item_rating || ''}
// //               onChange={handleChange}
// //               required
// //             />
// //             {errors.item_rating && <p>Rating is required!</p>}
// //             <input
// //               type="text"
// //               className="reviewDescription"
// //               placeholder="Enter a short review..."
// //               value={reviews.item_review || ''}
// //               onChange={handleChange}
// //               required
// //             />
// //             {errors.item_review && <p>Review is required!</p>}
// //             <input
// //               type="number"
// //               className="reviewDescription"
// //               placeholder="Enter Restaurant ID..."
// //               value={reviews.restaurant_id || ''}
// //               onChange={handleChange}
// //               required
// //               />
// //               {errors.restaurant_id && <p>Restaurant ID is required!</p>}
// //               <input
// //               type="date"
// //               className="reviewDescription"
// //               placeholder="Enter a date..."
// //               value={reviews.date_visited || ''}
// //               onChange={handleChange}
// //               required
// //               />
// //               {errors.date_visited && <p>Valid Date is required!</p>}
// //             <button type="submit">Add Review</button>
// //           </form>
// //       </div>
// //       </StyledAddReview>
// //     );
// //   };

// // export default AddReview;

// //old addreview2 code