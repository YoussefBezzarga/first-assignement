import React from "react";

const CustomStatementBlock = ({ attributes }) => {
  console.log("Attributes: ", attributes); // Ajout pour vérifier les attributs
  
  const { label, attachment, attachmentMaxWidth } = attributes;

  if (!label && !attachment) {
    return <div>Aucun contenu disponible pour ce bloc.</div>;
  }

  return (
    <div className="custom-statement-block">
      {label && <div className="statement-text">{label}</div>}
      {attachment && attachment.url && (
        <div className="statement-image">
          <img
            src={attachment.url}
            alt="Statement attachment"
            style={{ maxWidth: attachmentMaxWidth }}
          />
        </div>
      )}
    </div>
  );
};

export default CustomStatementBlock;
