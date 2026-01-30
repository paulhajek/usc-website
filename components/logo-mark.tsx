import type { SVGProps } from 'react';

export default function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4" y="4" width="56" height="56" rx="12" fill="#1f4b99" />
      <path d="M18 42V22l14 10 14-10v20" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 34l14 10 14-10" stroke="#c3d4f7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
