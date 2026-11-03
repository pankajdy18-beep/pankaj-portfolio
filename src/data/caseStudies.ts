export type FrameworkLayer = {
  name: string;
  responsibility: string;
  label: string;
};

export type FrameworkLane = {
  title: string;
  layers: FrameworkLayer[];
};

export type CaseStudy = {
  title: string;
  employer: string;
  period: string;
  role: string;
  location?: string;
  project: string;
  industry: string;
  challenge: string;
  solution: string[];
  impact: string[];
  businessValue: string;
  technologies: string[];
  workflow: string[];
  frameworkNote: string;
  frameworkLanes: FrameworkLane[];
  implementationDetails?: string;
  proposedStructure?: string[];
};

const layer = (
  name: string,
  responsibility: string
): FrameworkLayer => ({
  name,
  responsibility,
  label: "Illustrative layer",
});

export const caseStudies: CaseStudy[] = [
  {
    title: "Banking Automation Platform",
    employer: "Acuity Analytics / Acuity Knowledge Services",
    period: "March 2026 – November 2026",
    role: "Senior Associate | SDET / QA Automation Engineer",
    location: "Gurgaon, India",
    project: "Banking Platform for a US Client",
    industry: "Banking / FinTech",

    challenge:
      "Testing critical banking workflows across UI and API layers while maintaining reliable regression coverage, backend data validation, and release confidence.",

    solution: [
      "Executed UI and API automation for banking workflows using Playwright, JavaScript/TypeScript, TestNG and Cucumber BDD.",
      "Developed and maintained reusable automation components for repeatable and maintainable regression execution.",
      "Integrated regression suites with Jenkins for scheduled execution and release validation.",
      "Performed backend data validation using SQL.",
      "Supported functional, regression, API and end-to-end testing.",
      "Collaborated with developers during defect triage and root-cause analysis.",
      "Used Git and GitHub for source control and automation code management.",
    ],

    impact: [
      "Approximately 70% automation coverage, as documented in the resume.",
      "Reusable automation components improved test maintainability.",
      "Jenkins-based regression execution supported repeatable release validation.",
      "Backend SQL validation provided additional confidence in transaction-related workflows.",
    ],

    businessValue:
      "UI, API and database-level validation provides broader coverage of banking workflows and supports reliable regression and release-readiness decisions.",

    technologies: [
      "Playwright",
      "JavaScript",
      "TypeScript",
      "TestNG",
      "Cucumber BDD",
      "API Testing",
      "Jenkins",
      "SQL",
      "Git",
      "GitHub",
    ],

    workflow: [
      "Analyze banking business scenarios and identify UI/API test coverage.",
      "Create and maintain automated test scenarios using Playwright.",
      "Use Cucumber BDD and TestNG for test organization and execution.",
      "Validate API responses and application behavior.",
      "Perform backend data validation using SQL.",
      "Execute regression suites through Jenkins.",
      "Review execution results and support defect triage.",
    ],

    frameworkNote:
      "The framework representation below describes the documented technology stack and responsibilities. It represents the testing approach rather than proprietary internal architecture.",

    implementationDetails:
      "The documented stack includes Playwright, JavaScript/TypeScript, TestNG, Cucumber BDD, Jenkins, SQL, API testing, Git and GitHub. Exact internal framework packages and folder structure are not publicly documented.",

    frameworkLanes: [
      {
        title: "BDD & Test Execution Layer",
        layers: [
          layer(
            "Feature Files / Test Scenarios",
            "Describe banking business scenarios and expected outcomes."
          ),
          layer(
            "Cucumber BDD",
            "Organizes readable business scenarios and executable steps."
          ),
          layer(
            "TestNG",
            "Manages test execution and test configuration."
          ),
        ],
      },
      {
        title: "UI & API Automation Layer",
        layers: [
          layer(
            "Playwright Automation",
            "Automates critical banking UI workflows."
          ),
          layer(
            "API Testing",
            "Validates API behavior and service responses."
          ),
          layer(
            "Reusable Automation Components",
            "Provides reusable utilities and maintainable automation components."
          ),
        ],
      },
      {
        title: "Validation Layer",
        layers: [
          layer(
            "UI Assertions",
            "Validates expected application behavior."
          ),
          layer(
            "API Assertions",
            "Validates API responses and expected service behavior."
          ),
          layer(
            "SQL Validation",
            "Validates relevant backend transaction data."
          ),
        ],
      },
      {
        title: "CI/CD Layer",
        layers: [
          layer(
            "Jenkins Pipeline",
            "Runs scheduled regression automation."
          ),
          layer(
            "Execution Results",
            "Reviews regression results and failures."
          ),
          layer(
            "Git / GitHub",
            "Manages automation source code and version control."
          ),
        ],
      },
    ],
  },

  {
    title: "CRM Automation Platform",
    employer: "EagleDrift Technologies Pvt. Ltd.",
    period: "November 2025 – February 2026",
    role: "Senior Test Engineer | SDET",
    location: "Bangalore, India",
    project: "CRM Automation Platform for a US Client",
    industry: "CRM / Enterprise Software",

    challenge:
      "Maintaining reliable UI, API and database validation for CRM workflows while keeping regression automation scalable and maintainable.",

    solution: [
      "Built and maintained a hybrid automation framework using Selenium WebDriver with Java and TestNG.",
      "Automated UI and API scenarios using Selenium and REST Assured.",
      "Developed reusable framework components for scalable test execution.",
      "Automated more than 150 UI and API test cases, as documented in the resume.",
      "Configured scheduled regression execution through Jenkins.",
      "Validated transactional data using SQL.",
      "Performed functional, regression and API testing.",
      "Used Maven, Git and GitHub for build and source-code management.",
    ],

    impact: [
      "150+ automated UI and API test cases.",
      "Reusable automation framework components.",
      "Scheduled regression execution through Jenkins.",
      "Database-level verification of CRM transactions.",
      "Improved maintainability and repeatability of regression execution.",
    ],

    businessValue:
      "Combining UI, API and SQL validation provides layered coverage for CRM workflows and helps identify issues earlier in the testing lifecycle.",

    technologies: [
      "Selenium WebDriver",
      "Java",
      "TestNG",
      "REST Assured",
      "Postman",
      "Jenkins",
      "SQL",
      "Maven",
      "Git",
      "GitHub",
    ],

    workflow: [
      "Identify CRM business workflows requiring automation.",
      "Create UI automation using Selenium WebDriver and Java.",
      "Automate API scenarios using REST Assured.",
      "Organize execution using TestNG.",
      "Validate transactional data using SQL.",
      "Execute scheduled regression suites through Jenkins.",
      "Review failures and collaborate with development teams.",
    ],

    frameworkNote:
      "Framework architecture is represented using the documented Selenium, Java, TestNG, REST Assured, Jenkins and SQL stack. It does not expose proprietary employer architecture.",

    implementationDetails:
      "UI and API automation were maintained as reusable components. SQL validation was used for transactional data verification where applicable.",

    proposedStructure: [
      "src/test/java/tests/ui/",
      "src/test/java/tests/api/",
      "src/main/java/pages/",
      "src/main/java/api/",
      "src/main/java/base/",
      "src/main/java/utils/",
      "src/test/resources/testdata/",
      "src/test/resources/config/",
    ],

    frameworkLanes: [
      {
        title: "Test Execution Layer",
        layers: [
          layer(
            "TestNG Test Classes",
            "Organize and execute UI and API automation tests."
          ),
          layer(
            "Maven",
            "Supports project build and dependency management."
          ),
        ],
      },
      {
        title: "UI Automation Layer",
        layers: [
          layer(
            "Selenium WebDriver",
            "Automates CRM web application workflows."
          ),
          layer(
            "Page Object Model",
            "Separates page interactions from test logic."
          ),
          layer(
            "Reusable Utilities",
            "Provides shared automation functionality."
          ),
        ],
      },
      {
        title: "API Automation Layer",
        layers: [
          layer(
            "REST Assured",
            "Automates REST API scenarios."
          ),
          layer(
            "Postman",
            "Supports API exploration and validation."
          ),
          layer(
            "Response Assertions",
            "Validates API responses and expected behavior."
          ),
        ],
      },
      {
        title: "Data & CI/CD Layer",
        layers: [
          layer(
            "SQL Validation",
            "Validates relevant CRM transactional data."
          ),
          layer(
            "Jenkins",
            "Runs scheduled regression automation."
          ),
          layer(
            "Git / GitHub",
            "Manages automation source code."
          ),
        ],
      },
    ],
  },

  {
    title: "HRMS & Analytics Automation",
    employer: "Newgen Technomate LLP",
    period: "July 2024 – October 2025",
    role: "QA Engineer",
    location: "Pune, India",
    project: "HRMS & Analytics",
    industry: "HRMS / Analytics",

    challenge:
      "Validating HRMS dashboards, reporting workflows and analytics microservices while maintaining stable UI/API automation and supporting performance testing.",

    solution: [
      "Automated dashboard and reporting validations using UI automation.",
      "Developed API automation for analytics microservices.",
      "Performed API performance testing using JMeter.",
      "Used Selenium and Playwright for UI automation activities.",
      "Used REST Assured and Postman for API testing.",
      "Improved script stability using retry and exception-handling approaches.",
      "Supported functional, regression and integration testing.",
      "Performed backend validation using SQL.",
    ],

    impact: [
      "Automated dashboard and reporting validation.",
      "API automation coverage for analytics microservices.",
      "API performance testing using JMeter.",
      "Improved automation script stability.",
      "Supported earlier defect detection during sprint and release testing.",
    ],

    businessValue:
      "Combining UI, API, performance and database validation helps verify analytics behavior from multiple testing layers.",

    technologies: [
      "Selenium",
      "Playwright",
      "Java",
      "REST Assured",
      "Postman",
      "JMeter",
      "SQL",
      "TestNG",
      "Jenkins",
      "Git",
      "AI chatbot",
      "LLM application",

    ],

    workflow: [
      "Identify dashboard, reporting and analytics scenarios.",
      "Automate repeatable UI scenarios using Selenium and Playwright.",
      "Automate analytics API scenarios using REST Assured.",
      "Validate API responses and business data.",
      "Run API performance scenarios using JMeter.",
      "Perform SQL validation where backend access is available.",
      "Review failures and execute regression testing.",
    ],

    frameworkNote:
      "The framework representation reflects the documented UI automation, API automation, performance testing and SQL validation activities.",

    implementationDetails:
      "Functional API automation and JMeter performance testing served different validation purposes. Retry and exception handling were used to improve automation stability without masking genuine application defects.",

    frameworkLanes: [
      {
        title: "UI Automation",
        layers: [
          layer(
            "Dashboard & Reporting Scenarios",
            "Validate visible HRMS and analytics workflows."
          ),
          layer(
            "Selenium / Playwright",
            "Automate browser-based UI scenarios."
          ),
          layer(
            "Reusable UI Components",
            "Support repeatable dashboard and reporting validations."
          ),
        ],
      },
      {
        title: "API Automation",
        layers: [
          layer(
            "Analytics API Scenarios",
            "Define service-level validation scenarios."
          ),
          layer(
            "REST Assured",
            "Automate REST API requests and validation."
          ),
          layer(
            "Postman",
            "Support API testing and exploration."
          ),
        ],
      },
      {
        title: "Performance Testing",
        layers: [
          layer(
            "Load Scenarios",
            "Define configured API performance scenarios."
          ),
          layer(
            "JMeter",
            "Execute API performance testing under configured load."
          ),
        ],
      },
      {
        title: "Data & Quality Validation",
        layers: [
          layer(
            "SQL Validation",
            "Validate relevant backend data."
          ),
          layer(
            "Regression Testing",
            "Verify fixes and protect existing functionality."
          ),
          layer(
            "Defect Analysis",
            "Investigate failures and support defect resolution."
          ),
        ],
      },
    ],
  },

  {
    title: "Commodity Trading Exchange Platform",
    employer: "Multi Commodity Exchange of India Ltd. (MCX)",
    period: "August 2023 – June 2024",
    role: "Senior Executive – MCX Technology",
    location: "Mumbai, India",
    project: "Commodity Trading Exchange Platform",
    industry: "Commodity Trading / Exchange Systems",

    challenge:
      "Validating critical trading workflows, financial transactions, regression scenarios and release behavior for an exchange platform.",

    solution: [
      "Automated regression scenarios for trading workflows.",
      "Validated financial transactions using SQL.",
      "Performed functional and end-to-end testing for critical trading workflows.",
      "Supported sprint planning and release validation.",
      "Performed production verification activities.",
      "Supported defect analysis and resolution with development teams.",
    ],

    impact: [
      "Regression automation for critical trading workflows.",
      "Backend transaction verification using SQL.",
      "Supported release validation and production verification.",
      "Resume documents zero critical production defects during major releases; this should be retained only when verifiable.",
    ],

    businessValue:
      "Repeatable trading workflow validation and transaction-level verification support controlled releases for critical exchange functionality.",

    technologies: [
      "Selenium",
      "Playwright",
      "Java",
      "REST Assured",
      "Postman",
      "JMeter",
      "SQL",
      "TestNG",
      "Jenkins",
      "Git",
    ],

    workflow: [
      "Identify critical trading workflows for regression.",
      "Execute UI automation for applicable trading scenarios.",
      "Validate API behavior where applicable.",
      "Verify financial transaction data using SQL.",
      "Execute functional and end-to-end testing.",
      "Perform release validation and production verification.",
      "Support defect analysis and retesting.",
    ],

    frameworkNote:
      "The framework below represents the documented testing responsibilities and technology stack. It does not assume proprietary exchange rules, trading protocols or database architecture.",

    implementationDetails:
      "The project description focuses on generic workflow, API and transaction validation based on the documented resume information.",

    frameworkLanes: [
      {
        title: "Trading Workflow Automation",
        layers: [
          layer(
            "Trading Workflow Test Cases",
            "Cover critical trading business scenarios."
          ),
          layer(
            "TestNG",
            "Organizes and executes automation tests."
          ),
          layer(
            "Selenium / Playwright",
            "Automates applicable web-based trading workflows."
          ),
        ],
      },
      {
        title: "API & Business Validation",
        layers: [
          layer(
            "REST API Testing",
            "Validates relevant service behavior."
          ),
          layer(
            "Business Assertions",
            "Checks expected workflow and transaction behavior."
          ),
          layer(
            "SQL Validation",
            "Validates relevant financial transaction records."
          ),
        ],
      },
      {
        title: "Release Validation",
        layers: [
          layer(
            "Regression Execution",
            "Validates existing functionality after changes."
          ),
          layer(
            "Release Validation",
            "Supports pre-release quality verification."
          ),
          layer(
            "Production Verification",
            "Supports post-release validation activities."
          ),
        ],
      },
    ],
  },

  {
    title: "Enterprise Web Application",
    employer: "Espire Infolabs Pvt. Ltd.",
    period: "December 2022 – June 2023",
    role: "Test Engineer",
    location: "Gurgaon, India",
    project: "Enterprise Web Application",
    industry: "Enterprise Web Applications",

    challenge:
      "Executing repeatable functional, regression, integration and UAT testing while supporting UI automation, defect management and release validation.",

    solution: [
      "Executed functional, regression, integration and UAT testing.",
      "Developed reusable automation utilities.",
      "Used Selenium WebDriver with Java and TestNG for UI automation.",
      "Used Postman for API testing activities.",
      "Used SQL for backend validation.",
      "Prepared and executed test cases.",
      "Logged defects and supported retesting and regression cycles.",
      "Worked with business stakeholders to clarify requirements.",
    ],

    impact: [
      "Supported functional and regression test execution.",
      "Contributed to reusable UI automation utilities.",
      "Supported defect reporting, retesting and release validation.",
      "Improved repeatability of selected UI validation activities.",
    ],

    businessValue:
      "Combining manual testing, UI automation, API testing and backend validation provides broader coverage for enterprise web workflows.",

    technologies: [
      "Selenium WebDriver",
      "Java",
      "TestNG",
      "SQL",
      "Postman",
      "Maven",
      "Git",
    ],

    workflow: [
      "Review requirements and prepare test cases.",
      "Execute functional and integration testing.",
      "Automate suitable repeatable UI scenarios.",
      "Execute automation using Selenium and TestNG.",
      "Perform API validation using Postman.",
      "Validate backend data using SQL where applicable.",
      "Log defects and perform retesting.",
      "Execute regression testing before release.",
    ],

    frameworkNote:
      "This case study is intentionally focused on documented responsibilities because the resume provides less project-specific architectural detail for this role.",

    implementationDetails:
      "The documented technology stack includes Selenium WebDriver, Java, TestNG, SQL, Postman, Maven and Git. Specific internal framework architecture is not documented.",

    proposedStructure: [
      "src/test/java/tests/",
      "src/main/java/pages/",
      "src/main/java/base/",
      "src/main/java/utils/",
      "src/test/resources/testdata/",
      "src/test/resources/config/",
    ],

    frameworkLanes: [
      {
        title: "Functional & Manual Testing",
        layers: [
          layer(
            "Requirements",
            "Understand business requirements and testing scope."
          ),
          layer(
            "Test Cases",
            "Prepare and execute functional and regression scenarios."
          ),
          layer(
            "Defect Lifecycle",
            "Log, track, retest and verify defects."
          ),
        ],
      },
      {
        title: "UI Automation",
        layers: [
          layer(
            "TestNG",
            "Organizes automation test execution."
          ),
          layer(
            "Selenium WebDriver",
            "Automates repeatable browser-based workflows."
          ),
          layer(
            "Reusable Utilities",
            "Supports maintainable automation execution."
          ),
        ],
      },
      {
        title: "API & Database Validation",
        layers: [
          layer(
            "Postman",
            "Supports API testing and validation."
          ),
          layer(
            "SQL",
            "Validates relevant backend data."
          ),
          layer(
            "Regression Validation",
            "Confirms fixes and protects existing functionality."
          ),
        ],
      },
    ],
  },

  {
    title: "E-commerce Platform",
    employer: "SM Web Solutions Pvt. Ltd.",
    period: "October 2020 – December 2022",
    role: "QA Tester",
    location: "New Delhi, India",
    project: "E-commerce Platform",
    industry: "E-commerce / Retail",

    challenge:
      "Validating e-commerce workflows end to end, especially checkout and payment functionality, while maintaining functional and regression coverage.",

    solution: [
      "Performed end-to-end functional and regression testing.",
      "Automated critical checkout and payment workflows using Selenium WebDriver and Java.",
      "Executed API testing using Postman.",
      "Validated backend data using SQL.",
      "Used TestNG for automation execution.",
      "Used Maven for project build and dependency management.",
      "Participated in defect lifecycle management and release-quality validation.",
    ],

    impact: [
      "Automated critical checkout and payment workflows.",
      "Performed UI and API validation.",
      "Performed backend data verification using SQL.",
      "Improved regression efficiency through automation adoption.",
    ],

    businessValue:
      "Testing checkout and payment journeys across UI, API and backend data provides layered validation of critical e-commerce workflows.",

    technologies: [
      "Selenium WebDriver",
      "Java",
      "TestNG",
      "Postman",
      "API Testing",
      "SQL",
      "Maven",
      "Git",
    ],

    workflow: [
      "Analyze checkout and payment requirements.",
      "Create functional and regression test scenarios.",
      "Automate repeatable checkout workflows using Selenium WebDriver.",
      "Execute automation using TestNG.",
      "Perform API testing using Postman.",
      "Validate order and payment-related backend data using SQL where access is available.",
      "Log and retest defects.",
      "Execute regression testing before release.",
    ],

    frameworkNote:
      "The framework representation is based on the documented e-commerce testing responsibilities and technology stack. Payment gateway or provider-specific implementation details are not assumed.",

    implementationDetails:
      "The documented work includes UI automation, API testing and SQL backend validation for critical checkout and payment workflows.",

    frameworkLanes: [
      {
        title: "UI Checkout Automation",
        layers: [
          layer(
            "Checkout Test Scenarios",
            "Define positive and negative checkout workflows."
          ),
          layer(
            "Selenium WebDriver",
            "Automates browser-based checkout workflows."
          ),
          layer(
            "TestNG",
            "Organizes and executes automation tests."
          ),
        ],
      },
      {
        title: "API & Backend Validation",
        layers: [
          layer(
            "Postman API Testing",
            "Executes and validates API scenarios."
          ),
          layer(
            "API Assertions",
            "Checks response status and expected response content."
          ),
          layer(
            "SQL Validation",
            "Validates relevant order and payment data where accessible."
          ),
        ],
      },
      {
        title: "Regression & Release",
        layers: [
          layer(
            "Functional Testing",
            "Validates business functionality."
          ),
          layer(
            "Regression Testing",
            "Protects existing e-commerce functionality."
          ),
          layer(
            "Defect Lifecycle",
            "Supports defect reporting, retesting and closure."
          ),
        ],
      },
    ],
  },
];