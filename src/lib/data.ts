export const PROFILE = {
  name: "Advait Jishnani",
  firstName: "Advait",
  initials: "AJ",
  role: "Software & Data Engineer",
  engineeringFocus: "Software engineering, data engineering, backend systems, distributed data platforms, and applied AI/LLM systems",
  email: "advaitnaresh@gmail.com",
  academicEmail: "aj4700@nyu.edu",
  phone: "",
  phoneHref: "",
  location: "New York, NY",
  resumeSummary: "Software and data engineer pursuing an M.S. in Computer Science at New York University. Experience spans production data and MLOps systems at Visa, creator-facing software and messaging infrastructure at Return on Creators, and student-facing workflow automation at NYU Tandon Digital Learning. Technical strengths include Python, SQL, Java, React, distributed data processing, cloud systems, vector search, and applied AI.",
  github: "https://github.com/advaitnaresh",
  linkedin: "https://www.linkedin.com/in/advait-jishnani",
  resumePath: "/resume.pdf",
};

export const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const SKILL_GROUPS = [
  {
    category: "Languages",
    color: "bg-blue-50/50 hover:bg-blue-50",
    skills: [
      { id: "py", symbol: "Py", name: "Python", icon: "python" },
      { id: "sq", symbol: "Sq", name: "SQL", icon: "postgresql" },
      { id: "jv", symbol: "Jv", name: "Java", icon: "openjdk" },
      { id: "cp", symbol: "C+", name: "C++", icon: "cplusplus" },
      { id: "ts", symbol: "Ts", name: "TypeScript", icon: "typescript" },
      { id: "js", symbol: "Js", name: "JavaScript", icon: "javascript" },
      { id: "bs", symbol: "Bs", name: "Bash", icon: "gnubash" },
    ],
  },
  {
    category: "Software & Backend",
    color: "bg-green-50/50 hover:bg-green-50",
    skills: [
      { id: "re", symbol: "Re", name: "React", icon: "react" },
      { id: "no", symbol: "No", name: "Node.js", icon: "nodedotjs" },
      { id: "ra", symbol: "Ra", name: "REST APIs", icon: "postman" },
      { id: "ds", symbol: "Ds", name: "Distributed Systems", icon: "apache" },
      { id: "gi", symbol: "Gi", name: "Git/GitHub", icon: "github" },
      { id: "ci", symbol: "Ci", name: "CI/CD", icon: "githubactions" },
    ],
  },
  {
    category: "Data Engineering",
    color: "bg-amber-50/50 hover:bg-amber-50",
    skills: [
      { id: "ps", symbol: "Ps", name: "PySpark", icon: "apachespark" },
      { id: "sp", symbol: "Sp", name: "Spark", icon: "apachespark" },
      { id: "af", symbol: "Af", name: "Airflow", icon: "apacheairflow" },
      { id: "kf", symbol: "Kf", name: "Kafka", icon: "apachekafka" },
      { id: "hi", symbol: "Hi", name: "Hive", icon: "apachehive" },
      { id: "et", symbol: "Et", name: "ETL/ELT", icon: "databricks" },
      { id: "dm", symbol: "Dm", name: "Data Modeling", icon: "snowflake" },
      { id: "dq", symbol: "Dq", name: "Data Quality", icon: "dbt" },
      { id: "qo", symbol: "Qo", name: "Query Optimization", icon: "googlebigquery" },
    ],
  },
  {
    category: "Databases & Storage",
    color: "bg-purple-50/50 hover:bg-purple-50",
    skills: [
      { id: "pg", symbol: "Pg", name: "PostgreSQL", icon: "postgresql" },
      { id: "pv", symbol: "Pv", name: "pgvector", icon: "postgresql" },
      { id: "md", symbol: "Md", name: "MongoDB", icon: "mongodb" },
      { id: "sb", symbol: "Sb", name: "Supabase", icon: "supabase" },
      { id: "mi", symbol: "Mi", name: "MinIO", icon: "minio" },
      { id: "db", symbol: "Db", name: "DynamoDB", icon: "amazondynamodb" },
      { id: "os", symbol: "Os", name: "OpenSearch", icon: "opensearch" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    color: "bg-sky-50/50 hover:bg-sky-50",
    skills: [
      { id: "aw", symbol: "Aw", name: "AWS", icon: "amazonaws" },
      { id: "gc", symbol: "Gc", name: "GCP", icon: "googlecloud" },
      { id: "do", symbol: "Do", name: "Docker", icon: "docker" },
      { id: "ku", symbol: "Ku", name: "Kubernetes", icon: "kubernetes" },
      { id: "cd", symbol: "Cd", name: "AWS CDK", icon: "amazonaws" },
      { id: "fa", symbol: "Fa", name: "Fargate", icon: "amazonaws" },
      { id: "sqs", symbol: "Sq", name: "SQS", icon: "amazonaws" },
      { id: "la", symbol: "La", name: "Lambda", icon: "awslambda" },
    ],
  },
  {
    category: "AI & Analytics",
    color: "bg-rose-50/50 hover:bg-rose-50",
    skills: [
      { id: "ll", symbol: "Ll", name: "LLMs", icon: "openai" },
      { id: "rg", symbol: "Rg", name: "RAG", icon: "langchain" },
      { id: "em", symbol: "Em", name: "Embeddings", icon: "huggingface" },
      { id: "vs", symbol: "Vs", name: "Vector Search", icon: "pinecone" },
      { id: "hn", symbol: "Hn", name: "HNSW", icon: "algolia" },
      { id: "ga", symbol: "Ga", name: "Gemini API", icon: "googlegemini" },
      { id: "ml", symbol: "Ml", name: "Machine Learning", icon: "scikitlearn" },
      { id: "me", symbol: "Me", name: "Model Evaluation", icon: "weightsandbiases" },
      { id: "ar", symbol: "Ar", name: "ARIMA", icon: "pandas" },
      { id: "tb", symbol: "Tb", name: "Tableau", icon: "tableau" },
    ],
  },
  {
    category: "Robotics & Media",
    color: "bg-stone-100/80 hover:bg-stone-200/80",
    skills: [
      { id: "mc", symbol: "Mc", name: "Model Predictive Control", icon: "ros" },
      { id: "ma", symbol: "Ma", name: "MATLAB", icon: "mathworks" },
      { id: "ff", symbol: "Ff", name: "FFmpeg", icon: "ffmpeg" },
      { id: "wh", symbol: "Wh", name: "Whisper", icon: "openai" },
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Salesforce Assistant",
    company: "New York University - Tandon Digital Learning",
    location: "New York, NY",
    dates: "Dec 2025 - Present",
    bullets: [
      "Rebuilt the Stripe payment and enrollment workflow with Salesforce Flow automations for multiple NYU Tandon courses supporting $300K+ in revenue.",
      "Designed an Aura-based web application with reusable templates and embedded onboarding paths for student-facing workflows.",
      "Integrated Salesforce, Stripe, and Brightspace through automated workflows and REST APIs, reducing manual handoffs and improving cross-system reliability."
    ],
    technologies: ["Salesforce", "Salesforce Flow", "Aura", "Stripe", "Brightspace", "REST APIs", "workflow automation", "data modeling"],
  },
  {
    role: "Data Engineering Intern",
    company: "Return on Creators",
    location: "New York, NY",
    dates: "Jun 2026 - Aug 2026",
    bullets: [
      "Built a full-stack React admin inbox with real-time messaging and underlying Python services, shipping production features across frontend, backend, and data layers.",
      "Shipped an end-to-end iMessage creator onboarding flow with Supabase and automated routing, designed to support up to 1,000 simultaneous creators while preserving production reliability.",
      "Developed a mass-messaging workflow designed to reach 500 creators without disrupting the existing backend, accounting for load, failure modes, and operational reliability.",
      "Re-keyed a production messaging table to a composite key, rebuilt inbound routing across multiple messaging lines, and resolved 3 data-integrity bugs through testing and production debugging.",
      "Built a persona-extraction workflow that turned creators' text and voice-call transcripts into structured profile data.",
      "Planned a personalized LLM extension so creators could receive contextual answers inside the onboarding flow."
    ],
    technologies: ["React", "Python", "Supabase", "SQL/data modeling", "real-time messaging", "APIs", "workflow automation", "LLM/AI integration planning"],
  },
  {
    role: "Data Engineer",
    company: "Visa Inc.",
    location: "Bengaluru, India",
    dates: "Jan 2024 - Aug 2025",
    bullets: [
      "Automated the end-to-end Model Risk Management (MRM) process and model-refitting pipeline, cutting turnaround time by 60% and manual effort by 80%.",
      "Implemented automated testing, validation, monitoring, and alerting across 15+ production models to catch data-quality and model issues before downstream release.",
      "Orchestrated dependencies, retries, scheduling, and monitoring across 20+ Apache Airflow production workflows.",
      "Engineered large-scale financial-data transformations with Python, Java, SQL, PySpark, and Hive.",
      "Supported Tableau reporting and monitoring used by 30+ cross-functional stakeholders."
    ],
    technologies: ["Python", "Java", "SQL", "PySpark", "Spark", "Hive", "Apache Airflow", "Tableau", "data quality", "observability", "workflow orchestration", "MLOps"],
  },
  {
    role: "Data Engineer Intern",
    company: "Visa Inc.",
    location: "Bengaluru, India",
    dates: "May 2023 - Jun 2023",
    bullets: [
      "Reduced a production query from 2 hours to under 12 minutes, a 90% improvement.",
      "Applied partitioning, caching, and bucketing in Hive and Spark to improve execution speed and scalability.",
      "Investigated backend bottlenecks and schema-design trade-offs with senior engineers."
    ],
    technologies: ["Hive", "Apache Spark", "SQL", "distributed data processing", "performance tuning", "schema design"],
  }
];

export const EDUCATION = [
  {
    university: "New York University",
    degree: "Master of Science in Computer Science",
    specialization: "Data Engineering / Data Science Focus",
    dates: "Sept 2025 - May 2027",
    gpa: "4.0/4.0",
    location: "New York, NY"
  },
  {
    university: "BITS Pilani, Goa",
    degree: "Bachelor of Engineering in Computer Science, Minor in Finance",
    dates: "Aug 2020 - May 2024",
    gpa: "4.0/4.0",
    location: "Goa, India"
  }
];

export const PROJECTS = [
  {
    id: "rocathon",
    index: "01",
    title: "RoCathon: Hybrid Creator Search",
    kicker: "AI / SEARCH / DATA ENGINEERING",
    description: "A hybrid creator search system over 10,000+ profiles that combines structured metadata, lexical retrieval, vector search, and Gemini embeddings for higher-quality discovery.",
    features: [
      "Won 1st place at RoCathon.",
      "Indexed 10,000+ creator profiles.",
      "Improved top-result relevance by 35% through reranking, metadata filters, semantic retrieval, and Gemini embeddings."
    ],
    tech: ["PostgreSQL", "pgvector", "TypeScript", "Node.js", "Gemini API", "embeddings", "HNSW", "hybrid search"],
    github: "https://github.com/advaitnaresh",
  },
  {
    id: "aries",
    index: "02",
    title: "Aries: Real-Time Data Platform",
    kicker: "DATA ENGINEERING / STREAMING",
    description: "A real-time brand-intelligence data platform that processes high-volume streaming events and serves low-latency KPIs through a tiered storage architecture.",
    features: [
      "Processed 10,000+ streaming events per second.",
      "Served live KPIs at under 100 ms latency."
    ],
    tech: ["Apache Kafka", "Apache Spark", "Python", "PostgreSQL", "MinIO"],
    github: "https://github.com/advaitnaresh",
  },
  {
    id: "vulcan",
    index: "03",
    title: "VulCAN: Automated Cloud Vulnerability Analyzer",
    kicker: "CLOUD / SECURITY / BACKEND",
    description: "An event-driven cloud security system that automates codebase vulnerability scanning and decouples high-volume remediation work through asynchronous AWS services.",
    features: [
      "Accelerated security-remediation workflows by 75%.",
      "Sustained 5,000+ daily jobs without queue bottlenecks."
    ],
    tech: ["AWS Fargate", "AWS SQS", "AWS CDK", "Python", "PostgreSQL"],
    github: "https://github.com/advaitnaresh",
  },
  {
    id: "foreign-whispers",
    index: "04",
    title: "Foreign Whispers",
    kicker: "AI / MEDIA SYSTEMS",
    description: "An AI media pipeline for transcription, translation, speech synthesis, and synchronized video output, with API orchestration separated from GPU-intensive inference.",
    features: [],
    tech: ["FastAPI", "Whisper", "Docker", "FFmpeg", "speech and media-processing APIs"],
    github: "https://github.com/advaitnaresh",
  },
  {
    id: "shivarkats",
    index: "05",
    title: "AI-Powered Applicant Tracking System (shivarkATS)",
    kicker: "AI / CLOUD APPLICATIONS",
    description: "A cloud-based applicant tracking system with an ML-powered resume-screening workflow designed to reduce manual recruiting effort.",
    features: [
      "60% reduction in manual screening effort."
    ],
    tech: ["AWS", "Python", "MongoDB", "Machine Learning", "web frontend"],
    github: "https://github.com/advaitnaresh/shivarkATS",
  },
  {
    id: "mpc",
    index: "06",
    title: "Model Predictive Control in Robotics",
    kicker: "ROBOTICS / OPTIMIZATION",
    description: "A robotics control project exploring Model Predictive Control (MPC), control horizons, and computational trade-offs for choosing optimized actions toward a target state.",
    features: [
      "Repository contains 13 commits and multiple MPC implementations/simulation artifacts."
    ],
    tech: ["MATLAB", "Model Predictive Control", "optimization", "robotics"],
    github: "https://github.com/advaitnaresh/MPC",
  },
  {
    id: "ml-financial",
    index: "07",
    title: "Machine Learning in Financial Markets",
    kicker: "MACHINE LEARNING / TIME SERIES",
    description: "A financial time-series project comparing moving-average approaches with ARIMA forecasting on historical Apple stock data.",
    features: [
      "Approximately 82% accuracy for the ARIMA model."
    ],
    tech: ["Python", "Jupyter", "Pandas", "ARIMA", "GCP", "time-series analysis"],
    github: "https://github.com/advaitnaresh/Machine-Learning-In-FInancial-Markets",
  },
  {
    id: "concierge",
    index: "08",
    title: "Restaurant Concierge Bot",
    kicker: "CLOUD / SERVERLESS APPLICATIONS",
    description: "A serverless dining concierge chatbot that collects user preferences conversationally, searches restaurant data, and sends personalized recommendations by email.",
    features: [
      "Ingests 1,000+ restaurant records from the Yelp API.",
      "Uses SQS to decouple user requests from background recommendation processing."
    ],
    tech: ["AWS Lambda", "Amazon Lex", "API Gateway", "SQS", "DynamoDB", "OpenSearch", "SES", "Python", "HTML/CSS/JavaScript"],
    github: "https://github.com/advaitnaresh/Restaurant-Concierge-Bot",
  }
];

export const CERTIFICATIONS = [
  {
    id: "spark-advanced",
    title: "Spark: Advanced",
    issuer: "Visa University",
    issued: "Jul 2023",
    credentialId: "UC-b542e98a-64e5-43e4-8360-ddf057bfe2e1",
    credentialUrl: "https://www.udemy.com/certificate/UC-b542e98a-64e5-43e4-8360-ddf057bfe2e1/",
  },
  {
    id: "hive-advanced",
    title: "Hive: Basics to Advanced",
    issuer: "Visa University",
    issued: "Jun 2023",
    credentialId: "UC-f49bfbfc-63e0-4680-bf9b-e8d67c49a7cc",
    credentialUrl: "https://www.udemy.com/certificate/UC-f49bfbfc-63e0-4680-bf9b-e8d67c49a7cc/",
  },
  {
    id: "trading-ml-gcp",
    title: "Introduction to Trading, Machine Learning & GCP",
    issuer: "Coursera",
    issued: "Feb 2023",
    credentialId: "aeb71b6095c3245e5ef022df8cd58322",
    credentialUrl: "https://www.coursera.org/share/aeb71b6095c3245e5ef022df8cd58322",
  },
  {
    id: "postman-api",
    title: "Postman API Fundamentals Student Expert",
    issuer: "Badgr (now part of Instructure)",
    issued: "Oct 2022",
    credentialId: "63497d52c9de796453041b3d",
    credentialUrl: "https://api.badgr.io/public/assertions/DMlhHGAWSC6rlUGpQBPZiQ",
  },
  {
    id: "python-crash-course",
    title: "Crash Course on Python",
    issuer: "Coursera",
    issued: "Aug 2021",
    credentialId: "BQKV876YXDKG",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/BQKV876YXDKG",
  },
  {
    id: "competitive-programming",
    title: "Intro to Competitive Programming",
    issuer: "Center for Technical Education, BITS Pilani",
    issued: "Aug 2021",
    credentialId: "1Y41zUvePu7q34GdYYIbkqvK06kcaAAKT",
    credentialUrl: "https://drive.google.com/file/d/1Y41zUvePu7q34GdYYIbkqvK06kcaAAKT/view?usp=drivesdk",
  },
  {
    id: "robotics",
    title: "Intro to Robotics",
    issuer: "Center for Technical Education, BITS Pilani",
    issued: "Aug 2021",
    credentialId: "1Y6xV0n63L_Y7bA8m9fIup-igw3M31bnR",
    credentialUrl: "https://drive.google.com/file/d/1Y6xV0n63L_Y7bA8m9fIup-igw3M31bnR/view?usp=drivesdk",
  },
  {
    id: "cpp-programming",
    title: "C++ Programming",
    issuer: "Udemy",
    issued: "May 2021",
    credentialId: "UC-0c4307ec-5977-405b-9e72-362766a0d362",
    credentialUrl: "https://www.udemy.com/certificate/UC-0c4307ec-5977-405b-9e72-362766a0d362/",
  },
  {
    id: "academic-advisor",
    title: "Academic Advisor",
    issuer: "Success Infinity",
    issued: "Apr 2021",
    credentialId: "1-DxzZ9KnJiHLrGrmMtK3bUAcJmq8Lnf0",
    credentialUrl: "https://drive.google.com/file/d/1-DxzZ9KnJiHLrGrmMtK3bUAcJmq8Lnf0/view?usp=sharing",
  },
  {
    id: "python-basics",
    title: "Python Basics",
    issuer: "Coursera",
    issued: "Dec 2020",
    credentialId: "W96GT9FEDEMJ",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/W96GT9FEDEMJ",
  },
];
