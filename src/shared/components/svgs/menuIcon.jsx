import * as React from "react";

const SvgComponent = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -5.5 21 21" {...props}>
		<path d="M0 10h21V8H0v2Zm0-8h21V0H0v2Zm0 4h21V4H0v2Z" fill="currentColor" fillRule="evenodd" />
	</svg>
);

export default SvgComponent;
