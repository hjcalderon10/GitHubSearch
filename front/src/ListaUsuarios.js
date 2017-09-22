import React, {Component} from "react";
import PropTypes from "prop-types";
import './Stylesheets/ListaUsuarios.css';


class ListaUsuarios extends Component{
	
	constructor(props){
		super(props);
	}



	renderUsers(){

		if(this.props.listaUsuarios.length !==0){
			return this.props.listaUsuarios.map((t,i)=>{
				return(<span className="usuario">{t.usuario}    -> </span>);
			});
		}
	}

	render(){
		return(<div className="col-md-6 col-sm-12 col-xs-12 users-mayor-container">
		<div><h2>Lista de Usuarios:</h2></div>
		<div className="users-container">
		{this.renderUsers()}
		</div>
		</div>);

	}


}



ListaUsuarios.PropTypes={
	listaUsuarios:PropTypes.object.isRequired
}


export default ListaUsuarios;