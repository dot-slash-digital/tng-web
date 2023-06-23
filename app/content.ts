import { routes, Page } from "./pageInfo";
import {
  Blueprint,
  NavbarLink,
  PreviousClient,
  ProcessItem,
  Service,
  SocialMediaLink,
  TeamMember,
  WorkingWithUsSection,
} from "./types";

const navbarLinks: NavbarLink[] = [
  {
    label: "Home",
    destination: routes[Page.HOME],
  },
  {
    label: "Working with Us",
    destination: routes[Page.WORKING_WITH_US],
  },
  {
    label: "Gallery",
    destination: routes[Page.GALLERY],
  },
  {
    label: "Contact",
    destination: routes[Page.CONTACT],
    prominent: true,
  },
];
const socialMediaLinks: SocialMediaLink[] = [];
const services: Service[] = [
  {
    title: "Home Remodeling",
    description:
      "Service description goes here service description goes here service description goes here service description goes here service description goes here",
    image: "",
  },
  {
    title: "New Home Construction",
    description:
      "Service description goes here service description goes here service description goes here service description goes here",
    image: "",
  },
];
const processItems: ProcessItem[] = [
  {
    icon: "",
    title: "Step #1 title",
    description: [
      "Step description goes here step description goes here step description goes here.",
      "Step description goes here step description goes here step description goes here step description goes here.",
    ],
  },
  {
    icon: "",
    title: "Step #2 title",
    description: [
      "Step description goes here step description goes here step description goes here step description goes here step description goes here step description goes here.",
      "Step description goes here step description goes here step description goes here step description goes here.",
    ],
  },
  {
    icon: "",
    title: "Step #3 title",
    description: [
      "Step description goes here step description goes here.",
      "Step description goes here step description goes here step description goes here.",
    ],
  },
  {
    icon: "",
    title: "Step #4 title",
    description: [
      "Step description goes here step description goes here step description goes here.",
    ],
    button: {
      label: "CTA button here",
      destination: routes[Page.CONTACT],
    },
  },
];
const teamMembers: TeamMember[] = [
  {
    image: "",
    title: "Team Member #1",
    description:
      "Bio description goes here bio description goes here bio description goes here bio description goes here bio description goes here bio description goes here",
  },
  {
    image: "",
    title: "Team Member #2",
    description:
      "Bio description goes here bio description goes here bio description goes here bio description goes here bio description goes here bio description goes here bio description goes here",
  },
];
const workingWithUsContent: WorkingWithUsSection[] = [
  {
    image: "",
    title: "Section #1 Title",
    description: [
      "Description text goes here description goes here description goes here description goes here description goes here description goes here description goes here description text goes here description text goes here description goes here description goes here description goes here description goes here description text goes here description goes here description goes here description goes here description text goes here description text goes here description text goes here description goes here description goes here",
      "Description text goes here description goes here description text goes here description goes here description text goes here description goes here description text goes here description goes here description goes here description goes here description text goes here description text goes here description goes here description goes here",
    ],
  },
  {
    image: "",
    title: "Section #2 Title",
    description: [
      "Description text goes here description goes here description goes here description goes here description goes here description goes here description goes here description text goes here description text goes here description goes here description goes here description goes here description goes here description text goes here description goes here description goes here description goes here description text goes here description text goes here description text goes here description goes here description goes here",
      "Description text goes here description goes here description text goes here description goes here description text goes here description goes here description text goes here description goes here description goes here description goes here description text goes here description text goes here description goes here description goes here",
    ],
    button: {
      label: "CTA button goes here",
      destination: routes[Page.CONTACT],
    },
  },
  {
    image: "",
    title: "Section #3 Title",
    description: [
      "Description text goes here description goes here description goes here description goes here description goes here description goes here description goes here description text goes here description text goes here description goes here description goes here description goes here description goes here description text goes here description goes here description goes here description goes here description text goes here description text goes here description text goes here description goes here description goes here",
      "Description text goes here description goes here description text goes here description goes here description text goes here description goes here description text goes here description goes here description goes here description goes here description text goes here description text goes here description goes here description goes here",
    ],
  },
];
const previousClients: PreviousClient[] = [
  { client: "Client #1", images: ["", "", "", "", "", ""] },
  { client: "Client #2", images: ["", "", ""] },
  { client: "Client #3", images: ["", ""] },
  { client: "Client #4", images: ["", "", ""] },
  { client: "Client #5", images: ["", "", "", "", "", "", "", "", ""] },
  { client: "Client #6", images: [""] },
  { client: "Client #7", images: ["", "", "", "", ""] },
  { client: "Client #8", images: ["", "", ""] },
  { client: "Client #9", images: ["", "", "", "", "", ""] },
];
const blueprints: Blueprint[] = [
  {
    image: "",
    title: "Blueprint title goes here",
    subtitle: "Subtitle goes here",
    description:
      "More info description goes here more info description goes here more info description goes here. More info description goes here more info description goes here more info description goes here.",
  },
  {
    image: "",
    title: "Blueprint title goes here",
    subtitle: "Subtitle goes here",
    description:
      "More info description goes here more info description goes here more info description goes here. More info description goes here more info description goes here more info description goes here.",
  },
  {
    image: "",
    title: "Blueprint title goes here",
    subtitle: "Subtitle goes here",
    description:
      "More info description goes here more info description goes here more info description goes here. More info description goes here more info description goes here more info description goes here.",
  },
  {
    image: "",
    title: "Blueprint title goes here",
    subtitle: "Subtitle goes here",
    description:
      "More info description goes here more info description goes here more info description goes here. More info description goes here more info description goes here more info description goes here.",
  },
];

export default {
  global: {
    navbar: {
      logo: {
        image: "",
        destination: routes[Page.HOME],
      },
      links: {
        left: navbarLinks.slice(0, navbarLinks.length / 2),
        right: navbarLinks.slice(navbarLinks.length / 2),
      },
    },
    footer: {
      copyright: "Copyright info goes here",
      email: "Email address",
      phone: "Phone number",
      socialMediaLinks,
      ctaLink: {
        label: "Schedule a consultation",
        destination: routes[Page.CONTACT],
      },
    },
  },
  home: {
    jumbotron: {
      title: "Big title goes here, big title goes here",
      subtitle: "Subtitle goes here, subtitle goes here, subtitle goes here",
      button: {
        label: "CTA button goes here",
        destination: routes[Page.CONTACT],
      },
    },
    ourServices: {
      title: "Our Services",
      list: services,
    },
    ctaBanner: {
      title: "CTA goes here CTA goes here",
      button: {
        label: "CTA button goes here",
        destination: routes[Page.CONTACT],
      },
    },
    ourProcess: {
      title: "Our Process",
      list: processItems,
    },
    whyUs: {
      image: "",
      title: "Why Us",
      description: [
        "Step description goes here step description goes here step description goes here step description goes here step description goes here step description goes here. Step description goes here step description goes here step description goes here step description goes here step description goes here step description goes here. step description goes here.",
        "Step description goes here step description goes here step description goes here step description goes here step description goes here step description goes here. Step description goes here step description goes here step description goes here.",
      ],
      button: {
        label: "CTA button goes here",
        destination: routes[Page.CONTACT],
      },
    },
    meetTheTeam: {
      title: "Meet the Team",
      teamMembers,
    },
  },
  workingWithUs: {
    jumbotron: {
      title: "Working with Us",
      backgroundImage: "",
    },
    alternatingContent: workingWithUsContent,
  },
  gallery: {
    jumbotron: {
      title: "Gallery",
      backgroundImage: "",
    },
    previousClients: {
      title: "Previous Clients",
      clients: previousClients.map(({ client }) => client),
      grid: previousClients,
    },
    blueprints: {
      title: "Blueprints",
      list: blueprints,
    },
  },
  contact: {
    jumbotron: {
      title: "Contact Us",
      backgroundImage: "",
    },
    contactForm: {
      description:
        "Explainer intro text goes here explainer intro text goes here. Explainer intro text goes here. Explainer intro text goes here explainer intro text goes here explainer intro text goes here explainer intro text goes here explainer intro text goes here.",
      calendlyId: "",
    },
  },
};
