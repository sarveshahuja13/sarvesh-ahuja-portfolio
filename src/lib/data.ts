
export const experiences = [
  {
    id: 1,
    role: 'Associate Analyst Developer',
    company: 'Sun Life Global Solutions',
    date: 'Aug 2025 - Present',
    logo: '/logos/sunlife.png', // Placeholder for logo
    projects: [
      {
        name: 'Project: Data Mesh Hydration pipeline',
        description: [
          'Developed and enhanced the company’s first ever kafka->iceberg event based hydration pipeline into data mesh to be fault tolerant and optimized (97% API calls reduced).',
          'The framework enhancement made by me were replicated for 3 other existing pipeline projects by other teams.',
          'Saved 145k CAD by improving pipeline reliability when calling external services that support ingestion process.',
          'Reorganized iceberg data partitioning (20M+ records) as required by consumers post prod. Required developing new methods using AWS Athena & glue to do this.'
        ],
      },
    ],
    skills: ['AWS Glue', 'Apache Iceberg', 'Data Engineering', 'DevOps', 'Amazon Athena', 'Distributed Caching']
  },
  {
    id: 2,
    role: 'Graduate Engineer',
    company: 'Sun Life Global Solutions',
    date: 'Aug 2024 - Aug 2025',
    logo: '/logos/sunlife.png',
    projects: [
      {
        name: 'Project: Data Hydration pipeline',
        description: [
          'Utilized internal frameworks to hydrate event based source data to data mesh as iceberg tables.',
          'End to end deployment automation via CICD using Jenkins & Terraform HCP developed from scratch.'
        ],
      },
      {
        name: 'Project: Health data platform - ETL Pipeline',
        description: [
          'Team developed custom ETL pipelines on Pillway data to help data scientists by providing them with data on the mesh which used to earlier take hours for them to wrangle for downstream tasks.',
          'End to end deployment automation via CICD using Jenkins & Terraform HCP developed from scratch.'
        ],
      }
    ],
    skills: ['Jenkins', 'Terraform', 'CI/CD', 'ETL pipelines']
  },
  {
    id: 3,
    role: 'Machine Learning Intern',
    company: 'Locuz Enterprise Solutions Ltd',
    date: 'Jun 2023 - Sep 2023',
    logo: '/logos/locuz.png',
    projects: [
      {
        name: 'Key Responsibilities',
        description: [
          'Built a conversational AI dashboard assistant for green energy clients using GPT-4 and Gradio.',
          'Integrated InfluxDB for time-series energy data and created real-time dashboards in Grafana.',
          'PS: Prototyped this agentic system in June 2023 - before agents were mainstream ;)'
        ],
      },
    ],
    skills: ['Large Language Models (LLM)', 'AWS', 'Generative AI', 'Langchain', 'Python', 'Docker', 'InfluxDB', 'AI', 'PostgreSQL']
  },
];

export const projects = [
  {
    id: 1,
    title: 'EmotionGPT – AI Therapist Chatbot',
    description: 'A voice-based chatbot for mental wellness support.',
    image: '/projects/emotion-gpt.png',
    details: [
      'Built a voice-based chatbot using GPT-4, Whisper, and emotion detection ML models.',
      'Integrated via Gradio with HuggingFace for text-to-speech transformation.'
    ],
    tags: ["GPT-4", "Whisper", "Gradio", "AI", "Python"]
  },
  {
    id: 2,
    title: 'IoT Dashboard for Real-Time Data',
    description: 'A dashboard for visualizing real-time sensor data from IoT devices.',
    image: '/projects/iot-dashboard.png',
    details: [
      'Developed a dashboard using AWS TimestreamDB and IoT Core to visualize sensor data.',
      'Applications: tank level monitoring, smart garbage bins, flood detection systems.'
    ],
    tags: ["AWS", "IoT", "TimestreamDB", "Grafana", "Data"]
  },
  {
    id: 3,
    title: 'Image Segmentation Using MST',
    description: "An implementation of Kruskal's algorithm for image analysis.",
    image: '/projects/image-segmentation.png',
    details: [
      'Implemented Kruskal’s MST algorithm to segment images and cluster backgrounds.',
      'Analyzed computational complexity and performance across image sets.'
    ],
    tags: ["Python", "Computer Vision", "Algorithms"]
  },
  {
    id: 4,
    title: 'Optimized Diaspora Evacuation System (ODES)',
    description: 'A full-stack platform to automate logistical planning for emergency evacuations.',
    image: '/projects/odes-evacuation.png',
    details: [
      'Replaced slow, manual evacuation processes by analyzing population data and assigning optimal flight routes.',
      'Tech Stack: React, Python (Flask, Pandas, scikit-learn), Folium, and Docker.'
    ],
    tags: ["React", "Python", "Flask", "Docker", "Full-Stack"]
  }
];

export const certifications = [
  {
    id: 1,
    name: 'Operationalizing Generative AI Applications (FMOps/LLMOps)',
    issuer: 'AWS',
  },
  {
    id: 2,
    name: 'Fundamentals of Machine Learning and Artificial Intelligence',
    issuer: 'AWS',
  },
  {
    id: 3,
    name: 'Getting Started with Prompt Engineering',
    issuer: 'Skillsoft',
  },
  {
    id: 4,
    name: 'Core Infrastructure Fundamentals',
    issuer: 'Google Cloud',
  },
  {
    id: 5,
    name: 'Transformer-based NLP & Deep Learning',
    issuer: 'NVIDIA',
  },
  {
    id: 6,
    name: 'Cloud Architecting & Foundations',
    issuer: 'AWS Academy',
  },
  {
    id: 7,
    name: 'Python for Data Science',
    issuer: 'NPTEL',
  },
];

export const focusAreas = [
  'Agentic AI and Generative AI Applications',
  'Data Engineering using AWS (Glue, Lambda, Timestream, etc.)',
  'End-to-End ML/AI system deployment',
  'DevOps and Cloud Architecture',
];
