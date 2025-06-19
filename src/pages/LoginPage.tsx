import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm.tsx";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header.tsx";
import AuthButton from "../components/AuthButton.tsx";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/users/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      let data;
      try {
        data = await response.json();
      }
      catch (jsonErr) {
        console.error("Invalid JSON from server:", jsonErr);
        setError("Server returned invalid response");
        return;
      }

      if (response.ok) {
        console.log("Login success:", data);

        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh)

        navigate("/home");
      }
      else {
        const errorMsg = Object.values(data).flat().join(" ");
        setError(errorMsg || "Invalid credentials");
      }
    }
    catch (err) {
      console.error("Login fetch error:", err);
      setError("Server error");
    }
  };

  return (
    <>
      <Header />
      <Box className="login-box">
        <Typography variant="h3" component="h1" className="title">
          Login to the system
        </Typography>
        <form onSubmit={handleSubmit}>
          <RegisterForm
            username={username}
            password={password}
            onUsernameChange={(e) => setUsername(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
          />
          <AuthButton label="LogIn" type="submit" />
          {error && <Typography color="error">{error}</Typography>}
        </form>
      </Box>
    </>
  );
}

export default LoginPage;
