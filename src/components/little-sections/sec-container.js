import SecAboutMe from './sec-about-me';
import SecSkills from './sec-skills';
import SecContact from './sec-contact';

function SecContainer() {
    return (
        <>       
            <div class="row">
                <div class="col-12" id="little-sections"> 
                    <SecAboutMe/>
                    <SecSkills/>
                    <SecContact/>
                </div>
            </div>
        </>    

    )
};

export default SecContainer;
