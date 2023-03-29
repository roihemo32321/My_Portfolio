import Link from "next/link";
import styles from "../../styles/components/homePage/navbar.module.scss";

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
		title: "Timelines",
		link: "timeLines",
	},
	{
		title: "Contacts",
		link: "contacts",
	},
];

export default function Navbar() {
	return (
		<div className={styles["navbar-container"]}>
			{navOptions.map((val) => {
				return (
					<Link className={styles["title-style"]} key={val.title} href={`/#${val.link}`}>
						{val.title}
					</Link>
				);
			})}
		</div>
	);
}
