import { useRouter } from "next/router";
import GuestLayout from "../../components/layouts/GuestLayout";
import PasswordResetCard from "../../components/PasswordResetCard";

export default function Token()
{
    const router = useRouter();

    const email = router.query?.email;
    const token = router.query?.token;

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <GuestLayout>
            <PasswordResetCard/>
        </GuestLayout>
    );
}