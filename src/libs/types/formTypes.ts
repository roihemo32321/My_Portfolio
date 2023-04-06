export type formDataType = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export enum formFields {
	name = "Name",
	email = "Email",
	subject = "Subject",
	message = "Message",
}

export type formFieldsKeys = "name" | "email" | "subject" | "message";
