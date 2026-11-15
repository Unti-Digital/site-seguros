import type { SVGProps } from "react";

export type IconName =
  | "arrow"
  | "car"
  | "heart"
  | "health"
  | "health-shield"
  | "plan"
  | "building"
  | "truck"
  | "engineering"
  | "shield"
  | "check"
  | "plus"
  | "menu"
  | "close"
  | "message";

const paths: Record<IconName, React.ReactNode> = {
  "health-shield": (
    <>
      <path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6z" />
      <path d="M9 11h6m-3-3v6" />
    </>
  ),
  arrow: (
    <>
      <path d="M4 12h15M13 5l7 7-7 7" />
    </>
  ),
  car: (
    <>
      <path d="m5 8 2-4h10l2 4M4 9h16v9H4zM7 18v2m10-2v2M4 13h16M7 11h1m8 0h1" />
    </>
  ),
  heart: (
    <path d="M20.5 5.5a5 5 0 0 0-7 0L12 7l-1.5-1.5a5 5 0 0 0-7 7L12 21l8.5-8.5a5 5 0 0 0 0-7Z" />
  ),
  health: (
    <>
      <path d="M5 4h14v17H5zM9 4V2h6v2M9 10h6m-3-3v6M9 17h6" />
    </>
  ),
  plan: (
    <>
      <path d="M4 7h16v14H4zM7 7V4h10v3M8 12h8M8 16h5" />
      <path d="m15 17 2 2 4-5" />
    </>
  ),
  building: (
    <>
      <path d="M3 21h18M5 21V4h10v17M15 10h4v11M8 8h1m2 0h1m-4 4h1m2 0h1m-4 4h1m2 0h1" />
    </>
  ),
  truck: (
    <>
      <path d="M3 5h11v12H3zM14 10h4l3 4v3h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </>
  ),
  engineering: (
    <>
      <path d="M3 12h18M5 12v-2a7 7 0 0 1 14 0v2M9 8V4m6 4V4M4 15h16v5H4zM8 17v3m8-3v3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  message: (
    <path d="M21 11a8 8 0 0 1-8 8H6l-4 3V11a9 9 0 0 1 19 0ZM7 10h10M7 14h6" />
  ),
};

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
