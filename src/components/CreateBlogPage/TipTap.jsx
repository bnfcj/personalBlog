import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import Placeholder from "@tiptap/extension-placeholder";
import TextStyle from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";
import { EditorProvider } from "@tiptap/react";
import "./CustomStyles/customStyles.css";
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
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
    horizontalRule: {
      HTMLAttributes: {
        class: " border-t-black ",
      },
    },
    blockquote: {
      HTMLAttributes: {
        class: "border-l-4 pl-4 border-gray-300",
      },
    },
  }),

  Placeholder.configure({
    placeholder: "Type something",

    // emptyEditorClass: `text-gray-400 before:content-[attr(data-placeholder)]`,
  }),
];
const editorProps = {
  attributes: {
    class: "prose max-w-full outline-none py-10 static",
    style: "position: static ",
  },
};

const TipTap = () => {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      editorProps={editorProps}
    />
  );
};

export default TipTap;
