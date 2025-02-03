import { useCurrentEditor } from "@tiptap/react";

function Undo({ inactiveStyle, disabledStyle }) {
  const { editor } = useCurrentEditor();
  return (
    <button
      onClick={() => editor.chain().focus().undo().run()}
      disabled={!editor.can().chain().focus().undo().run()}
      className={`${inactiveStyle} ${disabledStyle}`}
    >
      Undo
    </button>
  );
}

export default Undo;
