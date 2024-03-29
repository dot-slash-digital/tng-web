import { IconType } from "@components/icon";

export interface Blueprint {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Button {
  label: string;
  destination: string;
}

export enum ButtonType {
  PRIMARY = "primary",
  PRIMARY_SMALL = "primary-small",
  OUTLINE = "outline",
}

export interface NavbarLink {
  label: string;
  destination: string;
  prominent?: boolean;
}

export interface ProcessItem {
  icon: IconType;
  title: string;
  description: (string | JSX.Element)[];
  button?: Button;
}

export interface Service {
  image: string;
  title: string;
  description: string;
}

export interface SocialMediaLink {
  icon: IconType;
  destination: string;
}

export interface TeamMember {
  image: string;
  title: string;
  description: string;
}

export interface WorkingWithUsSection {
  image: string;
  title: string;
  description: string[];
  button?: Button;
}
