// types/aboutpage.ts

export interface AboutPageData {
  heroSection: {
    headlineTop: string;
    headlineBottom: string;
  };
  introSection: {
    title: string;
    description: string;
  };
  processSection: {
    title: string;
    description: string;
    steps: ProcessStep[];
  };
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}
