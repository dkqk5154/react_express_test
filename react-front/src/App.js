import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { user: [] }

  componentDidMount(){
    console.log("hey")
    fetch("/users")
      .then(res=>res.json())
      .then(users=>console.log(users))
      .then(console.log("성공"))
      .catch(error=>console.log("오류"))
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
          <a href="/users">go user</a>
          <li>{this.state.user}</li>
      </div>
    );
  }
}

export default App;
