import React, {Component} from "react";
import PropTypes from "prop-types";
//import "./Stylesheets/Followers.css";

class Follower extends Component{
	
	constructor(props){
		super(props);
	}


renderAccion(){
		if(this.props.listaUsuarios.length !== 0){
			return (<div className="recursos">
				this.props.listaUsuarios.map((t,i)=>{
					<div className="recurso">
					<span>Nombre usuario: </span>
					<span>{t.nombre_usuario}</span>      
					</div>
					</div>}));
		}
		else{
			return <div></div>;
		}
	}

	render(){
		return(
		<div className="content" id="contenidoRecursos">
		{this.renderAccion()}
		</div>
		);
	}
}


Follower.PropTypes={
	recursos:PropTypes.object.isRequired
};


export default Follower;