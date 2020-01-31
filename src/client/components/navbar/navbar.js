import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ isLoged, logout }) => {
	console.log(isLoged, "isLoged");
	useEffect(
		() => {
			console.log("amlo");
		},
		[isLoged]
	);

	return (
		<div>
			<nav class="navbar navbar-expand-lg fixed-top">
				<Link class="navbar-brand" to="/">
					<img src="https://www.gpsdashboard.com/wp-content/uploads/2014/07/GPSDashboard_Check-in_Logo_72dpi2.png"  id="logo"/>
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav6"
					aria-controls="navbarNav6"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<div class="collapse navbar-collapse" id="navbarNav6">
					<ul class="navbar-nav">
						<h3>
							<li class="nav-item active">
								<Link class="nav-link" to="/">
									Acceuil
								</Link>
							</li>
						</h3>

						<h3>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Festivals
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<h4>
										<Link className="dropdown-item" to="/festival-carthage">
											Carthage
										</Link>
									</h4>
									<h4>
										<Link className="dropdown-item" to="/festival-bizerte">
											Bizerte
										</Link>
									</h4>
									<h4>
										<Link className="dropdown-item" to="/festival-hammamet">
											Hammamet
										</Link>
									</h4>
									<h4>
										<Link className="dropdown-item" to="/festival-el-jem">
											El-Jem
										</Link>
									</h4>
								</div>
							</li>
						</h3>
						<h3>
							<li class="nav-item">
								<Link class="nav-link" to="/contact">
									Contact
								</Link>
							</li>
						</h3>
					</ul>
				</div>
				{!isLoged ? (
					<form class="form-inline">
						<button class="btn my-2 my-sm-0 btn-menu btn-register">
						<Link to="/login">
							se connecter
						</Link>
						</button>
						<Link class="btn btn-sm btn-primary text-white cursor-pointer mr-sm-5" id="signup" to="/signup">
							s'inscrire
						</Link>
					</form>
				) : (
					<button onClick={logout ? logout : null}>
						<button id="logout">Logout</button>
					</button>
				)}
			</nav>
		</div>
	);
};
export default Navbar;
