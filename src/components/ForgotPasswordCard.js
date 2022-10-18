import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import CardTitle from '../components/CardTitle';
import { Link } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

export default function ForgotPasswordCard()
{
    return (
        <Paper elevation={10} sx={{
        padding: "50px 40px",
        maxWidth: "410px",
        maxHeight: "800px",
        flexGrow: "1"
        }}>
            <CardTitle title={"Forgot password?"}/>
            
            <Typography 
            margin="30px 0 5px"
            paddingRight="5px"
            fontSize={"1.1rem"}
            color="GrayText"
            >
                We will send reset password link to given email:
            </Typography>

            <ForgotPasswordForm/>

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