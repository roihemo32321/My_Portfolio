import styles from "../../styles/components/homePage/navbar.module.scss";

const navOptions = [
	{
		title: "Main page",
	},
	{
		title: "About me",
	},
	{
		title: "Skills",
	},
	{
		title: "Timelines",
	},
	{
		title: "Contacts",
	},
];

export default function Navbar() {
	return (
		<div className={styles["navbar-container"]}>
			{navOptions.map((val) => {
				return (
					<div className={styles["title-style"]} key={val.title}>
						{val.title}
					</div>
				);
			})}
		</div>
	);
}
