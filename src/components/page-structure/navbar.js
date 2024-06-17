// import logo from './logo.svg';
// import './App.css';
// import '../App.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light shift">
            <div class="container">
                <a class="navbar-brand" href="#">home</a>
                {/* collapse button */}
                <button 
                    class="navbar-toggler navbar-toggler-right" 
                    type="button" 
                    data-toggle="collapse"
                    data-target="#navbar-content">
                    <span class="navbar-toggler-icon"></span>
                </button>
                {/*content to be collapsed */}
                <div class="collapse navbar-collapse" id="navbar-content">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link"  data-toggle="collapse" data-target="#navbar-collapse" href="#about-me-link">about me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="collapse" data-target="#navbar-collapse" href="#projects-link">projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="collapse" data-target="#navbar-collapse" href="#certifications-link">certifications</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="collapse" data-target="#navbar-collapse" href="#contact-link">contact me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" data-toggle="collapse" data-target="#navbar-collapse" href="assets/resume322021.pdf">resumé</a>
                        </li>
                    </ul>
                </div>
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
