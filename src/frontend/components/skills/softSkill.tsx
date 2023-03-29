import useElementOnScreen from "@/shared/libs/hooks/useElementOnScreen";
import { useRef } from "react";
import styles from "../../styles/components/skills/softSkill.module.scss";

type Props = {
	title: string;
};

export default function SoftSkill({ title }: Props) {
	const animationRef = useRef<HTMLDivElement>(null);
	const animationOnScreen = useElementOnScreen(animationRef);

	return (
		<div className={`${styles["soft-skill-container"]} ${animationOnScreen ? styles["show-animation"] : ""}`} ref={animationRef}>
			<div className={styles["square-style"]} />
			<div className={styles["title-style"]}>{title}</div>
		</div>
	);
}
