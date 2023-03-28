import styles from "../../styles/components/homePage/homePage.module.scss";
import Navbar from "./navbar";
import Profile from "./profile";
import SocialMenu from "./socialMenu";
import Image from "next/image";

export default function HomePage() {
	return (
		<div className={styles["home-page-container"]}>
			<div className={styles["background-container"]} />
			<Navbar />
			<div className={styles["main-content-container"]}>
				<div className={styles["about-me-container"]}>
					<Profile />
					<SocialMenu />
				</div>
				<div className={styles["laptop-style"]}>
					<Image src="/static/images/laptop.png" alt="not-loaded" fill />
				</div>
			</div>
		</div>
	);
}
