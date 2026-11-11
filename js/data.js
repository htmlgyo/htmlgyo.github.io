/* =========================================================
   EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO
   Everything on the site (text, projects, certificates)
   is generated from the data below.
   ========================================================= */

const PORTFOLIO = {
  profile: {
    name: "Geoffrie Balahadia",
    initials: "GB",
    role: "Full-Stack Developer",
    tagline:
      "I build web platforms for real communities: a delivery app for neighborhood stores, a portal for a roleplay gaming city, and a Discord bot with its own control center.",
    location: "Philippines",
    email: "geoffriebalahadia23@gmail.com",
    available: true, // shows the "Available for work" badge
    resume: "", // e.g. "assets/resume.pdf" — leave empty to hide the button
    photo: "assets/profile.jpg",
    socials: {
      github: "https://github.com/htmlgyo",
      linkedin: "", // e.g. "https://linkedin.com/in/yourusername"
      twitter: "",
    },
  },

  typedRoles: ["FiveM Game Developer", "Web Platform Builder", "Certified in HTML & CSS", "Discord Integrations"],

  about: [
    "I'm a developer from the Philippines who builds products people use every day. My projects range from UTOS, a delivery service that connects barangay residents with their local sari-sari stores, to OutRun RP, the website and application system for a GTA V roleplay community.",
    "I enjoy the whole stack: designing clean, responsive interfaces, wiring up logins and payments, and deploying everything to production. I hold the Information Technology Specialist certification in HTML and CSS from Certiport (Pearson VUE).",
    "I'm taking a BS in Information Technology, majoring in Mobile App and Web Development, at FEU Institute of Technology, after completing the ICT strand at STI Global City.",
  ],

  /* {projects}, {live} and {certs} are counted automatically from the lists below */
  stats: [
    { value: "{live}", label: "Live projects" },
    { value: "{projects}", label: "Projects built" },
    { value: "{certs}", label: "Industry certification" },
  ],

  skills: [
    { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vite", "Responsive design"] },
    { group: "Backend & data", items: ["Lua", "Node.js", "Express", "MySQL", "REST APIs", "Discord OAuth2"] },
    { group: "Product features", items: ["FiveM scripting", "In-game systems", "Discord bots", "Live map tracking", "GCash payments", "Admin dashboards", "User verification"] },
    { group: "Tools & deployment", items: ["Git & GitHub", "Figma", "VS Code", "Web hosting", "Custom domains & DNS"] },
  ],

  /* category is used by the filter buttons (any text you like) */
  projects: [
    {
      title: "UTOS — Neighborhood Delivery",
      description:
        "A delivery platform for Philippine barangays. Customers order from nearby sari-sari stores, bakeries and pharmacies, pay with cash or GCash, and follow their rider live on a map. Riders pass ID and selfie checks, and every order has a pickup code.",
      category: "Web App",
      tags: ["Delivery platform", "Live tracking", "GCash", "Rider verification"],
      image: "assets/projects/utos.png",
      github: "",
      demo: "https://utos.shop/",
      featured: true,
    },
    {
      title: "OutRun RP — Community Portal",
      description:
        "Website for a whitelisted car-culture roleplay city on GTA V (FiveM). Shows live server status and player count, a one-click F8 connect command, and an English/Tagalog switch. Players sign in with Discord, accept the rules, apply, and book a voice interview.",
      category: "Gaming",
      tags: ["Discord OAuth2", "FiveM", "Live server status", "EN / TL"],
      image: "assets/projects/outrun-rp.png",
      github: "",
      demo: "https://outruncity.duckdns.org/",
      featured: true,
    },
    {
      title: "ATK NØX — Discord Bot Control Center",
      description:
        "A multi-purpose Discord bot with 47 slash commands and a web control center. Server owners sign in with Discord and toggle modules: anti-nuke, auto-moderation, honeypot traps, verification, tickets, 24/7 music, leveling, reaction roles, whitelist applications and more.",
      category: "Discord Bot",
      tags: ["Discord bot", "Discord OAuth2", "Web dashboard", "Moderation"],
      image: "assets/projects/atk-system.png",
      github: "",
      demo: "https://atksystem.spcfy.eu/",
      featured: true,
    },
    {
      title: "CBFT — Consumer Finance Business Tool",
      description:
        "Built during my Senior High School OJT: a company app directory where employees search every work tool, filter by category, and open it in one click. Includes an admin login for managing the list. Designed in Figma, with a Node.js and Express API backed by MySQL.",
      category: "Internal Tool",
      tags: ["Node.js", "Express", "MySQL", "Figma"],
      image: "assets/projects/cbft.png",
      github: "https://github.com/htmlgyo/Consumer-Bussiness-finance-Tool",
      demo: "",
      featured: false,
    },
    {
      title: "ATK System — FiveM Job Suite",
      description:
        "A job suite I wrote for OutRun RP: police, EMS, fire, courts, crime, barbershop and illnesses. A shared core works on ESX, QBCore and Qbox, an in-game React tablet runs the Police MDT, EMS Charts, Fire Command and Court Records apps, and the server re-checks every action.",
      category: "FiveM Script",
      tags: ["Lua", "React", "TypeScript", "MySQL", "ox_lib"],
      image: "assets/projects/atk-fivem.png",
      github: "",
      demo: "",
      suite: true, // the scripts from `fivem.modules` below are shown in this card's place
      showCard: false, // set to true to also show this overview card before the scripts
      featured: true,
    },
  ],

  /* The ATK System scripts. Each one becomes its own card in Featured projects, right after the ATK System card. */
  fivem: {
    // shown on every script card instead of a Code link (the scripts are private)
    exclusive: { label: "Exclusive Project", note: "Private to OutRun RP & Revline Republic" },
    modules: [
      {
        name: "Police",
        resource: "atk_police",
        image: "assets/fivem/atk_police.png",
        description:
          "The full police job: duty, armory with grade-locked gear, garage with a 3D vehicle preview, cuff, escort and search, citations, jail and 911 dispatch, plus the MDT tablet for reports and warrants.",
        highlights: ["MDT tablet", "Bodycams & CCTV", "Speed cameras", "Impound & clamps"],
      },
      {
        name: "EMS / Ambulance",
        resource: "atk_ambulance",
        image: "assets/fivem/atk_ambulance.png",
        description:
          "Downed and death system where injuries depend on weapon and body part, with bleeding and live vitals. Medics treat patients through minigames, scan them with X-ray, CT and MRI screens, and bill them through insurance.",
        highlights: ["CPR & bandage minigames", "X-ray / CT / MRI", "Billing & insurance", "EMS Charts app"],
      },
      {
        name: "Fire Department",
        resource: "atk_fire",
        image: "assets/fivem/atk_fire.png",
        description:
          "Server-owned fires that spread and burn out, so every player sees the same blaze. Crews put them out with extinguishers or the firetruck water cannon and split the reward by how much each one extinguished.",
        highlights: ["Spreading fires", "Water cannon", "Fire Command app"],
      },
      {
        name: "Department of Justice",
        resource: "atk_doj",
        image: "assets/fivem/atk_doj.png",
        description:
          "Court cases filed from police reports, with hearings, a case timeline and verdicts that apply the fine and prison time automatically. Judges sign warrants and expunge records; citizens can request a lawyer.",
        highlights: ["Cases & verdicts", "Warrants", "Lawyer requests"],
      },
      {
        name: "Crime",
        resource: "atk_crime",
        image: "assets/fivem/atk_crime.png",
        description:
          "Drug harvesting, processing and corner selling, plus store robberies with lockpick skill checks. Robberies alert the police, and drug use shows up in the EMS tox screen.",
        highlights: ["Drugs & selling", "Store robberies", "Police alerts"],
      },
      {
        name: "Barbershop",
        resource: "atk_barbershop",
        image: "assets/fivem/atk_barbershop.png",
        description:
          "A player-run barbershop with a live styling editor. Customers preview looks and print an order paper; a barber or an NPC barber cuts it, then sends an itemised bill. Owners manage funds and staff from a boss menu.",
        highlights: ["Live style preview", "NPC barber queue", "Boss menu"],
      },
      {
        name: "Illnesses & Pharmacy",
        resource: "atk_diseases",
        image: "assets/fivem/atk_diseases.png",
        description:
          "Five illnesses with their own symptoms and screen effects, each cured by one medicine. A player-run pharmacy sells the cures, and doctors write prescriptions that pharmacists fill.",
        highlights: ["5 illnesses", "Pharmacy business", "Prescriptions"],
      },
    ],
  },

  /* image: a .png/.jpg preview of the certificate; pdf: the original file (optional) */
  certificates: [
    {
      title: "Information Technology Specialist — HTML and CSS",
      issuer: "Certiport · Pearson VUE",
      issuerLogo: "assets/certificates/certiport-logo.png", // optional: replaces the coloured initials tile
      date: "2025-07-16",
      expires: "2030-07",
      credentialId: "bhzm-s4qu",
      verifyUrl: "https://verify.certiport.com",
      image: "assets/certificates/html-css-certiport.png",
      pdf: "assets/certificates/html-css-certiport.pdf",
      skills: ["HTML5", "CSS3", "Responsive design", "Accessibility"],
    },
  ],

  /* add jobs, internships or school here; leave empty to hide the section */
  /* type: "Education" or "Work" (shown as a label). period: add years when you have them, e.g. "2024 — Present" */
  experience: [
    {
      type: "Education",
      level: "College",
      role: "BS Information Technology, major in Mobile App and Web Development",
      company: "FEU Institute of Technology",
      period: "2024 — Present",
      description:
        "Currently studying software development for the web and mobile, including programming, databases, UI design and systems analysis.",
    },
    {
      type: "Work",
      role: "FiveM Game Developer",
      company: "Revline Republic · OutRun RP",
      period: "2023 — Present",
      description:
        "Wrote ATK System, a job suite in Lua and React (police, EMS, fire, courts, crime, barbershop and illnesses) that players use inside the city, and maintain the servers for two GTA V roleplay communities. For OutRun RP I also built the website, Discord login and the player application system.",
    },
    {
      type: "Work",
      role: "Web Developer Trainee (OJT)",
      company: "Oak Drive",
      period: "Senior High School OJT",
      description:
        "Built CBFT (Consumer Finance Business Tool), a searchable directory of the company's work apps with category filters and an admin login. Designed the layout in Figma and built the Node.js/Express API and MySQL database.",
    },
    {
      type: "Education",
      level: "Senior High School",
      role: "ICT Strand: Mobile App and Web Development",
      company: "STI Global City",
      period: "2022 — 2024",
      description:
        "Learned the foundations of programming and web development, and completed on-the-job training as a web developer trainee.",
    },
  ],
};
