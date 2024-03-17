import Header from "../components/Header";
import styles from "./Home.module.css";

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<div className={styles.hero}>
					<h2>
						<span className={styles.gradientText}>Rankings</span> académicos
						para motivar os alunos, será você{" "}
						<span className={styles.holder}>o próximo Nº1?</span>
					</h2>
					<img
						className={styles.underline}
						src='src\assets\images\undraw_fun-underline.svg'
						alt='underline'
					/>
					<p className={styles.subtext}>
						Explore os rankings e descubra se você tem o necessário para ficar
						no top 1%!
					</p>
				</div>
			</main>
		</>
	);
};

export default Home;
