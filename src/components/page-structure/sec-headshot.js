import headshot from '../../../src/assets/images/headshot.JPG' 

function SecHeadshot() {
    return (
        <div class="sticky-top col-lg-4  d-none d-xl-block float-start">
            <img id="headshot" src={headshot} alt="headshot of me"/>
            <h1 class="smallerheading smallerheading--stroke smallerheading--shadow">i'm tara!</h1>
        </div>
    )
};

export default SecHeadshot;
