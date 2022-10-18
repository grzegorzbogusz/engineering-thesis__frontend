import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from "@mui/material";

export default function CriticalErrorModal({ openModal, setOpenModal })
{
    return (
        <Dialog open={openModal} aria-labelledby={"Critical error"}>
          <DialogTitle id={"criticalError"}>
            <Typography 
            variant="h6" 
            color="#303030"
            fontFamily="Segoe UI"
            fontWeight={"bold"}
            >
                Whoops!
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText maxWidth="400px">
                <span> Something went wrong! </span>
                <span> Please try again later... </span>
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ display: "flex", justifyContent: "center"}}>
            <Button
              onClick={() => setOpenModal(false)}
              color="primary"
              variant="outlined"
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
    );
}