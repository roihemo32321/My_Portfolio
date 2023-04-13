import React, { useRef, useState } from "react";
import styles from "../../styles/components/contacts/formContact.module.scss";
import FormInput from "./formInput";
import TextareaInput from "./textareaInput";
import { useFormStore } from "@/libs/stores/formStore";
import { useErrorStore } from "@/libs/stores/errorStore";
import LoadingIcon from "@/shared/components/svgs/loading";
import useElementOnScreen from "@/shared/libs/hooks/useElementOnScreen";

const inputsContainer = ["name", "email", "subject", "message"];

export default function FormContact() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const contactEmail = useFormStore((store) => store.contactEmail);
	const setErrorData = useErrorStore((store) => store.setError);
	const animationRef = useRef<HTMLFormElement>(null);
	const leftAnimation = useElementOnScreen(animationRef);

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		const error = await contactEmail();
		setIsLoading(false);

		if (error) {
			setErrorData(error);
			return;
		}
	};

	const returnClassName = (val: string) => {
		if (val === "email" || val === "name") return "grid-one-span";
		return "grid-two-span";
	};

	return (
		<form
			className={`${styles["form-container"]}  ${leftAnimation ? styles["show-animation"] : ""}`}
			onSubmit={sendEmail}
			autoComplete="off"
			ref={animationRef}
		>
			<div className={styles["form-grid-container"]}>
				{inputsContainer.map((val) => (
					<div key={val} className={styles[returnClassName(val)]}>
						{val === "message" ? <TextareaInput placeholder={val} /> : <FormInput placeholder={val} formName={val} />}
					</div>
				))}
			</div>
			<button className={styles["button-style"]} data-is-loading={isLoading} disabled={isLoading}>
				{isLoading ? <LoadingIcon className={styles["loading-style"]} /> : `Send message!`}
			</button>
		</form>
	);
}
