import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TodoAdd from "./TodoAddComponent";
import TodoList from "./TodoListComponent";

export default function UserHome() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography>
                            <TodoAdd />
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <TodoList />
        </div>


    )
}