import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<h1>Hey There</h1>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
