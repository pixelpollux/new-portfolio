// import logo from './logo.svg';
// import './App.css';
// import '../App.css'
import React, {useState} from 'react';

function Navbar() {

    const [isOpen, setIsOpen] = useState(true);

    function handleButton(){
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light shift">
            <div className="container">
                <a className="navbar-brand" href="#" onClick={handleButton}>home</a>
                <button 
                    onClick={handleButton}
                    className="navbar-toggler dropdown-button navbar-toggler-right" 
                    type="button" 
                    data-toggle=""
                    data-target="">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                {isOpen &&
                    <div className={`navbar-collapse ${handleButton ? " " : " "}`} id="navbar-content">
                        <ul className="navbar-nav">
                            <li className={`nav-item ${handleButton ? " " : ""}`} onClick={handleButton}>
                                <a className="nav-link"  data-toggle=""  href="#about-me-link">about me</a>
                            </li>
                            <li className="nav-item" onClick={handleButton}>
                                <a className="nav-link" data-toggle="collapse" data-target="#navbar-collapse" href="#projects-link">projects</a>
                            </li>
                            <li className="nav-item" onClick={handleButton}>
                                <a className="nav-link" data-toggle="collapse" data-target="#navbar-collapse" href="#certifications-link">certifications</a>
                            </li>
                            <li className="nav-item" onClick={handleButton}>
                                <a className="nav-link" data-toggle="collapse" data-target="#navbar-collapse" href="#contact-link">contact me</a>
                            </li>
                            <li className="nav-item" onClick={handleButton}>
                                <a className="nav-link" target="_blank" data-toggle="collapse" data-target="#navbar-collapse" href="assets/resume322021.pdf">resumé</a>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </nav>  
    );
}
    // <div className="Navbar">
    //     <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         >
    //         Learn React
    //         </a>
    //     </header
    // </div>


export default Navbar;