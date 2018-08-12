import React from 'react';
import {render} from 'react-dom';
import {smoothScroll} from './commoncomponent/helper.js'

var keyPressCount = 0;
class App extends React.Component {


    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);

        this.arrowFunction = this.arrowFunction.bind(this);
        this.state = {
            Email: '',
            EmailErrorMessage: false,
            MobileNo: '',
            MobileErrorMessage: false,
            Content: '',
            contactEmail: "",
            showContactLoader: false,
            ContentErrorMessage: false,
            loader: false,
            currentTab: '',
            selectedTab: ''
        };

    }

    arrowFunction(event) {
        if (event.keyCode === 39) {
            //Do whatever when esc is pressed
        }
    }

    handleScroll(event) {
        let scrollerTop = event.target.scrollTop;
        let scrollerBottom = scrollerTop + 50;

        let aboutOffsetTop = document.querySelector("#about").offsetTop - 50;
        let aboutBottom = aboutOffsetTop + document.querySelector("#about").clientHeight;

        let servicesOffsetTop = document.querySelector("#services").offsetTop - 50;
        let servicesBottom = servicesOffsetTop + document.querySelector("#services").clientHeight;

        let contactOffsetTop = document.querySelector("#contact").offsetTop - 50;
        let contactBottom = contactOffsetTop + document.querySelector("#contact").clientHeight;

        let isSet = false;
        if (scrollerBottom >= aboutOffsetTop && scrollerBottom <= aboutBottom) {
            this.setState({currentTab: ""})
            if (document.querySelectorAll(".header-options-span").length > 0) {
                document.querySelectorAll(".header-options-span").forEach((ele) => {
                    ele.classList.remove("tab-color");
                })
            }
            isSet = true;
            document.querySelector("#option-about").classList.add("tab-color");
        }
        if (scrollerBottom >= servicesOffsetTop && scrollerBottom <= servicesBottom) {
            this.setState({currentTab: ""})
            if (document.querySelectorAll(".header-options-span").length > 0) {
                document.querySelectorAll(".header-options-span").forEach((ele) => {
                    ele.classList.remove("tab-color");
                })
            }
            isSet = true;
            document.querySelector("#option-services").classList.add("tab-color");

        }

        if (scrollerBottom >= contactOffsetTop && scrollerBottom <= contactBottom) {
            this.setState({currentTab: ""})
            if (document.querySelectorAll(".header-options-span").length > 0) {
                document.querySelectorAll(".header-options-span").forEach((ele) => {
                    ele.classList.remove("tab-color");
                })
            }
            isSet = true;
            document.querySelector("#option-contact").classList.add("tab-color");

        }

        if (!isSet) {
            if (document.querySelectorAll(".header-options-span").length > 0) {
                document.querySelectorAll(".header-options-span").forEach((ele) => {
                    ele.classList.remove("tab-color");
                })
            }
            isSet = false;
        }
    }

    componentWillUnmount() {
        document.querySelector("body").removeEventListener("scroll", this.handleScroll);
    };

    componentDidMount() {


        // let p = document.getElementById("video-container");
        //   let q = p.offsetWidth;
        //     this.movea(q);


        document.addEventListener("keydown", function (e) {

            if (e.which == 39) {
                keyPressCount++;
                if (keyPressCount > 2) {
                    keyPressCount = 0;
                }
                document.getElementById("particles-js").style.left = (keyPressCount * -100) + "vw";
                document.getElementById("myH2").style.left = (keyPressCount * -100) + "vw";
                document.getElementById("myH3").style.left = (keyPressCount * -100) + "vw";
            }

            if (e.which == 37) {

                keyPressCount--;
                if (keyPressCount < 0) {
                    keyPressCount = 0;
                }
                document.getElementById("myH2").style.left = (keyPressCount * -100) + "vw";
                document.getElementById("myH3").style.left = (keyPressCount * -100) + "vw";
                document.getElementById("particles-js").style.left = (keyPressCount * -100) + "vw";
                ;

            }
        });

        document.getElementsByTagName("body")[0].addEventListener("scroll", function () {
            var elmnt = document.getElementsByTagName("body")[0];
            var y = elmnt.scrollTop;
            console.log(y);
            if (y >= 585) {

                document.getElementById("myHeader").classList.add("header-background");
                document.getElementById("myHeaderSpan").classList.add("header-span-background");
                document.getElementById("myHeaderSpan1").classList.add("header-span-background");
                document.getElementById("mySpan").classList.add("lin-height-100");
                document.getElementById("mySpan1").classList.add("lin-height-100");
                document.getElementById("mySpan2").classList.add("lin-height-100");
                document.getElementById("mySpan3").classList.add("lin-height-100");
            } else {
                document.getElementById("myHeader").classList.remove("header-background");
                document.getElementById("myHeaderSpan").classList.remove("header-span-background");
                document.getElementById("myHeaderSpan1").classList.remove("header-span-background");
                document.getElementById("mySpan").classList.remove("lin-height-100");
                document.getElementById("mySpan1").classList.remove("lin-height-100");
                document.getElementById("mySpan2").classList.remove("lin-height-100");
                document.getElementById("mySpan3").classList.remove("lin-height-100");
            }

        });

    }

    show() {

        document.getElementById("to").classList.toggle("drp-view");


    }


    movea() {
        document.getElementById("particles-js").style.left = "0";
        document.getElementById("myH2").style.left = 100 + "vw";
        document.getElementById("myH3").style.left = 100 + "vw";
        document.getElementById("nu1").classList.add("yellow-border");
        document.getElementById("header").classList.remove("show-h5");
        document.getElementById("page").classList.remove("show-p");
        document.getElementById("nu2").classList.remove("yellow-border");
        document.getElementById("nu3").classList.remove("yellow-border");
        document.getElementById("header").classList.add("h5-transition");
        document.getElementById("page").classList.add("p-transition");
        setTimeout(function () {
            document.getElementById("header").classList.remove("h5-transition");
            document.getElementById("page").classList.remove("p-transition");
        }, 2000);
    }

    moved() {
        document.getElementById("particles-js").style.left = "0";
        document.getElementById("myH2").style.left = "0";
    }

    movec() {
        document.getElementById("particles-js").style.left = -100 + "vw";
        document.getElementById("myH2").style.left = -100 + "vw";
        document.getElementById("myH3").style.left = -100 + "vw";
        document.getElementById("nu2").classList.add("yellow-border");
        document.getElementById("nu1").classList.remove("yellow-border");
        document.getElementById("nu3").classList.remove("yellow-border");
        document.getElementById("header1").classList.add("h5-transition");
        document.getElementById("page1").classList.add("p-transition");
        document.getElementById("animate-div").classList.add("div-transition");
        setTimeout(function () {
            document.getElementById("header1").classList.remove("h5-transition");
            document.getElementById("page1").classList.remove("p-transition");
            document.getElementById("animate-div").classList.remove("div-transition");
        }, 3000);
    }

    moveb() {
        document.getElementById("particles-js").style.left = -200 + "vw";
        document.getElementById("myH2").style.left = -200 + "vw";
        document.getElementById("myH3").style.left = -200 + "vw";
        document.getElementById("nu3").classList.add("yellow-border");
        document.getElementById("nu2").classList.remove("yellow-border");
        document.getElementById("nu1").classList.remove("yellow-border");
        document.getElementById("header2").classList.add("h5-transition");
        document.getElementById("animate-div1").classList.add("div-transition");
        setTimeout(function () {
            document.getElementById("header2").classList.remove("h5-transition");
            document.getElementById("animate-div1").classList.remove("div-transition");
        }, 3000);
    };



    goToElement(event, id, offset, applySmoothScroll) {
        applySmoothScroll && smoothScroll(id, offset);
        this.setState({selectedTab: id})

    }


    // function headerPages(page) {
    //     // window.location  = '/'+page
    // }
    render() {
        return (
            <div >

                <section id="video-container" className="introduction-video">
                    {/*<video className="intro-video" autoPlay loop>*/}
                    {/*<source src="./assets/flower.mp4" type="video/mp4"/>*/}
                    {/*</video>*/}
                    <i className="fa fa-bars cate" onClick={() => this.show()}></i>
                    <div className="video-overlay">
                        <div className="introduction-text" id="particles-js">
                            <div className="text-div">
                                <h5 id="header" className="text-div-h5 show-h5">HELLO!!!</h5>
                                <p id="page" className="text-div-p show-p">WE ARE WHERE TECHNOLOGY MEETS INOVATION</p>

                            </div>

                            <div className="arrow">
                                <a onClick={() => this.movec()}><i class="fa fa-angle-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="introduction-text" id="myH2">
                            <video autoPlay loop>
                                <source src="assets/pinkal_video.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            <div className="text-div1">
                                <div className="we-pro-div">
                                    <h5 id="header1" className="text-div-h5">WE PROVIDE</h5>
                                    <p id="page1" className="">ALL THAT YOU NEED FOR YOUR BUSINESS</p>
                                    <div className="div-align" id="animate-div">
                                        <section><i class="fa fa-check" aria-hidden="true"></i><span>Designing</span>
                                        </section>
                                        <section><i class="fa fa-check" aria-hidden="true"></i><span>Development</span>
                                        </section>
                                        <section><i class="fa fa-check"
                                                    aria-hidden="true"></i><span>Digital Marketing</span></section>
                                    </div>
                                </div>
                            </div>
                            <div className="arrow">
                                <a onClick={() => this.moveb()}><i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                <a onClick={() => this.moved()}><i class="fa fa-angle-left" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="introduction-text third-background" id="myH3">
                            <div className="text-div1">
                                <div className="third-text-div">
                                    <h5 id="header2" className="third-text-div-h5">POWERED BY YOUTH DRIVEN BY
                                        TECHNOLOGY</h5>
                                    <div className="div-align" id="animate-div1">
                                        <section>LETS <span> CO</span>DREAM</section>
                                        <section>LETS <span> CO</span>THINK</section>
                                        <section>LETS <span> CO</span>CREATE</section>
                                        <section>LETS <span> CO</span>GROW</section>
                                    </div>
                                </div>
                                <div className="arrow">
                                    <a></a>
                                    <a onClick={() => this.movec()}><i class="fa fa-angle-left " aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <svg version="1.1" id="Layer_1" className="ft-logo mobile-svg" x="0px" y="0px"
                         viewBox="0 0 400 400">
                        <g>
                            <path class="st0" d="M206.5,33.5c-107,0-166,81.3-166,168s70.3,157,157,157s165-77.3,165-164S293.2,33.5,206.5,33.5z M205.5,346.5
                                                c-84.4,0-157-74.6-157-159s66.5-143.8,152-144c84.4-0.2,152.2,72.1,152.2,156.5S289.9,346.5,205.5,346.5z"/>
                            <g class="st1">
                                <path class="st2" d="M129,172.7v-9.9h27.6V131c0-21.6,15.3-30.6,33.9-30.6c4.5,0,9,0.6,13.5,1.5v9.9c-4.5-0.9-9-1.5-13.5-1.5
                                                    c-12.6,0-22.5,4.5-22.5,21.6v30.9h32.1v9.9H168V317h-11.4V172.7H129z"/>
                            </g>
                            <g class="st1">
                                <path class="st3" d="M273.8,172.7h-33.6v107.7c0,24.9,11.7,27.3,33.3,26.7v9.9c-23.4,1.5-45.9-1.8-44.7-36.6V172.7h-28.5v-9.9
                                                    h28.5v-48h11.4v48h33.6L273.8,172.7L273.8,172.7z"/>
                            </g>
                        </g>
                    </svg>

                    <header class="header-section my-Header" id="myHeader">
                        <div className="bind-header">
                            <div className="header-options-right" id="myHeaderSpan1">
                                <a href="/about" target="_parent">
                           <span id="mySpan"
                                 className={"header-options-span " + (this.state.selectedTab == 'about-container' ? 'orange-color' : '')}
                                 onClick={(e) => this.goToElement(e, "about-container", 70, false)}>ABOUT
                                <span className="span-border"></span>
                            </span>
                                </a>
                                <a href="/team" target="_parent">
                            <span id="mySpan1"
                                  className={"header-options-span " + (this.state.selectedTab == 'team-containers' ? 'orange-color' : '')}
                                  onClick={(e) => this.goToElement(e, "team-containers", 101, false)}>TEAM
                                <span className="span-border"></span>
                            </span>
                                </a>
                            </div>
                            <div class="logo-section">
                                <a href="/" target="_parent">
                                    <div class="flower-svg">
                                        <svg version="1.1" id="Layer_1" className="ft-logo" x="0px" y="0px"
                                             viewBox="0 0 400 400">
                                            <g>
                                                <path class="st0" d="M206.5,33.5c-107,0-166,81.3-166,168s70.3,157,157,157s165-77.3,165-164S293.2,33.5,206.5,33.5z M205.5,346.5
                                                c-84.4,0-157-74.6-157-159s66.5-143.8,152-144c84.4-0.2,152.2,72.1,152.2,156.5S289.9,346.5,205.5,346.5z"/>
                                                <g class="st1">
                                                    <path class="st2" d="M129,172.7v-9.9h27.6V131c0-21.6,15.3-30.6,33.9-30.6c4.5,0,9,0.6,13.5,1.5v9.9c-4.5-0.9-9-1.5-13.5-1.5
                                                    c-12.6,0-22.5,4.5-22.5,21.6v30.9h32.1v9.9H168V317h-11.4V172.7H129z"/>
                                                </g>
                                                <g class="st1">
                                                    <path class="st3" d="M273.8,172.7h-33.6v107.7c0,24.9,11.7,27.3,33.3,26.7v9.9c-23.4,1.5-45.9-1.8-44.7-36.6V172.7h-28.5v-9.9
                                                    h28.5v-48h11.4v48h33.6L273.8,172.7L273.8,172.7z"/>
                                                </g>
                                            </g>
                                        </svg>

                                    </div>
                                </a>
                            </div>
                            <div class="header-options desktop-nav" id="myHeaderSpan">

                                <a href="/services" target="_parent">
                            <span id="mySpan2"
                                  className={"header-options-span " + (this.state.selectedTab == 'servicesContainer' ? 'orange-color' : '')}
                                  onClick={(e) => this.goToElement(e, "servicesContainer", 85, false)}>SERVICES
                             <span className="span-border"></span>
                            </span>
                                </a>
                                <a href="/contact" target="_parent">
                            <span id="mySpan3"
                                  className={"header-options-span " + (this.state.selectedTab == 'contact-container' ? 'orange-color' : '')}
                                  onClick={(e) => this.goToElement(e, "contact-container", 40, false)}>CONTACT
                             <span className="span-border"></span>
                            </span>
                                </a>

                            </div>
                        </div>
                    </header>
                    <div className="Drp-dwn" id="to">
                        <section className="section-icon">
                            <section className="icon-place">
                                <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64"
                                     xmlns="http://www.w3.org/2000/svg" className="section-feed">
                                    <path
                                        d="M64,32A32,32,0,1,0,32,64,32,32,0,0,0,64,32Zm-5.57,0A26.43,26.43,0,1,1,32,5.57,26.45,26.45,0,0,1,58.43,32Z"
                                        data-name="&lt;Compound Path&gt;" id="_Compound_Path_"/>
                                    <rect height="6.96" width="6.96" x="28.52" y="12.19"/>
                                    <polygon
                                        points="35.48 44.39 35.48 30.85 35.48 23.89 28.88 23.89 25.65 23.89 25.65 30.85 28.88 30.85 28.88 44.39 25.65 44.39 25.65 51.35 28.88 51.35 35.48 51.35 38.35 51.35 38.35 44.39 35.48 44.39"/>
                                </svg>

                            </section>
                            <a href="/about" target="_parent">
                                <span id="mySpan"
                                      className={"profile " + (this.state.selectedTab == 'about-container' ? 'orange-colors' : '')}
                                      onClick={(e) => this.goToElement(e, "about-container", 70, false)}>About</span>
                            </a>
                        </section>
                        <section className="section-icon">
                            <section className="icon-place">
                                <svg enable-background="new 0 0 500 500" id="Layer_1" version="1.1"
                                     viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="section-svg">
                                    <g>
                                        <g>
                                            <path
                                                d="M113.6,311c-30.2,0-54.8-24.6-54.8-54.8c0-30.2,24.6-54.8,54.8-54.8s54.8,24.6,54.8,54.8C168.4,286.5,143.8,311,113.6,311    z M113.6,228.9c-15.1,0-27.4,12.3-27.4,27.4c0,15.1,12.3,27.4,27.4,27.4s27.4-12.3,27.4-27.4C141,241.2,128.7,228.9,113.6,228.9z"/>
                                        </g>
                                        <g>
                                            <path
                                                d="M346.3,365.8h-27.4c0-37.7-30.7-68.4-68.4-68.4s-68.4,30.7-68.4,68.4h-27.4c0-52.8,43-95.8,95.8-95.8    S346.3,313,346.3,365.8z"/>
                                        </g>
                                        <g>
                                            <path
                                                d="M387.4,311c-30.2,0-54.8-24.6-54.8-54.8c0-30.2,24.6-54.8,54.8-54.8c30.2,0,54.8,24.6,54.8,54.8    C442.1,286.5,417.6,311,387.4,311z M387.4,228.9c-15.1,0-27.4,12.3-27.4,27.4c0,15.1,12.3,27.4,27.4,27.4    c15.1,0,27.4-12.3,27.4-27.4C414.8,241.2,402.5,228.9,387.4,228.9z"/>
                                        </g>
                                        <g>
                                            <path
                                                d="M250.5,297.4c-37.7,0-68.4-30.7-68.4-68.4s30.7-68.4,68.4-68.4s68.4,30.7,68.4,68.4S288.2,297.4,250.5,297.4z     M250.5,187.9c-22.6,0-41.1,18.4-41.1,41.1s18.4,41.1,41.1,41.1s41.1-18.4,41.1-41.1S273.1,187.9,250.5,187.9z"/>
                                        </g>
                                        <g>
                                            <path
                                                d="M346.3,365.8h-27.4v-13.7c0-37.7,30.7-68.4,68.4-68.4s68.4,30.7,68.4,68.4h-27.4c0-22.6-18.4-41.1-41.1-41.1    s-41.1,18.4-41.1,41.1V365.8z"/>
                                        </g>
                                        <g>
                                            <path
                                                d="M182.1,365.8h-27.4v-13.7c0-22.6-18.4-41.1-41.1-41.1s-41.1,18.4-41.1,41.1H45.2c0-37.7,30.7-68.4,68.4-68.4    s68.4,30.7,68.4,68.4V365.8z"/>
                                        </g>
                                    </g>
                                </svg>

                            </section>
                            <a href="/team" target="_parent">
                                <span id="mySpan1"
                                      className={"profile " + (this.state.selectedTab == 'team-containers' ? 'orange-colors' : '')}
                                      onClick={(e) => this.goToElement(e, "team-containers", 101, false)}>Team</span>
                            </a>
                        </section>
                        <section className="section-icon">
                            <section className="icon-place">

                            </section>
                            <a href="/services" target="_parent">
                                <span id="mySpan2"
                                      className={"profile " + (this.state.selectedTab == 'servicesContainer' ? 'orange-colors' : '')}
                                      onClick={(e) => this.goToElement(e, "servicesContainer", 85, false)}>Services</span>
                            </a>
                        </section>
                        <section className="section-icon">
                            <section className="icon-place">
                                <i class="fa fa-address-book-o contact-book"></i>
                            </section>
                            <a href="/contact" target="_parent">
                                <span id="mySpan3"
                                      className={"profile " + (this.state.selectedTab == 'contact-container' ? 'orange-colors' : '')}
                                      onClick={(e) => this.goToElement(e, "contact-container", 40, false)}>Contact</span>
                            </a>
                        </section>
                    </div>
                </section>

                <section className="company-details-container" id="about-container">

                    {/*<div id="triangle-bottomright"></div>*/}
                    {/*<div id="triangle-topleft1"></div>*/}
                    <div className="company-details-section">
                        <span className="filling-line" aria-hidden="true"></span>
                        <div className="point-general"></div>
                        <div className="company-thumbnail">
                            <div className="circle-section">
                                <div className="circle">
                                    <span className="first-company-txt">WHO</span>
                                    <span className="second-company-txt">Are We?</span>
                                </div>
                            </div>
                            <div className="text-section">
                                <blockquote className="txt-alignment">
                                    Floratechno solutions is a leading software solution company located at the heart of Pune Maharashtra.
                                    We aim to become one stop destination for all IT solution. Our team is made up of Creative Developers,Young Designers, Analyst and Industry Experts.
                                    All working towards achieving the same dream of becoming the best in the industry by empowering our clients.
                                </blockquote>
                            </div>
                        </div>

                        <span className="filling-line-1" aria-hidden="true"></span>
                        <div className="point-general-1"></div>
                        <div className="company-thumbnail">
                            <div className="circle-section">
                                <div className="circle">
                                    <span className="first-company-txt">WHAT</span>
                                    <span className="second-company-txt">We Do?</span>
                                </div>
                            </div>
                            <div className="text-section">
                                <blockquote className="txt-alignment">
                                    We work with industry’s most advance technologies in the field of Mobile Application, Web Application, Web Designing, Digital Marketing and Corporate Branding.
                                    We provide value to our client from these technologies by providing best service in industry for their business to grow and run smoothly.
                                    We run our business with high integrity and transparency and always deliver on our promise.
                                </blockquote>
                            </div>
                        </div>


                        <div className="company-thumbnail">
                            <div className="circle-section">
                                <div className="circle">
                                    <span className="first-company-txt">WHY</span>
                                    <span className="second-company-txt">Choose Us?</span>
                                </div>
                            </div>
                            <div className="text-section">
                                <blockquote className="txt-alignment">
                                    We understand our client's business needs.
                                    We work with single focus in our mind which is to provide value for money to our clients.
                                    With experience in complex project handling
                                    we are able to deliver as per client expectations on time which helps them turn their dream into reality.
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <div className="footer-info float-left">Powered by <span>Floratechno Solutions Pvt. Ltd.</span>
                    </div>
                    <div className="footer-info float-right text-align-right"><span className="copyright-info">©2018 India</span>
                    </div>
                </footer>
            </div>

        );
    }

}

render(<App/>, document.getElementById('app'));