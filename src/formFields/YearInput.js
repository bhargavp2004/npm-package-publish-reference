import React from "react";

export default function YearInput(props) {
  const {schemaModel, formData, errors, title, field, uiField, fieldClass, layoutClass, handleChange, fieldName} = props;
  return (
    <div key={fieldName} className={`${layoutClass} `}>
      <label className="form-label">{title}</label>
      <input
        type="number"
        value={formData[fieldName] || ""}
        onChange={(e) => handleChange(fieldName, e.target.value)}
        min="1900"
        max="2100"
        className={`${fieldClass} ${errors[fieldName] ? "is-invalid" : ""}`}
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
