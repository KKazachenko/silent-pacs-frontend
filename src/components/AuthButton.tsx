import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";
interface AuthButtonProps extends ButtonProps{
    label: string;
}

function AuthButton({ label, ...rest } : AuthButtonProps) {
    return(
        <Button
            fullWidth
            sx={{
                padding: "12px",
                backgroundColor: "#007bff",
                color: "white",
                borderRadius: "5px",
                fontSize: "14px",
                marginTop: "15px",
                textAlign: "center",
                transition: "background-color 0.3s ease",
                textDecoration: "none",
                '&:hover': {
                    backgroundColor: "#007bff",
                },
            }}
            {...rest}
        >
            {label}
        </Button>
    );
}

export default AuthButton;