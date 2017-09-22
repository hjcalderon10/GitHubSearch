import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextBox from "./TextBox.js";
import ListaUsuarios from "./ListaUsuarios.js";
import Follower from "./Follower.js";
import Resumen from "./Resumen.js";

class App extends Component {
  constructor(props){

    super(props);
    this.state={
      listaUsuarios:[],
      followers:[],
      user:"",
      resumen:[]
    };

    this.onSearch = this.onSearch.bind(this);
    this.onSearchByFollower = this.onSearchByFollower.bind(this);
    this.historial = this.historial.bind(this);
  }

  onSearchByFollower(usuario){
    var envio = "/getFollowers/:" + usuario;
    fetch(envio, {method:"GET", headers:{accept:"application/json"}})
    .then((res) =>{
      if (res.ok){
        return res.json();
      }
    })
    .then((resp)=>{
      var joined;
      if(this.state.listaUsuarios === undefined){
        joined = [usuario];
      }
      else{
        joined = this.state.listaUsuarios;
        joined = joined.concat({usuario});
      }
      this.setState({
        listaUsuarios:joined,
        followers:resp.data,
        user:usuario
      });
    });
  }

  onSearch(usuario){
    var envio = "/getFollowers/:" + usuario;
    fetch(envio, {method:"GET", headers:{accept:"application/json"}})
    .then((res) =>{
      if (res.ok){
        return res.json();
      }
    })
    .then((resp)=>{
      if(resp.code !== undefined){
        this.setState({
          followers:resp.status,
          listaUsuarios:[],
          user:""
        });
      }
      else{
        var joined = [{usuario}];
        this.setState({
          listaUsuarios:joined,
          followers:resp.data,
          user:usuario
        });
      }
    });
  }

  historial(){
    fetch("/historial", {method:"GET", headers:{accept:"application/json"}})
    .then((res) =>{
      if (res.ok)
        return res.json();
    })
    .then((resp)=>{
      this.setState({
        resumen:resp
      });
    });
  }

  render() {
    return (
      <div className="App">
      <div className="Space"></div>
      <TextBox onSearch = {this.onSearch} user = {this.state.user} historial={this.historial}/>
      <div className="row">
      <ListaUsuarios listaUsuarios={this.state.listaUsuarios}/>
      <Follower onSearchByFollower = {this.onSearchByFollower} followers={this.state.followers}/>
      </div>
      <Resumen className="historial" resumen={this.state.resumen}/>
      </div>
      );
  }
}

export default App;
