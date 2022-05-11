import React,{} from 'react'
import {Routes,Route,Link} from "react-router-dom";
import Exercise1 from './Exercises/Exercise1'
import Exercise2a from './Exercises/Exercise2a'
import Exercise2b from './Exercises/Exercise2b'
import Exercise2c from './Exercises/Exercise2c'
function App(){
    return (
        <>
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to={"/"} className="navbar-brand">Exercise1</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/Exercise2a"} className="navbar-brand">Exercise2a </Link>

                        </li>
                        <li className="nav-item">
                            <Link to={"/Exercise2b"} className="navbar-brand">Exercise2b </Link>

                        </li>
                        <li className="nav-item">
                            <Link to={"/Exercise2c"} className="navbar-brand">Exercise2c</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Exercise1/>}/>
                <Route path="Exercise2a" element={<Exercise2a/>}/>
                <Route path="Exercise2b" element={<Exercise2b/>}/>
                <Route path="Exercise2c" element={<Exercise2c/>}/>
            </Routes>
        </>
    )
}
export default App;