import styles from "../../styles/components/homePage/homePage.module.scss";
import Navbar from "./navbar";
import Profile from "./profile";
import SocialMenu from "./socialMenu";

export default function HomePage() {
	return (
		<div className={styles["home-page-container"]}>
			<div className={styles["background-container"]} />
			<Navbar />
			<Profile />
			<SocialMenu />
		</div>
	);
}
