import React from "react";
import Button from "../Button/Button";
import Markdown from "react-markdown";
import str from "@/constants/md";
import data from "@/constants/data";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  coy,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeToc from "@jsdevtools/rehype-toc";
import "@/assets/CSS/Article/articleContainer.scss";
import copy from "@/utils/copy";
import { ThemeContext } from "@/GlobalContext/globalContext";
// 设置高亮样式

function ArticleContainer() {
  return (
    <ThemeContext.Consumer>
      {({ isDarkTheme }) => {
        return (
          <>
            <div data-component="ArticleContainer">
              <Markdown
                className="md"
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                  [
                    rehypeToc,
                    {
                      headings: ["h1", "h2"],
                      position: "afterend",
                      customizeTOCItem(tocItem: any, headings: any) {
                        tocItem.children[0].properties.href +=
                          headings.children[0].value;
                      },
                    },
                  ],
                ]}
                components={{
                  h1({ children }) {
                    return <h1 id={children as string}>{children}</h1>;
                  },
                  h2({ children }) {
                    return <h2 id={children as string}>{children}</h2>;
                  },
                  h3({ children }) {
                    return <h3 id={children as string}>{children}</h3>;
                  },
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    if (inline)
                      return <code className="inlineCode">{children}</code>;
                    else {
                      return match ? (
                        <div className="codeBlock">
                          <div className="bar">
                            <div className="lang">{match[1]}</div>
                            <div className="operation">
                              <i
                                className="ic i-clipboard"
                                onClick={() => {
                                  copy(children[0] as string);
                                }}
                              ></i>
                            </div>
                          </div>
                          <SyntaxHighlighter
                            language={match[1]}
                            PreTag="div"
                            children={String(children).replace(/\n$/, "")}
                            // @ts-ignore 忽略SyntaxHighlighter style类型不匹配的错误
                            style={isDarkTheme ? vscDarkPlus : coy}
                            useInlineStyles={true}
                            showInlineLineNumbers
                            {...props}
                            showLineNumbers={true}
                          />
                        </div>
                      ) : (
                        <div className="codeBlock">
                          <div className="bar">
                            <div className="lang">未知文件</div>
                            <div className="operation">
                              <i
                                className="ic i-clipboard"
                                onClick={() => {
                                  copy(children[0] as string);
                                }}
                              ></i>
                            </div>
                          </div>
                          <code className={className} {...props}>
                            {children}
                          </code>
                        </div>
                      );
                    }
                  },
                  a({ title, href, children, ...props }) {
                    return (
                      <a href={href}>
                        {children}
                        <i className="ic i-link"></i>
                      </a>
                    );
                  },
                }}
              >
                {str}
              </Markdown>
            <Button data={data[0]}></Button>
            </div>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}
export default ArticleContainer;
