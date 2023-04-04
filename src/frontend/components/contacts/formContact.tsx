import React, { useRef } from "react";
import styles from "../../styles/components/contacts/formContact.module.scss";
import FormInput from "./formInput";
import TextareaInput from "./textareaInput";
import emailjs from "@emailjs/browser";
import { useFormStore } from "@/frontend/libs/stores/formStore";

const inputsContainer = ["Name", "Email", "Subject", "Message"];

export default function FormContact() {
	const formRef = useRef(null);
	const formData = useFormStore((store) => store);

	const formValidation = () => {
		const emailRgex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		if (formData.Message === "" || formData.Subject === "" || formData.Name === "") return false;
		if (!emailRgex.test(formData.Email)) return false;
		return true;
	};

	const returnClassName = (val: string) => {
		if (val === "Email" || val === "Name") return "grid-one-span";
		return "grid-two-span";
	};

	const sendEmail = (e: any) => {
		e.preventDefault();
		if (formRef.current === null) return;
		if (!formValidation()) return;

		emailjs.sendForm("service_gnkd44w", "template_gyb5tad", formRef.current, "qYfk_GOQx5fOsCLIM").then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			},
		);
		e.target.reset(); // Reseting form
	};

	return (
		<form className={styles["form-container"]} ref={formRef} onSubmit={sendEmail}>
			<div className={styles["form-grid-container"]}>
				{inputsContainer.map((val) => (
					<div key={val} className={styles[returnClassName(val)]}>
						{val === "Message" ? <TextareaInput placeholder={val} /> : <FormInput placeholder={val} formName={val} />}
					</div>
				))}
			</div>
			<button className={styles["button-style"]}>Send message!</button>
		</form>
	);
}
