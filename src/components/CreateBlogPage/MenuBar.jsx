import { useCurrentEditor } from "@tiptap/react";
import Bold from "./MenuBarComponents/Bold";
import Italic from "./MenuBarComponents/Italic";
import Strike from "./MenuBarComponents/Strike";
import ClearMarks from "./MenuBarComponents/ClearMarks";
import ClearNodes from "./MenuBarComponents/ClearNodes";
import Paragraph from "./MenuBarComponents/Paragraph";
import Heading from "./MenuBarComponents/Heading";
import BulletList from "./MenuBarComponents/BulletList";
import OrderedList from "./MenuBarComponents/orderedList";
import BlockQuote from "./MenuBarComponents/BlockQuote";
import HorizontalRule from "./MenuBarComponents/HorizontalRule";
import HardBreak from "./MenuBarComponents/HardBreak";
import Undo from "./MenuBarComponents/Undo";
import Redo from "./MenuBarComponents/Redo";
import Color from "./MenuBarComponents/Color";
import Save from "./MenuBarComponents/Save";

function MenuBar() {
  const { editor } = useCurrentEditor();
  const activeStyle = `text-white bg-purple-500 py-1 px-2 rounded-md`;
  const inactiveStyle = `bg-gray-200 text-black py-1 px-2 rounded-md`;
  const disabledStyle = `disabled:bg-gray-100 disabled:text-gray-400`;
  if (!editor) {
    return null;
  }
  const saveContent = () => {
    const content = editor.getJSON();
    console.log(content);
  };
  return (
    <div className="flex gap-2 flex-wrap justify-between">
      <Bold activeStyle={activeStyle} inactiveStyle={inactiveStyle} />
      <Italic activeStyle={activeStyle} inactiveStyle={inactiveStyle} />
      <Strike activeStyle={activeStyle} inactiveStyle={inactiveStyle} />{" "}
      <Color inactiveStyle={inactiveStyle} />
      <ClearMarks inactiveStyle={inactiveStyle} />
      <ClearNodes inactiveStyle={inactiveStyle} />
      <Paragraph activeStyle={activeStyle} inactiveStyle={inactiveStyle} />
      {[...Array(6).keys()].map((i) => (
        <Heading
          key={i + 1}
          level={i + 1}
          activeStyle={activeStyle}
          inactiveStyle={inactiveStyle}
        />
      ))}
      {/* <Heading
        level={1}
        activeStyle={activeStyle}
        inactiveStyle={inactiveStyle}
      />
      <Heading
        level={2}
        activeStyle={activeStyle}
        inactiveStyle={inactiveStyle}
      />
      <Heading
        level={3}
        activeStyle={activeStyle}
        inactiveStyle={inactiveStyle}
      />
      <Heading
        level={4}
        activeStyle={activeStyle}
        inactiveStyle={inactiveStyle}
      />
      <Heading
        level={5}
        activeStyle={activeStyle}
        inactiveStyle={inactiveStyle}
      />
      <Heading
        level={6}
        activeStyle={activeStyle}
        inactiveStyle={inactiveStyle}
      /> */}
      <BulletList activeStyle={activeStyle} inactiveStyle={inactiveStyle} />
      <OrderedList activeStyle={activeStyle} inactiveStyle={inactiveStyle} />
      <BlockQuote activeStyle={activeStyle} inactiveStyle={inactiveStyle} />
      <HorizontalRule inactiveStyle={inactiveStyle} />
      <HardBreak inactiveStyle={inactiveStyle} />
      <Undo inactiveStyle={inactiveStyle} disabledStyle={disabledStyle} />
      <Redo inactiveStyle={inactiveStyle} disabledStyle={disabledStyle} />
      <Save inactiveStyle={inactiveStyle} saveContent={saveContent} />
    </div>
  );
}

export default MenuBar;
