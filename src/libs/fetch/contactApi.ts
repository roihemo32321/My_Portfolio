import { formDataType } from "../types/formTypes";

export const sendContactForm = async (data: formDataType) =>
	fetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});
