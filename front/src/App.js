import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextBox from "./TextBox.js";
import Lista from "./Lista.js";
import Follower from "./Follower.js";

class App extends Component {
  constructor(props){

    super(props);
    this.state={
      listaUsuarios:[],
      followers:[]
    };
  }

  onSearch(user){
    fetch("/getFollowers/:user", {method:"GET", headers:{accept:"application/json"}})
    .then((res) =>{
      console.log(res);
      if (res.ok)
        return res.json();
    })
    .then((resp)=>{

      var joined = this.state.listaUsuarios.concat({user});
      this.setState({
        listaUsuarios:joined,
        followers:resp
      });
    });
  }
  render() {
    return (
      <div className="App">
      <TextBox onSearch = {this.onSearch.bind}/>
      <Lista listaUsuarios={this.state.listaUsuarios}/>
      <Follower followers={this.state.followers}/>
      </div>
      );
  }
}

export default App;
