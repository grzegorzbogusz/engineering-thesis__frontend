import { Grid } from "@mui/material";

export default function LoginLayout({ children }) 
{
    return (
        <Grid
        container
        height="100vh"
        alignItems={"center"}
        justifyContent={"center"}
        alignContent={"center"}
        sx={{
            backgroundImage: "url(/background.png)",
            backgroundRepeat: "repeat",
            backgroundColor: "#A57A2A",
            backgroundPosition: "-10px 50px"
        }}
        >
            { children }
        </Grid>
    );
}