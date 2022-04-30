import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState} from "react";

export default function TodoAdd() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [TodoUpdateAt, setUpdatedAt] = useState({
    content: ""

});

  const Todoadd=() => {

        const userId = localStorage.getItem("userId")
        axios.post("/users/"+userId+"/todos",TodoUpdateAt).then(response=>response.data)
        alert("Todo Ekleme Başarılı")
        window.location.reload();
  }

  return (
    <div>
      <Button variant="inherit" onClick={handleClickOpen}>
        Todo Ekle
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Todo Ekle</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Yapılması gerekenler listene birşeyler Ekle
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Açıklama"
            type="text"
            fullWidth
            variant="standard"
            value={TodoUpdateAt.content}
            onChange={(e) => setUpdatedAt({ ...TodoUpdateAt, content: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Vazgeç</Button>
          <Button onClick={Todoadd}>Ekle</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}