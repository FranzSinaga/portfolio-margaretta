import { EttaMedia } from "../work-experience/work-experience.type";

export interface EttaCourse {
  id: number;
  active?: boolean | null;
  image: EttaMedia;
  courseName: string;
  courseType: string;
  periode?: string | null;
  description?: string | null;
  links?: LinkBlock[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LinkBlock".
 */
export interface LinkBlock {
  text: string;
  url: string;
  id?: string | null;
  blockName?: string | null;
  blockType: "link-block";
}

export interface EttaExploration {
  id: number;
  active?: boolean | null;
  image: EttaMedia;
  name: string;
  appLink: string;
  description: string;
  links?: LinkBlock[] | null;
  updatedAt: string;
  createdAt: string;
}
