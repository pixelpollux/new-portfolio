import React, {useState} from 'react';

export default function SecResume() {
    const [isVisible, setIsVisible] = useState(false);

    function handleButton(){
        setIsVisible(!isVisible);
    };

    return (    
        <div className="section-group" id="resume-link">
            <div className="section-links">
                resume section
            </div>
            <section id="resume-section">
                <h2>Résumé</h2>
                {/* <p>
                    Here i'll put my resume shortly.
                </p>  */}
                <button onClick={handleButton} className="btn button_slide slide_right">
                    {isVisible ? 'Hide résumé' : 'Show résumé'}
                </button>
                {isVisible &&
                    <div id="extended-bio" className="">
                        <p>
                            Résumé
                        </p>
                    </div>
                }
            </section>
        </div>
    );
};
