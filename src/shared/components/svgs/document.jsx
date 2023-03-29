import * as React from "react";

const SvgComponent = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
		<path
			d="M9.293 1.293A1 1 0 0 1 10 1h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a1 1 0 0 1 .293-.707l6-6ZM18 3h-7v5a1 1 0 0 1-1 1H5v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM6.414 7H9V4.414L6.414 7ZM7 13a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
			fill="currentColor"
		/>
	</svg>
);

export default SvgComponent;
