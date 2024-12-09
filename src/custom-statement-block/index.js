import { registerBlockType } from "@quillforms/blocks";
import CustomStatementDisplay from "./display";

registerBlockType("custom-statement-block", {
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