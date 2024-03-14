import { NavLink } from "react-router-dom";
import { routes } from "./routes";

const Header = () => {
	return (
		<nav>
			<ul>
				{routes.map((route, index) => (
					<li key={index}>
						<NavLink
							to={route.path}
							end={route.exact}
							className={({ isActive }) =>
								isActive ? "active" : undefined
							}
						>
							{route.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Header;
