import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import styled from "styled-components";
import Signup from "../images/Signup.png";

const StyledSignUp = styled.div`
  background-image: url(${Signup});
  background-size: cover;
  // display: block;
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  // z-index: -2;

 
  nav{
    display: flex;
    justify-content: flex-end;
    align-items: center;        

   a{
        width:10%;
        padding: 2%;
        text-decoration: none;
        font-size: 1.8vw;
        font-weight:bold;
        text-align: center;
        &:hover{
            color: #c45228;
        }
        @media(max-width: 500px){font-size: 0.5rem; display:flex; flex-direction:column;}
        @media(max-width:825px){font-size: 1rem;}
    } 
} 
  

  form {
    width: 70%;
    margin: 1% auto 2% auto;
    padding: 3rem 1rem;
    border-radius: 5rem;

  
    input[name="email"],
    input[name="username"],
    input[name="password"],
    input[name="confirm"],
    input[name="location"] {
      border: 1px solid #e76e3c;
      border-radius: 5px;
      width: 80%;
      display: block;
      margin: 1rem auto 2rem auto;
      padding: 0.8rem 0;
    }

    label {
      display: block;
      width: 80%;
      margin: 2rem auto;
    }

    .submit {
      width: 50%;
      padding: 1rem;
      background-color: #c45228;
      border-radius: 5px;
      color: white;
      font-size: 0.9rem;
      text-shadow: 1px 2px #181212;
      border: 1px solid #e76e3c;

      &:hover {
        background-color: #e8964a;
        border: 1px solid #e76e3c;
        color: #181212;
        text-shadow: 1px 2px #181212;
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
    font-weight:bold;
    font-size:1.4rem;
    text-shadow: 1px 1px #181212;
  }

  p {
    color: #181212;
    // background-color: white;
    color: #c45228;
    text-shadow: 1px 2px #181212;
    // width: 50%;
    margin: 0 auto;
    // padding: 1rem;
  }

  a {
    color: #e8964a;
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }
  }
`;

const SignUp = props => {
  const { register, handleSubmit, errors } = useForm();

  // console.log("signup form firing", watch("email"));

  const submitForm = signupSubmit => {
    axiosWithAuth()
      .post("api/auth/register", signupSubmit)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/login");
      })
      .catch(err => {
        console.log("login error", err);
      });
  };

  return (
    <StyledSignUp>
      <nav>
        <a
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          alt="Homepage"
        >
          Home
        </a>
        <Link to='/dashboard'>My Account</Link>
        <Link to="./login">Log In</Link>
      </nav>
      <div className="signup-form">
        <form onSubmit={handleSubmit(submitForm)}>
          <h1>Sign Up for Foodie Fun</h1>
          <h2>Enter an Email</h2>
          <input
            type="text"
            name="email"
            placeholder="Enter an email..."
            ref={register({ required: true, maxLength: 30 })}
          />
          {errors.email && <p>Email is required!</p>}

          <h2>Create a Username</h2>
          <input
            type="text"
            name="username"
            placeholder="Enter a username..."
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.username && <p>Username is required!</p>}

          <h2>Create a Password</h2>
          <input
            type="text"
            name="password"
            placeholder="Enter a username..."
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.password && <p>Password is required!</p>}

          <h2>Location (City)</h2>
          <input
            type="text"
            name="location"
            placeholder="Enter your location..."
            ref={register({ required: true, maxLength: 15 })}
          />
          {errors.location && <p>Please enter your city!</p>}

          <br />
          <input className="submit" type="submit" />

          <h4>
            Aleady have an account? <br />
            <Link to="/login">Log in here.</Link>{" "}
          </h4>
        </form>
      </div>
    </StyledSignUp>
  );
};

export default SignUp;

// OLD CODE

// const SignUp = props => {
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//     email: "",
//     location: ""
//   });

//   const handleChange = e => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const submitForm = e => {
//     e.preventDefault();
//     axiosWithAuth()
//       .post()
//       .then(res => {
//         localStorage.setItem("token", res.data.payload);
//         props.history.push("/login");
//       })
//       .catch(err => {
//         console.log("signup error", err);
//       });
//   };

//   return (
//     <StyledSignUp>
//     <div className="signup-form">
//          <h1>Sign Up</h1>
//         <form onSubmit={submitForm}>
//           <input
//             type="text"
//             className="username"
//             placeholder="Enter username..."
//             value={credentials.username}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             className="password"
//             placeholder="Enter password..."
//             value={credentials.password}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             className="email"
//             placeholder="Enter email..."
//             value={credentials.email}
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             className="location"
//             placeholder="Enter zip code..."
//             value={credentials.location}
//             onChange={handleChange}
//           />
//           <button type="submit">Sign Up</button>
//         </form>
//     </div>
//     </StyledSignUp>
//   );
// };
