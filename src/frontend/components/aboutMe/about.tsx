import styles from "../../styles/components/about/about.module.scss";
import CVDownload from "../../../shared/components/downloadCV's/cvDownload";
import { useRef } from "react";
import useElementOnScreen from "../../../shared/libs/hooks/useElementOnScreen";

export default function About() {
	const leftSideRef = useRef<HTMLDivElement>(null);
	const leftSideOnScreen = useElementOnScreen(leftSideRef);
	const rightSideRef = useRef<HTMLDivElement>(null);
	const rightSideOnScreen = useElementOnScreen(rightSideRef);

	console.log("test");

	return (
		<div className={styles["about-container"]} id="aboutMe">
			<div className={styles["background-container"]} />
			<div className={`${styles["left-container"]} ${leftSideOnScreen ? styles["fade-right"] : ""}`} ref={leftSideRef}>
				<div className={styles["titles-container"]}>
					<div className={styles["about-title"]}>About</div>
					<div className={styles["me-title"]}>Me</div>
				</div>
				<div className={styles["cv-download-container"]}>
					<CVDownload />
				</div>
			</div>
			<div className={styles["seperator-line"]} />
			<div className={`${styles["right-container"]} ${rightSideOnScreen ? styles["fade-left"] : ""}`} ref={rightSideRef}>
				<div className={styles["text-container"]}>
					<p>
						Hello, my name is Roie Hemo, I am a Full Stack Developer at the Israel Defense Forces. I am working on different E2E websites with a
						group of 7 full stack developers. Our products handle important data, and as a consequence, I had to work on optimizing the system to
						make it more efficient.
					</p>
					<p>
						I am close to finishing my military service in 4 months and am excited to start a new challenge as a Full Stack Developer. In my
						everyday work, I enjoy studying technologies and deepening my specializations. I love writing code and being part of a group that
						strives to develop impactful projects.
					</p>
					<p>Besides being a developer I also love soccer, gaming, and hanging out with my friends.</p>
				</div>
			</div>
		</div>
	);
}
