import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useForm } from "react-hook-form";

import styled from "styled-components";
import LogIn from "../images/LogIn.png";

const StyledLogIn = styled.div`
  margin-top: 8%;
  height: 80vh;
  color: #e8964a;
  display: block;
  width: 80%;
  margin: 2rem auto;

  form {
    width: 70%;
    margin: 1% auto 2% auto;
    padding: 3rem 1rem;
    border-radius: 5rem;

    ::before {
      background-image: url(${LogIn});
      background-size: cover;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
      opacity: 0.8;
    }

    input[name="username"],
    input[name="password"] {
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
        text-shadow: 1px 2px white;
      }
    }
  }

  h1 {
    color: #c45228;
    text-shadow: 1px 2px #181212;
  }

  h2 {
    color: #c45228;
    text-shadow: 1px 2px #181212;
  }

  p {
    color: black;
    background-color: white;
    width: 50%;
    margin: 0 auto;
    padding: 1rem;
  }

  a {
    color: #e8964a;
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }
  }
`;

const Login = props => {
  const { register, handleSubmit, watch, errors } = useForm();

  const submitForm = data => {
    axiosWithAuth()
      .post("", data)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => {
        console.log("login error", err);
      });
  };

  return (
    <StyledLogIn>
      <div className="login-form">
        <h1>Welcome! Log In to Your Foodie App!</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <h2>Username</h2>
          <input
            type="name"
            name="username"
            placeholder="Enter username..."
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.username && <p>ERROR! This field is required!</p>}

          <h2>Password</h2>
          <input
            name="password"
            placeholder="Enter password..."
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.password && <p>ERROR! This field is required!</p>}
          <input className="submit" type="submit" />
        </form>
      </div>
    </StyledLogIn>
  );
};

export default Login;


// OLD CODE

// const Login = props => {
// const [credentials, setCredentials] = useState({
//     username:'',
//     password:''
// });

// const handleChange = e => {
//     setCredentials({...credentials, [e.target.name]: e.target.value});
// };

// <input type='text'
// className='username'

// value={credentials.username}
// onChange={handleChange}
// />
// <input type='text'
// className='password'
// placeholder='Enter password...'
// value={credentials.password}
// onChange={handleChange}
// />
// <button type='submit'>Login</button>
