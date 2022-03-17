import React from "react";

const Input = ({ name, type, handleChange, ...rest }) => {
  return (
    <input type={type} placeholder={name} onChange={handleChange} {...rest} />
  );
};

export default Input;
