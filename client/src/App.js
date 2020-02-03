import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import addRestaurant from './components/AddRestaurant';
import './App.css';

function App() {
  return (
    <div className="App">
      <addRestaurant />

      {/* <Login /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
