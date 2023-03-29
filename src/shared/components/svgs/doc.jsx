import * as React from "react";

const SvgComponent = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M4 1a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.414A2 2 0 0 0 17.414 6L13 1.586A2 2 0 0 0 11.586 1H4zm0 2h7.586L16 7.414V17H4V3zm2 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H6zm-1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H6z"
		/>
	</svg>
);

export default SvgComponent;
