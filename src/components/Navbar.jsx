import { NavLink } from "react-router-dom";


export default function Navbar(){

	return(
		<nav>
			<NavLink to={"/"}>
				Home
			</NavLink>
			<NavLink to={"/about/services"}>
				About
			</NavLink>
			<NavLink to={"/contact"}>
				Contact
			</NavLink>
		</nav>
	)
}