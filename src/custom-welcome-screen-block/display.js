import React from "react";
import { useTheme } from "@quillforms/renderer-core";
import { css } from "emotion";

const WelcomeScreenBlock = (props) => {
  const { attributes } = props;
  const { label, description } = attributes;
  const theme = useTheme() || {}; // Assurez-vous que `theme` n'est jamais undefined
  const colors = theme.colors || {}; // Assurez-vous que `colors` est défini même s'il est vide

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        padding: 24px;
        background-color: "#F2F1F1";
        font-family: ${theme.fontFamily || "Arial, sans-serif"};
      `}
    >
      <div
        className={css`
          background: #ffffff;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          padding: 40px;
          text-align: center;
          max-width: 600px;
        `}
      >
        <h1
          className={css`
            font-size: 24px;
            font-weight: bold;
            color: ${colors.primary || "#333"}; /* Valeur par défaut */
            margin-bottom: 20px;
          `}
        >
          {label}
        </h1>
        <p
          className={css`
            font-size: 16px;
            line-height: 1.5;
            color: ${colors.text || "#555"}; /* Valeur par défaut */
            margin-bottom: 40px;
          `}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreenBlock;
