import React, {Component} from "react";
import PropTypes from "prop-types";
import './Stylesheets/Follower.css';


class Follower extends Component{
	
	constructor(props){
		super(props);
	}

	onClick(evt){
		this.props.onSearchByFollower(evt.target.innerText);
	}

	renderFollowers(){

		if(this.props.followers !== "Not Found" && this.props.followers.length !==0){
			return this.props.followers.map((t,i)=>{
				return(<div className="follower" onClick={this.onClick.bind(this)}>{t.login}</div>);
			});
		}
		else if(this.props.followers==="Not Found"){
			return (<div>Usuario inexistente!</div>);
		}
	}

	render(){
		return(<div className="col-md-6 col-sm-12 col-xs-12 follower-mayor-container">
		<div><h2>Lista Seguidores:</h2></div>
		<div className="followers-container">
		{this.renderFollowers()}
		</div>
		</div>);


	}

}



Follower.PropTypes={
	onSearchByFollower: PropTypes.func.isRequired,
	followers:PropTypes.object.isRequired
}


export default Follower;