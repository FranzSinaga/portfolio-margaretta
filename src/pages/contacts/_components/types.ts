import { GatsbyImageProps } from "gatsby-plugin-image";

export interface ImgTypes {
  node: Node;
}
interface Node {
  id: string;
  absolutePath: string;
  childImageSharp: {
    gatsbyImageData: GatsbyImageProps["image"];
  };
  base: string;
}
