import { Card } from "@mui/material";

export default function LoginCard({ logo, children }) {
    return (
        <div className="">
            <div>{ logo }</div>

            <Card>
                { children }
            </Card>
        </div>
    );
}