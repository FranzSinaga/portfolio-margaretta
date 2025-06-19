/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RichTextInterface {
  root: {
    type: string;
    children: {
      type: string;
      version: number;
      children?: {
        text: string;
        children?: {
          [k: string]: string;
        }[];
        fields?: {
          linkType: string;
          newTab: string;
          url: string;
          [k: string]: string;
        };
        [k: string]: string | any;
      }[];
      [k: string]: any;
    }[];
    value: {
      url: string;
      alt: string;
      [k: string]: string | any;
    };
    direction: ("ltr" | "rtl") | null;
    format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
    indent: number;
    version: number;
  };
  [k: string]: unknown;
}
