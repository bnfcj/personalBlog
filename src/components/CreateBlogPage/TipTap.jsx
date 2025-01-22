import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";
import { EditorProvider } from "@tiptap/react";
import MenuBar from "./Menubar";
import CustomImage from "./CustomExtensions/CustomImage";
const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  Image,
  CustomImage,
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    horizontalRule: {
      HTMLAttributes: {
        class: " border-t-black",
      },
    },
  }),
];
const editorProps = {
  attributes: {
    class:
      "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
  },
};
const content = `

`;

const TipTap = () => {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      editorProps={editorProps}
      content={content}
    />
  );
};

export default TipTap;
