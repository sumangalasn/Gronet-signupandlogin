import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/common/Input";
import { PrimaryButton } from "../../components/common/Button";
import API from "./services/api";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = async () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/signup", {
        name,
        email,
        password
      });

      alert(res.data.message || "Signup successful");

      // Redirect to login page
      navigate("/login");

    } catch (error) {
      alert(
        error.response?.data?.message || "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <h2 style={{ fontSize: "22px", marginBottom: "6px" }}>
        Sign up
      </h2>

      <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
        Create your account
      </p>

      <Input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      <PrimaryButton onClick={signup} disabled={loading}>
        {loading ? "Signing up..." : "Sign up"}
      </PrimaryButton>

      <p style={{ marginTop: "15px", fontSize: "14px" }}>
        Already have an account?{" "}
        <span
          style={{ color: "#0a1e5e", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Sign in
        </span>
      </p>
    </AuthLayout>
  );
};

export default SignUp;
