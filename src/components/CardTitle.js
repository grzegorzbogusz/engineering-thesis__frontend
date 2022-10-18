import { Typography } from "@mui/material";

export default function CardTitle({ title })
{
    return (
        <Typography
        variant="h1" 
        color="#303030"
        fontSize="2.5rem"
        fontWeight="bold"
        fontFamily="Segoe UI"
        textAlign="center"
        >
            { title }
        </Typography>
    );
}