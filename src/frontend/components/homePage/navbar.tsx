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
	const [closeMenu, setCloseMenu] = useState<boolean>(false);

	return (
		<header className={styles["navbar-container"]}>
			<label className={styles["hamburger-menu"]}>
				<input type="checkbox" checked={closeMenu} onChange={() => setCloseMenu(!closeMenu)} aria-label="hamburger" />
			</label>

			<nav className={styles["nav-options-container"]}>
				{navOptions.map((val) => {
					return (
						<Link
							className={styles["link-style"]}
							key={val.title}
							href={`/#${val.link}`}
							aria-label={`move_${val.title}`}
							onClick={() => setCloseMenu(false)}
						>
							{val.title}
						</Link>
					);
				})}
			</nav>
		</header>
	);
}
