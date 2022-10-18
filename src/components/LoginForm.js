import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import CriticalErrorModal from "./modals/CriticalErrorModal";
import FormError from "./FormError";
import axios from "../lib/axios";

export default function LoginForm()
{
    const router = useRouter();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        axios.post('/login', data)
            .then(res => res.data.Bearer)
            .then(token => {
                sessionStorage.setItem('token', token);
                router.push('/');
            })
            .catch(err => {
                if(err.response?.status === 422) {                    
                    setErrors({
                        email: err.response.data.email,
                        password: err.response.data.password
                    });
                } else {
                    setOpenModal(true);
                }
            });
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{ width: "100%", margin: "30px 0" }}>

                <TextField
                id="email"
                type={"email"}
                label="Email"
                value={email} 
                onChange={(e) => setEmail(e.value)}
                error={ errors.email ? true : false }
                variant="outlined"
                fullWidth
                required
                margin="normal"
                inputProps={{ maxLength: 255 }}
                />

                { errors.email && (<FormError errors={errors.email} />) }

                <TextField 
                id="password" 
                label="Password"
                type={"password"}
                value={password} 
                onChange={(e) => setPassword(e.value)}
                error={ errors.password ? true : false }
                variant="outlined"
                fullWidth
                required
                sx={{ marginY: "8px"}}
                />

                { errors.password && (<FormError errors={errors.password} />) }
                
                <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                fullWidth
                sx={{ marginTop: "40px", height: "40px" }}
                >
                    Log in
                </Button>
            </form>

            <CriticalErrorModal openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
}