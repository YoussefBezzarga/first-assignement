import { registerBlockType } from "@quillforms/blocks";
import WelcomeScreenBlock from "./display";

registerBlockType("custom-welcome-screen-block", {
  attributes: {
    label: {
      type: "string",
      default: "",
    },
    description: {
      type: "string",
      default: "",
    },
  },
  display: WelcomeScreenBlock
});
