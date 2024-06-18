import React from 'react';
// import ReactDOM, { createRoot } from 'react-dom/client';

// function clickHideButton({xClass}) {
//     var x = document.getElementById(xClass).style.display;
//     if (x === "none") {
//       x = "block";
//     } else {
//       x = "none";
//     }
//     console.log("hi");
//     return x;
// };


const domNode = document.createElement('div');
const resRoot = createRoot(domNode);
// const resRoot = createRoot(document.getElementById('secResume'));
// const resRoot = ReactDOM.createRoot(document.getElementById('secResume'));
resRoot.render( <SecResume/>);
function SecResume() {
    return (    
        <div className="section-group" id="resume-link">
            <div className="section-links">
                resume section
            </div>
            <section id="resume-section">
                <h2>Resumé</h2>
                <p>
                    Here i'll put my resume shortly.
                </p> 
                <button className="btn button_slide slide_right">
                    Extended Bio
                </button>
                <div id="extended-bio" className="hide">
                    <p>
                        My tech obsession started early, cementing itself when I got my first computer at the age of seven. Without internet access, I instead used it to practice HTML from a tattered secondhand guidebook. I built myself a basic diary with guaranteed privacy since no one else in my house had any idea how to use the computer. I did it for fun; I didn’t know it was possible that these skills could be a career.
                    </p>
                </div>
            </section>
        </div>
    );
};


// const domNode = document.getElementById('root');
// const root = createRoot(domNode);
// root.render(<SecResume/>);
console.log(document.getElementById('resRoot'));

export default SecResume;
