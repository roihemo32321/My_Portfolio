import * as React from "react";

const SvgComponent = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" {...props}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M13.016 2C10.82 2 9.038 3.725 9.038 5.852v2.667h6.886v.74H5.978C3.781 9.26 2 10.984 2 13.111v5.778c0 2.127 1.781 3.852 3.978 3.852h2.295v-3.26c0-2.127 1.781-3.851 3.978-3.851h7.345c1.859 0 3.366-1.46 3.366-3.26V5.852C22.962 3.725 21.18 2 18.984 2h-5.968Zm-.918 4.74c.76 0 1.377-.596 1.377-1.333 0-.736-.616-1.333-1.377-1.333-.76 0-1.377.597-1.377 1.333 0 .737.617 1.334 1.377 1.334Z"
			fill="url(#a)"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M18.983 30c2.197 0 3.979-1.724 3.979-3.852v-2.666h-6.886v-.741h9.946c2.197 0 3.978-1.725 3.978-3.852V13.11c0-2.127-1.781-3.852-3.978-3.852h-2.295v3.26c0 2.127-1.782 3.851-3.979 3.851h-7.344c-1.859 0-3.366 1.46-3.366 3.26v6.518c0 2.128 1.781 3.852 3.978 3.852h5.967Zm.918-4.74c-.76 0-1.377.596-1.377 1.333 0 .736.617 1.333 1.377 1.333.761 0 1.378-.597 1.378-1.333 0-.737-.617-1.334-1.378-1.334Z"
			fill="url(#b)"
		/>
		<defs>
			<linearGradient id="a" x1={12.481} y1={2} x2={12.481} y2={22.741} gradientUnits="userSpaceOnUse">
				<stop stopColor="#327EBD" />
				<stop offset={1} stopColor="#1565A7" />
			</linearGradient>
			<linearGradient id="b" x1={19.519} y1={9.259} x2={19.519} y2={30} gradientUnits="userSpaceOnUse">
				<stop stopColor="#FFDA4B" />
				<stop offset={1} stopColor="#F9C600" />
			</linearGradient>
		</defs>
	</svg>
);

export default SvgComponent;
