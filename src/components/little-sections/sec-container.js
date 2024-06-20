import SecAboutMe from './sec-about-me';
import SecSkills from './sec-skills';
import SecContact from './sec-contact';
import SecResume from './sec-resume';

function SecContainer() {
    return (
        <>       
            <div className="row">
                <div className="col-12" id="little-sections"> 
                    <SecAboutMe/>
                    <SecSkills/>
                    <SecResume/>
                    <SecContact/>
                </div>
            </div>
        </>    

    )
};

export default SecContainer;
