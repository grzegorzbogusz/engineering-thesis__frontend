import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import axios from '../lib/axios';
import CriticalErrorModal from "../components/modals/CriticalErrorModal";
import FormError from "../components/FormError";

export default function ForgotPasswordForm()
{
    const [email, setEmail] = useState();
    const [errors, setErrors] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = { email: event.target.email.value };

        axios.post('/forgot-password', data)
            .catch(err => {
                if(err.response?.status === 422) {                    
                    setErrors({
                        email: err.response.data.errors.email,
                    });
                } else {
                    setOpenModal(true);
                }
            });
    }
    
    return (
        <>
            <form onSubmit={handleSubmit} style={{ width: "100%", margin: "0 0 10px" }}>

                <TextField
                id="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.value)}
                fullWidth
                required
                margin="normal"
                inputProps={{ maxLength: 255 }}
                />

                { errors.email && (<FormError errors={errors.email} />) }

                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                endIcon={<SendIcon/>}
                sx={{ marginTop: "7px", height: "40px" }}
                >
                    Send
                </Button>
                
            </form>

            <CriticalErrorModal openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
}