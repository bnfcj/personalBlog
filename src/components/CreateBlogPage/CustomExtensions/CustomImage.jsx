import { Node } from "@tiptap/core";

const ResponsiveImage = Node.create({
  name: "responsiveImage",
  group: "block",
  inline: false,
  atom: true,

  addAttributes() {
    return {
      sources: {
        default: [],
        parseHTML: (element) => {
          return Array.from(element.querySelectorAll("source")).map(
            (source) => ({
              srcset: source.getAttribute("srcset") || "",
              media: source.getAttribute("media") || "",
            })
          );
        },
        renderHTML: (attributes) => {
          return attributes.sources.map((source) => [
            "source",
            { srcset: source.srcset, media: source.media },
          ]);
        },
      },
      fallback: {
        default: null,
        parseHTML: (element) =>
          element.querySelector("img")?.getAttribute("src") || "",
        renderHTML: (attributes) => {
          return [
            "img",
            {
              src: attributes.fallback,
              class: "w-full h-auto max-w-full rounded-lg shadow-md",
            },
          ];
        },
      },
      alt: {
        default: "",
        parseHTML: (element) =>
          element.querySelector("img")?.getAttribute("alt") || "",
        renderHTML: (attributes) => ({
          alt: attributes.alt,
        }),
      },
    };
  },

  parseHTML() {
    return [{ tag: "picture" }];
  },

  renderHTML({ HTMLAttributes }) {
    const sources = HTMLAttributes.sources || [];
    const fallback = HTMLAttributes.fallback || "";
    const alt = HTMLAttributes.alt || "";

    return [
      "picture",
      { class: "w-full h-auto max-w-full" }, // Tailwind classes for responsiveness
      ...sources.map((source) => [
        "source",
        { srcset: source.srcset, media: source.media },
      ]),
      ["img", { src: fallback, alt, class: "w-full h-auto max-w-full" }],
    ];
  },

  addCommands() {
    return {
      setResponsiveImage:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },
});

export default ResponsiveImage;
