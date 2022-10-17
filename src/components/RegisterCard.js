import { Paper, Typography, Grid, Link } from "@mui/material";
import RegisterForm from "./RegisterForm";

export default function RegisterCard()
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
                Register 
            </Typography>

            <RegisterForm />
              
            <Grid
            container 
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            >
                <Typography variant="body2" color="#696969">
                    Already have an account?
                </Typography>
                
                <Link href="/login">       
                    <Typography 
                    display="inline"
                    variant="body2" 
                    color="initial" 
                    >
                        Log In
                    </Typography>
                </Link>
            </Grid>
        </Paper>
    );
}