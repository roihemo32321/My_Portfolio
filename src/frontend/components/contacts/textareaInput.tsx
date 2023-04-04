import React from "react";
import styles from "../../styles/components/contacts/textareaInput.module.scss";

type Props = {
	placeholder: string;
};

export default function TextareaInput({ placeholder }: Props) {
	return (
		<div className={styles["textarea-container"]}>
			<textarea placeholder={placeholder} className={styles["textarea-style"]} />
		</div>
	);
}
