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
				sectionTitle: "Computer Science",
				sectionInfo:
					"5 units of programming using C# and Assembly, I learned the basics of programming such as loops, conditions, etc. I was also taught about data structure such as arrays, lists, binary trees and more.",
			},
			{
				sectionTitle: "E2E Web Project",
				sectionInfo:
					"I had to make a 5 units web development project using C#, Asp.net, SQL, CSS, and HTML5. In the twelfth grade I had to present my project to an examiner from the Ministry of Education.",
			},
			{
				sectionTitle: "Certificate of Excellence",
				sectionInfo: "I am a recipient of the Ministry of Education’s Certificate of Excellence.",
			},
		],
	},
	{
		mainTitle: "Military",
		subTitle: "2020-2023",
		resumeSections: [
			{
				sectionTitle: "Frontend experience",
				sectionInfo:
					"I designed and developed multiple front-end features utilizng skills such as Scss, Javascript and React. I was in charge of fixing front problems and improving responsivity.",
			},
			{
				sectionTitle: "Backend experience",
				sectionInfo:
					"Our products handle plenty of data, as such I optimizied the system to make it more efficient using GraphQL, SQL, Rest API, and more.",
			},
			{
				sectionTitle: "Mentored new members",
				sectionInfo:
					"I was in charge of mentoring new team members. In my mentoring section I organized their tasks using Microsoft Teams, gave them personal and professional challanges to imporve their skills, and I made sure that they understand the technologies that we work with.",
			},
		],
	},
];

export default function Resume() {
	const titleAnimationRef = useRef<HTMLDivElement | null>(null);
	const titleAnimation = useElementOnScreen(titleAnimationRef);

	return (
		<section className={styles["resume-container"]} id="resume">
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
		</section>
	);
}
