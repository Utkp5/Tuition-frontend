import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Admission_letter from "./Components/Admission_letter";
import Login_register from "./Components/Login_register";

function App() {

  return (
    <Router>
         <Routes>
             <Route exact path="/" element={<Home />} />
             <Route exact path="/About" element={<About />} />
             <Route exact path="/Contact" element={<Contact />} />
             <Route exact path="/Admission_letter" element={<Admission_letter />} />
             <Route exact path="/Login_register" element={<Login_register />} />
         </Routes>
    </Router>
  )
}

export default App
