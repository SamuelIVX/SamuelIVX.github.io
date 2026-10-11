export const personal = {
  handle: '@samhb',
  name: 'Samuel Hernandez Balderas',
  title: 'Software engineer & web developer.',
  email: 'samuel05.hb@gmail.com',
  linkedin: 'https://www.linkedin.com/in/samuelhb/',
  github: 'https://github.com/SamuelIVX',
  heroSummary: 'I build clean, reliable software focusing on full-stack development and scalable systems.',
  about: 'I am a computer science student with a strong interest in software engineering and web development. Outside of school, my hobbies include working out at the gym, building PCs, and diving deep into new technologies.'
};

export const projects = [
  { name: 'Interleave', kind: 'Concurrency & verification', description: 'An explicit-state model checker for multithreaded Java programs. Explores execution schedules to find concurrency bugs, with partial-order reduction and DPOR optimizations.', tech: ['Java', 'Model checking', 'DPOR'], repo: 'interleave', source: 'https://github.com/SamuelIVX/interleave' },
  { name: 'PayCore', kind: 'Full-stack application', description: 'A payroll calculation engine built around secure access and clear workflows. Combines a Next.js application with PostgreSQL, row-level security, and role-based routing.', tech: ['TypeScript', 'Next.js', 'PostgreSQL'], repo: 'paycore', demo: 'https://paycorehq.vercel.app/', source: 'https://github.com/SamuelIVX/paycore', image: 'paycore.jpg' },
  { name: 'Clarify', kind: 'AI & learning tools', description: 'Turns PDFs into summaries and interactive flashcards. A study tool that brings document processing and Claude into a focused learning workflow.', tech: ['Next.js', 'Claude', 'Document processing'], repo: 'clarify', demo: 'https://clarify-study.vercel.app/', source: 'https://github.com/SamuelIVX/clarify', image: 'clarify.jpg' },
  { name: 'FoodSense', kind: 'Desktop application', description: 'A nutrition lookup tool that scans grocery barcodes through a webcam or manual entry. Built with Java, Swing, JavaCV, and ZXing.', tech: ['Java', 'JavaCV', 'ZXing'], repo: 'FoodSense', source: 'https://github.com/SamuelIVX/FoodSense', image: 'foodsense.jpg' }
];

export const honors = [
  { title: 'Amazon Future Engineer Scholarship', issuer: 'Amazon', date: 'April 2023', amount: '$40,000', distinction: 'One of 400 students nationwide', description: 'Awarded a $40,000 college scholarship and a paid computer science internship at Amazon after freshman year.', highlight: 'paid computer science internship', association: 'Associated with Amazon Web Services', featured: true },
  { title: 'Meringoff MVP Scholarship', issuer: 'Meringoff Family Foundation', date: 'June 2023', amount: '$1,000', distinction: 'One of two student finalists', description: 'Awarded a $1,000 scholarship to cover educational supplies at college.', highlight: 'educational supplies' },
  { title: 'SparkYouth NYC Scholarship', issuer: 'SparkYouth NYC', date: 'June 2023', amount: '$1,160', distinction: 'One of approximately 50 students nationwide', description: 'Awarded a $1,160 scholarship to cover educational supplies at college.', highlight: 'educational supplies' }
];

export const experiences = [
  { id: 'aws-2026', company: 'Amazon Web Services', selector: 'SDE Intern · Billing APIs', title: 'Software Development Engineer Intern', date: 'June 2026 – August 2026', highlight: '52s to under 2s', points: [
    'Designed and deployed 3 read-only APIs on an Apache Iceberg/Parquet data lake with paginated, snapshot-consistent cursors and column projections, reducing end-to-end query latency from 52s to under 2s and per-query I/O by up to 60% across datasets with 200K+ rows through tiered caching, file-pruning, and sort-compaction optimizations serving granular billing breakdowns to enterprise customers.',
    'Developed a Cloudscape demo dashboard backed by a serverless API Gateway + Lambda proxy with SigV4 authentication, enabling stakeholders to validate billing breakdowns across all 3 API surfaces end-to-end.',
    'Owned the feature end-to-end from data modeling through production deployment: API design, Iceberg read engine, CDK infrastructure, CloudWatch observability, and comprehensive hand-off documentation.'
  ] },
  { id: 'aws-2025', company: 'Amazon Web Services', selector: 'SDE Intern · Billing analytics', title: 'Software Development Engineer Intern', date: 'June 2025 – August 2025', highlight: '83%', points: [
    'Developed an AWS bill computation analytics platform using Python to automate credential-based data retrieval and Athena query execution, building an S3-backed reusable query library via CLI flags, eliminating repetitive manual log searches across environments and reducing ticket resolution time by 83%.',
    'Designed an end-to-end automated billing data pipeline integrating S3 and Athena with dynamic AWS credential rotation, enabling seamless query execution at scale and reducing analysis and query time by 33%.',
    'Engineered an MCP Server in TypeScript with Zod schema validation, unifying multiple billing tools into a single AI-powered interface and enabling cross-org accessibility, reducing context switching overhead by 85%.'
  ] },
  { id: 'aws-2024', company: 'Amazon Future Engineer Intern', selector: 'AFE Intern', title: 'Amazon Future Engineer Intern', date: 'June 2024 – August 2024', highlight: '30%', points: [
    'Leveraged AWS services (S3, SNS, SQS, Lambda, Glue) to enhance the BillingEgress team’s invoicing process, designing scalable data flows that reduced latency and streamlined data processing time by 30%.',
    'Implemented scalable infra by provisioning AWS CloudFormation resources via Python CDK, focusing on modular design by isolating IAM roles and service-specific configurations across multiple directories.',
    'Prototyped and transitioned AWS services from a manual Management Console to an automated CI/CD deployment framework using Python CDK and IntelliJ improving system maintainability by 40%.'
  ] },
  { id: 'aot-data', company: 'America On Tech', title: 'Data Science Fellow', date: 'September 2024 – December 2024', highlight: 'more than 25%', points: [
    'Developed predictive models using Python, SQL, and Jupyter Notebooks.',
    'Analyzed large datasets with a focus on data consistency, deduplication, and handling missing values for improved machine-learning reliability.',
    'Led a nine-week team project simulating real-world client engagement, building a predictive model that increased forecasting accuracy by more than 25%.'
  ] },
  { id: 'aot-flex', company: 'America On Tech', title: 'TechFlex Leader', date: 'September 2022 – May 2023', highlight: '80+ hours of instruction', points: [
    'Selected for an advanced web development and UX design fellowship.',
    'Completed 80+ hours of instruction in advanced web development and UX design, building on 80+ hours of coding training in HTML, CSS, JavaScript, Repl.it, and Bootstrap.',
    'Worked with technology mentors and professionals on college and career readiness.'
  ] },
  { id: 'aot-360', company: 'America On Tech', title: 'Tech360 Intern', date: 'August 2022 – September 2022', highlight: 'mock business website', points: [
    'Acquired skills in HTML, CSS, and Bootstrap.',
    'Built a portfolio of technology projects demonstrating an understanding of web development.',
    'Presented a team-built mock business website to technology professionals serving as guest judges at the Demo Day Competition.'
  ] }
];

export const getFooterText = () => `© ${new Date().getFullYear()} Samuel Hernandez Balderas • All rights reserved.`;
