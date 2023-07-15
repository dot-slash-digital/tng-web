import { createElement } from "react";

export enum IconType {
  ARROW_RIGHT = "ARROW_RIGHT",
  CHEVRON_LEFT = "CHEVRON_LEFT",
  CHEVRON_RIGHT = "CHEVRON_RIGHT",
  MENU = "MENU",
}

interface IconProps {
  size: number;
}

const ArrowRightIcon = ({ size }: IconProps) => (
  <svg
    fill="currentColor"
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 20L10.95 18.925L17.125 12.75H4V11.25H17.125L10.95 5.075L12 4L20 12L12 20Z" />
  </svg>
);

const ChevronLeftIcon = ({ size }: IconProps) => (
  <svg
    fill="currentColor"
    height={size}
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.3776 29.9998L13.3359 19.9582L23.3776 9.9165L25.1693 11.7082L16.9193 19.9582L25.1693 28.2082L23.3776 29.9998Z" />
  </svg>
);

const ChevronRightIcon = ({ size }: IconProps) => (
  <svg
    fill="currentColor"
    height={size}
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.6276 29.9998L13.8359 28.2082L22.0859 19.9582L13.8359 11.7082L15.6276 9.9165L25.6693 19.9582L15.6276 29.9998Z" />
  </svg>
);

const MenuIcon = ({ size }: IconProps) => (
  <svg
    fill="currentColor"
    height={size}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 24V22H28V24H4ZM4 17V15H28V17H4ZM4 10V8H28V10H4Z" />
  </svg>
);

export default ({ size, type }: IconProps & { type: IconType }) => {
  return createElement(
    {
      [IconType.ARROW_RIGHT]: ArrowRightIcon,
      [IconType.CHEVRON_LEFT]: ChevronLeftIcon,
      [IconType.CHEVRON_RIGHT]: ChevronRightIcon,
      [IconType.MENU]: MenuIcon,
    }[type],
    { size }
  );
};
