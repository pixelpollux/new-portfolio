function SecContact() {
    return (
        <div class="section-group" id="contact-link">
            <div className="section-links">
                contact section
            </div>
            
            <section id="contact-me">
                <h2>Contact me!</h2>
                <div id="socials" >
                    
                    <div id="iconbox" class="flex-container d-none d-lg-block">
                        <a href="https://github.com/qualmless">
                            <i class="flex-item fa fa-github fa-4x icon-3d"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/tarajdunmore/">
                            <i class="flex-item fa fa-linkedin fa-4x icon-3d"></i>
                        </a>
                        <a href="mailto:me@taradunmore.com">
                            <i class="flex-item far fa-envelope-open fa-4x icon-3d"></i>
                        </a>
                    </div>

                    <div class="d-block d-lg-none">
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/tarajdunmore/" target="_blank">
                                    <button class="btn button_slide slide_right">
                                        <i class="fab fa-linkedin"></i> LinkedIn
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/qualmless" target="_blank">
                                    <button class="btn button_slide slide_right">
                                        <i class="fab fa-github"></i> GitHub
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:me@taradunmore.com" target="_blank">
                                    <button class="btn button_slide slide_right">
                                        <i class="far fa-envelope"></i> Email
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    )
};

export default SecContact;
