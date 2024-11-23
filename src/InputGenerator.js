import React from "react";

const generateInputFields = (inputData, handleChange) => {
  return inputData.map(
    ({ name, type, value, placeholder, required, autoFocus }) => (
      <div className="input-field" key={name}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          autoFocus={autoFocus}
          placeholder={placeholder}
        />
      </div>
    )
  );
};

export default generateInputFields;
