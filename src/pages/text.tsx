import React from "react";
import { HeadFC, PageProps } from "gatsby";
import { Layout } from "@/components/Layout";

const Text: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        <p className="text-xs">Text xs</p>
        <p className="text-sm">Text sm</p>
        <p className="text-base">Text base</p>
        <p className="text-lg">Text lg</p>
        <p className="text-xl">Text xl</p>
        <p className="text-2xl">Text 2xl</p>
        <p className="text-3xl">Text 3xl</p>
        <p className="text-4xl">Text 4xl</p>
        <p className="text-5xl">Text 5xl</p>
        <p className="text-6xl">Text 6xl</p>
        <p className="text-7xl">Text 7xl</p>
        <p className="text-8xl">Text 8xl</p>
        <p className="text-9xl">Text 9xl</p>
      </div>
    </Layout>
  );
};

export default Text;

export const Head: HeadFC = () => <title>Margaretta</title>;
