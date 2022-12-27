export function NavClose(props) {
  const { fill, stroke, ...rest } = props;
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g filter="url(#filter0_d_764_2632)">
        <circle cx="29" cy="29" r="20" fill={fill || "white"} />
      </g>
      <path
        d="M23.7578 35.2431L29.0008 30.0001M34.2438 24.7571L28.9998 30.0001M28.9998 30.0001L23.7578 24.7571M29.0008 30.0001L34.2438 35.2431"
        stroke={stroke || "black"}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_764_2632"
          x="0"
          y="0"
          width="58"
          height="58"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.964706 0 0 0 0 0.305882 0 0 0 0 0.121569 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_764_2632"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_764_2632"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
