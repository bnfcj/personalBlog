import { useCurrentEditor } from "@tiptap/react";

function BlockQuote({ activeStyle, inactiveStyle }) {
  const { editor } = useCurrentEditor();
  return (
    <button
      onClick={() => editor.chain().focus().toggleBlockquote().run()}
      className={editor.isActive("blockquote") ? activeStyle : inactiveStyle}
    >
      Blockquote
    </button>
  );
}

export default BlockQuote;
