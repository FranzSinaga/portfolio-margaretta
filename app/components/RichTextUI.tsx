// eslint-disable @typescript-eslint/no-explicit-any

import { RichTextInterface } from "~/types/rich-text.types";
import { Button } from "./ui/button";
import { useState } from "react";
import { CMS_API_BASE_URL } from "~/lib/const";
import { Copy, CopyCheck } from "lucide-react";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const RichTextUI = ({ data }: { data: RichTextInterface }) => {
  return (
    <>
      <article className="mt-3 space-y-3">
        {data.root.children.map((e, index) => {
          if (e.type === "paragraph" && e.children?.length === 0)
            return <br key={index} />;
          return (
            <div key={index}>
              {e.tag === "h1" && (
                <h1>
                  {e.children?.map((text) =>
                    formatText({
                      format: String(text.format),
                      text: text.text,
                    }),
                  )}
                </h1>
              )}
              {e.tag === "h2" && (
                <h2>
                  {e.children?.map((text) =>
                    formatText({
                      format: String(text.format),
                      text: text.text,
                    }),
                  )}
                </h2>
              )}
              {e.tag === "h3" && (
                <h3>
                  {e.children?.map((text) =>
                    formatText({
                      format: String(text.format),
                      text: text.text,
                    }),
                  )}
                </h3>
              )}
              {e.tag === "h4" && (
                <h4>
                  {e.children?.map((text) =>
                    formatText({
                      format: String(text.format),
                      text: text.text,
                    }),
                  )}
                </h4>
              )}
              {e.tag === "h5" && (
                <h5>
                  {e.children?.map((text) =>
                    formatText({
                      format: String(text.format),
                      text: text.text,
                    }),
                  )}
                </h5>
              )}
              {e.tag === "h6" && (
                <h6>
                  {e.children?.map((text) =>
                    formatText({
                      format: String(text.format),
                      text: text.text,
                    }),
                  )}
                </h6>
              )}
              {e.type === "paragraph" && (
                <p>
                  {e.children?.map((text) =>
                    formatText({
                      format: String(text.format),
                      text:
                        text.type === "link"
                          ? text.children
                            ? text.children[0].text
                            : ""
                          : text.text,
                      isLink: text.type === "link",
                      linkFields:
                        text.type === "link" ? text.fields : undefined,
                    }),
                  )}
                </p>
              )}

              {/* Block Quote */}
              {e.type === "quote" && (
                <>
                  {e.children?.map((text, key) => (
                    <p
                      key={key}
                      className="my-2 border-l-4 border-gray-700/80 py-1 pl-1"
                    >
                      <span className="mx-2 inline-block font-serif font-medium italic">
                        {text.text}
                      </span>
                    </p>
                  ))}
                </>
              )}

              {/* Unordered List/Ordered List */}
              {(e.tag === "ul" || e.tag === "ol") && (
                <div className="ml-4">
                  <ol className={e.tag === "ul" ? "list-disc" : "list-decimal"}>
                    {e.children?.map((properties, key) => (
                      <li key={key}>
                        {properties.children?.map((item) => {
                          return formatText({
                            format: item.format,
                            text: item.text,
                          });
                        })}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Media Image */}
              {e.type === "upload" && (
                <div className="flex w-full flex-col items-center justify-center">
                  <img
                    src={`${CMS_API_BASE_URL}${e.value.url}`}
                    alt={`${e.value.alt}`}
                  />
                  {/* <p className='text-xs'>{e.value.alt}</p> */}
                </div>
              )}

              {/* Code Block */}
              {e.type === "block" && (
                <>
                  {e.fields.blockType === "code-block" && (
                    <CodeBlockComponents
                      name={e.fields.blockName}
                      code={e.fields.code}
                      language={e.fields.language}
                      showLineNumbers
                    />
                  )}
                </>
              )}

              {/* horzontal rule */}
              {e.type === "horizontalrule" && <hr className="my-2" />}
            </div>
          );
        })}
      </article>
    </>
  );
};

const CodeBlockComponents = ({
  name,
  code,
  // language,
  // showLineNumbers,
}: {
  name: string;
  code: string;
  language: string;
  showLineNumbers?: boolean;
}) => {
  type CopyStatus = "Copy" | "Copied!" | "Failed";

  const [copyStatus, setCopyStatus] = useState<CopyStatus>("Copy");
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus("Copy"), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setCopyStatus("Failed");
      setTimeout(() => setCopyStatus("Copy"), 2000);
    }
  };

  return (
    <div className="rounded border p-2">
      <div className="flex items-center justify-between">
        <p className="text-xs">{name}</p>
        <Button onClick={handleCopy} size="sm" variant={"ghost"}>
          <span className="flex gap-x-1">
            {copyStatus === "Copy" ? <Copy size={6} /> : <CopyCheck size={6} />}
            {copyStatus}
          </span>
        </Button>
      </div>
      {/* <SyntaxHighlighter
        style={atomDark}
        showLineNumbers={showLineNumbers}
        language={language}
        PreTag="div"
      >
        {code}
      </SyntaxHighlighter> */}
    </div>
  );
};

interface formatTextParam {
  format: string;
  text: string;
  isLink?: boolean;
  linkFields?: {
    linkType: string;
    newTab: string;
    url: string;
    [k: string]: string | unknown;
  };
}

const formatText = ({ format, text, isLink, linkFields }: formatTextParam) => {
  const classes = [];

  if (Number(format) & 1) classes.push("font-bold"); // Bold
  if (Number(format) & 2) classes.push("italic"); // Italic
  if (Number(format) & 4) classes.push("line-through"); // Strikethrough
  if (Number(format) & 8) classes.push("underline"); // Underline

  const isCode = (Number(format) & 16) > 0;

  if (isLink)
    return (
      <span key={text}>
        <a
          href={linkFields?.url}
          target={linkFields?.newTab ? "_blank" : "_self"}
          className="text-sm text-blue-400 hover:underline"
          rel="noreferrer"
        >
          {text}
        </a>{" "}
      </span>
    );

  if (isCode)
    return (
      <code className="rounded bg-slate-700 p-0.5" key={text + format}>
        {text}{" "}
      </code>
    );

  return (
    <span key={text + format} className={classes.join(" ")}>
      {text}{" "}
    </span>
  );
};
