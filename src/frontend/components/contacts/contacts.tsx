import React from "react";
import styles from "../../styles/components/contacts/contacts.module.scss";
import FacebookIcon from "@/shared/components/svgs/facebookIcon";
import GitHubIcon from "../../../shared/components/svgs/github";
import TwitterIcon from "../../../shared/components/svgs/twitter";
import LinkedinIcon from "../../../shared/components/svgs/linkedin";
import SingleSocialLink from "./singleSocialLink";

const socialArray = [
	{ title: "Linkedin", svg: <LinkedinIcon /> },
	{ title: "GitHub", svg: <GitHubIcon /> },
	{ title: "Facebook", svg: <FacebookIcon /> },
	{ title: "Twitter", svg: <TwitterIcon /> },
];

export default function Contacts() {
	return (
		<div className={styles["contacts-container"]} id="contacts">
			<div className={styles["background-container"]} />
			<div className={styles["contacts-grid-container"]}>
				<div className={styles["email-contact"]}></div>
				<div className={styles["social-links"]}>
					{socialArray.map((val) => (
						<SingleSocialLink key={val.title} link={val.title} title={val.title} svg={val.svg} />
					))}
				</div>
			</div>
		</div>
	);
}
