import * as React from "react";

const SvgLogo = (props) => (
  <svg
    width={101}
    height={93}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M48.02 81.3V35.56c0-2.5-2.02-4.52-4.52-4.52H11.68a6.2 6.2 0 0 0-5.88-2.51C3.02 28.9.79 31.19.48 33.98c-.41 3.75 2.51 6.92 6.17 6.92 2.07 0 3.9-1.01 5.02-2.57H36.2c2.5 0 4.52 2.02 4.52 4.52v38.44a6.2 6.2 0 0 0-2.51 5.88c.37 2.78 2.66 5.01 5.45 5.32 3.75.41 6.92-2.51 6.92-6.17.01-2.07-1-3.89-2.56-5.02Z"
      fill="url(#Logo_svg__a)"
    />
    <path
      d="M95.66 3.31c2.5 0 4.52 2.02 4.52 4.52v25.98c0 2.5-2.02 4.52-4.52 4.52H72.19c-2.5 0-4.52 2.02-4.52 4.52v18.11a6.215 6.215 0 0 1 2.57 5.02 6.21 6.21 0 0 1-6.92 6.17c-2.79-.31-5.08-2.53-5.45-5.32a6.21 6.21 0 0 1 2.51-5.88v-25.4c0-2.5 2.02-4.52 4.52-4.52h23.47c2.5 0 4.52-2.02 4.52-4.52v-11.4c0-2.5-2.02-4.52-4.52-4.52H20.72a6.215 6.215 0 0 1-5.02 2.57 6.21 6.21 0 0 1-6.17-6.92c.31-2.79 2.53-5.08 5.32-5.45 2.42-.32 4.6.75 5.88 2.51H95.66v.01Z"
      fill="url(#Logo_svg__b)"
    />
    <defs>
      <linearGradient
        id="Logo_svg__a"
        x1={14.295}
        y1={49.245}
        x2={58.71}
        y2={76.475}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.307} stopColor="#DF4EEC" />
        <stop offset={1} stopColor="#F55454" />
      </linearGradient>
      <linearGradient
        id="Logo_svg__b"
        x1={34.548}
        y1={23.905}
        x2={90.142}
        y2={79.172}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.307} stopColor="#DF4EEC" />
        <stop offset={1} stopColor="#F55454" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgLogo;
