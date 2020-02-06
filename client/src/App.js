import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { axiosWithAuth } from "./utils/axiosWithAuth";
import PrivateRoute from "./utils/PrivateRoute";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import AddRestaurant from './components/AddRestaurant';
import AddReview from "./components/AddReview";
import Reviews from "./components/Reviews";
import EditReview from "./components/EditReview";


import "./App.css";

function App(props) {
  const [savedList, setSavedList] = useState([]);

  const [items, setItems] = useState([]);
  const reviewed = localStorage.getItem("reviewed_by");

  useEffect(() => {
    axiosWithAuth()
      .get(`api/users/${reviewed}/reviews`)
      .then(res => {
        // console.log("reviews res.data", res.data);
        setItems(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [reviewed]);

  // const addToSavedList = update => {
  //   setSavedList([...savedList, update]);
  // };

  const editReview = (id, item) => { 
    // e.preventDefault();
    axiosWithAuth()
      .put(`api/reviews/${id}`, item)
      .then(res => {
        console.log("editReview is firing", res.data);
        const updatedItem = res.data
        const newItems = items.map(item => {
          if(item.id !== updatedItem.id){
            return item;
          }
          return updatedItem;
        })
        setItems(newItems);
        props.history.push('/dashboard');
      })
      .catch(err => {
        console.log("Error", err);
      });
  };

  const deleteItem = id => {
    axiosWithAuth()
      .delete(`/api/movies/${id}`)
      .then(response => {
        console.log("delete", response.data)
        setItems(response.data);
        // props.history.push("/");
      })
      .catch(err => console.log(err));
  };



  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/reviews" component={Reviews} editReview={props.editReview}/>
          <Route path="/edit-review/:id" render={props => (
            <EditReview {...props} items={items} editReview={editReview} />
          )}/>
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
