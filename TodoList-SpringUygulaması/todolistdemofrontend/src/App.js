import React from 'react';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Nav from "./components/NavComponent";
import Home from "./components/HomeComponent";
import Login from "./components/LoginComponent";
import Register from "./components/RegisterComponent";
import UserHome from "./components/UserHomeComponent";

function App() {
    return (
      <BrowserRouter>
        <Nav/>
        <br/><br/><br/>
        <Routes>
              <Route exact path='/' element={<Home/>}>
              </Route>
              <Route exact path='/login'element={<Login/>}>
              </Route>
              <Route exact path='/register' element={<Register/>}>
              </Route>
              <Route exact path='/userhome' element={<UserHome/>}>
              </Route>
        </Routes>
      </BrowserRouter>
    );
  }

export default App;
