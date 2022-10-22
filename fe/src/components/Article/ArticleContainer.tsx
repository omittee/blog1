import React from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// 设置高亮样式

import str from "@/constants/md";
function ArticleContainer() {
  return (
    <div data-component="ArticleContainer">
      <ReactMarkdown
        className="md"
        children={str}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                useInlineStyles={false}
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      ></ReactMarkdown>
    </div>
  );
}
export default ArticleContainer;
