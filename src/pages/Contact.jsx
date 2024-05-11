import {Component} from "react";
import { Navigate } from "react-router-dom";

export default class ContactPage extends Component {
	constructor(){
		super();

		this.state = {
			shouldNavigate: false
		}
	}

	updateShouldNavigate(){
		this.setState({shouldNavigate: true});
	}

	render(){
		return (<>
			{this.state.shouldNavigate && <Navigate to={"/"} />}
			<h1>Contact page</h1>
			<button onClick={() => this.setState({shouldNavigate: true})}>Go home</button>
		</>);
	}
}