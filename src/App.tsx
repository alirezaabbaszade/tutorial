import React from 'react';
import {Navbar} from "./components/Navbar";
import {Container} from "react-bootstrap";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";

function App() {
    return (
        <>
        <Navbar/>
        <Container className="mb-4">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/store" element={<Store/>}/>
            </Routes>
        </Container>
        </>
    );
}

export default App;
