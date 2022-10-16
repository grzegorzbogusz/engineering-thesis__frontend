import { ArrowBack } from "@mui/icons-material";
import { Paper, Typography, Link } from "@mui/material";
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

            <Link href="#" marginTop={2} sx={{ textDecoration: 'none'}}>                
                <ArrowBack 
                fontSize="inherit"
                sx={{
                    position: "relative",
                    bottom: "-3px"
                }}
                />

                <Typography 
                display="inline"
                variant="body2" 
                color="initial" 
                letterSpacing="1px"
                marginLeft="5px"
                >
                    Forgot password?
                </Typography>
            </Link>

        </Paper>
    );
}