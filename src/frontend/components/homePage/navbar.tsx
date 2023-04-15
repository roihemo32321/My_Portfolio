import Link from "next/link";
import styles from "../../styles/components/homePage/navbar.module.scss";
import { useState } from "react";

const navOptions = [
	{
		title: "Home",
		link: "home",
	},
	{
		title: "About me",
		link: "aboutMe",
	},
	{
		title: "Skills",
		link: "skills",
	},

	{
		title: "Resume",
		link: "resume",
	},
	{
		title: "Contacts",
		link: "contacts",
	},
];

export default function Navbar() {
	const [responsiveNav, setResponsiveNav] = useState<boolean>(false);

	return (
		<header className={styles["navbar-container"]}>
			<nav className={`${styles["nav-options-container"]} ${responsiveNav ? styles["show-responsive-nav"] : ""}`}>
				{navOptions.map((val) => {
					return (
						<Link
							className={styles["link-style"]}
							key={val.title}
							href={`/#${val.link}`}
							onClick={() => {
								if (responsiveNav) {
									setResponsiveNav(false);
								}
							}}
							aria-label={`move_${val.title}`}
						>
							{val.title}
						</Link>
					);
				})}
			</nav>

			<div className={styles["menu-icon"]} onClick={() => setResponsiveNav(!responsiveNav)}>
				<div className={`${styles["menu-btn-burger"]} ${responsiveNav ? styles["close-icon"] : ""}`} />
			</div>
		</header>
	);
}
