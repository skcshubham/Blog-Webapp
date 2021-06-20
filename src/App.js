import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/project/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/project/CreateProject";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Dashboard />
					</Route>
					<Route path="/project/:id" component={ProjectDetails} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/create" component={CreateProject} />
				</Switch>
			</div>
		);
	}
}

export default App;
