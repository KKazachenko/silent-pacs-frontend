import { Box, Grid, Typography } from "@mui/material";
import AuthButton from "../components/AuthButton.tsx";
import Header from "../components/Header.tsx";
import "../styles/styles.css";

function HomePage() {
    return (
        <>
        <Header></Header>
            <Box className="login-box">
                <Grid item>
                    <Typography variant="h2" component="h1" className="title">Welcome</Typography>
                </Grid>
                <Grid item>
                    <AuthButton to={"/login"} label={"Sign In"} />
                </Grid>
                <Grid item>
                    <AuthButton to={"/signup"} label={"Sign Up"} />
                </Grid>
        </Box>
        </>
    );
}

export default HomePage;