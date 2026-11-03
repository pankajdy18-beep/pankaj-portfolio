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

const layer = (name: string, responsibility: string): FrameworkLayer => ({
  name,
  responsibility,
  label: 'Illustrative layer',
});

export const caseStudies: CaseStudy[] = [
  {
    title: 'Banking Automation Platform',
    employer: 'Acuity Analytics',
    period: 'March 2026 – October 2026',
    role: 'Software Engineer in Test',
    project: 'Banking platform for a US client',
    industry: 'Banking / FinTech',
    challenge:
      'Representative engineering challenge: banking workflows need dependable regression coverage for critical business operations and confidence that application behavior agrees with backend transaction data. This describes the testing context, not a confirmed production incident.',
    solution: [
      'Designed a hybrid automation framework from scratch and created reusable automation components.',
      'Automated critical banking UI and API scenarios.',
      'Validated backend data with SQL.',
      'Integrated regression suites into Jenkins for scheduled execution and reporting.',
    ],
    impact: [
      'Approximately 70% automation coverage, as reported in the resume.',
      'Reusable components supported maintainability.',
      'Scheduled regression execution and centralized reporting through Jenkins.',
      'Backend validation supported release confidence.',
    ],
    businessValue:
      'Repeatable UI, API, and data checks provide an evidence-based view of release readiness without overstating defect or time savings.',
    technologies: ['Playwright (Java)', 'TestNG', 'Cucumber', 'Jenkins', 'MySQL'],
    workflow: [
      'Select a banking behavior from a feature or test scenario.',
      'Execute it through the configured Cucumber and TestNG layers.',
      'Use reusable Playwright components to exercise the application UI and API scenarios.',
      'Assert expected behavior and validate relevant backend data with SQL.',
      'Review execution output and reporting from the scheduled Jenkins regression run.',
    ],
    frameworkNote:
      'Illustrative framework design based on the documented technology stack. It is not a verified internal architecture. Exact API client, reporting library, folder structure, and Cucumber–TestNG integration details should be confirmed.',
    implementationDetails:
      'The resume documents Playwright (Java), TestNG, Cucumber, Jenkins, and MySQL, but does not identify the API client or reporting library. The diagram describes conceptual responsibilities, not specific packages or integration mechanics.',
    frameworkLanes: [
      {
        title: 'Illustrative execution flow',
        layers: [
          layer('Feature files / test scenarios', 'Express a business behavior and its expected outcome.'),
          layer('Cucumber BDD layer', 'Maps readable scenarios to executable automation steps.'),
          layer('TestNG execution and configuration', 'Organizes execution and test configuration; exact integration is to confirm.'),
          layer('Playwright automation layer', 'Drives the documented Playwright (Java) UI automation.'),
          layer('Reusable page objects and helpers', 'Illustrative abstractions for reusable interactions and test support.'),
          layer('Banking application UI / API interfaces', 'Exercises documented critical UI and API scenarios; API client details are not specified.'),
          layer('Assertions and MySQL validation', 'Checks behavior and performs documented SQL-backed validation.'),
          layer('Execution results and reporting', 'Makes regression outcomes reviewable; reporting library is not specified.'),
          layer('Jenkins scheduled pipeline', 'Triggers the documented scheduled regression execution.'),
        ],
      },
    ],
  },
  {
    title: 'CRM Automation Platform',
    employer: 'EagleDrift Technologies Pvt. Ltd.',
    period: 'November 2025 – February 2026',
    role: 'Software Engineer in Test',
    project: 'CRM automation platform for a US client',
    industry: 'CRM / Enterprise software',
    challenge:
      'Representative engineering challenge: validating CRM workflows consistently across the UI, API, and database while keeping regression checks dependable as functionality evolves. This is an inferred testing challenge, not a claim about a production failure.',
    solution: [
      'Built a scalable hybrid automation framework.',
      'Automated more than 150 UI and API test cases.',
      'Implemented nightly Jenkins regression execution.',
      'Validated transactional data using SQL.',
    ],
    impact: [
      '150+ automated UI and API test cases, as documented in the resume.',
      'Nightly regression execution through Jenkins.',
      'Reusable automation framework.',
      'Database-level verification of CRM transactions.',
    ],
    businessValue:
      'Separate UI, API, and data checks can validate CRM behaviors at appropriate layers while nightly execution provides a regular regression signal.',
    technologies: ['Selenium (Java)', 'TestNG', 'REST Assured', 'Jenkins', 'MySQL'],
    workflow: [
      'Choose a CRM UI journey or API behavior for the regression run.',
      'Run the relevant TestNG test using a page object or API service abstraction.',
      'Validate the UI outcome or REST Assured response independently.',
      'For an end-to-end check, compare expected transaction state with SQL-backed records.',
      'Review nightly execution results and reporting from Jenkins.',
    ],
    frameworkNote:
      'Illustrative framework design based on the documented technology stack. This is not a verified view of the employer repository or proprietary architecture.',
    implementationDetails:
      'UI tests can run through Selenium independently of REST Assured API tests. Where database access and test data permit, SQL assertions can complement an end-to-end workflow; exact connection and reporting implementations are not documented.',
    proposedStructure: [
      'src/test/java/tests/ui/',
      'src/test/java/tests/api/',
      'src/main/java/pages/',
      'src/main/java/api/',
      'src/main/java/base/',
      'src/main/java/utils/',
      'src/test/resources/testdata/',
      'src/test/resources/config/',
    ],
    frameworkLanes: [
      {
        title: 'Illustrative execution flow',
        layers: [
          layer('TestNG test classes', 'Select and organize UI or API test execution.'),
          layer('Page Object Model / API service classes', 'Separate user-interface interactions from service request behavior.'),
          layer('Reusable Selenium / REST Assured components', 'Provide shared automation helpers for UI and API checks.'),
          layer('CRM web application / REST APIs', 'Exercise the documented application and API surfaces.'),
          layer('Assertions and response validation', 'Verify expected page behavior, response status, and response content.'),
          layer('MySQL transactional data validation', 'Use SQL checks to verify relevant transaction state.'),
          layer('TestNG results and reporting', 'Review test outcomes; the specific reporting tool is not specified.'),
          layer('Jenkins nightly regression pipeline', 'Runs the documented nightly regression suite.'),
        ],
      },
    ],
  },
  {
    title: 'HRMS and Analytics',
    employer: 'Newgen Technomate',
    period: 'July 2024 – October 2025',
    role: 'Test Engineer',
    project: 'HRMS and analytics',
    industry: 'HRMS / Analytics',
    challenge:
      'Representative engineering challenges: dashboard and report accuracy, analytics API behavior, script stability, and service performance under load. These are inferred from the documented testing activities, not confirmed production incidents.',
    solution: [
      'Automated dashboard and reporting validations.',
      'Developed API automation for analytics microservices.',
      'Conducted API performance testing with JMeter.',
      'Used retry and exception-handling techniques to improve script stability.',
      'Applied sprint automation to help reduce defect leakage.',
    ],
    impact: [
      'Automated dashboard and reporting checks.',
      'API test coverage for analytics microservices.',
      'Performance testing of APIs.',
      'Improved script stability and support for earlier defect detection.',
    ],
    businessValue:
      'Complementary UI, API, performance, and SQL checks can help identify inconsistent analytics outputs and service behavior during sprint and release validation.',
    technologies: ['Selenium', 'Playwright', 'REST Assured', 'JMeter', 'SQL'],
    workflow: [
      'Run dashboard and report checks through the UI suite.',
      'Call analytics services through REST Assured and assert response behavior.',
      'Run separate JMeter scenarios to measure API performance under configured load.',
      'Compare available response data with expected results and relevant SQL records.',
      'Review failures; use retries only for understood transient conditions so they do not mask product defects.',
    ],
    frameworkNote:
      'Illustrative framework design based on the documented technology stack. The separate lanes below explain how UI, functional API, and performance checks can complement one another; they are not a verified internal diagram.',
    implementationDetails:
      'Functional API tests assert correctness for individual requests; JMeter performance scenarios measure behavior under load. API checks complement UI flows by validating service behavior directly. Any CI integration is a suggested extension and is not claimed as documented.',
    frameworkLanes: [
      {
        title: 'UI regression lane',
        layers: [
          layer('Dashboard and report scenarios', 'Cover visible analytics flows and reporting behavior.'),
          layer('Selenium / Playwright', 'Drives the documented UI automation tools.'),
          layer('Page objects and reusable UI components', 'Illustrative design for organizing repeatable UI interactions.'),
        ],
      },
      {
        title: 'API functional lane',
        layers: [
          layer('Analytics API scenarios', 'Select service behaviors and expected response values.'),
          layer('REST Assured', 'Performs the documented API automation.'),
          layer('Request and response assertions', 'Checks response contracts and analytics results.'),
        ],
      },
      {
        title: 'API performance lane',
        layers: [
          layer('Load scenarios', 'Defines representative request patterns and configured load.'),
          layer('JMeter', 'Runs documented API performance testing and records measurements.'),
        ],
      },
      {
        title: 'Shared validation',
        layers: [
          layer('SQL data checks', 'Compares available database records with expected results where applicable.'),
          layer('Test data and configuration', 'Illustrative shared inputs for repeatable execution.'),
          layer('Assertions, diagnostics, and reports', 'Supports investigation; CI integration remains a suggested extension.'),
        ],
      },
    ],
  },
  {
    title: 'Commodity Trading Exchange Platform',
    employer: 'Multi Commodity Exchange of India Ltd. (MCX)',
    period: 'August 2023 – June 2024',
    role: 'Quality Assurance Executive',
    project: 'Commodity trading exchange platform',
    industry: 'Commodity trading / Exchange systems',
    challenge:
      'Representative engineering challenges: trading workflow correctness, transaction integrity, regression coverage, and release verification. No trading incident, loss, outage, or regulatory finding is implied.',
    solution: [
      'Automated regression tests for trading workflows.',
      'Validated financial transactions using SQL.',
      'Supported sprint planning.',
      'Conducted release validation and production verification.',
    ],
    impact: [
      'The resume reports zero critical production defects during major releases for this project.',
      'Regression automation for trading workflows.',
      'Backend transaction verification using SQL.',
    ],
    businessValue:
      'Repeatable workflow checks and transaction verification contribute to controlled release validation. The zero-critical-defect statement is limited to the scope stated in the resume.',
    technologies: ['Selenium', 'TestNG', 'REST APIs', 'SQL'],
    workflow: [
      'Select an affected trading workflow for regression validation.',
      'Run UI checks through Selenium and the configured TestNG execution.',
      'Validate available REST API responses and relevant error handling.',
      'Check consistency between application behavior and available database records with SQL.',
      'Record results and supporting evidence for release validation and production verification.',
    ],
    frameworkNote:
      'Illustrative framework design based on the documented technology stack. Suggested validation points below are representative scenarios, not a claim that each specific check was implemented.',
    implementationDetails:
      'The examples do not assume particular order types, exchange protocols, financial rules, or database schemas. They describe generic workflow, response, and transaction checks only.',
    frameworkLanes: [
      {
        title: 'Illustrative execution flow',
        layers: [
          layer('Trading workflow test cases', 'Select documented workflow regression coverage.'),
          layer('TestNG execution', 'Organizes and runs the regression test classes.'),
          layer('Selenium page objects and UI helpers', 'Illustrative reusable UI layer for browser-driven checks.'),
          layer('Trading platform UI and REST API validation', 'Exercises UI flows and documented REST API testing.'),
          layer('Business rule and response assertions', 'Checks expected behavior without assuming undocumented exchange rules.'),
          layer('SQL transaction validation', 'Verifies relevant available transaction records.'),
          layer('Regression results and defect evidence', 'Captures outcomes for review and triage.'),
          layer('Release validation and production verification', 'Supports the documented release and production checks.'),
        ],
      },
    ],
  },
  {
    title: 'Web Application Quality Engineering',
    employer: 'Espire Infolabs',
    period: 'December 2022 – June 2023',
    role: 'Test Engineer',
    location: 'Gurugram, Haryana, India',
    project: 'Web application testing',
    industry: 'Web applications',
    challenge:
      'Representative engineering challenge: keeping web application testing repeatable across manual execution, defect tracking, and UI automation. This is an inferred challenge, not a confirmed production issue.',
    solution: [
      'Performed manual and automated testing of web applications.',
      'Prepared and executed test cases.',
      'Logged defects and collaborated within Agile teams.',
      'Used Selenium WebDriver, Java, and TestNG.',
    ],
    impact: [
      'Contributed to test execution and defect reporting.',
      'Supported UI automation activities using the documented stack.',
    ],
    businessValue:
      'Structured test execution and defect records give the team reproducible evidence to triage issues and follow up with regression checks.',
    technologies: ['Selenium WebDriver', 'Java', 'TestNG'],
    workflow: [
      'Prepare and execute manual test cases for a web application change.',
      'Automate suitable repeatable UI checks with Selenium WebDriver and Java.',
      'Organize and execute tests with TestNG.',
      'Record defects with reproducible evidence and follow up during regression.',
    ],
    frameworkNote:
      'Illustrative framework design based on the documented technology stack. Page Object Model, reporting integrations, and additional utilities below are proposed patterns unless confirmed.',
    implementationDetails:
      'This case study is intentionally concise because the resume provides less detail for this role. No test count, coverage, reporting tool, or project outcome is inferred.',
    proposedStructure: [
      'src/test/java/tests/ — proposed TestNG test classes',
      'src/main/java/pages/ — proposed page objects where applicable',
      'src/main/java/base/ — proposed WebDriver setup and lifecycle',
      'src/main/java/utils/ — proposed shared helpers',
      'src/test/resources/ — proposed test data and configuration',
    ],
    frameworkLanes: [
      {
        title: 'Illustrative UI test flow',
        layers: [
          layer('TestNG test classes', 'Organize and execute repeatable test cases.'),
          layer('Selenium WebDriver', 'Drives documented browser-based UI automation.'),
          layer('Page Object Model (proposed)', 'An optional pattern to separate page interactions from tests.'),
          layer('Locators and reusable actions (proposed)', 'Illustrative organization for element access and common interactions.'),
          layer('Web application', 'The application under test; no specific product is identified.'),
          layer('Assertions and TestNG results', 'Verifies outcomes and reviews test execution results.'),
          layer('Defect logging and regression follow-up', 'Records reproducible issues and tracks subsequent validation.'),
        ],
      },
    ],
  },
  {
    title: 'E-commerce Platform',
    employer: 'SM Web Solutions Pvt. Ltd.',
    period: 'October 2020 – December 2022',
    role: 'Quality Assurance Tester',
    project: 'E-commerce platform',
    industry: 'E-commerce / Retail',
    challenge:
      'Representative engineering challenges: validating checkout and payment workflows end to end, maintaining regression coverage, and checking consistency between application behavior and backend data. No payment provider or production incident is implied.',
    solution: [
      'Performed end-to-end functional and regression testing.',
      'Automated critical checkout and payment workflows.',
      'Executed API testing using Postman.',
      'Validated backend data with SQL.',
      'Improved regression efficiency through automation adoption.',
    ],
    impact: [
      'Automated critical checkout and payment workflows.',
      'UI and API validation.',
      'Backend data verification.',
      'Improved regression efficiency through automation adoption; no unsupported time or percentage is asserted.',
    ],
    businessValue:
      'Checking a business journey across the UI, API, and available database records helps verify consistent order and payment state without assuming payment gateway details.',
    technologies: ['Selenium', 'Postman', 'SQL'],
    workflow: [
      'Start with a checkout and payment test scenario.',
      'Use Selenium to exercise the cart, checkout, payment, and order confirmation flow.',
      'Run complementary Postman API checks and assert HTTP status and response content.',
      'Where access permits, use SQL to verify the resulting order or payment state.',
      'Review functional and regression outcomes; direct database access is not assumed for every test.',
    ],
    frameworkNote:
      'Illustrative framework design based on the documented technology stack. UI, API, and data paths are representative; direct database access and payment implementation details are not specified.',
    implementationDetails:
      'Validating across UI, API, and database layers can provide complementary evidence for one business workflow. SQL validation applies only where database access and the test environment permit it.',
    frameworkLanes: [
      {
        title: 'UI checkout lane',
        layers: [
          layer('Checkout and payment scenarios', 'Define representative positive and negative journey coverage.'),
          layer('Selenium UI automation', 'Drives documented browser-based checkout automation.'),
          layer('Reusable page objects and UI actions (illustrative)', 'Organizes browser interactions into reusable components.'),
          layer('Cart → checkout → payment → order confirmation', 'Represents the user-facing journey without naming a payment provider.'),
        ],
      },
      {
        title: 'API and data validation lane',
        layers: [
          layer('Postman API tests', 'Exercises the documented API testing approach.'),
          layer('HTTP status and response assertions', 'Checks service responses for expected behavior.'),
          layer('SQL backend validation (where accessible)', 'Verifies relevant available order or payment state.'),
          layer('Functional and regression results', 'Combines available evidence for release and regression review.'),
        ],
      },
    ],
  },
];