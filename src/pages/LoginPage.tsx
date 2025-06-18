import { useState } from "react";
import RegisterForm from "../components/RegisterForm.tsx";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header.tsx";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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

            const data = await response.json();

            if (response.ok) {
                console.log("Success", data);

            } else {
                setError(data.detail || "Input error");
            }
        } catch (err) {
            console.error("login fetch error:", err)
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
                        onSubmit={handleSubmit}
                    />
                    <button className="button" type="submit">Login</button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </form>
            </Box>
        </>
    );
}

export default LoginPage;
