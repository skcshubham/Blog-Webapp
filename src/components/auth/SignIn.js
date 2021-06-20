import React, { Component } from "react";

class SignIn extends Component {
	state = {
		email: "",
		password: "",
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<div className="container" style={{ width: "500px" }}>
				<form className="white" onSubmit={this.handleSubmit}>
					<h5
						className="grey-text text-darken-3"
						style={{ marginBottom: "30px" }}
					>
						Sign In
					</h5>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">LogIn</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
