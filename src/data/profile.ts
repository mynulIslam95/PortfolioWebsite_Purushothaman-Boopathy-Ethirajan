export type Highlight = { title: string; detail: string };
export type ExperienceItem = {
  company: string;
  role: string;
  type?: string;
  duration: string;
  location: string;
  highlights: string[];
  projects?: {
    name: string;
    role: string;
    duration: string;
    location: string;
    client?: string;
    bullets: string[];
  }[];
};

export type SkillGroup = { title: string; items: string[] };
export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  credentialId?: string;
};
export type Education = {
  school: string;
  degree: string;
  duration: string;
  gpa?: string;
  achievements?: string[];
};

export const profile = {
  name: "Purushothaman Boopathy Ethirajan",
  headline: "Engineering Manager at Mondia Group",
  title: "Engineering Manager",
  company: "Mondia Group",
  location: "Hamburg, Germany",
  connections: "422 connections",
  hero: {
    tagline:
      "Engineering leader with 15+ years across backend platforms, enterprise architecture, Java ecosystems, cloud delivery and software delivery leadership.",
    ctas: {
      primary: { label: "View experience", href: "/experience" },
      secondary: { label: "Contact", href: "/contact" },
      resume: { label: "Download resume", href: "/resume.pdf" }
    },
    profileImage: {
      src: "/Purushothaman.jpg",
      alt: "Purushothaman Boopathy Ethirajan"
    }
  },
  about: {
    heading: "Senior engineering leadership with deep technical range",
    summary:
      "Results-driven software professional with a strong hands-on engineering foundation and 15+ years delivering complex enterprise applications. Recognised for calm, effective leadership—building high-performing teams, mentoring engineers, and translating business goals into reliable, scalable systems. Experienced across the full software lifecycle from early discovery through production operations, performance optimisation and post-release support."
  },
  highlights: [
    {
      title: "15+ years in enterprise engineering",
      detail:
        "Backend platforms, Java/J2EE ecosystems, integrations and production-grade delivery."
    },
    {
      title: "Engineering leadership & mentorship",
      detail:
        "Team coordination, coaching, and delivery ownership across cross-functional stakeholders."
    },
    {
      title: "Strong Java backend depth",
      detail:
        "Spring, services, workflows, integrations, and operational support for critical systems."
    },
    {
      title: "Cloud & deployment execution",
      detail:
        "AWS, Docker, CI/CD workflows (Jenkins/GoCD), and pragmatic release operations."
    },
    {
      title: "Architecture & delivery across domains",
      detail:
        "Telecom, fintech, health and enterprise systems with a focus on maintainability and resiliency."
    },
    {
      title: "Agile delivery & performance focus",
      detail:
        "Iteration planning, production support, and systematic performance investigations."
    }
  ] satisfies Highlight[],
  experience: [
    {
      company: "Mondia Group",
      role: "Engineering Manager",
      type: "Full-time",
      duration: "Jan 2025 – Present",
      location: "Hamburg, Germany",
      highlights: [
        "Lead development teams delivering backend capabilities for enterprise products, balancing roadmap outcomes with operational stability.",
        "Coach engineers through technical decision-making, design reviews and pragmatic delivery practices.",
        "Drive cross-team alignment on delivery plans, risks and dependencies while maintaining clear execution ownership.",
        "Support Java platform evolution and quality improvements across services, integrations and production workflows."
      ]
    },
    {
      company: "Mondia Pay",
      role: "Technical Lead",
      type: "Full-time",
      duration: "Jul 2024 – Present",
      location: "Hamburg, Germany",
      highlights: [
        "Provide technical leadership for Java backend delivery, ensuring reliable service design and maintainable implementation.",
        "Partner with product and delivery stakeholders to translate requirements into scalable, testable solutions.",
        "Coordinate across teams to unblock delivery, manage changes, and improve engineering throughput without sacrificing quality."
      ]
    },
    {
      company: "Mondia Media Group",
      role: "Backend Developer",
      type: "Full-time",
      duration: "Jul 2018 – Jun 2024",
      location: "Greater Hamburg Area",
      highlights: [
        "Built and supported Java backend services for enterprise platforms, focusing on robustness, observability and production readiness.",
        "Delivered AWS-backed deployments and assisted with operational runbooks, incident response and performance tuning.",
        "Implemented backend integrations and supported release delivery across environments with a strong quality mindset."
      ]
    },
    {
      company: "netwalk GmbH",
      role: "Consultant (Solution Architect / Product Consultant)",
      duration: "Sep 2016 – Jun 2018",
      location: "Greater Hamburg Area",
      highlights: [
        "Delivered solution architecture and product consulting for enterprise clients, from story grooming through deployment design and production support.",
        "Led performance investigations (threading, memory, query behaviour) and introduced pragmatic improvements to reliability and scalability.",
        "Owned integration design and process flows for order fulfilment and omni-channel use cases."
      ],
      projects: [
        {
          name: "Task Management Application",
          role: "Solution Architect",
          duration: "Oct 2017 – Jun 2018",
          location: "Hamburg, Germany",
          client: "Valet Living, USA",
          bullets: [
            "Partnered with analysts and project leadership to shape requirements, refine stories and align technical approach with delivery goals.",
            "Designed data models plus functional and deployment architecture for a task management platform.",
            "Implemented services and integrations to process and fulfil orders end-to-end.",
            "Evaluated and implemented Matomo (Piwik) for product analytics.",
            "Deployed and supported the platform in AWS across lower environments and production."
          ]
        },
        {
          name: "Legacy Platform Migration & Performance Stabilisation",
          role: "Solution Architect & Product Consultant",
          duration: "May 2017 – Sep 2017",
          location: "Sydney, Australia",
          client: "Optus, Australia",
          bullets: [
            "Designed functional and deployment architecture for migrating a legacy product-driven platform.",
            "Diagnosed memory leakage, high thread usage, and long-running Neo4j queries; delivered targeted remediations.",
            "Worked with Neo4j support and implemented Neo4j causal clustering for high availability.",
            "Supported deployments into lower environments and production, ensuring stable operations.",
            "Facilitated Agile ceremonies across offshore and client teams to maintain delivery cadence and transparency."
          ]
        },
        {
          name: "TMF Action Week Demonstration",
          role: "Solution Architect",
          duration: "Mar 2017 – Apr 2017",
          location: "Hamburg, Germany",
          client: "TMF event, France",
          bullets: [
            "Collaborated with third parties to deliver a multi-API use case demo for TMF Action Week (Nice, May 2017).",
            "Designed and implemented API consumption/exposure patterns for an omni-channel enabled hub.",
            "Supported reporting and coordination across a multi-organisation initiative."
          ]
        },
        {
          name: "Order Fallout Processing & Call Center Tools",
          role: "Solution Architect & Project Lead",
          duration: "Sep 2016 – Feb 2017",
          location: "Hamburg, Germany",
          client: "Comcast, USA",
          bullets: [
            "Designed an integration solution to route post-order fallouts into queues and enable efficient agent handling.",
            "Delivered and supported call-center-facing applications that reduced resolution time for fulfilment issues.",
            "Coordinated migration of product modules from relational storage to Neo4j.",
            "Led load testing and performance improvements to increase system stability under peak usage."
          ]
        }
      ]
    },
    {
      company: "Apptium Technologies",
      role: "Project Lead / Technical Lead",
      duration: "Jan 2015 – Sep 2016",
      location: "Greater Chennai Area",
      highlights: [
        "Led delivery across distributed teams, combining hands-on engineering with planning, estimation and stakeholder communication.",
        "Owned workflow implementations, scheduling and integration services, with a strong focus on performance and operational hardening.",
        "Automated build and deployment pipelines to improve release reliability and feedback cycles."
      ],
      projects: [
        {
          name: "Developer Platform Enablement (Eclipse Che/Codenvy)",
          role: "Project Lead",
          duration: "May 2016 – Aug 2016",
          location: "Hamburg, Germany",
          bullets: [
            "Researched and evaluated Eclipse Che with NoSQL integration for platform usage.",
            "Customised and bundled Che/Codenvy features, building and deploying for internal platform adoption.",
            "Collaborated with vendor support to set up Che using Docker images and implement required capabilities.",
            "Implemented and integrated a platform service module interface console."
          ]
        },
        {
          name: "Enterprise Workflow Delivery",
          role: "Technical Lead & Project Lead",
          duration: "Apr 2015 – Apr 2016",
          location: "Chennai, India and Hamburg, Germany",
          client: "Comcast, USA",
          bullets: [
            "Ran sprint planning and coordination across onsite and offshore teams; produced delivery plans, estimates and work breakdowns.",
            "Designed, built and tested workflow-driven applications; produced clear artifacts and process documentation for stakeholders.",
            "Implemented Quartz-based scheduling for controlled order creation windows.",
            "Developed email templating logic with Velocity and reliable notification triggers.",
            "Improved overall platform performance through targeted hardening work.",
            "Integrated CI/CD automation using GoCD to support repeatable deployments."
          ]
        },
        {
          name: "BPM Monitoring & Reliability Enhancements",
          role: "Technical Lead",
          duration: "Jan 2015 – Mar 2016",
          location: "Chennai, India and Hamburg, Germany",
          client: "Comcast, USA",
          bullets: [
            "Built a BPM monitoring module with dashboards for metrics, health checks and configuration workflows.",
            "Defined constructs with product stakeholders to translate operational needs into implementable requirements.",
            "Implemented resilient retry mechanisms for post-processing steps in workflow chains.",
            "Explored lightweight parallel processing approaches to improve throughput."
          ]
        }
      ]
    },
    {
      company: "TierOne OSS Technologies Inc",
      role: "Team Lead",
      duration: "Mar 2014 – Dec 2014",
      location: "Greater Chennai Area",
      highlights: [
        "Led a team delivering platform capabilities in an Agile environment, from story grooming and estimates through demos and release readiness.",
        "Integrated workflow capabilities into platform modules and supported solution teams during integration and rollout.",
        "Automated build and deployment workflows with Jenkins to standardise release processes."
      ],
      projects: [
        {
          name: "Platform Workflow Module Integration",
          role: "Team Leader",
          duration: "Sep 2014 – Dec 2014",
          location: "Chennai, India",
          client: "Comcast, USA",
          bullets: [
            "Gathered and refined requirements with stakeholders and solution architects; produced estimates and work plans.",
            "Enhanced and integrated OpenSymphony workflow as the platform workflow module.",
            "Supported solution teams in troubleshooting and resolving integration issues.",
            "Configured Jenkins pipelines to automate build and deployment."
          ]
        },
        {
          name: "Agile Delivery & Sprint Demonstrations",
          role: "Team Leader",
          duration: "Mar 2014 – Aug 2014",
          location: "Chennai, India",
          client: "Comcast, USA",
          bullets: [
            "Planned and delivered features with BAs and architects, using test-driven practices where appropriate.",
            "Presented sprint outcomes to stakeholders and incorporated feedback into subsequent iterations."
          ]
        }
      ]
    },
    {
      company: "Texas Health and Human Services Commission",
      role: "Java / Adobe LiveCycle Developer",
      duration: "Feb 2012 – Jan 2014",
      location: "Austin, Texas Metropolitan Area",
      highlights: [
        "Delivered enterprise document services using J2EE and Adobe LiveCycle to generate, merge and store regulated PDFs at scale.",
        "Designed UML models, data structures and service contracts (WSDL/XSD) from business requirements.",
        "Improved operational insight by instrumenting performance capture and building Splunk dashboards for real-time monitoring.",
        "Supported platform migration (Solaris → Windows) to improve performance and maintainability."
      ]
    },
    {
      company: "Texas Health and Human Services Commission",
      role: "Java / Flex Developer",
      duration: "Jan 2011 – Jan 2012",
      location: "Austin, Texas Metropolitan Area",
      highlights: [
        "Built Flex-based UIs with robust state management and modular component architecture.",
        "Collaborated on SOA service integrations and application design using Agile delivery practices.",
        "Owned quality assurance for usability, accessibility and functional correctness."
      ]
    },
    {
      company: "Goodwill Industries of Southwestern Michigan",
      role: "VB and Access Programmer (Internship)",
      duration: "May 2010 – Sep 2010",
      location: "Greater Kalamazoo Area",
      highlights: [
        "Enhanced and stabilised internal business applications, reducing processing time and improving reliability for end users.",
        "Gathered requirements directly from users and delivered pragmatic improvements to payroll and accounting tools.",
        "Built database applications for employee tracking and donor profile management."
      ]
    },
    {
      company: "Western Michigan University",
      role: "Teaching Assistant / Peer Mentor",
      duration: "Sep 2007 – May 2010",
      location: "Greater Kalamazoo Area",
      highlights: [
        "Supported students in Windows, internet and Microsoft Office skills while maintaining strong academic performance.",
        "Mentored peers in mathematics and computer science and facilitated learning support sessions."
      ]
    },
    {
      company: "Intellisense Technology",
      role: "Software Engineer",
      duration: "Jun 2006 – Jun 2007",
      location: "Greater Chennai Area",
      highlights: [
        "Delivered a network document management and versioning system with access control, concurrency handling and version history.",
        "Implemented JSP and servlet-based features and developed reusable Core Java utility components.",
        "Produced project documentation and user guides to support adoption and handover."
      ]
    }
  ] satisfies ExperienceItem[],
  skills: [
    {
      title: "Leadership & Management",
      items: [
        "Engineering leadership",
        "Team mentorship",
        "Delivery coordination",
        "Stakeholder collaboration",
        "Requirement analysis",
        "Sprint planning",
        "Agile ceremonies",
        "Offshore and onsite coordination"
      ]
    },
    {
      title: "Backend & Enterprise Engineering",
      items: [
        "Java",
        "J2EE",
        "Spring",
        "Servlets",
        "JSP",
        "JDBC",
        "Hibernate",
        "Web services",
        "SOA",
        "OOAD",
        "OOPS",
        "API integration"
      ]
    },
    {
      title: "Architecture & Platforms",
      items: [
        "System design",
        "Functional architecture",
        "Deployment architecture",
        "Data modeling",
        "BPM and workflow systems",
        "Omni-channel solutions",
        "Enterprise integration",
        "Process flow implementation"
      ]
    },
    {
      title: "Cloud, DevOps & Infrastructure",
      items: [
        "AWS",
        "Docker",
        "Jenkins",
        "GoCD",
        "Deployment support",
        "Production support",
        "Build and release workflows",
        "Performance optimization"
      ]
    },
    {
      title: "Data, Monitoring & Specialized Tools",
      items: [
        "Neo4j",
        "Splunk",
        "Matomo / Piwik",
        "Quartz Scheduler",
        "Altova MapForce",
        "Adobe LiveCycle",
        "WebSphere",
        "SoapUI",
        "IBM Rational ClearCase"
      ]
    },
    {
      title: "Frontend & Legacy Technologies",
      items: [
        "Adobe Flex",
        "MXML",
        "ActionScript 3",
        "CSS",
        "AJAX",
        "JavaScript"
      ]
    }
  ] satisfies SkillGroup[],
  certifications: [
    {
      name: "Confluent Fundamentals Accreditation",
      issuer: "Confluent",
      issued: "Mar 2022",
      credentialId: "48243845"
    },
    {
      name: "ITIL Foundation Certificate in IT Service Management",
      issuer: "ITIL Certified",
      issued: "Aug 2013"
    },
    {
      name: "Java, J2EE certified course",
      issuer: "Intellisense Technology",
      issued: "May 2007"
    }
  ] satisfies Certification[],
  education: [
    {
      school: "Western Michigan University",
      degree: "Master of Science (M.S.), Computer Science",
      duration: "2007 – 2010",
      gpa: "3.14",
      achievements: [
        "Teaching Effectiveness Award (2010)",
        "Teaching, Research and Support Assistance Recognition (2009, 2010)",
        "Who’s Who Among Students in American Universities and Colleges (2009)",
        "Certificate of Appreciation — Division of Multicultural Affairs (Feb 2008)"
      ]
    },
    {
      school: "Anna University Chennai",
      degree: "Bachelor of Engineering (B.E.), Computer Science",
      duration: "2002 – 2006",
      gpa: "3.50"
    }
  ] satisfies Education[],
  contact: {
    heading: "Let’s connect",
    text: "Available for engineering leadership, architecture and enterprise technology conversations.",
    location: "Hamburg, Germany",
    buttons: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/bepurushoth/" },
      { label: "Email", href: "mailto:email@example.com" }
    ]
  }
} as const;

