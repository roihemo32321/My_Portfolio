import styles from "./cvDownload.module.scss";
import DocumentIcon from "../svgs/doc";
import Link from "next/link";

export default function CVDownload() {
	return (
		<Link className={styles["cv-btn"]} href="/static/files/CV.docx" target="_blank" aria-label="download-cv download">
			<div className={styles["title-style"]}>Download CV</div>
			<DocumentIcon className={styles["icon-container"]} />
		</Link>
	);
}
