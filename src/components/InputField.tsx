import TextField from "@mui/material/TextField";

type InputFieldProps = {
    value: string;
    type?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputField({
    value,
    type = "text",
    placeholder,
    onChange,
}: InputFieldProps) {
    return (
        <TextField
            size="small"
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            variant="outlined"
            fullWidth
            margin="normal"
            />
    );
}

export default InputField;