import { useCurrentEditor } from "@tiptap/react";

function Bold({ activeStyle, inactiveStyle }) {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }
  return (
    <button
      onClick={() => editor.chain().focus().toggleBold().run()}
      disabled={!editor.can().chain().focus().toggleBold().run()}
      className={`${editor.isActive("bold") ? activeStyle : inactiveStyle}`}
    >
      Bold
    </button>
  );
}

export default Bold;
