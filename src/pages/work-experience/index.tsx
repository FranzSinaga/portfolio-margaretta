import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "@/components/Layout";

const WorkExperience: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="space-y-5 mb-5 mt-10 flex flex-col justify-center align-middle items-center">
        {[...Array(5)].map((e) => (
          <div className="flex gap-x-10">
            <div className="w-32 h-32 bg-gray-400"></div>
            <div>
              <p className="font-semibold text-xl border-b-2">
                PT. Adira Dinamika Multi Finance | South Jakarta |{" "}
                <span className="font-normal italic">Technical Writer</span>
              </p>
              <p>March 2021 - Now</p>
              <ol className="mt-3">
                <li className="list-disc ms-10">
                  Determine the needs of users who will receive technical
                  documentation
                </li>
                <li className="list-disc ms-10">
                  Study product examples and talk further with their creators
                  and developers
                </li>
                <li className="list-disc ms-10">
                  Write product documents using photos, images, and diagrams
                  that enhance user understanding
                </li>
                <li className="list-disc ms-10">
                  Revise documents when there are product updates
                </li>
                <li className="list-disc ms-10">
                  Writing supporting documents for products, namely BRD,
                  Technical Documents, Artifact Documents, API documents, and
                  User Manuals
                </li>
              </ol>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default WorkExperience;

export const Head: HeadFC = () => <title>Margaretta | Work Experience</title>;
