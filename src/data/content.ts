export type SkillGroup = {
  title: string;
  icon: string;
  items: string[];
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Impact', href: '#impact' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '6+', label: 'Years of experience', detail: 'Quality engineering across web, API, and release validation.' },
  { value: '150+', label: 'Automated UI/API cases', detail: 'CRM project automation coverage at scale.' },
  { value: '70%', label: 'Automation coverage', detail: 'Approximate coverage reported for the banking project.' },
  { value: '5+', label: 'Testing domains', detail: 'Banking, CRM, HRMS, trading, and e-commerce.' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'UI Automation',
    icon: 'workflow',
    items: ['Selenium WebDriver', 'Playwright', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks',
    icon: 'layers',
    items: ['TestNG', 'Cucumber', 'Maven', 'Page Object Model', 'Hybrid Automation Frameworks'],
  },
  {
    title: 'API and Backend Testing',
    icon: 'api',
    items: ['REST Assured', 'Postman', 'REST APIs', 'SQL', 'MySQL', 'Backend validation'],
  },
  {
    title: 'CI/CD and Collaboration',
    icon: 'gitBranch',
    items: ['Jenkins', 'Git', 'GitHub', 'Agile/Scrum', 'Jira'],
  },
  {
    title: 'Quality Engineering',
    icon: 'shieldCheck',
    items: ['Functional testing', 'Regression testing', 'Integration testing', 'Defect triage', 'Root cause analysis', 'Release validation'],
  },
  {
    title: 'Data and Performance',
    icon: 'database',
    items: ['SQL validation', 'Transactional data checks', 'JMeter', 'Backend verification'],
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Integral University, Lucknow',
    period: 'July 2025',
  },
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'University of Mumbai',
    period: 'April 2018 – May 2021',
  },
];

export const playgroundData = {
  login: {
    positive: {
      title: 'Successful login',
      expectation: 'User lands on the dashboard with valid session state and expected role-based menu items.',
      steps: ['Enter valid username and password', 'Submit authentication request', 'Confirm redirect to dashboard'],
      result: 'Pass: Session created successfully and navigation loads as expected.',
    },
    negative: {
      title: 'Invalid credentials',
      expectation: 'Authentication is rejected and the error message is surfaced without leaking system internals.',
      steps: ['Enter a wrong password', 'Submit form', 'Assert validation message'],
      result: 'Pass: Error state displays clearly and no session is created.',
    },
  },
  checkout: {
    positive: {
      title: 'Completed purchase',
      expectation: 'Order summary, payment confirmation, and backend status all align during a successful checkout.',
      steps: ['Add item to cart', 'Choose shipping method', 'Complete payment flow'],
      result: 'Pass: Order is created, payment succeeds, and confirmation is shown.',
    },
    negative: {
      title: 'Payment failure',
      expectation: 'User is told that the payment failed and the order stays pending instead of being incorrectly confirmed.',
      steps: ['Select a payment method with simulated failure', 'Attempt checkout', 'Review error message'],
      result: 'Pass: Payment error is surfaced and state remains consistent.',
    },
  },
  api: {
    positive: {
      title: 'API response validation',
      expectation: 'The API returns the expected status, schema, and business values for valid requests.',
      steps: ['Send valid request payload', 'Verify status code 200', 'Assert body schema and data'],
      result: 'Pass: Response matches contract and expected business logic.',
    },
    negative: {
      title: 'Malformed request',
      expectation: 'Server rejects invalid payloads with a clear failure reason and no data corruption.',
      steps: ['Submit invalid or incomplete payload', 'Review response code and message', 'Confirm no invalid entity is persisted'],
      result: 'Pass: Request fails with a controlled error and no state change occurs.',
    },
  },
  bugreport: {
    positive: {
      title: 'Bug report example',
      expectation: 'The issue is documented with affected steps, expected output, and a reproducible path to validation.',
      steps: ['Reproduce the defect', 'Capture environment details', 'Document expected vs actual behavior'],
      result: 'Pass: Bug report is actionable and supports triage and root-cause review.',
    },
    negative: {
      title: 'Ambiguous defect record',
      expectation: 'Without clear reproduction steps or observed behavior, issue triage becomes slow and inconsistent.',
      steps: ['Note missing reproduction details', 'Identify risk of poor triage', 'Highlight need for validation metadata'],
      result: 'Demonstration: incomplete reports hinder debugging and release confidence.',
    },
  },
} as const;
