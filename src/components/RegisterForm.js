import { Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from '../lib/axios';
import FormError from './FormError';
import CriticalErrorModal from './modals/CriticalErrorModal';

export default function RegisterForm()
{    
    const router = useRouter();

    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();
    const [errors, setErrors] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            email: event.target.email.value,
            name: event.target.username.value,
            password: event.target.password.value,
            password_confirmation: event.target.passwordConfirmation.value
        };

        axios.post('/register', data)
            .then(() => router.push('/login'))
            .catch(err => {
                if(err.response?.status === 422) {
                    setErrors({
                        email: err.response.data.errors.email,
                        username: err.response.data.errors.name,
                        password: err.response.data.errors.password
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
                id="username"
                type={"username"}
                label="Username"
                value={username} 
                onChange={(e) => setUsername(e.value)}
                error={ errors.username ? true : false }
                variant="outlined"
                fullWidth
                required
                margin="normal"
                inputProps={{ maxLength: 20, minLength: 4 }}
                />

                { errors.username && (<FormError errors={errors.username} />) }

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
                    Sign up
                </Button>
            </form>

            <CriticalErrorModal openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
}