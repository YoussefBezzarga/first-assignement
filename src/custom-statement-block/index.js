import { registerBlockType } from "@quillforms/blocks";
import display from "./display";

registerBlockType("custom-statement-block", {
  title: "Custom Statement",
  attributes: {
    text: {
      type: "string",
    },
    imageUrl: {
      type: "string",
      default: "right",
    },
    textAlignment: {
      type: "string",
      default: "left",
    },
  },
  display: ({ attributes }) => {
    const { text, imageUrl } = attributes;
    return (
      <div className="custom-statement-block">
        <div className="custom-statement-text">{text}</div>
        {imageUrl && (
          <div className="custom-statement-image">
            <img src={imageUrl} alt="Statement" />
          </div>
        )}
      </div>
    );
  },
});
