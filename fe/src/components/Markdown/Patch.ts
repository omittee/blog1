import * as React from "react";

type lineNumberStyleFunction = (lineNumber: number) => React.CSSProperties;
type lineTagPropsFunction = (lineNumber: number) => React.HTMLProps<HTMLElement>;
interface rendererNode {
  type: "element" | "text";
  value?: string | number | undefined;
  tagName?: keyof JSX.IntrinsicElements | React.ComponentType<any> | undefined;
  properties?: { className: any[], [key: string]: any; };
  children?: rendererNode[];
}
interface rendererProps {
  rows: rendererNode[];
  stylesheet: { [key: string]: React.CSSProperties };
  useInlineStyles: boolean;
}
export interface PatchSyntaxHighlighterProps {
  language?: string | undefined;
  style?: { [key: string]: React.CSSProperties } | undefined | React.CSSProperties;
  children: string | string[];
  customStyle?: React.CSSProperties | undefined;
  codeTagProps?: React.HTMLProps<HTMLElement> | undefined;
  useInlineStyles?: boolean | undefined;
  showLineNumbers?: boolean | undefined;
  showInlineLineNumbers?: boolean | undefined;
  startingLineNumber?: number | undefined;
  lineNumberContainerStyle?: React.CSSProperties | undefined;
  lineNumberStyle?: React.CSSProperties | lineNumberStyleFunction | undefined;
  wrapLines?: boolean | undefined;
  wrapLongLines?: boolean | undefined;
  lineProps?: lineTagPropsFunction | React.HTMLProps<HTMLElement> | undefined;
  renderer?: (props: rendererProps) => React.ReactNode;
  PreTag?: keyof JSX.IntrinsicElements | React.ComponentType<any> | undefined;
  CodeTag?: keyof JSX.IntrinsicElements | React.ComponentType<any> | undefined;
  [spread: string]: any;
}

class PatchSyntaxHighlighter extends React.Component<PatchSyntaxHighlighterProps> {
  static supportedLanguages: string[];
}

//在@types/react-syntax-highlighter中定义的SyntaxHighlighterProps style属性缺少React.CSSProperities类型导致类型不一致，因此这里将该类型patch进去曲线救国
export default PatchSyntaxHighlighter;