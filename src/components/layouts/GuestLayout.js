import { Grid } from "@mui/material";

export default function GuestLayout({ children }) 
{
    return (
        <Grid
        container
        height="100vh"
        alignItems={"center"}
        justifyContent={"center"}
        alignContent={"center"}
        >
            { children }
        </Grid>
    );
}