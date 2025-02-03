import { useCurrentEditor } from "@tiptap/react";

function ClearMarks({ inactiveStyle }) {
  const { editor } = useCurrentEditor();
  return (
    <button
      className={inactiveStyle}
      onClick={() => editor.chain().focus().unsetAllMarks().run()}
    >
      Clear marks
    </button>
  );
}

export default ClearMarks;
