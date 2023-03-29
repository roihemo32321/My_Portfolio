import styles from "../../styles/components/skills/skills.module.scss";
import SingleSkill from "./singleSkill";
import JavaScriptIcon from "./svgs/javaScriptIcon";
import TypeScriptIcon from "./svgs/typeScriptIcon";
import ReactIcon from "./svgs/reactIcon";
import NodeIcon from "./svgs/nodeIcon";
import NextIcon from "./svgs/nextIcon";
import SassIcon from "./svgs/sassIcon";
import GraphQLIcon from "./svgs/graphQL";
import RestIcon from "./svgs/restApiIcon";
import MySqlIcon from "./svgs/mySqlIcon";
import useElementOnScreen from "@/shared/libs/hooks/useElementOnScreen";
import { useRef } from "react";

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
];

export default function Skills() {
	const animationRef = useRef<HTMLDivElement>(null);
	const animationOnScreen = useElementOnScreen(animationRef);

	return (
		<div className={styles["skills-main-container"]} id="skills">
			<div className={styles["background-container"]} />
			<div className={styles["main-skills-container"]}>
				<div className={`${styles["skills-title"]} ${animationOnScreen ? styles["show-animation"] : ""}`} ref={animationRef}>
					<span className={styles["main-span"]}>Main</span>
					<span className={styles["skills-span"]}>Skills</span>
				</div>
				<div className={styles["skills-container"]}>
					{skillsSvgs.map((val) => {
						return <SingleSkill key={val.title} svgComponent={val.svg} title={val.title} />;
					})}
				</div>
			</div>
		</div>
	);
}
