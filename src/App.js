import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/project/ProjectDetails";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Dashboard />
					</Route>
					<Route path="/project/:id" component={ProjectDetails}></Route>
				</Switch>
			</div>
		);
	}
}

export default App;
