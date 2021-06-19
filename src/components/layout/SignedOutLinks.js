import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
	return (
		<div>
			<ul className="right">
				<li>
					<NavLink to="/">Sign Up</NavLink>
				</li>
				<li>
					<NavLink to="/">Log In</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default SignedOutLinks;
