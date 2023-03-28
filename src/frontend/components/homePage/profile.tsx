import styles from "../../styles/components/homePage/profile.module.scss";

export default function Profile() {
	return (
		<div className={styles["profile-container"]}>
			<div className={styles["main-titles-container"]}>
				<div className={styles["white-title"]}>Hello,</div>
				<div className={styles["titles-container"]}>
					<div className={styles["white-title"]}>I&apos;M</div>
					<div className={styles["purple-title"]}>Roie</div>
				</div>
				<div className={styles["sub-titles-container"]}>
					<div className={styles["purple-title"]}>Hemo</div>
					<div className={styles["developer-titles-container"]}>
						<div className={styles["mini-titles-container"]}>
							<div className={styles["line"]} />
							<div className={styles["mini-white-title"]}>web</div>
						</div>
						<div className={styles["mini-white-title"]}>developer</div>
					</div>
				</div>
			</div>
		</div>
	);
}
