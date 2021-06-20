import React from "react";

const ProjectDetails = (props) => {
	// console.log(props);
	const id = props.match.params.id;
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span
						className="card-title"
						style={{ fontWeight: "400", fontSize: "30px" }}
					>
						Project Title - {id}
					</span>
					<p>
						Mollit elit officia irure sunt esse. Cillum cillum laboris qui do
						dolore officia elit eiusmod ut velit aliquip nulla officia. In
						excepteur sit est duis nulla ad esse sit adipisicing. Qui in eiusmod
						excepteur aute culpa adipisicing esse non sunt.
					</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by SHUBHAM</div>
					<div>2nd September, 2am</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
