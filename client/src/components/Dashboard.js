import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import styled from "styled-components";
import DashBoard from "../images/DashBoard.png";

const StyledDashBoard = styled.div`
    background-image: url(${DashBoard});
    background-size: cover;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;

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
    margin-top:10%;
    width:100%;
    height:50%;
    background-color:black;
    opacity: 0.8;
    z-index: -2;
    display:flex;
    flex-wrap:nowrap;
    text-align:center;
        // @media(max-width: 300px){font-size: 0.4rem; display: flex; flex-direction:column;}
        // @media(max-width: 600px){font-size: 1rem;}


    .reviews {
        width:100%; 
        display:flex;
        flex-direction:row;
        flex-wrap:wrap; 
        justify-content:flex-start;
        align-items:flex-start;
        z-index: front;
    } 
      
    img {
        width: 40%;

    }

}

    
// form {
//     width: 70%;	    
//     margin: 1% auto 2% auto;	    
//     padding: 3rem 1rem;	      
//     border-radius: 5rem;	  



//     // ::before {
//     //     background-image: url(${DashBoard});
//     //     background-size: cover;
//     //     content: "";
//     //     display: block;
//     //     position: absolute;
//     //     top: 0;
//     //     left: 0;
//     //     width: 100%;
//     //     height: 100%;
//     //     z-index: -2;
//     //     opacity: 0.8;
//     //   }   
      
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
//         width: 50%;
//         padding: 1rem;
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

`;

const Dashboard = (props) => {
    const [ restos, setRestos ] = useState();

    useEffect(() => {
        axiosWithAuth()
        .get("api/reviews")
        .then(res => {
            setRestos(res.data);
            console.log('resto data = ', res.data);
        })
        .catch(err => {
            console.log("Server error", err)
        });
    }, []);

  return (
    <StyledDashBoard>
        <nav>
        <h1>Welcome User!</h1>
        <a
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          alt="Homepage"
        >
          Home
        </a>
        <Link to="/login">Log Out</Link>
        <Link to="/">Search</Link>
      </nav>
      
      <div className='dashboard'>
        {restos &&
        restos.map(resto => {
            return (
                <div className='reviews'>
                <div key {...resto.id} resto={resto}>
                    <h3>Menu Item: {resto.menu_item}</h3>
                    <figure>
                    <img src={resto.item_image_url} alt="Menu item" />
                    </figure>
                    <h3>Restaurant ID: {resto.restaurant_id}</h3>
                    <h3>{resto.item_review}</h3>
                </div>
                </div>
            )
        })
        }
        </div>
    </StyledDashBoard>
  );
};

export default Dashboard;
