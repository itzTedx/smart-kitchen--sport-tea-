import { type SVGProps } from "react";

export const IconEmail = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.66667 3.33333H13.3333C14.2538 3.33333 15 4.07952 15 5V11C15 11.9205 14.2538 12.6667 13.3333 12.6667H2.66667C1.74619 12.6667 1 11.9205 1 11V5C1 4.07952 1.74619 3.33333 2.66667 3.33333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M15 5L8 9L1 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
};
