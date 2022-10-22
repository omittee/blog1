import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// 设置高亮样式
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
// 设置高亮的语言
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import less from "react-syntax-highlighter/dist/esm/languages/prism/less";
import c from "react-syntax-highlighter/dist/esm/languages/prism/c";
import cpp from "react-syntax-highlighter/dist/esm/languages/prism/cpp";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import csharp from "react-syntax-highlighter/dist/esm/languages/prism/csharp";
import ruby from "react-syntax-highlighter/dist/esm/languages/prism/ruby";
import swift from "react-syntax-highlighter/dist/esm/languages/prism/swift";
import go from "react-syntax-highlighter/dist/esm/languages/prism/go";
import rust from "react-syntax-highlighter/dist/esm/languages/prism/rust";
import php from "react-syntax-highlighter/dist/esm/languages/prism/php";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import vim from "react-syntax-highlighter/dist/esm/languages/prism/vim";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import docker from "react-syntax-highlighter/dist/esm/languages/prism/docker";
import git from "react-syntax-highlighter/dist/esm/languages/prism/git";
import http from "react-syntax-highlighter/dist/esm/languages/prism/http";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import kotlin from "react-syntax-highlighter/dist/esm/languages/prism/kotlin";
import nginx from "react-syntax-highlighter/dist/esm/languages/prism/nginx";
import objectivec from "react-syntax-highlighter/dist/esm/languages/prism/objectivec";
import sass from "react-syntax-highlighter/dist/esm/languages/prism/sass";
import sql from "react-syntax-highlighter/dist/esm/languages/prism/sql";
import verilog from "react-syntax-highlighter/dist/esm/languages/prism/verilog";
import wasm from "react-syntax-highlighter/dist/esm/languages/prism/wasm";
import yaml from "react-syntax-highlighter/dist/esm/languages/prism/yaml";
import regex from "react-syntax-highlighter/dist/esm/languages/prism/regex";
import jsonp from "react-syntax-highlighter/dist/esm/languages/prism/jsonp";

SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("less", less);
SyntaxHighlighter.registerLanguage("c", c);
SyntaxHighlighter.registerLanguage("cpp", cpp);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("csharp", csharp);
SyntaxHighlighter.registerLanguage("ruby", ruby);
SyntaxHighlighter.registerLanguage("swift", swift);
SyntaxHighlighter.registerLanguage("go", go);
SyntaxHighlighter.registerLanguage("rust", rust);
SyntaxHighlighter.registerLanguage("php", php);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("vim", vim);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("docker", docker);
SyntaxHighlighter.registerLanguage("git", git);
SyntaxHighlighter.registerLanguage("http", http);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("kotlin", kotlin);
SyntaxHighlighter.registerLanguage("nginx", nginx);
SyntaxHighlighter.registerLanguage("objectivec", objectivec);
SyntaxHighlighter.registerLanguage("sass", sass);
SyntaxHighlighter.registerLanguage("sql", sql);
SyntaxHighlighter.registerLanguage("verilog", verilog);
SyntaxHighlighter.registerLanguage("wasm", wasm);
SyntaxHighlighter.registerLanguage("regex", regex);
SyntaxHighlighter.registerLanguage("jsonp", jsonp);
SyntaxHighlighter.registerLanguage("yaml", yaml);

interface Props {
  language: string;
  value: string;
}
function CodeBlock(props: Props) {
  const { language, value } = props;
    return (
      <figure className="highlight">
        <SyntaxHighlighter language={language} style={coy}>
          {value}
        </SyntaxHighlighter>
      </figure>
    )
}
export default CodeBlock;
