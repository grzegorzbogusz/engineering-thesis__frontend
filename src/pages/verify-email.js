import { useState } from 'react';
import GuestLayout from '../components/layouts/GuestLayout';
import EmailVerifiedModal from '../components/modals/EmailVerifiedModal';

export default function VerifiedEmail()
{
    const [openModal, setOpenModal] = useState(true);
    
    return(
        <GuestLayout>
            <EmailVerifiedModal openModal={openModal} setOpenModal={setOpenModal} />
        </GuestLayout>
    );
}