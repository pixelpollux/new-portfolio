import headshot from '../../../src/assets/images/headshot.JPG';

function HiHeader() {
    return (
        <div class="hi-header">

            <h1 class="heading heading--stroke heading--shadow">hi!</h1>
            <div class="d-block d-xl-none">
                <img class="d-block col-lg-4 col-12" id="smallerheadshot" src={headshot} alt="headshot of me"/>
                <h2 class="d-block d-xl-none tinyheading ">i'm tara!</h2>
            </div>

            <div class="d-none d-xl-block arrows"></div>
        </div>
    )
};

export default HiHeader;
