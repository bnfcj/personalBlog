import { useCurrentEditor } from "@tiptap/react";

function Color({ inactiveStyle }) {
  const { editor } = useCurrentEditor();
  return (
    <button
      onClick={() => editor.chain().focus().setColor("#958DF1").run()}
      className={inactiveStyle}
    >
      Purple
    </button>
  );
}

export default Color;
