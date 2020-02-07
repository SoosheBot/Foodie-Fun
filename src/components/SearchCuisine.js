
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Signup from '../images/Signup.png';
import axios from 'axios';

const StyledSearchCuisines = styled.div`
  background-image: url(${Signup});
  background-size: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  opacity: 0.5;

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
      width: 10%;
      padding: 2%;
      text-decoration: none;
      font-size: 1.8vw;
      font-weight: bold;
      text-align: center;
      &:hover {
        color: #c45228;
      }
      @media (max-width: 500px) {
        font-size: 0.5rem;
        display: flex;
        flex-direction: column;
      }
      @media (max-width: 825px) {
        font-size: 1rem;
      }
    }
  }

  h1 {
    color: #c45228;
    text-shadow: 1px 2px #181212;
  }

  h2,
  h3 {
    color: #c45228;
    text-shadow: 1px 2px #181212;
  }

  h4 {
    color: #181212;
    font-weight: bold;
    font-size: 1.4rem;
    text-shadow: 1px 1px #181212;
  }

  p {
    color: #181212;
    color: #c45228;
    text-shadow: 1px 2px #181212;
    margin: 0 auto;
  }

  a {
    color: #e8964a;
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }
  }

  .dashboard {
    margin-top: 10%;
    width: 100%;
    background-color: black;
    opacity: 0.8;
    z-index: -2;
    display: flex;

    .reviews {
      z-index: front;
      display: flex;

      img {
        width: 10%;
      }
    }
  }

`;

function SearchCuisine() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
//     const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
      axios
       .get('https://foodiefunbw.herokuapp.com/api/cuisines')
       .then(res => {
        //console.log('cuisines', res)
        const cuisine = res.data
        //console.log(cuisine)
        setItems(cuisine)
        //console.log(items)
        setLoading(false);
      })
    }, []);
    console.log(items)

    const handleInputChange = event => {
       setQuery(event.target.value);
       };


    return (
      <StyledSearchCuisines>   
       <h1>Cuisine Search</h1>
       <form className="search">
         <select>
           <option>----Select----</option>
            {items.map((item)=>(
                <option key={item.id} value={item.cuisine_name}>{item.cuisine_name}</option>
            ))}
         </select> 
         <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search by Cuisine"
            autoComplete="off"
          />
       </form>
     </StyledSearchCuisines>
    );
}

  export default SearchCuisine;


//   export default function ReviewsList() {
//     const [data, setData] = useState([]);
//     const [query, setQuery] = useState("");
//     useEffect(() => {
//       axiosWithAuth()
//         .get('api/restaurants')
//         .then(res => {
//           console.log('results', res)
//           const restaurants = res.data.filter(
//             restaurant =>
//             restaurant.cuisine_name
//             .toLowerCase()
//             .includes(query.toLowerCase())
//           );
//          setData(restaurants);
//         });
//     }, [query]);
    
//     const handleInputChange = event => {
//       setQuery(event.target.value);
//     };
//     return (
//      <section>
//       <div className="restaurants">
//        </div>   
//     <h1>List of Restaurants</h1>  
             
//       <StyledSearchRestaurant>   
//        <form className="search">
//           <input
//             type="text"
//             onChange={handleInputChange}
//             value={query}
//             name="name"
//             tabIndex="0"
//             className="prompt search-name"
//             placeholder="search by Cuisine"
//             autoComplete="off"
//           />
//         </form>
//         </StyledSearchRestaurant>

//         <div className="restaurant">
//           {data.map(data => {
//             return (
//             <div key={data.id}>
//             <h3>Name: {data.name}</h3>
//             <h3>Cuisine: {data.cuisine_name}</h3>
//             <h4>Location: {data.location}</h4>
//             <h4>Hours: {data.hours_of_operation}</h4>
//             <h4>Restaurant Image: {data.img_url}</h4>
//             </div>
//             )
//           })}
//         </div>  
//       </section>
//     );
// }