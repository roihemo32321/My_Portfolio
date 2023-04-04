import React from "react";
import styles from "../../styles/components/contacts/formContact.module.scss";
import FormInput from "./formInput";

const inputsContainer = ["Name", "Email", "Subject", "Message"];

export default function FormContact() {
	const returnClassName = (val: string) => {
		if (val === "Email" || val === "Name") return "grid-one-span";
		return "grid-two-span";
	};

	return (
		<div className={styles["form-container"]}>
			{inputsContainer.map((val) => (
				<div key={val} className={styles[returnClassName(val)]}>
					<FormInput placeholder={val} />
				</div>
			))}
		</div>
	);
}
