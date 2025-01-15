import React from "react";

export default function SelectInput(props) {
  const {
    schemaModel,
    formData,
    errors,
    title,
    field,
    uiField,
    fieldClass,
    layoutClass,
    handleChange,
    fieldName,
  } = props;

  const { oneOf, enum: enumValues } = field;

  const renderEnumOptions = (enumValues) => {
    return enumValues.map((value, index) => (
      <option key={index} value={value}>
        {value}
      </option>
    ));
  };

  const renderOneOfOptions = (oneOfOptions) => {
    return oneOfOptions.map((option, index) => {
      const value = typeof option === "object" ? option.const : option;
      const label = typeof option === "object" ? option.title || value : value;

      return (
        <option key={index} value={value}>
          {label}
        </option>
      );
    });
  };

  return (
    <div key={fieldName} className={`${layoutClass}`}>
      <label className="form-label">{title || fieldName}</label>
      <select
        name={fieldName}
        className={`${fieldClass} ${errors[fieldName] ? "is-invalid" : ""}`}
        value={formData[fieldName] || ""}
        onChange={(e) => handleChange(fieldName, e.target.value)}
        placeholder={uiField["ui:placeholder"]}
      >
        <option value="">Select an option</option>
        {enumValues && renderEnumOptions(enumValues)}
        {oneOf && renderOneOfOptions(oneOf)}
      </select>
      {errors[fieldName] &&
        errors[fieldName].map((error, index) => (
          <p key={index} className="invalid-feedback m-0">
            {error}
          </p>
        ))}
    </div>
  );
}
