import { useCurrentEditor } from "@tiptap/react";

function ClearNodes({ inactiveStyle }) {
  const { editor } = useCurrentEditor();
  return (
    <button
      className={inactiveStyle}
      onClick={() => editor.chain().focus().clearNodes().run()}
    >
      Clear nodes
    </button>
  );
}

export default ClearNodes;
