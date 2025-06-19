import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm.tsx";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import Header from "../components/Header.tsx";
import AuthButton from "../components/AuthButton.tsx";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [organizations, setOrganizations] = useState<{ name: string }[]>([]);
  const [selectedOrg, setSelectedOrg] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/organizations/")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched organizations:", data);
        setOrganizations(data);
      })
      .catch((err) => {
        console.error("Failed to load organizations", err);
        setError("Could not load organization list");
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/users/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password, organization: selectedOrg })
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Success", data);
        navigate("/home");
      }
      else {
        const errorMsg = Object.values(data).flat().join(" ");
        setError(errorMsg || "Invalid credentials");
      }
    }
    catch (err) {
      console.error("register fetch error:", err);
      setError("Server error");
    }
  };

  return (
    <>
      <Header />
      <Box className="login-box">
        <Typography variant="h3" component="h1" className="title">
          Register to the system
        </Typography>

        <form onSubmit={handleSubmit}>
          <RegisterForm
            username={username}
            password={password}
            onUsernameChange={(e) => setUsername(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
          />

          <FormControl fullWidth required sx={{ mt: 2 }}>
            <InputLabel>Organization</InputLabel>
            <Select
              value={selectedOrg}
              label="Organization"
              onChange={(e) => setSelectedOrg(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {organizations.map((org) => (
                <MenuItem key={org.name} value={org.name}>
                  {org.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <AuthButton label="SignUp" type="submit" />

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
        </form>
      </Box>
    </>
  );
}

export default RegisterPage;
