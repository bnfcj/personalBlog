import { useCurrentEditor } from "@tiptap/react";

function Heading({ level, activeStyle, inactiveStyle }) {
  const { editor } = useCurrentEditor();
  return (
    <button
      onClick={() =>
        editor.chain().focus().toggleHeading({ level: level }).run()
      }
      className={
        editor.isActive("heading", { level: level })
          ? activeStyle
          : inactiveStyle
      }
    >
      {`H${level}`}
    </button>
  );
}

export default Heading;
