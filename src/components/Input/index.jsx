import React from "react";

const Input = ({ placeholder, type, handleChange, ...rest }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default Input;
