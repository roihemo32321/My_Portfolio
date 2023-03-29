import styles from "../../styles/components/homePage/homePage.module.scss";
import Navbar from "./navbar";
import Profile from "./profile";
import SocialMenu from "./socialMenu";
import Image from "next/image";
import CVDownload from "@/shared/components/downloadCV's/cvDownload";

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
						<Image src="/static/images/laptop3.png" alt="not-loaded" fill />
						<div className={`${styles["line-1"]}`}>{`console.log("Hello World");`}</div>
					</div>
				</div>
				<div className={styles["bottom-main-container"]}>
					<CVDownload />
					<div className={styles["copyright-style"]}>© 2023 by Roie Hemo All rights reserved</div>
				</div>
			</div>
		</div>
	);
}
