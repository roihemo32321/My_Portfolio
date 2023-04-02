import Link from "next/link";
import styles from "../../styles/components/homePage/navbar.module.scss";
import MenuIcon from "../../../shared/components/svgs/menuIcon";
import CloseIcon from "../../../shared/components/svgs/close";
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
		<div className={styles["navbar-container"]}>
			<div className={`${styles["nav-options-container"]} ${responsiveNav ? styles["show-responsive-nav"] : ""}`}>
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
						>
							{val.title}
						</Link>
					);
				})}
			</div>
			{responsiveNav ? (
				<CloseIcon className={styles["menu-icon"]} onClick={() => setResponsiveNav(false)} />
			) : (
				<MenuIcon className={styles["menu-icon"]} onClick={() => setResponsiveNav(true)} />
			)}
		</div>
	);
}
