import styles from "../../styles/components/about/about.module.scss";
import { useRef } from "react";
import useElementOnScreen from "../../../shared/libs/hooks/useElementOnScreen";

export default function About() {
	const leftSideRef = useRef<HTMLDivElement>(null);
	const leftSideOnScreen = useElementOnScreen(leftSideRef);
	const rightSideRef = useRef<HTMLDivElement>(null);
	const rightSideOnScreen = useElementOnScreen(rightSideRef);

	return (
		<section className={styles["about-container"]} id="aboutMe">
			<div className={styles["background-container"]} />
			<div className={`${styles["left-container"]} ${leftSideOnScreen ? styles["fade-right"] : ""}`} ref={leftSideRef}>
				<header className={styles["titles-container"]}>
					<h1 className={styles["about-title"]}>About</h1>
					<h1 className={styles["me-title"]}>Me</h1>
				</header>
			</div>
			<div className={styles["seperator-line"]} />
			<div className={`${styles["right-container"]} ${rightSideOnScreen ? styles["fade-left"] : ""}`} ref={rightSideRef}>
				<article className={styles["text-container"]}>
					<p>
						Hello, my name is Roie Hemo, I am a Full Stack Developer at the Israel Defense Forces. I am working on different E2E websites with a
						group of 7 full stack developers. Our products handle important data, and as a result, I had to work on system optimization.
					</p>
					<br />
					<p>
						I am close to finishing my military service and am excited to start a new professional challenge. In my everyday work I enjoy studying
						technologies and deepening my specializations. I love writing code and being part of a group that strives to develop impactful projects.
					</p>
					<br />
					<p>Besides being a developer I also love soccer, gaming, and hanging out with my friends.</p>
				</article>
			</div>
		</section>
	);
}
