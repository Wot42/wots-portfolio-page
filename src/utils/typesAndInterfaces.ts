type PageType = "Home" | "Projects" | "Skills" | "Contact";
interface ProjectData {
  title: string;
  links: { git: string; video: string; hosted: string };
  images: string[]; // location of the image file(s)
  altTexts: string[]; // alt text for each image
  info: { h3: string; cardP: string[]; modelP: string[] }[];
}

export { PageType, ProjectData };
