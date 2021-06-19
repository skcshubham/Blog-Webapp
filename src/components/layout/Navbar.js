import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
	return (
		<div>
			<nav className="nav-wrapper grey darken-3">
				<div className="container">
					<Link to="/" className="brand-logo left">
						Blog Site
					</Link>
					<SignedInLinks />
					<SignedOutLinks />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
