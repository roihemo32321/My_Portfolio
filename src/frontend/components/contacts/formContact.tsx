import React from "react";
import styles from "../../styles/components/contacts/formContact.module.scss";
import FormInput from "./formInput";
import TextareaInput from "./textareaInput";

const inputsContainer = ["Name", "Email", "Subject", "Message"];

export default function FormContact() {
	const returnClassName = (val: string) => {
		if (val === "Email" || val === "Name") return "grid-one-span";
		return "grid-two-span";
	};

	return (
		<form className={styles["form-container"]}>
			<div className={styles["form-grid-container"]}>
				{inputsContainer.map((val) => (
					<div key={val} className={styles[returnClassName(val)]}>
						{val === "Message" ? <TextareaInput placeholder={val} /> : <FormInput placeholder={val} />}
					</div>
				))}
			</div>
			<button className={styles["button-style"]}>Send message!</button>
		</form>
	);
}
