import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import CustomStatementBlock from "./display";

registerCoreBlocks({
  "custom-statement-block": {
    name: "custom-statement-block",
    category: "layout",
    display: CustomStatementBlock,
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
        default: "100%",
      },
    },
  },
});
