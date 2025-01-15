import React, {useState} from "react";

export default function FileInput(props) {
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

  const [preview, setPreview] = useState();
  const [fileDetails, setFileDetails] = useState(null);

  const convertToBase64 = (file) => {
    // Convert file to Base64
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64File = reader.result; // This will be a Base64 encoded string
      handleChange(fieldName, base64File); // Pass the Base64 string to the handler
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (fieldName, e) => {
    const file = e.target.files[0];
    setPreview();
    setFileDetails();

    if (file) {
      if (file.type.startsWith("image/")) {
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
        setFileDetails(null);
      } else {
        setPreview(null);
        setFileDetails({
          name: file.name,
          type: file.type,
          size: file.size,
        });
      }

      const outputFormat = uiField?.["ui:options"]?.["output"];
      if (outputFormat === "base64") {
        convertToBase64(file);
      } else {
        handleChange(fieldName, file);
      }
    }
  };

  return (
    <div key={fieldName} className={`${layoutClass}`}>
      <label className="form-label">{title}</label>
      <input
        type="file"
        onChange={(e) => handleFileChange(fieldName, e)}
        className={`${fieldClass} ${errors[fieldName] ? "is-invalid" : ""}`}
      />

      {((formData[fieldName] &&
        typeof formData[fieldName] === "string" &&
        formData[fieldName].startsWith("data:")) ||
        preview) && (
        <div className="mt-2">
          <img
            src={preview || formData[fieldName]}
            alt="Preview"
            style={{
              maxWidth: "100%",
              maxHeight: "200px",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      {fileDetails && (
        <div className="mt-2">
          <p>
            <strong>File Name:</strong> {fileDetails.name}
          </p>
          <p>
            <strong>File Type:</strong> {fileDetails.type}
          </p>
          <p>
            <strong>File Size:</strong> {Math.round(fileDetails.size / 1024)} KB
          </p>
        </div>
      )}

      {errors[fieldName] &&
        errors[fieldName].map((error, index) => (
          <p key={index} className="invalid-feedback m-0">
            {error}
          </p>
        ))}
    </div>
  );
}
