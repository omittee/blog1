import React from "react";
import Markdown from "react-markdown";
import str from "@/constants/md";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus, coy } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"
import "@/assets/CSS/mdStyle.scss"
// // 设置高亮样式

function ArticleContainer() {
  return (
    <div data-component="ArticleContainer">
      <Markdown
        className="md"
        rehypePlugins={[remarkMath, remarkGfm, remarkToc]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                style={vscDarkPlus}
                useInlineStyles={true}
                showInlineLineNumbers
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {str}
      </Markdown>
    </div>
  );
}
export default ArticleContainer;
