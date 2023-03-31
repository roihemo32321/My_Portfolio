import * as React from "react";

const SvgComponent = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
		<path d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

export default SvgComponent;
