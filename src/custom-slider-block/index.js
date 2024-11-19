import { registerBlockType } from "@quillforms/blocks";
import display from "./display";

registerBlockType("custom-slider-block", {
  attributes: {
    label: {
      type: "string",
      default: "Rate your experience",
    },
    min: {
      type: "number",
      default: 0,
    },
    max: {
      type: "number",
      default: 10,
    },
    step: {
      type: "number",
      default: 1,
    },
    required: {
      type: "boolean",
      default: false,
    },
    comments: {
      type: "array",
      default: [
        { range: [0], text: "Not rated yet." },
        { range: [1, 2], text: "Poor experience." },
        { range: [3, 4], text: "Below average." },
        { range: [5, 6], text: "Average." },
        { range: [7, 8], text: "Good experience." },
        { range: [9, 10], text: "Excellent experience!" },
      ],
    },
  },
  display,
});
