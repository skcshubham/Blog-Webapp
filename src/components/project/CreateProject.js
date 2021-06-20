import React, { Component } from "react";

class CreateProject extends Component {
	state = {
		title: "",
		content: "",
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
					<h5 className="grey-text text-darken-3">Create new Blog Post</h5>
					<div className="input-field">
						<label htmlFor="title">Title</label>
						<input type="text" id="text" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="content">Blog Content</label>
						<textarea
							id="content"
							className="materialize-textarea"
							onChange={this.handleChange}
						></textarea>
						<div className="input-field">
							<button className="btn pink lighten-1 z-depth-0">Create</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default CreateProject;
