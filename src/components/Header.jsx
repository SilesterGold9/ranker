import { NavLink } from "react-router-dom";
import { routes } from "./routes";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header>
			<NavLink to='/' className={styles.logoLink}>
				<img
					src='src\assets\images\ranker-high-resolution-logo-transparent.svg'
					alt='logo'
					className={styles.logo}
				/>
			</NavLink>
			<nav className={styles.nav}>
				<ul>
					{routes.map((route, index) => (
						<li key={index}>
							<NavLink
								to={route.path}
								end={route.exact}
								className={({ isActive }) =>
									isActive ? styles.active : undefined
								}>
								{route.name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
