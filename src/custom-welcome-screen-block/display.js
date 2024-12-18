import React from "react";
import { css } from "emotion";
import { useRendererStoreActions } from "@quillforms/renderer-core";

const WelcomeScreenBlock = () => {
  const { goToBlock } = useRendererStoreActions();

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background-color: #f2f1f1;
      `}
    >
      <div
        className={css`
          background: linear-gradient(
            124.98deg,
            #fffcf11a 29.07%,
            #c2a0f11a 87.88%
          );
          width: 528px;
          box-shadow: 0px 12px 24px 0px #8e8da83d, 0px 0px 13px 0px #8e8da81a;
          border-radius: 12px;
          border: 2px solid #ffffff;
          padding: 24px;
          text-align: left;
        `}
      >
        <div
          className={css`
            margin-bottom: 16px;
          `}
        >
          <h1
            className={css`
              font-size: 24px;
              font-weight: 900;
              color: #2a2a2a;
              font-family: "Montserrat", sans-serif;
              margin: 0;
            `}
          >
            Welcome to X-SQUAD.
          </h1>
          <p
            className={css`
              font-size: 16px;
              color: #2a2a2a;
              opacity: 0.8;
              weight: 400;
              line-height: 19.36px;
              font-family: "Inter", sans-serif;
              margin: 4px 0 0;
            `}
          >
            Your journey to DevOps excellence starts here !
          </p>
        </div>

        <p
          className={css`
            font-size: 16px;
            line-height: 19.36px;
            weight: 400;
            color: #2a2a2a;
            opacity: 0.6;
            font-family: "Inter", sans-serif;
            margin-bottom: 16px;
          `}
        >
          Take this quick and comprehensive level assessment to evaluate your
          organization’s DevOps maturity. Discover your strengths, identify
          areas of improvement, and get actionable insights to accelerate your
          growth.
        </p>

        <ul
          className={css`
            font-size: 16px;
            font-family: "Inter", sans-serif;
            line-height: 19.36px;
            color: #2a2a2a;
            weight: 700;
            opacity: 0.6;
            text-align: left;
            padding: 0;
            list-style-type: none;
          `}
        >
          <li>
            🌟 <b>What to expect ?</b>
          </li>
          <li>• A series of targeted questions</li>
          <li>• A detailed report with personalized recommendations</li>
        </ul>

        <p
          className={css`
            font-size: 16px;
            font-family: "Inter", sans-serif;
            line-height: 19.36px;
            color: #2a2a2a;
            opacity: 0.6;
            text-align: left;
          `}
        >
          Let’s unlock your full potential together. Ready to begin ?
        </p>
        <button
          onClick={() => goToBlock("dhrnpq5")}
          style={{
            backgroundColor: "#2B35EE",
            color: "#ffffff",
            border: "none",
            borderRadius: "18px",
            padding: "10px 16px",
            fontSize: "14px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
        >
          Let's start!
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreenBlock;
