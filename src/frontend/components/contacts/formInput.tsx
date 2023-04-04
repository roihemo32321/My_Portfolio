import React from "react";
import styles from "../../styles/components/contacts/formInput.module.scss";

type Props = {
	placeholder: string;
};

export default function FormInput({ placeholder }: Props) {
	return (
		<div className={styles["input-container"]}>
			<input type="text" placeholder={placeholder} className={styles["input-style"]} />
		</div>
	);
}
