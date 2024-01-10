import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeViewer = ({ code }: { code: string }) => {
  return (
    <div className="flex-1">
      <SyntaxHighlighter
        language="javascript"
        customStyle={{ backgroundColor: "transparent" }}
        style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;
