import { useState, useEffect } from 'react';
import profileImg from '../assets/profile.png';

// ============ OPTIONAL LOGOS ============
// Add files to src/assets/logos/ and uncomment the imports you have.
// Anything left commented out (or not imported) will fall back to an
// initial-letter badge automatically — nothing breaks if a logo is missing.

import microsoftLogo from '../assets/logos/microsoft.png';
import nuaLogo from '../assets/logos/nua.png';
import cfaLogo from '../assets/logos/cfa.png';
import iitmLogo from '../assets/logos/IITM.svg';
import hrCollegeLogo from '../assets/logos/hr-college.png';
import FamBusLogo from '../assets/logos/family-business.png';

/* ============================================
   SVG ICON COMPONENTS
   ============================================ */
const IconGitHub = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.082-.729.082-.729 1.205.084 1.839 1.238 1.839 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const IconLinkedIn = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

const IconInstagram = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const IconX = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const IconExternalLink = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

/* ============================================
   LOGO / BADGE COMPONENT
   Falls back to a colored initial if no logo image is passed
   ============================================ */
const OrgBadge = ({ name, logo }) => {
  if (logo) {
    return (
      <img
        src={logo}
        alt={name}
        className="w-9 h-9 rounded-md object-contain bg-white/90 p-1 flex-shrink-0"
      />
    );
  }
  return (
    <div className="w-9 h-9 rounded-md bg-accent/20 text-accent font-bold flex items-center justify-center flex-shrink-0 text-sm">
      {name.charAt(0)}
    </div>
  );
};

/* ============================================
   DATA
   ============================================ */
const SOCIALS = {
  email: "mailrahul2004@gmail.com",
  github: "https://github.com/Rahulkumawat04",
  linkedin: "https://www.linkedin.com/in/rahul-kumawat-b983981a4/",
  x: "https://x.com/Rahul_k04",
  instagram: "https://www.instagram.com/rahul_k04/",
  substack: "https://substack.com/@rahulkumawat2",
};

// NEWEST FIRST. Set `logo` to an imported image, or leave undefined for a fallback badge.
const WORK_EXPERIENCE = [
  {
    id: 1,
    role: "Sales Strategy Enablement - Apprentice",
    company: "Microsoft",
    logo: microsoftLogo,
    period: "Oct 2026 - Present",
    description: "Working with the Sales Strategy & Enablement team to support sales operations, strategy, and enablement initiatives. Involved in data analysis, process optimization, and cross-functional collaboration to drive business impact.",
    status: "current",
  },
  {
    id: 2,
    role: "Finance Intern",
    company: "Nua",
    logo: nuaLogo,
    period: "Jun 2025 - Sep 2025",
    description: [
    "Improved cash conversion cycle by 15+ days through end-to-end optimization.",
    "Reconciled financial data across Juspay and Razorpay payment gateways.",
    "Designed and implemented an RTV system with cross-functional teams.",
    "Built Excel/Python dashboards, reducing reporting time by 30%.",
    "Analyzed offline retail performance across major distributors.",
  ],
    status: "past",
  },
  {
    id: 3,
    role: "Support",
    company: "Family Business",
    logo: FamBusLogo,
    period: "2024 - Present",
    description:
      "Support in internal functions of the business, primarily overlooking accounts and tech infrastructure.",
    status: "current",
  },
];

// NEWEST FIRST
const EDUCATION = [
  {
    id: 1,
    role: "CFA Level 1",
    company: "CFA Institute",
    logo: cfaLogo,
    period: "Jun 2026",
    description: "Completed coursework and cleared Level 1 exam.",
  },
  {
    id: 2,
    role: "BS in Data Science",
    company: "IIT Madras",
    logo: iitmLogo,
    period: "Jan 2024 - Present",
    description: "Halfway through diploma. Foundational Certificate completed.",
  },
  {
    id: 3,
    role: "BMS Finance",
    company: "H.R. College of Commerce & Economics",
    logo: hrCollegeLogo,
    period: "Jun 2023 - May 2026",
    description: ["Director of Infobond Department, Finnacle Magazine (Jun 2025–May 2026) where grew the finance community to 1,300 members and managed a 17-member team.", "Deputy Director (Jun 2024–May 2025) where I managed a 1,100+ member finance community.", "PR Assistant at H.R. College's Mystique Festival (2023) where I secured ₹50,000+ in sponsorships.", "Earned Python & Derivatives Certificate (Dec 2025).", "Received 'Best Organizer' and 'Promising Young Leader' awards.",
],
  },
  {
    id: 4,
    role: "ICSE & ISC",
    company: "North Point School",
    logo: undefined,
    period: "2008 - 2023",
    description: "10th Boards: 86.4%. 12th Boards: 80.2%.",
  },
];

const PROJECTS = [
  {
    id: 1,
    name: "Mutual Fund Screener - Yet to Publish",
    description:
      "Quantitative screening tool for Indian equity mutual funds with performance analysis, risk metrics, and comparative analysis.",
    link: "https://github.com/Rahulkumawat04/",
    tags: ["Python", "SQL", "Data Analysis"],
  },
  {
    id: 2,
    name: "Financial Excel Dashboards - Yet to Publish",
    description:
      "Structured technical and professional Excel dashboards for finance and investment banking, including financial modeling, valuation, and portfolio analysis.",
    link: "https://linkedin.com/in/rahul-kumawat-b983981a4/",
    tags: ["Finance", "MS-Excel", "Investment Banking"],
  },
  {
    id: 3,
    name: "Web Development Projects",
    description:
      "Checkout my previous projects on web development, including personal portfolio websites, small business websites, and interactive web applications.",
    link: "https://github.com/Rahulkumawat04/",
    tags: ["Web Development", "Web Applications", "Personal Website"],
  },
];

const NAV_LINKS = ["about", "experience", "projects", "blogs", "services"];

/* ============================================
   REUSABLE TIMELINE (used by Work + Education)
   ============================================ */
function Timeline({ items }) {
  return (
    <div className="relative pl-8 md:pl-10">
      {/* vertical line */}
      <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-accent/25"></div>

      <div className="space-y-10">
        {items.map((item) => (
          <div key={item.id} className="relative">
            {/* dot */}
            <span
              className={`absolute -left-8 md:-left-10 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary ${
                item.status === "current" ? "bg-accent" : "bg-secondary/40"
              }`}
              aria-hidden="true"
            ></span>

            {/* period on the line */}
            <div className="text-secondary/50 text-xs font-mono uppercase tracking-wide mb-1">
              {item.period}
            </div>

            {/* content */}
            <div className="flex items-start gap-3">
              <OrgBadge name={item.company} logo={item.logo} />
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base md:text-lg font-bold">{item.role}</h3>
                  {item.status === "current" && (
                    <span className="bg-accent/20 text-accent text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-accent font-semibold text-sm mb-2">{item.company}</p>
                {Array.isArray(item.description) ? (<ul className="text-secondary/85 text-sm leading-relaxed list-disc pl-5 space-y-1.5">{item.description.map((point, index) => (<li key={index}>{point}</li>))}</ul>) : (<p className="text-secondary/85 text-sm leading-relaxed">{item.description}</p>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================
   MAIN COMPONENT
   ============================================ */
export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = NAV_LINKS.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-primary text-white font-sans antialiased">
      {/* ============ STICKY NAVBAR ============ */}
      <nav className="fixed top-0 inset-x-0 z-50 w-full bg-primary/90 backdrop-blur-md border-b border-accent/10">
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          <button onClick={() => scrollToSection("hero")} className="text-accent font-bold text-xl tracking-wide hover:opacity-80 transition">
            R.K. 
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`text-m font-medium capitalize transition-colors ${
                  activeSection === link ? "text-accent" : "text-secondary/80 hover:text-accent"
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary/70 hover:text-accent transition">
              <IconGitHub />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary/70 hover:text-accent transition">
              <IconLinkedIn />
            </a>
          </div>
        </div>
      </nav>

      <main className="w-full pt-16">
        {/* ============ HERO ============ */}
        <section id="hero" className="w-full min-h-[calc(100vh-4rem)] flex items-center px-5 md:px-10">
          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 md:order-1 flex justify-center md:justify-start">
              <div className="relative w-64 h-80 sm:w-80 sm:h-[28rem] md:w-full md:max-w-sm md:h-[32rem]">
                <div
                  className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl"
                  aria-hidden="true"
                ></div>

                  <img
                    src={profileImg}
                    alt="Rahul Kumawat"
                    className="relative w-full h-full object-cover rounded-2xl border border-accent/30 shadow-2xl hover:brightness-110 transition duration-300"
                  />

              </div>
            </div>

            <div className="order-1 md:order-2 space-y-5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <span className="font-light">Meet </span>  <br /><span className="text-accent">Rahul </span>
                <span className="text-secondary">Kumawat</span>
              </h1>
              <p className="text-secondary/90 text-base md:text-lg leading-relaxed max-w-md">
                Finance & Data Enthusiast | <br /> Learning fast, adapting faster, and finding patterns where finance, data, and business intersect.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button onClick={() => scrollToSection("projects")} className="px-6 py-3 rounded-lg bg-accent text-primary font-semibold text-sm hover:bg-accent/90 transition">
                  Explore Work
                </button>
                <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg border border-accent text-accent font-semibold text-sm hover:bg-accent/10 transition">
                  Connect
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" className="w-full py-24 px-5 md:px-10 scroll-mt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8">About</h2>
            <div className="space-y-5 text-secondary/90 text-base md:text-lg leading-relaxed">
              <p>
                Hi, I’m Rahul, and I like understanding how things work - then find ways to make them work better. I’m a finance graduate from H.R. College, alongside pursuing a Bachelor of Science in Data Science and Programming from IIT Madras. My interests sit at the intersection of finance, data, and technology, with a growing focus on using data to solve practical business problems. 
              </p>

              <p>
                At present, I’m a Sales Strategy & Enablement Apprentice at Microsoft, where I’m getting exposure to how a global technology company approaches sales, strategy, and business operations. Alongside this, I am preparing for CFA Level 2, having cleared CFA Level 1, building a stronger foundation in investment analysis and financial markets.
              </p>
                
              <p>Over the past few years, I’ve explored this intersection through academics, leadership, and hands-on experience. During my internship at Nua, a D2C femtech startup, I worked with the finance team on data analysis, cash conversion cycle optimization, reconciliation processes, market performance, and the redesign of their RTV system. I’ve also had exposure to family business operations, giving me a practical understanding of how businesses function beyond spreadsheets and financial statements.
              </p>
              
              <p>
                I’m interested in building at the intersection of finance and technology, whether that means analysing businesses, building data-driven systems, or eventually creating ventures of my own. I learn best by doing, and most of what I’m working toward comes down to one idea: understanding problems deeply enough to build something useful around them.
              </p>
            </div>
          </div>
        </section>

        {/* ============ WORK EXPERIENCE ============ */}
        <section id="experience" className="w-full py-24 px-5 md:px-10 scroll-mt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-12">Work Experience</h2>
            <Timeline items={WORK_EXPERIENCE} />
          </div>
        </section>

        {/* ============ EDUCATION (same timeline style) ============ */}
        <section className="w-full py-24 px-5 md:px-10 scroll-mt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-12">Education</h2>
            <Timeline items={EDUCATION} />
          </div>
        </section>

        {/* ============ PROJECTS ============ */}
        <section id="projects" className="w-full py-24 px-5 md:px-10 scroll-mt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-12">Projects</h2>
            <div className="space-y-6">
              {PROJECTS.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/5 border-l-2 border-accent/50 rounded-lg p-6 hover:bg-white/[0.08] hover:border-accent transition"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg md:text-xl font-bold group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <IconExternalLink className="w-5 h-5 text-secondary/50 group-hover:text-accent transition shrink-0 mt-1" />
                  </div>
                  <p className="text-secondary/85 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-accent/15 text-accent px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BLOGS ============ */}
        <section id="blogs" className="w-full py-24 px-5 md:px-10 scroll-mt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8">Blogs</h2>
            <div className="bg-white/5 border-l-2 border-accent/50 rounded-lg p-8">
              <p className="text-secondary/90 text-base md:text-lg leading-relaxed mb-6">
                I occasionally share thoughts on finance, data science, and startups on
                Substack. Follow to stay updated with my latest insights.
              </p>
              <a href={SOCIALS.substack} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-lg bg-accent text-primary font-semibold text-sm hover:bg-accent/90 transition">
                Read on Substack →
              </a>
            </div>
          </div>
        </section>

        {/* ============ SERVICES ============ */}
        <section id="services" className="w-full py-24 px-5 md:px-10 scroll-mt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8">Services &amp; Collaboration</h2>
            <div className="bg-white/5 border-l-2 border-accent/50 rounded-lg p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Interested in working together?</h3>
              <p className="text-secondary/90 text-base md:text-lg leading-relaxed mb-6">
                I'm open to discussions on freelance projects, consulting, collaborations,
                or just exploring ideas together. Whether it's financial analysis,
                data-driven insights, or building something new... Let's connect.
              </p>
              {/* <a href={`mailto:${SOCIALS.email}`} className="inline-block px-6 py-3 rounded-lg bg-accent text-primary font-semibold text-sm hover:bg-accent/90 transition">
                Get in Touch →
              </a> */}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mailrahul2004@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-lg bg-accent text-primary font-semibold text-sm hover:bg-accent/90 transition"> Get in Touch →</a>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="w-full border-t border-accent/10 py-10 px-5 md:px-10">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-accent font-bold text-lg">Rahul Kumawat</span>
          <div className="flex items-center gap-6">
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary/70 hover:text-accent transition"><IconLinkedIn /></a>
            <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="text-secondary/70 hover:text-accent transition"><IconX /></a>
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-secondary/70 hover:text-accent transition"><IconInstagram /></a>
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary/70 hover:text-accent transition"><IconGitHub /></a>
          </div>
        </div>
        <p className="text-center text-secondary/40 text-xs mt-8">
          © 2026 Rahul Kumawat. Built with React, Vite &amp; Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}