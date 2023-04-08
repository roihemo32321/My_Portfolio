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
		<div className={`${styles["resume-section-container"]} ${resumeAnimation ? styles["resume-animation"] : ""}`} ref={resumeRef}>
			<div className={styles["section-title"]}>{sectionTitle}</div>
			<div className={styles["section-info"]}>{sectionInfo}</div>
		</div>
	);
}
