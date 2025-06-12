import {useState} from "react";
import InputField from "./InputField";
import { Grid } from "@mui/material";

type Props = {
  username: string;
  password: string;
  onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function RegisterForm({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
}: Props) {
  return (
    <form className="form-group" onSubmit={onSubmit}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <InputField
            value={username}
            onChange={onUsernameChange}
            placeholder="Enter username"
          />
        </Grid>
        <Grid item>
          <InputField
            type="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="Enter password"
          />
        </Grid>
      </Grid>
    </form>
  );
}
