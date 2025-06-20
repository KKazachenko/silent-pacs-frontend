import { useState, useEffect } from "react";
import { Box, Grid, Typography, } from "@mui/material";
import Header from "../components/Header.tsx";


function ProfilePage() {
    const [user, setUser] = useState(null);

    const fetchProfile = async () => {
        let accessToken = localStorage.getItem("accessToken");


        const response = await fetch('/users/profile', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if(response.status == 401) {
            const newAccessToken = await refreshAccessToken();

            if(!newAccessToken) {
                console.error("Invalid data. Login again");
                return;
            }

            const retryRes = await fetch('/users/profile', {
                headers: {
                    Authorization: `Bearer ${newAccessToken}`,
                },
            });

            if(retryRes) {
                const data = await retryRes.json();
                setUser(data);
            }
            else {
                console.error("Still unauthorized after refresh");
            }
        }
        else if(response.ok) {
            const data = await response.json();
            setUser(data);
        }
        else {
            console.error("Failed to fetch user profile:", response.status);
        }
    };

    const refreshAccessToken = async (): Promise<string | null> => {
        const refreshToken = localStorage.getItem("refreshToken");

        try {
            const res = await fetch("/users/token/refresh/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ refresh: refreshToken }),
            });

            if (!res.ok)
                return null;

            const data = await res.json();
            localStorage.setItem("accessToken", data.access);
            return data.access;
        }
        catch (err) {
            console.error("Refresh token error:", err);
            return null;
        }
    };

      useEffect(() => {
        fetchProfile();
    }, []);

    if(!user)
        return (
            <>
            <Header />
            <Typography variant="h3" component="h1" className="title">Loading...</Typography>
            </>
        );



    return (
        <>
        <Header />
        <Box className="profile-info-container">
            <Grid container spacing={2} direction="column">
                <Grid item xs={12}>
                    <Typography variant="h4" classname="title">Username - {user.username}</Typography>
                    <Typography variant="h4">Name - {user.first_name}</Typography>
                    <Typography variant="h4">Surname - {user.last_name}</Typography>
                    <Typography variant="h4">Role - {user.role}</Typography>
                    <Typography variant="h4">Organization - {user.organization}</Typography>
                    <Typography variant="h4">UUID - {user.id}</Typography>
                </Grid>
            </Grid>
        </Box>
        </>
    );
}

export default ProfilePage;