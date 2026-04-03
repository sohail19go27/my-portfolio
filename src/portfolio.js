/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Sohail Ahmad",
  title: "Hi all, I'm Sohail",
  subTitle: emoji(
    "A Software Development Engineer 🚀 with expertise in building high-performance, scalable systems and AI-driven applications. Experienced in Node.js, Spring Boot, and Python, with a strong focus on Operating Systems and Distributed Systems. Passionate about writing clean, efficient code and solving real-world problems through technology."
  ),
  resumeLink:
    "https://drive.google.com/file/d/14hL1F_bDuft3fr_-jtorWaC56-hLeduu/view?usp=drive_link",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/sohail19go27",
  linkedin: "https://www.linkedin.com/in/sohail-ahmad-68085b276",
  gmail: "sohail19006363@gmail.com",
  facebook: "https://www.facebook.com/sohail.ahmad.291942",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE DEVELOPER SPECIALIZING IN FULL-STACK & AI SYSTEMS",
  skills: [
    emoji("⚡ Develop high-performance, scalable backend architectures"),
    emoji("⚡ Integrate LLMs and NLP models into modern web applications"),
    emoji("⚡ Optimize database performance through indexing and caching"),
    emoji("⚡ Containerize applications using Docker for seamless deployment")
  ],

  softwareSkills: [
    {skillName: "html-5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "TypeScript", fontAwesomeClassname: "fas fa-code"},
    {skillName: "reactjs", fontAwesomeClassname: "fab fa-react"},
    {skillName: "nodejs", fontAwesomeClassname: "fab fa-node"},
    {skillName: "sql-database", fontAwesomeClassname: "fas fa-database"},
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "git", fontAwesomeClassname: "fab fa-git"}
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "IIIT Manipur",
      logo: require("./assets/images/IIITManipurLogo.png"),
      subHeader: "B.Tech in Computer Science and Engineering",
      duration: "May 2022 - May 2026",
      desc: "CGPA: 8.01",
      descBullets: [
        "Smart India Hackathon 2025: Selected participant (Top 1%)",
        "Solved 300+ problems on LeetCode with a focus on Advanced DSA",
        "Second prize in college cybersecurity competition (Focus: Net. Security)",
        "Organized coding events, mentoring 50+ juniors in Web Dev and DSA"
      ]
    },
    {
      schoolName: "Allen Career Institute",
      logo: require("./assets/images/allen.png"),
      subHeader: "JEE Advanced Preparation",
      duration: "2019 - 2022",
      desc: "Cleared JEE Main with 95 percentile",
      descBullets: ["Developed strong analytical and problem-solving skills"]
    },
    {
      schoolName: "Don Bosco Academy, Patna",
      logo: require("./assets/images/donbosco.png"),
      subHeader: "ICSE (Class X)",
      duration: "Completed 2019",
      desc: "Secure 91.2% in ICSE Board Examination",
      descBullets: ["Ranked in the top 2% of school academics"]
    }
  ]
};

// Proficiency Section
const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Backend (Node.js, Spring Boot, SQL)", progressPercentage: "85%"},
    {Stack: "Programming (C++, Java, Python)", progressPercentage: "80%"},
    {Stack: "Frontend (React, Next.js)", progressPercentage: "70%"},
    {Stack: "DevOps (Docker, CI/CD, Linux)", progressPercentage: "65%"}
  ],
  displayCodersrank: false
};

// Work Experience Section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Backend Developer Intern",
      company: "1stop",
      companylogo: require("./assets/images/1stop_logo.png"), // Ensure this image exists
      date: "Jan 2025 – Apr 2025",
      desc: "Optimized backend systems and enhanced application security.",
      descBullets: [
        "Boosted performance by 35% through MySQL indexing and caching layers",
        "Implemented Laravel Breeze auth with RBAC and secure hashing",
        "Dockerized environments for 100% reproducibility across servers"
      ]
    }
  ]
};

// Big Projects Section
const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/LogoMindShield.png"),
      projectName: "MindShield - AI Powered Digital Discipline",
      projectDesc:
        "A MERN stack platform using Python NLP models for sentiment detection to combat social media addiction and anxiety.",
      footerLink: [
        {name: "View Code", url: "https://github.com/sohail19go27/MINDShield"}
      ]
    },
    {
      image: require("./assets/images/AIFitness.png"), // Update to your file name
      projectName: "AI Fitness Manager",
      projectDesc:
        "Personalized planner built with Next.js and LLM APIs (OpenAI/Gemini) to generate structured workout architectures.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/sohail19go27/AI-Fitness-Coach"
        }
      ]
    },
    {
      image: require("./assets/images/ERP_System.png"), // Update to your file name
      projectName: "Distributed ERP System",
      projectDesc:
        "Scalable Java Spring Boot backend architected for high-concurrency enterprise data across multiple modules.",
      footerLink: [{name: "View Code", url: "https://github.com/sohail19go27"}]
    }
  ],
  display: true
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink:
    "https://drive.google.com/file/d/14hL1F_bDuft3fr_-jtorWaC56-hLeduu/view?usp=drive_link",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7296971876",
  email_address: "sohail19006363@gmail.com"
};

const openSource = {display: false};
const achievementSection = {display: false};
const blogSection = {display: false};
const talkSection = {display: false};
const podcastSection = {display: false};
const twitterDetails = {display: false};
const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
