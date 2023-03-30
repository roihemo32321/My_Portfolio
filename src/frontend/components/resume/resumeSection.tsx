import styles from "../../styles/components/resume/resumeSection.module.scss";

type Props = {
	sectionTitle: string;
	sectionInfo: string;
};

export default function ResumeSection({ sectionTitle, sectionInfo }: Props) {
	return (
		<div className={styles["resume-section-container"]}>
			<div className={styles["section-title"]}>{sectionTitle}</div>
			<div className={styles["section-info"]}>{sectionInfo}</div>
		</div>
	);
}
