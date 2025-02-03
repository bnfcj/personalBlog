import { useCurrentEditor } from "@tiptap/react";

function Italic({ activeStyle, inactiveStyle }) {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }
  return (
    <button
      onClick={() => editor.chain().focus().toggleItalic().run()}
      disabled={!editor.can().chain().focus().toggleItalic().run()}
      className={`${editor.isActive("italic") ? activeStyle : inactiveStyle}`}
    >
      Italic
    </button>
  );
}

export default Italic;
