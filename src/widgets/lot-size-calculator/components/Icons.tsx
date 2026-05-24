interface IconProps {
  className?: string;
}

/** Position Parameters — horizontal sliders with knobs (Figma). */
export function IconSliders({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33333 12V8H6.66667V9.33333H12V10.6667H6.66667V12H5.33333ZM0 10.6667V9.33333H4V10.6667H0ZM2.66667 8V6.66667H0V5.33333H2.66667V4H4V8H2.66667ZM5.33333 6.66667V5.33333H12V6.66667H5.33333ZM8 4V0H9.33333V1.33333H12V2.66667H9.33333V4H8ZM0 2.66667V1.33333H6.66667V2.66667H0Z"
        fill="#57DEA3"
      />
    </svg>
  );
}

/** Account balance — wallet / card outline (Figma). */
export function IconWallet({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="28"
      viewBox="0 0 22 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 14.8824C12.1667 14.8824 11.4583 14.5907 10.875 14.0074C10.2917 13.424 10 12.7157 10 11.8824C10 11.049 10.2917 10.3407 10.875 9.75735C11.4583 9.17402 12.1667 8.88235 13 8.88235C13.8333 8.88235 14.5417 9.17402 15.125 9.75735C15.7083 10.3407 16 11.049 16 11.8824C16 12.7157 15.7083 13.424 15.125 14.0074C14.5417 14.5907 13.8333 14.8824 13 14.8824V14.8824M6 17.8824C5.45 17.8824 4.97917 17.6865 4.5875 17.2949C4.19583 16.9032 4 16.4324 4 15.8824V7.88235C4 7.33235 4.19583 6.86152 4.5875 6.46985C4.97917 6.07819 5.45 5.88235 6 5.88235H20C20.55 5.88235 21.0208 6.07819 21.4125 6.46985C21.8042 6.86152 22 7.33235 22 7.88235V15.8824C22 16.4324 21.8042 16.9032 21.4125 17.2949C21.0208 17.6865 20.55 17.8824 20 17.8824H6V17.8824M8 15.8824H18C18 15.3324 18.1958 14.8615 18.5875 14.4699C18.9792 14.0782 19.45 13.8824 20 13.8824V9.88235C19.45 9.88235 18.9792 9.68652 18.5875 9.29485C18.1958 8.90319 18 8.43235 18 7.88235H8C8 8.43235 7.80417 8.90319 7.4125 9.29485C7.02083 9.68652 6.55 9.88235 6 9.88235V13.8824C6.55 13.8824 7.02083 14.0782 7.4125 14.4699C7.80417 14.8615 8 15.3324 8 15.8824V15.8824M19 21.8824H2C1.45 21.8824 0.979167 21.6865 0.5875 21.2949C0.195833 20.9032 0 20.4324 0 19.8824V8.88235H2V19.8824V19.8824V19.8824H19V21.8824V21.8824M6 15.8824V15.8824V15.8824V15.8824V7.88235V7.88235V7.88235V7.88235V7.88235V7.88235V15.8824V15.8824V15.8824V15.8824"
        fill="#444653"
      />
    </svg>
  );
}

/** Stop loss — three-line menu icon (Figma). */
export function IconPips({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="28"
      viewBox="0 0 18 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 20.8824V18.8824H18V20.8824H0ZM0 16.8824V14.8824H18V16.8824H0ZM0 12.8824V10.8824H18V12.8824H0ZM0 8.88235V6.88235H18V8.88235H0Z"
        fill="#444653"
      />
    </svg>
  );
}

export function IconChevronDown({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.25L6 7.75L9.5 4.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Results panel watermark — faint + and = (Figma). */
export function IconResultsWatermark({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 28h16M26 20v16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M44 36h16M44 28v16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M38 52h20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Risk warning — triangle alert (Figma). */
export function IconWarning({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 2.25L15.75 14.25H2.25L9 2.25Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M9 7v3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9" cy="12.75" r="0.85" fill="currentColor" />
    </svg>
  );
}

export function IconSun({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2M3.4 3.4l1.4 1.4M13.2 13.2l1.4 1.4M3.4 14.6l1.4-1.4M13.2 4.8l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconMoon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.5 2.5a6.5 6.5 0 107.5 10.5 5.5 5.5 0 01-7.5-10.5z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}
