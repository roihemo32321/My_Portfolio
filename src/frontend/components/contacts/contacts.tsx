import styles from "../../styles/components/contacts/contacts.module.scss";
import GitHubIcon from "@/sharedSvgs/github";
import TwitterIcon from "@/sharedSvgs/twitter";
import LinkedinIcon from "@/sharedSvgs/linkedin";
import SingleSocialLink from "./singleSocialLink";
import FormContact from "./formContact";
import Error from "./error";
import { useRef } from "react";
import useElementOnScreen from "@/shared/libs/hooks/useElementOnScreen";

const socialArray = [
	{ title: "Linkedin", svg: <LinkedinIcon /> },
	{ title: "GitHub", svg: <GitHubIcon /> },
	{ title: "Twitter", svg: <TwitterIcon /> },
];

export default function Contacts() {
	const mainTitleRef = useRef<HTMLDivElement>(null);
	const titleAnimation = useElementOnScreen(mainTitleRef);

	return (
		<div className={styles["contacts-container"]} id="contacts">
			<div className={styles["background-container"]} />
			<div className={styles["contacts-flex-container"]}>
				<Error />
				<div className={`${styles["main-title-container"]} ${titleAnimation ? styles["show-animation"] : ""}`} ref={mainTitleRef}>
					<span className={styles["contact-span"]}>Contact</span>
					<span className={styles["me-span"]}>Me</span>
				</div>
				<div className={styles["main-flex-box"]}>
					<div className={styles["email-contact"]}>
						<FormContact />
					</div>
					<div className={styles["main-social-container"]}>
						<div className={styles["social-links-container"]}>
							<div className={styles["title-container"]}>Let&apos;s get in touch:</div>
							<div className={styles["social-links"]}>
								{socialArray.map((val) => (
									<SingleSocialLink key={val.title} link={val.title} title={val.title} svg={val.svg} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
