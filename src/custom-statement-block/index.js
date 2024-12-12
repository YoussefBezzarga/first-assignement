import { registerBlockType } from "@quillforms/blocks";
import CustomStatementDisplay from "./display";

registerBlockType("statement", {
  attributes: {
    label: {
      type: "string",
      default: "",
    },
    attachment: {
      type: "object",
      default: null,
    },
    attachmentMaxWidth: {
      type: "string",
      default: "400px",
    },
  },
  display: CustomStatementDisplay,
});
