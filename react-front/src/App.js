import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { user: [] }

  componentDidMount(){
    fetch("/users")
      .then(res=>res.json())
      .then(data =>this.setState({data}))
  }

  handleClick=()=>{
    console.log(this.state.data[0].BNO)
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
          <div><a href="/users">go user</a></div>
          <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default App;
