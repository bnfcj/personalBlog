import { useCurrentEditor } from "@tiptap/react";

function Strike({ activeStyle, inactiveStyle }) {
  const { editor } = useCurrentEditor();
  return (
    <button
      onClick={() => editor.chain().focus().toggleStrike().run()}
      disabled={!editor.can().chain().focus().toggleStrike().run()}
      className={`${editor.isActive("strike") ? activeStyle : inactiveStyle}`}
    >
      Strike
    </button>
  );
}

export default Strike;
