export const experiences = [
  {
    id: 1,
    role: 'Software Developer',
    company: 'Sun Life Global Solutions, Bangalore',
    date: 'Aug 2024 - Present',
    projects: [
      {
        name: 'Project: CCAS Pega',
        details: [
          'Led deployment of a customer data platform to production.',
          'Collaborated with platform teams to enhance data hydration, boosting system resilience by ~85%.',
          'Built backend components: 7 Glue Jobs, 5 Lambdas, CI/CD with Jenkins and Terraform.',
        ],
      },
      {
        name: 'Project: HDP',
        details: [
          'Took over project during team transition and led it to production (May 2025).',
          'Designed and implemented new CI/CD pipelines and serverless data processing jobs.',
          'Re-architected pipeline to cut costs by 60% while improving system reliability.',
        ]
      }
    ]
  },
  {
    id: 2,
    role: 'Machine Learning Intern',
    company: 'Locuz Enterprise Solutions Ltd',
    date: 'Jun 2023 - Sep 2023',
    description: [
        'Built a conversational AI dashboard assistant for green energy clients using GPT-4 and Gradio.',
        'Integrated InfluxDB for time-series energy data and created real-time dashboards in Grafana.',
        'Generated Flux queries and enabled voice emotion detection using a custom ML model.',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'EmotionGPT – AI Therapist Chatbot',
    description: 'A voice-based chatbot for mental wellness support.',
    details: [
        'Built a voice-based chatbot using GPT-4, Whisper, and emotion detection ML models.',
        'Integrated via Gradio with HuggingFace for text-to-speech transformation.'
    ]
  },
  {
    id: 2,
    title: 'IoT Dashboard for Real-Time Data',
    description: 'A dashboard for visualizing real-time sensor data from IoT devices.',
    details: [
        'Developed a dashboard using AWS TimestreamDB and IoT Core to visualize sensor data.',
        'Applications: tank level monitoring, smart garbage bins, flood detection systems.'
    ]
  },
  {
    id: 3,
    title: 'Image Segmentation Using MST',
    description: "An implementation of Kruskal's algorithm for image analysis.",
    details: [
        'Implemented Kruskal’s MST algorithm to segment images and cluster backgrounds.',
        'Analyzed computational complexity and performance across image sets.'
    ]
  },
];

export const certifications = [
    {
      id: 1,
      name: 'Operationalizing Generative AI Applications (FMOps/LLMOps)',
      issuer: 'AWS',
    },
    {
      id: 2,
      name: 'Fundamentals of Machine Learning and AI',
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
]
