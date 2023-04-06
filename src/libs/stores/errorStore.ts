import { create } from "zustand";

type actions = {
	setError: (err: string) => void;
};

type errorStoreType = {
	error: string;
};

let lastTimeout: NodeJS.Timeout | null = null;

export const useErrorStore = create<errorStoreType & actions>((set) => ({
	error: "",
	setError: (error) => {
		if (lastTimeout) {
			clearTimeout(lastTimeout);
		}

		set({ error });
		lastTimeout = setTimeout(() => set({ error: "" }), 2000);
	},
}));
