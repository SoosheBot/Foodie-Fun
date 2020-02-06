import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";
import AddReview from "./components/AddReview";
import SearchReview from './components/SearchReview';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import AddRestaurant from './components/AddRestaurant';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path='/SearchReview' component={SearchReview} />
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
