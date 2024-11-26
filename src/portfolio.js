/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rohit's Portfolio",
  description:
    "Engineer by Heart, who knows how to Build things and fix the existing ones",
  og: {
    title: "Rohit Saroha Portfolio",
    type: "website",
    url: "http://itsrohitsaroha.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Rohit Saroha",
  logo_name: "Rohit Saroha",
  nickname: "",
  subTitle:
    "Engineer by Heart, who knows how to Build things and fix the existing ones",
  resumeLink:
    "https://drive.google.com/file/d/1_mtf7j5VRl1L0a-Fo2LJClkjfmzcTtuP/view?usp=drive_link",
  portfolio_repository: "https://github.com/itsrohitsaroha/portfolio",
  githubProfile: "https://github.com/itsrohitsaroha",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/itsrohitsaroha",
   //linkedin: "https://www.linkedin.com/in/itsrohitsaroha/",
   //gmail: "rohitsaroha857@gmail.com"
  // gitlab: "https://gitlab.com/rohitsaroha98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Rohit_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/itsrohitsaroha",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/itsrohitsaroha/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto: rohitsaroha857@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/itsrohitsaroha",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  }
];

const skills = {
  data: [
    
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Experinced in building both frontend and backend applications from scratch",
        "⚡ Technologies used are Java, Spring boot, NodeJs, GoLang, Kotlin, HTML, CSS, React",
        "⚡ Beliver of writing extendible, clean code, with proper tests.",
        "⚡ Well verse with various microservices and design patterns.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        
        
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on both on-premise and public clouds",
        "⚡ Have been a part of SRE(Site Reliablity Engineering) team at HSBC",
        "⚡ Experinced in managing(Rebuild, Patching, Firewalls) RHEL servers both physical and virtual",
        "⚡ Have a good understanding of Reverse proxy, Loadbalancers, DNS etc",

      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/Rohit_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@Rohit391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Army Institute of Technology, Pune",
      subtitle: "B.E. in Information Technology",
      logo_path: "aitlogo.png",
      alt_name: "AIT Pune",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done projects on Deep Learning, Data Science and Full Stack Development.",
        "⚡ I was selected for Prime Minister Scholarship worth 96k and AGIF Scholarship worth 80k.",
      ],
      website_link: "http://aitpune.com",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "GCP Professional Cloud Devops Engineer",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.credential.net/e2390bb9-4e6c-4e74-befa-333934303b5d?key=9102e739d0f5bf4e8d3e13c676cf95e8435998b6c611e7512a46951dc552b5cd&record_view=true",
      alt_name: "Google",
      color_code: "#8C151599",
    },
    {
      title: "Hsbc Certified Enterprise Engineer",
      subtitle: "- HSBC",
      logo_path: "hsbc.png",
      certificate_link:
        "Todo",
      alt_name: "Hsbc",
      color_code: "#c1c76f",
    },
    {
      title: "HSBC's Vision 27 Award in People Category",
      subtitle: "- HSBC",
      logo_path: "hsbc.png",
      certificate_link:
        "Todo",
      alt_name: "Hsbc",
      color_code: "#864dcc",
    },
    {
      title: "Reliable Google Cloud Infrastructure: Design and Process",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/7MUC4X7YJ9X5?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
      alt_name: "Google",
      color_code: "#8697d9",
    },
    {
      title: "HSBC's Star Performer Award",
      subtitle: "- HSBC",
      logo_path: "hsbc.png",
      certificate_link:
        "Todo",
      alt_name: "Hsbc",
      color_code: "#697f71",
    },
    {
      title: "Developing a Google SRE Culture",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/D5TGH6HNHUUY?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
      alt_name: "Google",
      color_code: "#666a7a",
    },
    {
      title: "HSBC's Pat on back Award",
      subtitle: "- HSBC",
      logo_path: "hsbc.png",
      certificate_link:
        "Todo",
      alt_name: "Hsbc",
      color_code: "#ffee9c",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Experienced Engineer with a demonstrated history of working in the financial services industry. Skilled in Java, Spring Boot, Golang, React, Javascript, Python, Linux, Kubernetes",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Consultant Specialist",
          company: "Hsbc Technology India",
          company_url: "https://hsbc.com/",
          logo_path: "hsbc.png",
          duration: "Nov 2022 - Present",
          location: "Pune, Maharashtra",
          description:
            "Working on a trade store application which receives high volumes of trades from multiple Primary Trading Systems. The trade store applications recives trades data in realtime, trasform into multiple dataformats, serves the consistent and temporal data to multiple downstream systems.",
          color: "#0879bf",
        },
        {
          title: "Senior Software Engineer",
          company: "Hsbc Technology India",
          company_url: "https://hsbc.com",
          logo_path: "hsbc.png",
          duration: "May 2021 - Oct 2022",
          location: "Pune, Maharashtra",
          description:
            "Worked on DevSecOps Team to improve the security lanscape accros Market and Security Landscape. Worked on tools like Checkmarx, AQUA Sec, NetSparker, Web Application Firewall, ModSecurity, Kernel Virtual Machines, Purple Teaming",
          color: "#9b1578",
        },
        {
          title: "Software Engineer",
          company: "Hsbc Technology India",
          company_url: "https://hsbc.com",
          logo_path: "hsbc.png",
          duration: "June 2019 - Apr 2021",
          location: "Pune, Maharashtra",
          description:
            "Worked on both frontend and backend of Sales Analytics and Research contact entitlements application",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "IOS App Development Intern",
          company: "Sapean Technologies ",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "sapen.jpeg",
          duration: "June 2017 - July 2017",
          location: "Gurugram",
          description:
            "Contributed in feature development of TechHeal application, which optimizes the phone by merging duplicate contacts and giving options to delete duplicate photos",
          color: "#000000",
        }
      ],
    }
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "feelingProud.svg",
    description:
      "Feel free to reachout via ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://rohitsaroha.hashnode.dev/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Raghu Nagar,",
    locality: "Kanodar",
    country: "IN",
    region: "New Delhi",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
