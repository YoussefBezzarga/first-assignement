import { registerBlockType } from "@quillforms/blocks";
import WelcomeScreenBlock from "./display";

registerBlockType("welcome-screen", {
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
  display: WelcomeScreenBlock,
});
