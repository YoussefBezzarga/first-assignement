import { useTheme } from "@quillforms/renderer-core";
import React from "react";
import { css } from "emotion";

const CustomStatementDisplay = (props) => {
  const { attributes } = props;
  const { label, attachment, attachmentMaxWidth } = attributes;
  const theme = useTheme();

  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100vh; 
        padding: 20px;
      `}
    >
      {label && (
        <div
          className={css`
            flex: 1;
            text-align: center; 
            padding: 0 20px;
          `}
        >
          <p
            className={css`
              font-size: 20px;
              color: ${theme.questionsColor};
            `}
          >
            {label}
          </p>
        </div>
      )}

      {attachment && attachment.type === "image" && (
        <div
          className={css`
            flex: 1;
            display: flex;
            justify-content: center;
          `}
        >
          <img
            src={attachment.url}
            alt="Statement attachment"
            className={css`
              max-width: ${attachmentMaxWidth || "400px"};
              height: auto;
              display: block;
            `}
          />
        </div>
      )}
    </div>
  );
};


export default CustomStatementDisplay;
