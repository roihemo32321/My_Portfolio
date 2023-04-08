import { useRef } from "react";
import styles from "../../styles/components/resume/resume.module.scss";
import Experience from "./experience";
import useElementOnScreen from "@/shared/libs/hooks/useElementOnScreen";

const mainResumes = [
	{
		mainTitle: "Education",
		subTitle: "2017-2020",
		resumeSections: [
			{
				sectionTitle: "Worked on stupid stuff",
				sectionInfo:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium incidunt labore eligendi omnis soluta iste suscipit qui pariatur, possimus nisi earum ipsa vel molestiae itaque non necessitatibus fugit quis placeat.",
			},
			{
				sectionTitle: "Worked on stupid stuff",
				sectionInfo:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium incidunt labore eligendi omnis soluta iste suscipit qui pariatur, possimus nisi earum ipsa vel molestiae itaque non necessitatibus fugit quis placeat.",
			},
			{
				sectionTitle: "Worked on stupid stuff",
				sectionInfo:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium incidunt labore eligendi omnis soluta iste suscipit qui pariatur, possimus nisi earum ipsa vel molestiae itaque non necessitatibus fugit quis placeat.",
			},
		],
	},
	{
		mainTitle: "Military",
		subTitle: "2020-2023",
		resumeSections: [
			{
				sectionTitle: "Worked on stupid stuff",
				sectionInfo:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium incidunt labore eligendi omnis soluta iste suscipit qui pariatur, possimus nisi earum ipsa vel molestiae itaque non necessitatibus fugit quis placeat.",
			},
			{
				sectionTitle: "Worked on stupid stuff",
				sectionInfo:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium incidunt labore eligendi omnis soluta iste suscipit qui pariatur, possimus nisi earum ipsa vel molestiae itaque non necessitatibus fugit quis placeat.",
			},
			{
				sectionTitle: "Worked on stupid stuff",
				sectionInfo:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium incidunt labore eligendi omnis soluta iste suscipit qui pariatur, possimus nisi earum ipsa vel molestiae itaque non necessitatibus fugit quis placeat.",
			},
		],
	},
];

export default function Resume() {
	const titleAnimationRef = useRef<HTMLDivElement | null>(null);
	const titleAnimation = useElementOnScreen(titleAnimationRef);

	return (
		<div className={styles["resume-container"]} id="resume">
			<div className={styles["background-container"]} />
			<div className={`${styles["title-style"]} ${titleAnimation ? styles["show-animation"] : ""}`} ref={titleAnimationRef}>
				<span className={styles["my-span"]}>My</span>
				<span className={styles["resume-span"]}>Resume</span>
			</div>
			<div className={styles["resume-grid-container"]}>
				{mainResumes.map((val) => {
					return <Experience mainTitle={val.mainTitle} subTitle={val.subTitle} resumeSections={val.resumeSections} key={val.mainTitle} />;
				})}
			</div>
		</div>
	);
}
