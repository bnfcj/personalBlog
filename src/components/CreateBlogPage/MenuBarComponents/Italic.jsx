import { useCurrentEditor } from "@tiptap/react";

function Italic() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }
  return (
    <button
      onClick={() => editor.chain().focus().toggleItalic().run()}
      disabled={!editor.can().chain().focus().toggleItalic().run()}
      className={`${
        editor.isActive("italic") ? "text-black font-italic" : "text-gray-500"
      }`}
    >
      Italic
    </button>
  );
}

export default Italic;
