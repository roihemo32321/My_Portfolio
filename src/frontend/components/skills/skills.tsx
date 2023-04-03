import styles from "../../styles/components/skills/skills.module.scss";
import SingleSkill from "./singleSkill";
import JavaScriptIcon from "../../../shared/components/svgs/jsIcon";
import TypeScriptIcon from "../../../shared/components/svgs/typeScriptIcon";
import ReactIcon from "./svgs/reactIcon";
import NodeIcon from "./svgs/nodeIcon";
import NextIcon from "./svgs/nextIcon";
import SassIcon from "./svgs/sassIcon";
import GraphQLIcon from "./svgs/graphQL";
import RestIcon from "./svgs/restApiIcon";
import MySqlIcon from "./svgs/mySqlIcon";
import PythonIcon from "./svgs/python";
import useElementOnScreen from "@/shared/libs/hooks/useElementOnScreen";
import { useRef } from "react";
import SoftSkill from "./softSkill";

const skillsSvgs = [
	{ svg: <JavaScriptIcon />, title: "JavaScript" },
	{ svg: <TypeScriptIcon />, title: "TypeScript" },
	{ svg: <ReactIcon />, title: "React" },
	{ svg: <NodeIcon />, title: "Node.js" },
	{ svg: <NextIcon />, title: "Next.js" },
	{ svg: <SassIcon />, title: "Sass" },
	{ svg: <GraphQLIcon />, title: "GraphQL" },
	{ svg: <RestIcon />, title: "Rest API" },
	{ svg: <MySqlIcon />, title: "MySql" },
	{ svg: <PythonIcon />, title: "Python" },
];

const softSkills = [
	"Communication",
	"Teamwork",
	"Problem-solving",
	"Adaptability",
	"Self-learning",
	"Self-awareness",
	"Accountability",
	"Time management",
	"Emotional Intelligence",
	"Patience",
	"Open-Mindedness",
	"Work ethic",
	"Organization",
	"Mentorship",
];

export default function Skills() {
	const mainSkillanimationRef = useRef<HTMLDivElement>(null);
	const softSkillAnimationRef = useRef<HTMLDivElement>(null);
	const mainAnimationOnScreen = useElementOnScreen(mainSkillanimationRef);
	const softAnimationOnScreen = useElementOnScreen(softSkillAnimationRef);

	return (
		<div className={styles["skills-main-container"]} id="skills">
			<div className={styles["background-container"]} />
			<div className={styles["main-skills-container"]}>
				<div className={`${styles["skills-title"]} ${mainAnimationOnScreen ? styles["show-animation"] : ""}`} ref={mainSkillanimationRef}>
					<span className={styles["main-span"]}>Main</span>
					<span className={styles["skills-span"]}>Skills</span>
				</div>
				<div className={styles["skills-container"]}>
					{skillsSvgs.map((val) => {
						return <SingleSkill key={val.title} svgComponent={val.svg} title={val.title} />;
					})}
				</div>
			</div>
			<div className={styles["soft-skills-container"]}>
				<div className={`${styles["soft-title"]} ${softAnimationOnScreen ? styles["title-animation"] : ""}`} ref={softSkillAnimationRef}>
					<span className={styles["soft-span"]}>Soft</span>
					<span className={styles["skills-span"]}>Skills</span>
				</div>
				<div className={styles["skills-container"]}>
					{softSkills.map((val, index) => {
						return <SoftSkill key={index} title={val} />;
					})}
				</div>
			</div>
		</div>
	);
}
