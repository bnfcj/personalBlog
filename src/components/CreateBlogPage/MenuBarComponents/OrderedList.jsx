import { useCurrentEditor } from "@tiptap/react";

function OrderedList({ activeStyle, inactiveStyle }) {
  const { editor } = useCurrentEditor();
  return (
    <button
      onClick={() => editor.chain().focus().toggleOrderedList().run()}
      className={editor.isActive("orderedList") ? activeStyle : inactiveStyle}
    >
      Ordered list
    </button>
  );
}

export default OrderedList;
