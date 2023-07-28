import { createElement } from "react";

export enum IconType {
  ARROW_RIGHT = "ARROW_RIGHT",
  CHEVRON_LEFT = "CHEVRON_LEFT",
  CHEVRON_RIGHT = "CHEVRON_RIGHT",
  DEMOGRAPHY = "DEMOGRAPHY",
  EDIT_CALENDAR = "EDIT_CALENDAR",
  HISTORY_EDU = "HISTORY_EDU",
  INSTAGRAM = "INSTAGRAM",
  MENU = "MENU",
  PERM_PHONE_MSG = "PERM_PHONE_MSG",
}

interface IconProps {
  size: number;
}

const iconProps = {
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
};

const ArrowRightIcon = ({ size }: IconProps) => (
  <svg {...iconProps} height={size} viewBox="0 0 24 24">
    <path d="M12 20L10.95 18.925L17.125 12.75H4V11.25H17.125L10.95 5.075L12 4L20 12L12 20Z" />
  </svg>
);

const ChevronLeftIcon = ({ size }: IconProps) => (
  <svg {...iconProps} height={size} viewBox="0 0 40 40">
    <path d="M23.3776 29.9998L13.3359 19.9582L23.3776 9.9165L25.1693 11.7082L16.9193 19.9582L25.1693 28.2082L23.3776 29.9998Z" />
  </svg>
);

const ChevronRightIcon = ({ size }: IconProps) => (
  <svg {...iconProps} height={size} viewBox="0 0 40 40">
    <path d="M15.6276 29.9998L13.8359 28.2082L22.0859 19.9582L13.8359 11.7082L15.6276 9.9165L25.6693 19.9582L15.6276 29.9998Z" />
  </svg>
);

const DemographyIcon = ({ size }: IconProps) => (
  <svg {...iconProps} height={size} viewBox="0 -960 960 960">
    <path d="M733-229q27.917 0 47.458-19.559Q800-268.118 800-296.059T780.458-343Q760.917-362 733-362q-27.5 0-46.75 19.353t-19.25 47Q667-268 686.25-248.5T733-229Zm-.214 133Q766-96 795-111.5t47-42.5q-26-14-53-22.5t-56-8.5q-29 0-56 8.5T624-154q18 27 46.786 42.5 28.785 15.5 62 15.5ZM180-120q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h600q24.75 0 42.375 17.625T840-780v329q-14-8-29.5-13t-30.5-8v-308H180v600h309q4 16 9.023 31.172Q503.045-133.655 510-120H180Zm0-107v47-600 308-4 249Zm100-53h211q4-16 9-31t13-29H280v60Zm0-170h344q14-7 27-11.5t29-8.5v-40H280v60Zm0-170h400v-60H280v60ZM732.5-41Q655-41 600-96.5T545-228q0-78.435 54.99-133.717Q654.98-417 733-417q77 0 132.5 55.283Q921-306.435 921-228q0 76-55.5 131.5T732.5-41Z" />
  </svg>
);

const EditCalendarIcon = ({ size }: IconProps) => (
  <svg {...iconProps} height={size} viewBox="0 -960 960 960">
    <path d="M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v301h-60v-111H180v430h319v60H180Zm709-219-71-71 29-29q8.311-8 21.156-8Q881-407 889-399l29 29q8 8.311 8 21.156Q926-336 918-328l-29 29ZM559-40v-71l216-216 71 71L630-40h-71ZM180-630h600v-130H180v130Zm0 0v-130 130Z" />
  </svg>
);

const HistoryEduIcon = ({ size }: IconProps) => (
  <svg {...iconProps} height={size} viewBox="0 -960 960 960">
    <path d="M321-160q-24 0-42-18t-18-42v-100h124v-127q-38 3-76-10.5T241-500v-58h-50L60-689q36-34 86-55.5T248-766q30 0 68.5 9.5T385-726v-74h455v535q0 44-30.5 74.5T735-160H321Zm124-160h245v55q0 20 12.5 32.5T735-220q20 0 32.5-12.5T780-265v-475H445v57l241 241v43h-43L517-525l-17 20q-13 15-26 23t-29 15v147ZM218-618h83v89q17 11 33.5 16.5T368-507q25 0 51-13.5t38-27.5l17-20-69-69q-32-32-72-50.5T248-706q-27 0-49 6.5T154-682l64 64Zm412 358H321v40h323q-6-6-10-16.5t-4-23.5Zm-309 40v-40 40Z" />
  </svg>
);

const InstagramIcon = ({ size }: IconProps) => (
  <svg {...iconProps} height={size} viewBox="0 0 1000 1000">
    <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" />
  </svg>
);

const MenuIcon = ({ size }: IconProps) => (
  <svg {...iconProps} height={size} viewBox="0 0 32 32">
    <path d="M4 24V22H28V24H4ZM4 17V15H28V17H4ZM4 10V8H28V10H4Z" />
  </svg>
);

const PermPhoneMsgIcon = ({ size }: IconProps) => (
  <svg {...iconProps} height={size} viewBox="0 -960 960 960">
    <path d="M496-489v-321q0-12.75 8.625-21.375T526-840h284q12.75 0 21.375 8.625T840-810v192q0 12.75-8.625 21.375T810-588H600l-104 99Zm60-159h224v-132H556v132Zm0 0v-132 132Zm239 528q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.286 12.857-32.143T165-840h140q14 0 24 10t14 25l26.929 125.641Q372-665 369.5-653.5q-2.5 11.5-10.729 19.726L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.151-15T686-369l119 26q15 4 25 16.044T840-300v135q0 19.286-12.857 32.143T795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z" />
  </svg>
);

export default ({ size, type }: IconProps & { type: IconType }) => {
  return createElement(
    {
      [IconType.ARROW_RIGHT]: ArrowRightIcon,
      [IconType.CHEVRON_LEFT]: ChevronLeftIcon,
      [IconType.CHEVRON_RIGHT]: ChevronRightIcon,
      [IconType.DEMOGRAPHY]: DemographyIcon,
      [IconType.EDIT_CALENDAR]: EditCalendarIcon,
      [IconType.HISTORY_EDU]: HistoryEduIcon,
      [IconType.INSTAGRAM]: InstagramIcon,
      [IconType.MENU]: MenuIcon,
      [IconType.PERM_PHONE_MSG]: PermPhoneMsgIcon,
    }[type],
    { size }
  );
};
