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

export interface NavbarLink {
  label: string;
  destination: string;
  prominent?: boolean;
}

export interface ProcessItem {
  icon: string;
  title: string;
  description: string[];
  button?: Button;
}

export interface Service {
  image: string;
  title: string;
  description: string;
}

export interface SocialMediaLink {
  icon: string;
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
