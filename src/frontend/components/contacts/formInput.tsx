import React, { useState } from "react";
import styles from "../../styles/components/contacts/formInput.module.scss";
import { useFormStore } from "@/frontend/libs/stores/formStore";

type Props = {
	placeholder: string;
	formName: string;
};

export default function FormInput({ placeholder, formName }: Props) {
	const data = useFormStore((state: any) => state[placeholder]);
	const setData = useFormStore((state: any) => state[`set${placeholder}`]);
	const [isValid, setIsValid] = useState<boolean>(true);

	const validation = (str: string) => {
		if (placeholder === "Email") {
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
				placeholder={placeholder}
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
