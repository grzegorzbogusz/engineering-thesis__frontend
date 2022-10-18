import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "../lib/axios";
import FormError from "./FormError";
import CriticalErrorModal from "./modals/CriticalErrorModal";

export default function ResetPasswordForm()
{
    const router = useRouter();

    const email = router.query?.email;
    const token = router.query?.token;

    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();
    
    const [errors, setErrors] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            email: email,
            token: token,
            password: event.target.password.value,
            password_confirmation: event.target.passwordConfirmation.value
        };

        axios.post('/reset-password', data)
            .then(() => router.push('/'))
            .catch(err => {
                if(err.response?.status === 422) {
                    setErrors({ 
                        email: err.response.data.errors.email,
                        password: err.response.data.errors.password
                    })
                } else {
                    setOpenModal(true);
                }
            });
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{ width: "100%", margin: "30px 0 10px" }}>
                <TextField
                id="email"
                label="Email"
                defaultValue={email}
                fullWidth
                required
                margin="normal"
                disabled
                InputLabelProps={{ shrink: true }}
                />

                { errors.email && (<FormError errors={errors.email} />) }

                <TextField
                id="password"
                type={"password"}
                label="Password"
                value={password} 
                onChange={(e) => setPassword(e.value)}
                error={ errors.password ? true : false }
                variant="outlined"
                fullWidth
                required
                margin="normal"
                inputProps={{ minLength: 8 }}
                />

                { errors.password && (<FormError errors={errors.password} />) }

                <TextField
                id="passwordConfirmation"
                type={"password"}
                label="Password confirmation"
                value={passwordConfirmation} 
                onChange={(e) => setPasswordConfirmation(e.value)}
                error={ errors.password ? true : false }
                variant="outlined"
                fullWidth
                required
                margin="normal"
                inputProps={{ minLength: 8 }}
                />

                <Button
                type="submit" 
                variant="contained" 
                color="primary"
                fullWidth
                sx={{ marginTop: "40px", height: "40px" }}
                >
                    Reset
                </Button>
            </form>

            <CriticalErrorModal openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
}