import { useCurrentEditor } from "@tiptap/react";

function Bold() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }
  return (
    <button
      onClick={() => editor.chain().focus().toggleBold().run()}
      disabled={!editor.can().chain().focus().toggleBold().run()}
      className={`${
        editor.isActive("bold") ? "text-black font-bold" : "text-gray-500"
      }`}
    >
      Bold
    </button>
  );
}

export default Bold;
