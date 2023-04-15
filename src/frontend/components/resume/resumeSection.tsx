import { useRef } from "react";
import styles from "../../styles/components/resume/resumeSection.module.scss";
import useElementOnScreen from "@/shared/libs/hooks/useElementOnScreen";

type Props = {
	sectionTitle: string;
	sectionInfo: string;
};

export default function ResumeSection({ sectionTitle, sectionInfo }: Props) {
	const resumeRef = useRef<HTMLDivElement | null>(null);
	const resumeAnimation = useElementOnScreen(resumeRef);

	return (
		<article className={`${styles["resume-section-container"]} ${resumeAnimation ? styles["resume-animation"] : ""}`} ref={resumeRef}>
			<h1 className={styles["section-title"]}>{sectionTitle}</h1>
			<p className={styles["section-info"]}>{sectionInfo}</p>
		</article>
	);
}
