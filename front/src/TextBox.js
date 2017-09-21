import React, {Component} from "react";
import PropTypes from "prop-types";
//import "./Stylesheets/TextBox.css";

class TextBox extends Component{
	constructor(props){
		super(props);
	}

	onKeyPress(evt){
		if(evt.keycode ===13){
			this.props.onSearch(evt.target.value);
		}
	}

	render(){
		return(
		    <div className="textBox">
		    	<div className="header">
		    		<div className="headerItem"><span>Busqueda por usuario de GitHub</span></div>
		    	</div>
		    	<input type="text" placeholder="GitHub username" value={this.prop.user? this.props.user:""}
		    		onKeyPress={this.onKeyPress.bind(this)}/>
			</div>
	    );
	}
}

TextBox.PropTypes={
	onSearch: PropTypes.func.isRequired,
	user: PropTypes.string.isRequired
}

export default TextBox;