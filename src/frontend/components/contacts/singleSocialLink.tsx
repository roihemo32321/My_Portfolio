import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "../../styles/components/contacts/singleSocialLink.module.scss";

type Props = {
	svg: ReactElement;
	title: string;
	link: string;
};

export default function SingleSocialLink({ svg, title, link }: Props) {
	return (
		<Link href={link} className={styles["social-link-style"]}>
			<div className={styles["title-style"]}>{title}</div>
			<div className={styles["svg-container"]}>
				<div className={styles["svg-style"]}>{svg}</div>
			</div>
		</Link>
	);
}
