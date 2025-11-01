import profileImage from "../assets/image.jpeg";

const Data = {
  title: "Dhinesh Sivakumar",
  subtitle: "Welcome to my Wikipedia inspired portfolio",

  sections: [
    {
      id: "intro",
      title: "Introduction",
      paragraphs: [
        `A graduate student at The Ohio State University specializing in Computer Science and Engineering. My research focuses on applying machine learning techniques to healthcare data, particularly in developing predictive models for patient outcomes. I'm passionate about leveraging technology to solve real-world problems and improve lives.`,
        ``,
      ],
    },
    {
      id: "education",
      title: "Education",
      list: [
        {
          degree: "MS in Computer Science and Engineering",
          institution: "The Ohio State University",
          location: "Columbus, Ohio",
          duration: "2024 – Spring 2026 (Expected)",
        },
        {
          degree: "MSc (5 year integrated) in Decision and Computing Sciences",
          institution: "Coimbatore Institute of Technology",
          location: "Coimbatore, India",
          duration: "2019 – 2024",
        },
      ],
    },
    {
      id: "experience",
      title: "Professional Experience",
      experiences: [
        {
          role: "AI Automation Engineer Summer Intern",
          organization: "Everworker (formerly Integrail)",
          location: "Greenwich, CT (Remote)",
          date: "May 2025 – Aug 2025",
          points: [
            "Designed AI agents to automate the employee onboarding process, improving operational eﬃciency and reducing manual workload.",
            "Integrated Microsoft Graph API to streamline user provisioning and resource allocation workflows.",
          ],
        },
         {
          role: "Software Engineer Intern",
          organization: "Nference Inc",
          location: "Coimbatore, India",
          date: "Jul 2022 – Jun 2024",
          points: [
            "Created failure statistics pipelines for healthcare knowledge graph, improving data integrity",
            "Maintained and optimized Kubernetes-based crawling infrastructure for biomedical datasets.",
            "Integrated cellXgene (single-cell omics repository) into the NferX platform to enhance research capabilities",
            "Automated a De-Identification (De-ID) pipeline for PHI data in academic medical centers, contributing to HIPAA-compliant workflows on the Nsights platform"
          ],
        },
      ],
    },
     {
      id: "experience",
      title: "Research Experience",
      experiences: [
        {
          role: "Student Researcher - Dept. of Computer Science and Engineering",
          organization: "The Ohio State University",
          location: "Columbus, OH",
          date: "Feb 2025 – Present",
          points: [
            "Developing graph-neural survival models for glioblastoma by fusing multi-omics (RNA-seq, CNV, methylation) into a patient-similarity graph; benchmarking early/late/attention fusion strategies against Cox/RSF baselines.",
          ],
        },
      ],
    },
    {
      id: "projects",
      title: "Projects",
      projects: [
        {
          name: "OSU Accessible Parking Tracker",
          date: "Oct 2025",
          organization: "The Ohio State University",
          points: [
                "Built a full-stack web app during HACKOH/IO 2025 hackathon to monitor accessible parking across Ohio State’sgarages/lots, featuring an interactive Google Map and dynamic table with real-time status badges",
                "Implemented a computer-vision endpoint using OpenCV to detect disability indicators from license plates,automatically updating occupancy counts in the database and reflecting live changes in the UI."],
        },
        {
          name: "Early Detection of Depression via Reddit Posts",
          date: "Apr 2025",
          points: [
                "Implemented an end-to-end pipeline for eRisk 2025 (Task 2): parsed and prepared data from different cohorts, and ran linguistic analyses (TF-IDF, log-odds) to characterize depressed individuals.",
                "Benchmarked transformer-based models to define performance baselines for early depression detection."],
        }
      ],
    },
    {
      id: "skills",
      title: "Skills & Certifications",
      list: [
        "Docker and Kubernetes",
        "Python, React, TensorFlow, SQL, JavaScript",
      ],
    },
  ],

  infobox: {
    name: "Dhinesh Sivakumar",
    image: profileImage,
    location: "Columbus, Ohio",
    email: "dhineshkumar4645@gmail.com",
    linkedin: "https://www.linkedin.com/in/dhinesh-sivakumar/",
    github: "https://github.com/dhinesh04",
    medium: "https://medium.com/@dhinesh_sivakumar",
    availability: "Part-time / Full-time from May 2026",
  },

  lastEdited: "November 1, 2025",
};

export default Data;
