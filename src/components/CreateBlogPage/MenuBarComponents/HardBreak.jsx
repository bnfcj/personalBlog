import { useCurrentEditor } from "@tiptap/react";

function HardBreak({ inactiveStyle }) {
  const { editor } = useCurrentEditor();
  return (
    <button
      className={inactiveStyle}
      onClick={() => editor.chain().focus().setHardBreak().run()}
    >
      Hard break
    </button>
  );
}

export default HardBreak;
