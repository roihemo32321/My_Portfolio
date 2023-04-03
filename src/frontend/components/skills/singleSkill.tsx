import useElementOnScreen from "@/shared/libs/hooks/useElementOnScreen";
import { useRef } from "react";
import styles from "../../styles/components/skills/singleSkill.module.scss";

type Props = {
	svgComponent: JSX.Element;
	title: string;
};

export default function SingleSkill({ svgComponent, title }: Props) {
	const animationRef = useRef<HTMLDivElement>(null);
	const animationOnScreen = useElementOnScreen(animationRef);

	return (
		<div className={`${styles["single-skill-container"]} ${animationOnScreen ? styles["show"] : ""}`} ref={animationRef}>
			<div className={styles["svg-style"]}>{svgComponent}</div>
			<div className={styles["title-style"]}>{title}</div>
		</div>
	);
}
