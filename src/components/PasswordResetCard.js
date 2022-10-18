import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardTitle from "./CardTitle";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ResetPasswordForm from "./ResetPasswordForm";

export default function PasswordResetCard()
{
    return (
        <Paper elevation={10} sx={{
        padding: "50px 40px",
        maxWidth: "410px",
        maxHeight: "800px",
        flexGrow: "1"
        }}>
            <CardTitle title={"Reset password"}/>

            <ResetPasswordForm/>

            <Link href="/login">
                <ArrowBack
                fontSize="inherit"
                color="primary"
                sx={{ 
                    position: "relative", 
                    top: "2px"
                }}/>

                <Typography 
                variant="body2" 
                color="initial"
                marginLeft="5px"
                display="inline"
                >
                    Go Back
                </Typography>
            </Link>
        </Paper>
    );
}