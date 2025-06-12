import { AppBar, Toolbar, Typography } from "@mui/material";
import "../styles/styles.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <AppBar position="fixed" className="custom-appbar">
            <Toolbar className="custom-toolbar">
                <Typography component="h1" variant="h6">
                    MyApp
                </Typography>
                <nav className="custom-nav">
                    <Link to="/">Home</Link>
                </nav>
            </Toolbar>
        </AppBar>
    );
}
export default Header;