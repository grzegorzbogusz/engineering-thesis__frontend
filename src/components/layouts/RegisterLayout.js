import Grid from '@mui/material/Grid'
export default function RegisterLayout({ children })
{
    return (
        <Grid
        container
        height="100vh"
        justifyContent={"center"}
        alignItems={"center"}
        alignContent={"center"}
        >
            { children }
        </Grid>
    );
}