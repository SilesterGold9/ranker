import styles from "./Loader.module.css";

const LoadingSpinner = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.ring}></div>
		</div>
	);
};

export default LoadingSpinner;
