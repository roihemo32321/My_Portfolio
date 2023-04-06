import { formDataType } from "@/libs/types/formTypes";
import { create } from "zustand";
import { sendContactForm } from "../fetch/contactApi";
import formSchema from "../schema/formSchema";

const initialState = {
	email: "",
	name: "",
	subject: "",
	message: "",
};

type Actions = {
	setEmail: (Email: string) => void;
	setName: (Name: string) => void;
	setSubject: (Subject: string) => void;
	setMessage: (Message: string) => void;
	contactEmail: () => Promise<string>;
	reset: () => void;
};

export const useFormStore = create<formDataType & Actions>((set) => ({
	...initialState,
	setEmail: (email: string) => set({ email }),
	setName: (name: string) => set({ name }),
	setSubject: (subject: string) => set({ subject }),
	setMessage: (message: string) => set({ message }),
	contactEmail: async () => {
		const formData = {
			email: useFormStore.getState().email,
			name: useFormStore.getState().name,
			subject: useFormStore.getState().subject,
			message: useFormStore.getState().message,
		};

		const { error } = formSchema.validate(formData);
		if (error) return error.message;
		await sendContactForm(formData);
		set(initialState);
		return "Message sent.";
	},

	reset: () => {
		set(initialState);
	},
}));
