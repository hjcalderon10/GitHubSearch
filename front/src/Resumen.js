import React, {Component} from "react";
import PropTypes from "prop-types";
import './Stylesheets/Resumen.css';


class Resumen extends Component{
	
	constructor(props){
		super(props);
	}

	renderUsers(){
		return this.props.resumen.map((t,i)=>{
			return(<div> <b>{t.usuario} : </b>{this.renderFollowers(t.data)}</div>);				
		});
	}

	renderFollowers(data){
		return data.map((t,i)=>{
			return(<span>{t.login}, </span>);
		});
	}

	render(){
		return(<div className = "historia"><h2>Perfiles consultados con sus seguidores:</h2>
		{this.renderUsers()}
		</div>);


	}

}



Resumen.PropTypes={
	resumen:PropTypes.object.isRequired
}


export default Resumen;