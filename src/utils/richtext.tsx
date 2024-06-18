import {
  BLOCKS,
  MARKS,
  Document as RichTextDocument,
} from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type RichTextType = {
  document: RichTextDocument;
};

export default function RichText({ document }: RichTextType) {
  if (!document) {
    return null;
  }

  function Ul({ children }: { children: React.ReactNode }) {
    return <ul>{children}</ul>;
  }

  function Ol({ children }: { children: React.ReactNode }) {
    return <ul>{children}</ul>;
  }

  function P({ children }: { children: React.ReactNode }) {
    return <p className="text-sm mb-2">{children}</p>;
  }

  const options = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <Ul>{children}</Ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
        <Ol>{children}</Ol>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <P>{children}</P>
      ),
    },
  };

  return <>{documentToReactComponents(document, options)}</>;
}
