import { useCurrentEditor } from "@tiptap/react";

function Redo({ inactiveStyle, disabledStyle }) {
  const { editor } = useCurrentEditor();
  return (
    <button
      onClick={() => editor.chain().focus().redo().run()}
      disabled={!editor.can().chain().focus().redo().run()}
      className={`${inactiveStyle} ${disabledStyle}`}
    >
      Redo
    </button>
  );
}

export default Redo;
