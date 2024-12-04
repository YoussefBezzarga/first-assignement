import React from "react";
import "../styles.css";

const CustomStatementBlockDisplay = ({ attributes }) => {
  const { text, imageUrl } = attributes;

  return (
    <div className="custom-statement-block">
      <div className="custom-statement-left">
        <p>{text}</p>
      </div>
      <div className="custom-statement-right">
        {imageUrl ? <img src={imageUrl} alt="Statement" /> : null}
      </div>
    </div>
  );
};

export default CustomStatementBlockDisplay;
