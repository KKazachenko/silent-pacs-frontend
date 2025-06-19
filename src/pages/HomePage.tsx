import { Box, Grid, Typography } from "@mui/material";
import AuthButton from "../components/AuthButton.tsx";
import Header from "../components/Header.tsx";
import "../styles/styles.css";
import {useNavigate} from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    return (
        <>
        <Header />
            <Box className="login-box">
                <Grid item>
                    <Typography variant="h2" component="h1" className="title">Welcome</Typography>
                </Grid>
                <Grid item>
                    <AuthButton label={"Sign In"} onClick={() => navigate("/login")} type={"submit"}/>
                </Grid>
                <Grid item>
                    <AuthButton label={"Sign Up"} onClick={() => navigate("/signup")} type={"submit"}/>
                </Grid>
            </Box>
        </>
    );
}

export default HomePage;