import { RichTextInterface } from "~/types/rich-text.types";
import { EttaMedia } from "../work-experience/work-experience.type";
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "etta-projects".
 */
export interface EttaProject {
  id: number;
  active?: boolean | null;
  image?: null | EttaMedia;
  projectName: string;
  projectType: "Website" | "Mobile";
  role: string;
  description: string;
  tags?:
    | (
        | "Taiga"
        | "Postman"
        | "MySQL"
        | "Google Sheet"
        | "TEMAN"
        | "Jira"
        | "Confluence"
        | "Swagger"
        | "DBeaver"
        | "Spreadsheet"
        | "Microsoft Office"
      )[]
    | null;
  detail?: RichTextInterface | null;
  updatedAt: string;
  createdAt: string;
}
