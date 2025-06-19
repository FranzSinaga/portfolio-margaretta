/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "etta-work-experience".
 */
export interface EttaWorkExperience {
  id: number;
  image?: EttaMedia | null;
  active?: boolean | null;
  position: string;
  organization: string;
  location?: string | null;
  startDate: string;
  endDate: string;
  responsibilities?: TextFieldBlock[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TextFieldBlock".
 */
export interface TextFieldBlock {
  textField?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "text-field-block";
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "etta-media".
 */
export interface EttaMedia {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
