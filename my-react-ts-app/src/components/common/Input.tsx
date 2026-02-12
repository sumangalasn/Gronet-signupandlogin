import type { InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    style={{
      width: "100%",
      padding: "12px",
      marginBottom: "14px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "14px",
    }}
  />
);

export default Input;
