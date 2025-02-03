import { useCurrentEditor } from "@tiptap/react";

function HorizontalRule({ inactiveStyle }) {
  const { editor } = useCurrentEditor();
  return (
    <button
      className={inactiveStyle}
      onClick={() => editor.chain().focus().setHorizontalRule().run()}
    >
      Horizontal rule
    </button>
  );
}

export default HorizontalRule;
