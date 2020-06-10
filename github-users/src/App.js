import React from 'react';
import axios from "axios";
import './App.css';
import Card from "./components/Card";


class App extends React.Component() {

  constructor() {
    super();
    this.state = {
      name: "",
      username: "", 
      avatar: "",
      location: "",
      bio: "", 
      profile: "",
    };
   };

  componentDidMount() {
    fetch("https://api.github.com/users/cdlafortune")
      .then((response) => response.json())
      .then((userData) => {
        console.log("User data:", userData);
        this.setState({name: userData.name});
        this.setState({username: userData.login});
        this.setState({avatar: userData.avatar_url});
        this.setState({location: userData.location});
        this.setState({bio: userData.bio});
        this.setState({profile: userData.html_url});
      }) 
      .catch((error) => console.log(error));
  };
  
  
  render () {
    return (
      <div className="app">
        <header className="App-header">
          <h1>Github Users</h1>
        </header>

        <div className="card">
          <img href={this.state.avatar} alt="profile pic"/>
          <p>Name: {this.state.name}</p>
          <p>Username: {this.state.username}</p>
          <p>Location: {this.state.location}</p>
          <p>Bio: {this.state.bio}</p>
          <p>Profile: <a href={this.state.profile}>Github</a></p>
        </div>

        <Card/>
      </div>
    );
  }
  
}

export default App;
