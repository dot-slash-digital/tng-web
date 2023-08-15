import Link from "next/link";
import { routes, Page } from "./pageInfo";
import {
  Blueprint,
  NavbarLink,
  ProcessItem,
  Service,
  SocialMediaLink,
  TeamMember,
  WorkingWithUsSection,
} from "./types";
import { IconType } from "@components/icon";

// images
const GALLERY_IMAGE_COUNT = 32;
const ContactUsJumbotron = "/images/contact-us-jumbotron.jpg";
const GalleryJumbotron = "/images/gallery-jumbotron.jpg";
const HomeCtaBanner = "/images/home-cta-banner.jpg";
export const HomeJumbotron = "/images/home-jumbotron.jpg";
const HomeRemodeling = "/images/home-remodeling.jpg";
const HomeWhyUs = "/images/home-why-us.jpg";
const Logo = "/images/logo.jpg";
const NewHomeConstruction = "/images/new-home-construction.jpg";
const SampleBlueprint1 = "/images/sample-blueprint-1.jpg";
const SampleBlueprint2 = "/images/sample-blueprint-2.jpg";
const TeamGeorge = "/images/team-george.jpg";
const TeamIzamar = "/images/team-izamar.jpg";
const WorkingWithUsJumbotron = "/images/working-with-us-jumbotron.jpg";
const WorkingWithUsCuratingAnEstimate =
  "/images/working-with-us-curating-an-estimate.jpg";
const WorkingWithUsInitialConsultation =
  "/images/working-with-us-initial-consultation.jpg";
const WorkingWithUsProjectKickoff =
  "/images/working-with-us-project-kickoff.jpg";

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
const socialMediaLinks: SocialMediaLink[] = [
  {
    destination: "https://www.instagram.com/texashandymandfw",
    icon: IconType.INSTAGRAM,
  },
];
const services: Service[] = [
  {
    title: "Home Remodeling",
    description:
      "Whether you’re looking to update your kitchen, bathroom, or living room, we can help you create a space that you’ll love for years to come. Home remodeling is a great way to update your space, add functionality, and improve your home’s curb appeal.",
    image: HomeRemodeling,
  },
  {
    title: "New Home Construction",
    description:
      "New home construction gives you the freedom to choose the size and layout that are perfect for your family, with custom finishes to truly personalize it.",
    image: NewHomeConstruction,
  },
];
const processItems: ProcessItem[] = [
  {
    icon: IconType.EDIT_CALENDAR,
    title: "Schedule a meeting",
    description: [
      <span key={0}>
        Schedule an initial consultation with us to discuss your home building
        needs. We are available via phone or video. Visit our{" "}
        <Link href={routes[Page.CONTACT]}>Contact page</Link> to find a time
        that fits your schedule.
      </span>,
    ],
  },
  {
    icon: IconType.PERM_PHONE_MSG,
    title: "Initial consultation",
    description: [
      "Bring any existing information you have, like blueprint designs or a lot already selected. This will help us get a better understanding of your needs and goals.",
      "If you don’t have any plans yet, we’ll work with you to create a custom design that puts your dreams to paper.",
    ],
  },
  {
    icon: IconType.DEMOGRAPHY,
    title: "Curating an estimate",
    description: [
      "Based on the vision and project details, we will provide you with an estimate via email with a few options to select from.",
      "This will give you a better understanding of the costs involved in your project, and help you make an informed decision about whether to move forward. We can discuss the estimate via phone or video if you have any questions.",
    ],
  },
  {
    icon: IconType.HISTORY_EDU,
    title: "Project kickoff",
    description: [
      "Once the contract has been signed, the project officially starts. We will keep you updated on the progress of your home throughout the construction process, and you will be able to check in on your home as we go.",
    ],
    button: {
      label: "Learn more",
      destination: routes[Page.CONTACT],
    },
  },
];
const teamMembers: TeamMember[] = [
  {
    image: TeamGeorge,
    title: "George, Owner",
    description:
      "With over 15 years of experience in mortgage banking, construction, and real estate, George brings a wealth of knowledge and experience to his role as a home builder.",
  },
  {
    image: TeamIzamar,
    title: "Izamar, Head Designer",
    description:
      "Specializing in modern and contemporary design, Izamar has a keen eye for color and detail. She is passionate about creating spaces that are both stylish and functional.",
  },
];
const workingWithUsContent: WorkingWithUsSection[] = [
  {
    image: WorkingWithUsInitialConsultation,
    title: "Initial Consultation",
    description: [
      "Our expert team can also provide assistance with designing custom blueprints to visualize your dream home. We’ll walk through each step of the home building or renovation process and note potential roadblocks along the way. This is your opportunity to ask any questions you may have, so that you feel confident every step of the way.",
      "Before the consultation, gather any relevant information about your property, such as floor plan, budget, and wishlist features. This will help us better understand your needs and goals. We will also want to schedule additional time to assess your property to understand what’s possible. This includes the size of your lot, the condition of your existing home, and the zoning regulations in your area.",
    ],
    button: {
      label: "Schedule your consultation today!",
      destination: routes[Page.CONTACT],
    },
  },
  {
    image: WorkingWithUsCuratingAnEstimate,
    title: "Curating an Estimate",
    description: [
      "For home remodels, we’ll then need to assess the existing condition of the home and develop a plan for the remodel. This includes determining the scope of work, the materials and finishes that will be used, and the timeline for the project. Once the plan is in place, we can begin to estimate the costs. Many factors are considered, including cost of materials, labor, and any permits or fees that may be required. An important consideration is current market conditions, as the cost of materials and labor can fluctuate.",
      "The estimate will include a breakdown of the costs so that you can see where your money is going during each step of the process. We will also be available to answer any questions you have about the estimate details.",
    ],
  },
  {
    image: WorkingWithUsProjectKickoff,
    title: "Project Kickoff",
    description: [
      "During the project kickoff, we will review the contract with you and answer any questions you have. We will also discuss the timeline for your project and make sure that you are comfortable with it. We will introduce you to the team members who will be working on your project, and we will discuss the payment schedule for your project. Once we have a signed contract, the project officially starts. This is the time when we will begin working on the design and construction of your home.",
      "If you are financing your home, the lender will come in at this stage to review the contract and provide funding. This will ensure that you have the money you need to complete your project. We will keep you updated on the progress of your home throughout the construction process.",
      "You’ll be able to check in on your home as we go, and we will be happy to answer any questions you have. This is the most exciting step in the process, and we’re looking forward to working with you to build your dream home!",
    ],
  },
];
const previousClients: string[] = Array.apply(
  null,
  Array(GALLERY_IMAGE_COUNT)
).map((_, galleryIndex) => `/images/gallery/${galleryIndex + 1}.jpg`);
const blueprints: Blueprint[] = [
  {
    image: SampleBlueprint1,
    title: "Sample Blueprint 1",
    subtitle: "Traditional Home Design",
    description:
      "Blueprints for a traditional home typically include standard finishes, standard faucets, gas or electric stove, and a kitchen island, all of which are classic and timeless features.",
  },
  {
    image: SampleBlueprint2,
    title: "Sample Blueprint 2",
    subtitle: "Custom Home Design",
    description:
      "Blueprints for a custom home contain state-of-the-art features made with the best materials, including grand entry doors, steel or wooden stairs, intricate wall patterns, LED lighting, a below-zero fridge, and more.",
  },
];

export const companyName = "Texas Handyman";

export const metadataContent = {
  home: {
    description:
      "Personalize your dream home! Build a home that is uniquely yours, reflecting your style and personality.",
  },
  workingWithUs: {
    title: "Working with Us",
    description: "Learn about the steps we take to build your dream home.",
  },
  gallery: {
    title: "Gallery",
    description:
      "Explore the beautiful homes we’ve built and blueprints we’ve designed for our happy clients.",
  },
  contact: {
    title: "Contact",
    description:
      "Schedule an initial consultation with us to discuss your home building needs. We are available via phone or video.",
  },
};

export default {
  global: {
    navbar: {
      logo: {
        image: Logo,
        destination: routes[Page.HOME],
      },
      links: {
        left: navbarLinks.slice(0, navbarLinks.length / 2),
        right: navbarLinks.slice(navbarLinks.length / 2),
      },
    },
    footer: {
      copyright: "© Texas Handyman, 2023",
      email: "george@texashandymanhomes.com",
      phone: "(214) 638-5948",
      socialMediaLinks,
      ctaLink: {
        label: "Schedule a consultation",
        destination: routes[Page.CONTACT],
      },
      insurance: "Licensed in the state of Texas and fully insured.",
    },
  },
  home: {
    jumbotron: {
      backgroundImage: HomeJumbotron,
      title: "Personalize your dream home",
      subtitle:
        "Build a home that is uniquely yours, reflecting your style and personality.",
      button: {
        label: "Schedule a consultation",
        destination: routes[Page.CONTACT],
      },
    },
    ourServices: {
      title: "Our Services",
      list: services,
    },
    ctaBanner: {
      title: "Start your dream home today!",
      button: {
        label: "Contact us",
        destination: routes[Page.CONTACT],
      },
      image: HomeCtaBanner,
    },
    ourProcess: {
      title: "Our Process",
      list: processItems,
    },
    whyUs: {
      image: HomeWhyUs,
      title: "Why Us",
      description: [
        "At Texas Handyman, we believe that honesty and trustworthiness are essential qualities for any home builder. We are committed to transparency with our clients about the entire home building process, from the initial consultation to the final inspection. We will never make any promises that we cannot keep and are always be upfront about the costs of our services. We know that building a home is a major investment, and we want to make sure that our clients get the best value for their money.",
        "With over 15 years of real estate investment and construction experience, we have built a strong track record of satisfied customers and dream homes. Let’s make your dreams come true!",
      ],
      button: {
        label: "Schedule a consultation",
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
      backgroundImage: WorkingWithUsJumbotron,
    },
    alternatingContent: workingWithUsContent,
  },
  gallery: {
    jumbotron: {
      title: "Gallery",
      backgroundImage: GalleryJumbotron,
    },
    previousClients: {
      title: "Previous Clients",
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
      backgroundImage: ContactUsJumbotron,
    },
    contactForm: {
      description: (
        <span>
          Please fill out the form below to schedule a consultation with us. For
          questions or concerns, you can email us at{" "}
          <a href="mailto:george@texashandymanhomes.com">
            george@texashandymanhomes.com
          </a>{" "}
          and we’ll get back to you promptly.
        </span>
      ),
      calendlyUrl: "https://calendly.com/texas-handyman/initial-consultation",
    },
  },
};
