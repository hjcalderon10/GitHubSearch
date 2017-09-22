import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Stylesheets/TextBox.css";

class TextBox extends Component{
	constructor(props){
		super(props);
	}

	onKeyPress(evt){
		if(evt.key ==="Enter"){
			this.props.onSearch(evt.target.value);
		}
	}
	onClick(evt){
		this.props.historial();
	}

	render(){
		return(
			<div className="textBox">
			<div className="header">
			<div className="headerItem"><h1>Busqueda por usuario de GitHub</h1></div>
			</div>
			<input id="inputBox" type="text" placeholder="GitHub UserName" onKeyPress={this.onKeyPress.bind(this)}/>
			<button id="boton" onClick={this.onClick.bind(this)}>Historial consultas</button>
			</div>
			);
		}
	}

	TextBox.PropTypes={
		onSearch: PropTypes.func.isRequired,
		historial: PropTypes.func.isRequired,
		user: PropTypes.string.isRequired
	}

	export default TextBox;