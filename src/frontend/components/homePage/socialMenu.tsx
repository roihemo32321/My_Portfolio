import styles from "../../styles/components/homePage/socialMenu.module.scss";

export default function SocialMenu() {
	return (
		<div className={styles["main-socials-container"]}>
			<div className={styles["title-style"]}>Contact me at:</div>
			<div className={styles["social-options"]}></div>
		</div>
	);
}
