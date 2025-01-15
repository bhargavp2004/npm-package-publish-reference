import React from "react";

export default function TimeInput(props) {
  const {schemaModel, formData, errors, title, field, uiField, fieldClass, layoutClass, handleChange, fieldName} = props;
  return (
    <div key={fieldName} className={`${layoutClass} `}>
      <label className="form-label">{title}</label>
      <input
        type="time"
        value={formData[fieldName] || ""}
        onChange={(e) => handleChange(fieldName, e.target.value)}
        className={`${fieldClass} ${errors[fieldName] ? "is-invalid" : ""}`}
        placeholder={uiField["ui:placeholder"]}
      />
      {errors[fieldName] &&
        errors[fieldName].map((error, index) => (
          <p key={index} className="invalid-feedback m-0">
            {error}
          </p>
        ))}
    </div>
  );
}
