import { StoreApi, UseBoundStore, create } from "zustand";

type formDataType = {
	Email: string;
	Name: string;
	Subject: string;
	Message: string;
};

export const useFormStore: UseBoundStore<StoreApi<formDataType>> = create((set) => ({
	Email: "",
	Name: "",
	Subject: "",
	Message: "",
	setEmail: (Email: string) => set({ Email }),
	setName: (Name: string) => set({ Name }),
	setSubject: (Subject: string) => set({ Subject }),
	setMessage: (Message: string) => set({ Message }),
}));
