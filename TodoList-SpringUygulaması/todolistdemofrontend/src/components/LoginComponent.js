//import React from "react";
import axios from "axios";
import * as React from "react";




import { useState } from "react";
import {useNavigate} from "react-router-dom";

import TextField from '@mui/material/TextField';
import { Button, Checkbox, FormControlLabel, Grid, Link, Paper, Typography } from "@mui/material";



export default function Login() {

  const navigation = useNavigate();

  const [loginUpdate, setLoginUpdate] = useState({

    username: "",
    password: ""
  });

  const  handleLogin =async () => {

      try{
       
        //console.table(value)
        const response = await axios.post("/auth/login",loginUpdate)
        console.log(response)
        localStorage.setItem("user",JSON.stringify(response.data))
        localStorage.setItem("userId",response.data.userId)
        //history.push("/home");
        alert("şifre doğru")
        navigation("/userhome");
    }
    catch (error){
        console.log(error)
        alert("yanlıs şifre")
       // history.push("/Login");

    }


  };

  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 280,
    margin: "300px "
  }

  const btnStyle = { margin: "8px 0" }

  const textStyle = { margin: "8px 0" }

  return (
    <div className="container" >
      <Grid container spacing={5} style={{ minHeight: '100vh' }} alignItems="center" justifyContent="center">
        <Grid>
          <Paper elevation={10}
            style={paperStyle}>
            <Grid align="center">
              <h1>Kullanıcı Girişi</h1>
            </Grid>
            <TextField label="Kullanıcı Adı"

              style={textStyle}
              placeholder="Kullanıcı Adınızı Girin"
              fullWidth required
              value={loginUpdate.username}
              onChange={(e) => setLoginUpdate({ ...loginUpdate, username: e.target.value })}

            />

            <TextField label="Şifre"

              style={textStyle}
              placeholder="Şifrenizi Girin"
              type="password"
              fullWidth required 
              value={loginUpdate.password}
              onChange={(e) => setLoginUpdate({ ...loginUpdate, password: e.target.value })}
              />

            <FormControlLabel control={
              <Checkbox name="checked8"
                color="success"
              />
            } label="Beni Hatırla" />
            <Button
              style={btnStyle}
              type="submit"
              color="inherit"
              fullWidth
              variant="contained" onClick={handleLogin} > GİRİŞ YAP</Button>
            <Typography>
              <Link href="#"> Şifremi Unuttum ?</Link>
            </Typography>
          </Paper>
        </Grid>


      </Grid>








    </div>

  );
}
