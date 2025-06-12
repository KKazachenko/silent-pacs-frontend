import { Link } from "react-router-dom";

interface AuthButtonProps {
    to: string;
    label: string;
}

function AuthButton({ to, label } : AuthButtonProps) {
    return(
        <Link to={to} style={{textDecoration: "none"}}>
            <button className="button">{label}</button>
        </Link>
    );
}

export default AuthButton;