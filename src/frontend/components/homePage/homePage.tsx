import styles from "../../styles/components/homePage/homePage.module.scss";
import Navbar from "./navbar";
import Profile from "./profile";
import SocialMenu from "./socialMenu";
import Image from "next/image";

export default function HomePage() {
	return (
		<div className={styles["home-page-container"]} id="home">
			<div className={styles["background-container"]} />
			<Navbar />
			<div className={styles["main-content-container"]}>
				<div className={styles["top-main-container"]}>
					<div className={styles["about-me-container"]}>
						<Profile />
						<SocialMenu />
					</div>
					<div className={styles["laptop-style"]}>
						<Image className={styles["laptop-image"]} src="/static/images/laptop.webp" alt="not-loaded" fill />
						<div className={`${styles["line-container"]}`}>
							<span className={styles["blue-span"]}>console</span>
							<span className={styles["white-span"]}>.</span>
							<span className={styles["yellow-span"]}>log</span>
							<span className={styles["purple-span"]}>(</span>
							<span className={styles["orange-span"]}>{`"Hello World"`}</span>
							<span className={styles["purple-span"]}>)</span>
							<span className={styles["white-span"]}>;</span>
						</div>
					</div>
				</div>
				<div className={styles["bottom-main-container"]}>
					<div className={styles["copyright-style"]}>© 2023 by Roie Hemo All rights reserved</div>
				</div>
			</div>
		</div>
	);
}
