import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from "@mui/material";

export default function EmailVerifiedModal({ open, setOpen })
{
    return (
        <Dialog open={open} aria-labelledby={"Email verified"}>
          <DialogTitle id={"emailVerified"}>
            <Typography 
            variant="h6" 
            color="#303030"
            fontFamily="Segoe UI"
            fontWeight={"bold"}
            >
                Email verified!
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText maxWidth="400px">
                Email successfully verified
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ display: "flex", justifyContent: "center"}}>
            <Button
              onClick={() => setOpen(false)}
              color="primary"
              variant="outlined"
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
    );
}