import { RefObject, useEffect, useState } from "react";

export default function useElementOnScreen(ref: RefObject<Element> | null | undefined, rootMargin = "0px") {
	const [isIntersecting, setIsIntersecting] = useState(true);

	useEffect(() => {
		const refValue = ref?.current;
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{ rootMargin },
		);

		if (ref?.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (refValue) {
				observer.unobserve(refValue);
			}
		};
	}, [ref, rootMargin]);

	return isIntersecting;
}
