import {useState} from "react";
import RegisterForm from "../components/RegisterForm.tsx";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header.tsx";

function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <>
            <Header></Header>
            <Box className="login-box">
                <Typography variant="h3" component="h1" className="title">Register to the system</Typography>
                <RegisterForm
                    username={username}
                    password={password}
                    onUsernameChange={(e) => setUsername(e.target.value)}
                    onPasswordChange={(e) => setPassword(e.target.value)}
                    onSubmit={handleSubmit}
                    />
                <button className="registration-button" type="submit">Sign Up</button>
            </Box>
        </>
    );
}
    export default RegisterPage;
