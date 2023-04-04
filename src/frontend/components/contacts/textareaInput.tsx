import React, { useState } from "react";
import styles from "../../styles/components/contacts/textareaInput.module.scss";
import { useFormStore } from "@/frontend/libs/stores/formStore";

type Props = {
	placeholder: string;
};

export default function TextareaInput({ placeholder }: Props) {
	const data = useFormStore((state: any) => state[placeholder]);
	const setData = useFormStore((state: any) => state[`set${placeholder}`]);
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
				placeholder={placeholder}
				className={styles["textarea-style"]}
				name="message"
				value={data}
				onChange={(e) => {
					setData(e.target.value);
					validation(e.target.value);
				}}
			/>
		</div>
	);
}
