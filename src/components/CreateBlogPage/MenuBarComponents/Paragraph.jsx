import { useCurrentEditor } from "@tiptap/react";

function Paragraph({ activeStyle, inactiveStyle }) {
  const { editor } = useCurrentEditor();
  return (
    <button
      onClick={() => editor.chain().focus().setParagraph().run()}
      className={editor.isActive("paragraph") ? activeStyle : inactiveStyle}
    >
      Paragraph
    </button>
  );
}

export default Paragraph;
