import React from "react";

export default function CheckboxInput(props) {
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

  const isColumnLayout = uiField["ui:layout"] === "column";

  const renderCheckboxes = (enumValues) => {
    return enumValues.map((value, index) => (
      <div key={index} className="form-check" style={{ flexBasis: "20%" }}>
        <input
          type="checkbox"
          className={`${fieldClass} ${errors[fieldName] ? "is-invalid" : ""}`}
          name={fieldName}
          value={value}
          checked={formData[fieldName]?.includes(value)}
          onChange={(e) => {
            const updatedValues = e.target.checked
              ? [...(formData[fieldName] || []), value]
              : (formData[fieldName] || []).filter((val) => val !== value);
            handleChange(fieldName, updatedValues);
          }}
        />
        <label className="form-check-label">{value}</label>
      </div>
    ));
  };

  const renderOneOfOptions = (oneOfOptions) => {
    return oneOfOptions.map((option, index) => {
      const value = typeof option === "object" ? option.const : option;
      const label = typeof option === "object" ? option.title : option;

      return (
        <div key={index} className="form-check" style={{ flexBasis: "20%" }}>
          <input
            type="checkbox"
            className={`${fieldClass} ${errors[fieldName] ? "is-invalid" : ""}`}
            name={fieldName}
            value={value}
            checked={formData[fieldName]?.includes(value)}
            onChange={(e) => {
              const updatedValues = e.target.checked
                ? [...(formData[fieldName] || []), value]
                : (formData[fieldName] || []).filter((val) => val !== value);
              handleChange(fieldName, updatedValues);
            }}
          />
          <label className="form-check-label">{label}</label>
        </div>
      );
    });
  };

  return (
    <div key={fieldName} className={`${layoutClass}`}>
      <label className="form-label">{title || fieldName}</label>
      <div
        className={`form-check ${
          isColumnLayout ? "d-flex flex-column" : "d-flex flex-row"
        }`}
        style={{ overflow: "hidden" }}
      >
        {field.items?.enum && renderCheckboxes(field.items.enum)}
        {field.oneOf && renderOneOfOptions(field.oneOf)}
      </div>
      {errors[fieldName] &&
        errors[fieldName].map((error, index) => (
          <p key={index} className="invalid-feedback m-0">
            {error}
          </p>
        ))}
    </div>
  );
}
