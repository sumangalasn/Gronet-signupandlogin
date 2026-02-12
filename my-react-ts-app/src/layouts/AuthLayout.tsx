import type { ReactNode, CSSProperties } from "react";
import authImg from "../assets/images/auth-image.svg";
import logo from "../assets/images/logo.svg";

type AuthLayoutProps = {
  children?: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div style={page}>
      <div style={card}>
        {/* Left Image */}
        <div style={left}>
          <img src={authImg} alt="auth" style={image} />
        </div>

        {/* Right Form */}
        <div style={right}>
          <img src={logo} alt="logo" style={logoStyle} />
          {children}
        </div>
      </div>
    </div>
  );
};

/* ---------- Styles ---------- */

const page: CSSProperties = {
  height: "100vh",
  background: "#f4f6f8",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const card: CSSProperties = {
  width: "900px",
  height: "520px",
  background: "#ffffff",
  display: "flex",
  borderRadius: "16px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  overflow: "hidden",
};

const left: CSSProperties = {
  width: "45%",
};

const image: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const right: CSSProperties = {
  width: "55%",
  padding: "40px 50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const logoStyle: CSSProperties = {
  width: "120px",
  marginBottom: "24px",
};

export default AuthLayout;
