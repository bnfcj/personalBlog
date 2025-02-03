import { useCurrentEditor } from "@tiptap/react";

function BulletList({ activeStyle, inactiveStyle }) {
  const { editor } = useCurrentEditor();
  return (
    <button
      onClick={() => editor.chain().focus().toggleBulletList().run()}
      className={editor.isActive("bulletList") ? activeStyle : inactiveStyle}
    >
      Bullet list
    </button>
  );
}

export default BulletList;
