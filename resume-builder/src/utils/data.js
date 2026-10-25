import TEMPLATE_ONE_IMG from '../assets/template-one.png'
import TEMPLATE_TWO_IMG from '../assets/template-two.png'
import TEMPLATE_THREE_IMG from '../assets/template-three.png'

export const resumeTemplates = [
  {
    id:'01',
    thumbnailImg: TEMPLATE_ONE_IMG,
    colorPaletteCode: 'themeOne',
    isPremium: false
  },
  {
    id:'02',
    thumbnailImg: TEMPLATE_TWO_IMG,
    colorPaletteCode: 'themeTwo',
    isPremium: true
  },
  {
    id:'03',
    thumbnailImg: TEMPLATE_THREE_IMG,
    colorPaletteCode: 'themeThree',
    isPremium: true
  }
]

export const themeColorPalette = {
  themeOne: [
    ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],

    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
    ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],

    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],

    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
  ],
  themeTwo: [
    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
    ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],
    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],
    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
  ],
  themeThree: [
    ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],
    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],
    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
  ]
};

export const DUMMY_RESUME_DATA = {
  profileInfo: {
    profileImg: null,
    profilePreviewUrl: "",
    fullName: "Shantanu Tripathi",
    designation: "Software Developer & Data Analyst",
    summary:
      "Software engineer with around 1 year of experience in business intelligence and data visualization, building Power BI dashboards and SQL-based reports. Strengthening backend skills in Java, Spring Boot and MongoDB through full-stack projects.",
  },
  contactInfo: {
    email: "shantanu.tripathi@example.com",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
    linkedin: "https://www.linkedin.com/in/shantanu-tripathi-433184273",
    github: "https://github.com/itzz-shantanu",
    website: "https://shantanu-tripathi.example.com",
  },
  workExperience: [
    {
      company: "Capgemini",
      role: "Software Engineer / Analyst",
      startDate: "2025-07",
      endDate: "2030-06",
      description:
        "Design interactive Power BI dashboards for performance monitoring and business reporting, using SQL for data extraction and analysis and DAX for dynamic KPIs. Worked on multiple analytics solutions and client training projects.",
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Kalinga Institute of Industrial Technology (KIIT)",
      startDate: "2021-07",
      endDate: "2025-06",
    },
  ],
  skills: [
    { name: "SQL", progress: 80 },
    { name: "Power BI", progress: 80 },
    { name: "DAX", progress: 80 },
    { name: "Python", progress: 80 },
    { name: "Java", progress: 80 },
    { name: "Spring Boot", progress: 80 },
  ],
  projects: [
    {
      title: "Election Analysis Dashboard (India General Election 2024)",
      description:
        "Interactive Power BI report with alliance-wise performance, state demographics and constituency drill-throughs, using DAX measures for dynamic KPIs and bookmarks for navigation.",
      github:
        "https://github.com/itzz-shantanu/Election-Analysis-Dashboard-PowerBI",
    },
    {
      title: "Resume Builder (Full Stack)",
      description:
        "React and Spring Boot web app with JWT authentication, email verification, Cloudinary image uploads and Razorpay payments. Configured the integrations and hardened security for deployment.",
    },
  ],
  certifications: [
    {
      title: "PL-300: Power BI Data Analyst Associate",
      issuer: "Microsoft",
      year: "2026",
    },
    {
      title: "OCEAN L1 Analytics: SQL",
      issuer: "Capgemini",
      year: "2026",
    },
    {
      title: "OCEAN L1 Analytics: Power BI",
      issuer: "Capgemini",
      year: "2021",
    },
  ],
  languages: [
    { name: "English", progress: 100 },
    { name: "Hindi", progress: 100 },
  ],
  interests: ["Data Visualization", "Backend Development", "Learning New Tools", "Problem Solving"],
};