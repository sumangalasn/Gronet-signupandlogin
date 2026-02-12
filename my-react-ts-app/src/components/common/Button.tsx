import type { MouseEventHandler, ReactNode } from 'react';

type PrimaryButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const PrimaryButton = ({ children, onClick }: PrimaryButtonProps) => (
  <button
    onClick={onClick}
    style={{
      width: "100%",
      padding: "12px",
      background: "#0a1e5e",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontWeight: 600,
      cursor: "pointer",
      marginTop: "10px",
    }}
  >
    {children}
  </button>
);
