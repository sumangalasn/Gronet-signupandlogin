import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/common/Input";
import { PrimaryButton } from "../../components/common/Button";
import API from "./services/api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token || "ok");
      alert(res.data.message || "Login successful");

      // Redirect to home page
      navigate("/home");

    } catch (error) {
      alert(
        error.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <h2>Sign in</h2>
      <p style={{ color: "#777", marginBottom: "20px" }}>
        Welcome back! Please login to your account
      </p>

      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <PrimaryButton onClick={login} disabled={loading}>
        {loading ? "Signing in..." : "Sign in"}
      </PrimaryButton>

      <p style={{ marginTop: "15px", fontSize: "14px" }}>
        Don’t have an account?{" "}
        <span style={{ color: "#0a1e5e", cursor: "pointer" }} onClick={() => navigate("/signup")}>
          Sign up
        </span>
      </p>
    </AuthLayout>
  );
};

export default Login;
