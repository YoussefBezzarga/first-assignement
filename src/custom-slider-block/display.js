/**
 * QuillForms Dependencies
 */
import { useTheme, useMessages } from "@quillforms/renderer-core";

/**
 * React Dependencies
 */
import { useState, useEffect } from "react";

/**
 * External Dependencies
 */
import { css } from "emotion";

const CustomSliderDisplay = (props) => {
  const {
    id,
    attributes,
    setIsValid,
    setIsAnswered,
    setValidationErr,
    val,
    setVal,
  } = props;

  const { required, min, max, step, comments, label } = attributes;
  const [dynamicComment, setDynamicComment] = useState("");
  const messages = useMessages();
  const theme = useTheme();

  const validate = (value) => {
    if (required && (value === null || value === undefined)) {
      setIsValid(false);
      setValidationErr(messages["label.errorAlert.required"]);
    } else {
      setIsValid(true);
      setValidationErr(null);
    }
  };

  useEffect(() => {
    const initialVal = val || min;
    if (comments && Array.isArray(comments)) {
      const comment = comments.find(({ range }) =>
        range.includes(parseInt(initialVal, 10))
      );
      setDynamicComment(comment?.text || "");
    }
  }, [val, comments, min]);

  return (
    <div
      className={css`
        padding: 20px;
      `}
    >
      <label
        htmlFor={id}
        className={css`
          display: block;
          font-size: 16px;
          margin-bottom: 10px;
          color: ${theme.questionsColor};
        `}
      ></label>
      <div
        className={css`
          position: relative;
          width: 100%;
        `}
      >
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={val || min}
          onChange={(e) => {
            setVal(e.target.value);
            setIsAnswered(true);
          }}
          className={css`
            width: 100%;
            margin-bottom: 50px;
          `}
        />
        <span
          className={css`
            position: absolute;
            top: -40px; /* Adjusted to create more space */
            left: ${((val - min) / (max - min)) * 100}%;
            transform: translateX(-50%);
            background: ${"#009ACD"};
            color: ${theme.buttonsFontColor};
            padding: 6px 10px; /* Increased padding for better visibility */
            border-radius: 4px;
            font-size: 15px;
            white-space: nowrap; /* Prevents text wrapping */
          `}
        >
          {val || min}
        </span>
      </div>
      <div
        className={css`
          font-size: 14px;
          color: ${"#020202"};
        `}
      >
        {dynamicComment}
      </div>
    </div>
  );
};

export default CustomSliderDisplay;
