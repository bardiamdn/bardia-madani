// types/homepage.ts

export type Service = {
  _key?: string;
  name: string;
  description: string;
  mediaSrc: string;
  altText: string;
  isVideo: boolean;
};

export type Work = {
  _key: string;
  title: string;
  services: string[];
};

export type HomepageData = {
  tagline: string;
  supportingText: string;
  cta: string;
  intro: string;
  services: Service[];
  works: Work[];
  footerCTATextTop: string;
  footerCTATextBottom: string;
  footerCTAButton: string;
};
