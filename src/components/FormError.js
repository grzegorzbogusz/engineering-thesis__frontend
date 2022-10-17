import { Circle } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function FormError({ errors })
{
    return (
        <Typography 
        variant="body2" 
        color="error"  
        marginBottom="15px"
        width="100%"
        fontSize="0.9rem"
        letterSpacing="0"
        >
            { errors.map((error, index) => ( 
                <span key={index} style={{ display: "block" }}>
    
                    <Circle 
                    sx={{ 
                    position: "relative", 
                    bottom: "1px", 
                    fontSize: "0.5em", 
                    marginX: "5px" 
                    }}/>
                    
                    { error }

                </span>
            ))}
        </Typography>
    );
}