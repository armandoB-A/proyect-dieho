import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Principal} from "./Components/Principal";
import {Inicio} from "./Components/Inicio";
import {Info} from "./Components/Info";
import {DatosProd} from "./Components/DatosProd";
import {InfoCards} from "./Components/InfoCards";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div><Principal/></div>}>
                    <Route path="inicio"
                           element={<div><Inicio
                           /></div>}/>

                    <Route path="datos"
                           element={<div><DatosProd
                           /></div>}/>

                    <Route path="ususarios"
                           element={<div><InfoCards
                           /></div>}/>

                    <Route path="informacion"
                           element={<div><Info
                           /></div>}/>
                </Route>
            </Routes>
        </Router>);
}

export default App;
