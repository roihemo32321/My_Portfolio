import React, { useState } from "react";
import styles from "../../styles/components/contacts/textareaInput.module.scss";
import { useFormStore } from "@/libs/stores/formStore";
import { formFields, formFieldsKeys } from "@/libs/types/formTypes";

type Props = {
	placeholder: string;
};

export default function TextareaInput({ placeholder }: Props) {
	const data = useFormStore((state) => state[placeholder as formFieldsKeys]);
	const setData = useFormStore((state) => state[`set${formFields[placeholder as formFieldsKeys]}`]);
	const [isValid, setIsValid] = useState<boolean>(true);

	const validation = (str: string) => {
		if (str === "" && isValid) {
			setIsValid(false);
		} else {
			setIsValid(true);
		}
	};

	return (
		<div className={styles["textarea-container"]} data-is-valid={isValid}>
			<textarea
				placeholder={formFields[placeholder as formFieldsKeys]}
				className={styles["textarea-style"]}
				name="Message"
				value={data}
				onChange={(e) => {
					setData(e.target.value);
					validation(e.target.value);
				}}
			/>
		</div>
	);
}
