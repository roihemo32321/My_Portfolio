import styles from "../../styles/components/contacts/contacts.module.scss";
import GitHubIcon from "@/sharedSvgs/github";
import LinkedinIcon from "@/sharedSvgs/linkedin";
import SingleSocialLink from "./singleSocialLink";
import FormContact from "./formContact";
import Error from "./error";
import { useRef } from "react";
import useElementOnScreen from "@/shared/libs/hooks/useElementOnScreen";

const socialArray = [
	{ title: "Linkedin", svg: <LinkedinIcon />, link: "https://www.linkedin.com/in/roie-hemo/" },
	{ title: "GitHub", svg: <GitHubIcon />, link: "https://github.com/roihemo32321" },
];

export default function Contacts() {
	const mainTitleRef = useRef<HTMLDivElement>(null);
	const titleAnimation = useElementOnScreen(mainTitleRef);
	const socialRef = useRef<HTMLDivElement>(null);
	const socialAnimation = useElementOnScreen(socialRef);
	const copyrightRef = useRef<HTMLDivElement>(null);
	const copyrightAnimation = useElementOnScreen(socialRef);

	return (
		<section className={styles["contacts-container"]} id="contacts">
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
					<footer className={styles["main-footer-container"]}>
						<div className={`${styles["social-links-container"]} ${socialAnimation ? styles["social-animation"] : ""}`} ref={socialRef}>
							<div className={styles["title-container"]}>Let&apos;s get in touch:</div>
							<div className={styles["social-links"]}>
								{socialArray.map((val) => (
									<SingleSocialLink key={val.title} link={val.link} title={val.title} svg={val.svg} />
								))}
							</div>
						</div>
						<div className={`${styles["copyright-style"]} ${copyrightAnimation ? styles["show-copyright"] : ""}`} ref={copyrightRef}>
							© 2023 by Roie Hemo All rights reserved
						</div>
					</footer>
				</div>
			</div>
		</section>
	);
}
