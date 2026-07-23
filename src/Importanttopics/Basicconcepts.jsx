import React from 'react'
import { useState } from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Header from './Pages/Header';

import { Routes, Route } from 'react-router-dom';
export default function Basicconcepts() {
    const [theme, setTheme] = useState(false);

    const [applicant, setApplicant] = useState(10);


    return (
        <div>
            <section>
                <h4>Basicconcepts</h4>
                <div style={{
                    background: theme ? "blue" : "black",
                    color: theme ? "red" : "#fff",
                    padding: "60px 50px",
                    transition: "all .5s ease-in-out"
                }}>
                    <h1>hello world</h1>

                    <button onClick={() => setTheme(!theme)}>Change my Theme</button>



                </div>

                <div>
                    <p>Application :  <strong> {applicant} </strong> </p>
                </div>

                <button style={{
                    padding: "10px 20px",
                    margin: "10px",
                    borderRadius: "10px",
                    backgroundColor: theme ? "green" : "blue",
                    color: "#fff",
                    border: "none"
                }}

                    onClick={() => setApplicant(applicant + 1)}>
                    {
                        theme ? "Applied" : " Apply"
                    }
                </button>
            </section>
            <section>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </section>
        </div>
    )
}
