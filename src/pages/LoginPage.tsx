import {useState} from "react";
import RegisterForm from "../components/RegisterForm.tsx";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header.tsx";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Логин", username);
        console.log("Пароль", password);
    };

    return (
        <>
            <Header></Header>
              <Box className="login-box">
                  <Typography variant="h3" component="h1" className="title">Login to the system</Typography>
                  <RegisterForm
                      username={username}
                      password={password}
                      onUsernameChange={(e) => setUsername(e.target.value)}
                      onPasswordChange={(e) => setPassword(e.target.value)}
                      onSubmit={handleSubmit}
                      />
                  <button className="button" type="submit">Login</button>
              </Box>
            </>
    );
}

export default LoginPage;