import styles from "../../styles/components/homePage/socialMenu.module.scss";
import GitHubIcon from "../../../shared/components/svgs/github";
import LinkedinIcon from "../../../shared/components/svgs/linkedin";
import TwitterIcon from "../../../shared/components/svgs/twitter";
import Link from "next/link";

const socialOptions = [
	{ icon: <LinkedinIcon className={styles["icon-style"]} />, link: "https://www.linkedin.com/in/roie-hemo/" },
	{ icon: <GitHubIcon className={styles["icon-style"]} />, link: "https://github.com/roihemo32321" },
	{ icon: <TwitterIcon className={styles["icon-style"]} />, link: "https://twitter.com/" },
];

export default function SocialMenu() {
	return (
		<div className={styles["main-socials-container"]}>
			<div className={styles["title-style"]}>Find me on:</div>
			<div className={styles["social-options"]}>
				{socialOptions.map((val) => {
					return (
						<Link className={styles["option-container"]} key={val.link} href={val.link} target="_blank" aria-label="contact-me">
							{val.icon}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
