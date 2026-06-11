type HomeFeatureCard = {
  icon: string;
  title: string;
  description: string;
  featured: boolean;
  tags?: string[];
};

type HomeHighlight = {
  kicker: string;
  title: string;
  description: string;
};

type AboutPillar = {
  icon: string;
  title: string;
  description: string;
};

type Subteam = {
  label: string;
  title: string;
  description: string;
  tags: string[];
};

type Project = {
  icon: string;
  title: string;
  description: string;
};

type RecruitmentCard = {
  icon: string;
  title: string;
  description: string;
  featured: boolean;
};

type RecruitmentLink = {
  href: string;
  label: string;
  primary: boolean;
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/subteams", label: "Subteams" },
  { href: "/projects", label: "Projects" },
  { href: "/recruitment", label: "Recruitment" },
] as const;

export const socialLinks = [
  { href: "https://discord.gg/jyZqAUxSdT", label: "Discord" },
  { href: "https://www.linkedin.com/company/watq/", label: "LinkedIn" },
  { href: "https://github.com/UW-WatQ", label: "GitHub" },
] as const;

export const homeFeatureCards: HomeFeatureCard[] = [
  {
    icon: "HW",
    title: "Hardware",
    description:
      "Designing and simulating the physical components needed for quantum control systems, circuit layouts, and experimental setups.",
    featured: false,
  },
  {
    icon: "SW",
    title: "Software and Algorithms",
    description:
      "Building control software, implementing quantum algorithms, and running simulations that turn abstract ideas into workflows people can actually inspect.",
    tags: ["Qiskit", "Python", "Control Theory"],
    featured: true,
  },
] as const;

export const homeHighlights: HomeHighlight[] = [
  {
    kicker: "Learning by shipping",
    title: "Projects over posturing",
    description:
      "The team uses concrete work as the learning engine, so members can build intuition while producing something real.",
  },
  {
    kicker: "Low barrier",
    title: "Beginner-compatible entry",
    description:
      "You do not need deep quantum background to contribute. Clear onboarding matters more than résumé theater.",
  },
  {
    kicker: "Technical ambition",
    title: "Serious enough to grow into",
    description:
      "The work is designed to be accessible at the start without flattening the complexity of the field.",
  },
] as const;

export const aboutPillars: AboutPillar[] = [
  {
    icon: "01",
    title: "Learning by building",
    description:
      "The team prioritizes implementation and experimentation over passive study. Theory matters, but it lands better when tied to hardware, code, and simulation work.",
  },
  {
    icon: "02",
    title: "Start before you feel ready",
    description:
      "WatQ is designed for students who are interested enough to begin but not yet experts. Curiosity and consistency matter more than credentials.",
  },
] as const;

export const subteams: Subteam[] = [
  {
    label: "Hardware",
    title: "Hardware subteam",
    description:
      "Focused on circuit design, device intuition, and the physical stack behind quantum systems, with room for simulation and foundry-aware thinking.",
    tags: ["Superconducting Circuits", "Simulation"],
  },
  {
    label: "Software",
    title: "Software subteam",
    description:
      "Focused on algorithm implementation, tooling, and the software pathways that connect theory to executable experiments.",
    tags: ["Quantum Algorithms", "Qiskit"],
  },
] as const;

export const projects: Project[] = [
  {
    icon: "QC",
    title: "Superconducting circuit design",
    description:
      "Exploring the fundamentals of transmon qubits, resonators, and circuit-QED style models to build stronger hardware intuition.",
  },
  {
    icon: "QA",
    title: "Quantum algorithm implementation",
    description:
      "Translating theoretical algorithms into runnable circuits and simulation workflows using tools like Qiskit.",
  },
] as const;

export const recruitmentCards: RecruitmentCard[] = [
  {
    icon: "HW",
    title: "Hardware",
    description:
      "Work through the physical side of quantum systems, from circuits and electronics to the constraints that shape experimental design.",
    featured: false,
  },
  {
    icon: "SW",
    title: "Software and algorithms",
    description:
      "Write code that controls, simulates, or experiments with quantum systems, and build the infrastructure that makes that work repeatable.",
    featured: true,
  },
] as const;

export const recruitmentLinks: RecruitmentLink[] = [
  { href: "/recruitment", label: "Join WatQ", primary: true },
  { href: "/about", label: "See How We Work", primary: false },
] as const;
