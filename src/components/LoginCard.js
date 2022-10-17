import { Paper, Typography, Link, Grid } from "@mui/material";
import LoginForm from "./LoginForm";

export default function LoginCard() 
{
    return (
        <Paper elevation={10} sx={{
            padding: "50px 40px",
            maxWidth: "400px",
            maxHeight: "800px",
            borderRadius: "7px",
            flexGrow: "1"
        }}>
            <Typography 
            variant="h1" 
            color="#303030"
            fontSize="2.5rem"
            fontWeight="bold"
            fontFamily="Segoe UI"
            textAlign="center"
            > 
                Login 
            </Typography>
            
            <LoginForm />

            <Grid 
            container 
            justifyContent="space-between"
            alignItems="center"
            position={"relative"}
            top={"-20px"}
            rowGap="5px"
            >
                <Link href="#">
                    <Typography 
                    display="inline"
                    variant="body2" 
                    color="initial"
                    >
                        Forgot password?
                    </Typography>
                </Link>

                <Link href="/register">       
                    <Typography 
                    display="inline"
                    variant="body2" 
                    color="initial" 
                    >
                        Sign Up
                    </Typography>
                </Link>
            </Grid>
        </Paper>
    );
}