import React from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { useState} from "react";

import TextField from '@mui/material/TextField';
import {Button, Grid, Paper } from "@mui/material";



export default function Register() {

    const navigation = useNavigate();
    const [userUpdatedAt, setUpdatedAt] = useState({

        username: "",
        password: ""

    });



    const handleRegister = async () => {

        try {

            //console.table(value)
            const response = await axios.post("/auth/register", userUpdatedAt)
            console.log(response)
            localStorage.setItem("user", JSON.stringify(response.data))
           
            alert("Kayıt başarılı")
            navigation("/login");
        }
        catch (error) {
            console.log(error)
            alert("Kayıt başarısız")
            // history.push("/Login");

        }


    };



    const paperStyle = {
        padding: 20,
        height: "35vh",
        width: 280,
        margin: "300px auto",
        
    }

    const btnStyle = { margin: "8px 0" }

    const textStyle = { margin: "8px 0" }

    return (
        <div className="container" >


            <Grid>
                <Paper elevation={10}
                    style={paperStyle}>
                    <Grid align="center">
                        <h1> Kullanıcı Kayıt</h1>
                    </Grid>
                    <TextField label="Kullanıcı Adınızı Girin"
                        style={textStyle}
                        placeholder="Kullanıcı Adınızı Girin"
                        fullWidth required
                        value={userUpdatedAt.username}
                        onChange={(e) => setUpdatedAt({ ...userUpdatedAt, username: e.target.value })}
                    />


                    <TextField label="Şifrenizi Girin"
                        style={textStyle}
                        placeholder="Şifrenizi Girin"
                        type="password"
                        fullWidth required
                        value={userUpdatedAt.password}
                        onChange={(e) => setUpdatedAt({ ...userUpdatedAt, password: e.target.value })}
                    />

                    <Button
                        style={btnStyle}
                        type="submit"
                        color="inherit"
                        fullWidth
                        variant="contained"
                        onClick={handleRegister}> Kayıt Ol</Button>


                </Paper>




            </Grid>
        </div>

    );
}
