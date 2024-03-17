import styles from "./Loader.module.css";

const LoadingSpinner = () => {
	return (
		<>
			return (
			<div className={styles.loader}>
				<img
					className={styles.logo}
					src='src\assets\images\ranker-high-resolution-logo-transparent.svg'
					alt='Ranker Logo'
					loading='eager'
				/>
				<p>Loading...</p>
				<div className={styles.loadingAnimation}></div>
			</div>
		</>
	);
};

export default LoadingSpinner;
