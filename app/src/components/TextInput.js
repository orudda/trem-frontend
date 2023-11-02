import React from "react";

function TextInput({ label, value, onChange, type }) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}

export default TextInput;
