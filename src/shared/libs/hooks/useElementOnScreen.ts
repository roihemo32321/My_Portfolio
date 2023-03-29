import { RefObject, useEffect, useState } from "react";

export default function useElementOnScreen(ref: RefObject<Element> | null | undefined, rootMargin = "0px") {
	const [isIntersecting, setIsIntersecting] = useState(true); // State for checking if element is on the view.

	useEffect(() => {
		if (!ref?.current) {
			return;
		}

		const refValue = ref.current; // Getting the element by using a ref.

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{ rootMargin },
		); // IntersectionObserver is a callback function that can return you if an element is on the view.

		if (refValue) {
			observer.observe(refValue);
		}

		return () => {
			if (refValue) {
				observer.unobserve(refValue); // unobserving is really important on unmount.
			}
		};
	}, [ref, rootMargin]);

	return isIntersecting; // returning if the element is on our view.
}
