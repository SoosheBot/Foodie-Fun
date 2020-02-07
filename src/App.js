// import React, { useState, useEffect } from "react";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { axiosWithAuth } from "./utils/axiosWithAuth";
import PrivateRoute from "./utils/PrivateRoute";

import AddReview from "./components/AddReview";
import SearchReview from './components/SearchReview';
import SearchFilter from './components/SearchFilter';
import SearchRestaurant from './/components/SearchRestaurant';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import AddRestaurant from './components/AddRestaurant';
import SearchCuisine from './components/SearchCuisine';
import Reviews from './components/Reviews';
import EditReview from "./components/EditReview";

import "./App.css";

function App(props) {

  // const deleteItem = id => {
  //   axiosWithAuth()
  //     .delete(`/api/movies/${id}`)
  //     .then(response => {
  //       console.log("delete", response.data)
  //       setItems(response.data);
  //       // props.history.push("/");
  //     })
  //     .catch(err => console.log(err));
  // };



  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/reviews" component={Reviews}/>
          <Route path="/edit-review/:id" component={EditReview}/>
          <PrivateRoute path='/SearchCuisine' component={SearchCuisine}/>
          <PrivateRoute path='/SearchReview' component={SearchReview} />
          <PrivateRoute path='/SearchFilter' component={SearchFilter} />
          <PrivateRoute path='/SearchRestaurant' component={SearchRestaurant} />
          <PrivateRoute path="/add-review" component={AddReview} />
          <Route path="/add-restaurant" component={AddRestaurant} />
          <Route path="/add-review" component={AddReview} />
          <Route exact path="/login" component={Login} />
          <Route path="/" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// CODE TO BE IMPLEMENTED LATER -- DO NOT DELETE
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route path='/add-restaurant' component={AddRestaurant} />
//           <Route exact path="/" component={SignUp} />
//           <Route path="/login" component={Login} />
//           <PrivateRoute path="/homepage" component={Homepage} />
//         </Switch>
//       </Router>
//     </div>
//   );
// }
