import React, { useState } from "react";
import styles from "../../styles/components/contacts/formInput.module.scss";
import { useFormStore } from "@/libs/stores/formStore";
import { formFields, formFieldsKeys } from "@/libs/types/formTypes";

type Props = {
	placeholder: string;
	formName: string;
};

export default function FormInput({ placeholder, formName }: Props) {
	const data = useFormStore((state) => state[placeholder as formFieldsKeys]);
	const setData = useFormStore((state) => state[`set${formFields[placeholder as formFieldsKeys]}`]);
	const [isValid, setIsValid] = useState<boolean>(true);

	const validation = (str: string) => {
		if (placeholder === "email") {
			const emailRgex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
			if (!emailRgex.test(str)) {
				setIsValid(false);
			} else {
				setIsValid(true);
			}
		} else {
			if (str === "" && isValid) {
				setIsValid(false);
			} else {
				setIsValid(true);
			}
		}
	};

	return (
		<div className={styles["input-container"]} data-is-valid={isValid}>
			<input
				type="text"
				placeholder={formFields[placeholder as formFieldsKeys]}
				className={styles["input-style"]}
				name={formName}
				value={data}
				onChange={(e) => {
					setData(e.target.value);
					validation(e.target.value);
				}}
			/>
		</div>
	);
}
