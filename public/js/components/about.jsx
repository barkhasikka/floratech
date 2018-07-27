import React from 'react';
import {render} from 'react-dom';
import {smoothScroll} from './commoncomponent/helper.js'

class About extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        };

    }
    componentDidMount(){
        smoothScroll("about-container", 70);
        this.setState({selectedTab: "about-container"})

    }
    show (){
        if( document.getElementById("to").style.display == "block"  ){
            document.getElementById("to").style.display = "none" ;
        }
        else{
            document.getElementById("to").style.display = "block" ;
        }

    }

    render (){
        return (
            <div >

                <header class="header-section" id="myHeader">
                    <i className="fa fa-bars cates" onClick={() => this.show()}></i>
                    <div className="bind-header">
                        <div className="header-options-right" id="myHeaderSpan1">
                            <a href="/about" target="_parent" className="header-a">
                           <span className={"header-option-span " + (this.state.selectedTab == 'about-container' ? 'orange-color' : '')} onClick={(e) => this.goToElement(e, "about-container", 70, false)}>ABOUT
                                <span className="span-border"></span>
                            </span>
                            </a>
                            <a href="/team" target="_parent" className="header-a">
                            <span className="header-option-span"  onClick={(e) => this.goToElement(e, "team-containers", 101, false)}>TEAM
                                <span className="span-border"></span>
                            </span>
                            </a>
                        </div>
                        <div class="logo-section">
                            <a href="/" target="_parent">
                                <div class="flower-svg">
                                    <svg version="1.1" id="Layer_1" className="ft-logo" x="0px" y="0px" viewBox="0 0 400 400">
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

                            <a href="/services" target="_parent" className="header-a">
                            <span className="header-option-span" onClick={(e) => this.goToElement(e, "servicesContainer", 85, false)}>SERVICES
                             <span className="span-border"></span>
                            </span>
                            </a>
                            <a href="/contact" target="_parent" className="header-a">
                            <span className="header-option-span" onClick={(e) => this.goToElement(e, "contact-container", 40, false)}>CONTACT
                             <span className="span-border"></span>
                            </span>
                            </a>
                        </div>
                    </div>
                </header>
                <div className="Drop-down" id="to">
                    <section className="section-icon">
                        <section className="icon-place">
                            <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="section-feed">
                                <path d="M64,32A32,32,0,1,0,32,64,32,32,0,0,0,64,32Zm-5.57,0A26.43,26.43,0,1,1,32,5.57,26.45,26.45,0,0,1,58.43,32Z" data-name="&lt;Compound Path&gt;" id="_Compound_Path_"/>
                                <rect height="6.96" width="6.96" x="28.52" y="12.19"/><polygon points="35.48 44.39 35.48 30.85 35.48 23.89 28.88 23.89 25.65 23.89 25.65 30.85 28.88 30.85 28.88 44.39 25.65 44.39 25.65 51.35 28.88 51.35 35.48 51.35 38.35 51.35 38.35 44.39 35.48 44.39"/></svg>

                        </section>
                        <a href="/about" target="_parent" >
                            <span id="mySpan" className={"profile " + (this.state.selectedTab == 'about-container' ? 'orange-colors' : '')} onClick={(e) => this.goToElement(e, "about-container", 70, false)}>About</span>
                        </a>
                    </section>
                    <section className="section-icon">
                        <section className="icon-place">
                            <svg enable-background="new 0 0 500 500" id="Layer_1" version="1.1" viewBox="0 0 500 500"  xmlns="http://www.w3.org/2000/svg" className="section-svg"><g><g>
                                <path d="M113.6,311c-30.2,0-54.8-24.6-54.8-54.8c0-30.2,24.6-54.8,54.8-54.8s54.8,24.6,54.8,54.8C168.4,286.5,143.8,311,113.6,311    z M113.6,228.9c-15.1,0-27.4,12.3-27.4,27.4c0,15.1,12.3,27.4,27.4,27.4s27.4-12.3,27.4-27.4C141,241.2,128.7,228.9,113.6,228.9z"/></g><g>
                                <path d="M346.3,365.8h-27.4c0-37.7-30.7-68.4-68.4-68.4s-68.4,30.7-68.4,68.4h-27.4c0-52.8,43-95.8,95.8-95.8    S346.3,313,346.3,365.8z"/></g><g>
                                <path d="M387.4,311c-30.2,0-54.8-24.6-54.8-54.8c0-30.2,24.6-54.8,54.8-54.8c30.2,0,54.8,24.6,54.8,54.8    C442.1,286.5,417.6,311,387.4,311z M387.4,228.9c-15.1,0-27.4,12.3-27.4,27.4c0,15.1,12.3,27.4,27.4,27.4    c15.1,0,27.4-12.3,27.4-27.4C414.8,241.2,402.5,228.9,387.4,228.9z"/></g><g><path d="M250.5,297.4c-37.7,0-68.4-30.7-68.4-68.4s30.7-68.4,68.4-68.4s68.4,30.7,68.4,68.4S288.2,297.4,250.5,297.4z     M250.5,187.9c-22.6,0-41.1,18.4-41.1,41.1s18.4,41.1,41.1,41.1s41.1-18.4,41.1-41.1S273.1,187.9,250.5,187.9z"/></g><g><path d="M346.3,365.8h-27.4v-13.7c0-37.7,30.7-68.4,68.4-68.4s68.4,30.7,68.4,68.4h-27.4c0-22.6-18.4-41.1-41.1-41.1    s-41.1,18.4-41.1,41.1V365.8z"/></g><g>
                                <path d="M182.1,365.8h-27.4v-13.7c0-22.6-18.4-41.1-41.1-41.1s-41.1,18.4-41.1,41.1H45.2c0-37.7,30.7-68.4,68.4-68.4    s68.4,30.7,68.4,68.4V365.8z"/></g></g></svg>

                        </section>
                        <a href="/team" target="_parent" >
                            <span id="mySpan1" className={"profile " + (this.state.selectedTab == 'team-containers' ? 'orange-colors' : '')} onClick={(e) => this.goToElement(e, "team-containers", 101, false)}>Team</span>
                        </a>
                    </section>
                    <section className="section-icon">
                        <section className="icon-place">

                        </section>
                        <a href="/services" target="_parent">
                            <span  id="mySpan2" className={"profile " + (this.state.selectedTab == 'servicesContainer' ? 'orange-colors' : '')} onClick={(e) => this.goToElement(e, "servicesContainer", 85, false)}>Services</span>
                        </a>
                    </section>
                    <section className="section-icon">
                        <section className="icon-place">
                            <i class="fa fa-address-book-o contact-book"></i>
                        </section>
                        <a href="/contact" target="_parent">
                            <span id="mySpan3" className={"profile " + (this.state.selectedTab == 'contact-container' ? 'orange-colors' : '')} onClick={(e) => this.goToElement(e, "contact-container", 40, false)}>Contact</span>
                        </a>
                    </section>
                </div>
                <div>
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
                                All working for one same dream and vision to become the best in industry by providing value to our customer.
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
                                We provide value to our client from these technologies by providing best in industry service for their business to grow and run smooth.
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
                                We have never give up attitude and understand our client business needs.
                                We work with single focus in our mind which is to provide value for money to our clients.
                                With the years of experience in complex project handling and our team member experience,
                                we are able to deliver as per client expectations on time which helps them turn their dream into reality.
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

                <section className="company-info-container">
                    <div className="company-info-heading">
                        <span className="motto-txt">WHAT MAKES US</span>
                        <span className="ceo-txt">DIFFERENT, AND YOU HAPPY</span>
                    </div>

                    <div className="company-info-section">
                        <div className="company-info-section-wrapper">
                            <div className="company-info-thumbnail " id="wrapper">
                                <div className="listener-svg">

                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         viewBox="0 0 1212 1043">
                                        <g id="face">
                                            <ellipse class="listn-st0" cx="448.4" cy="543.5" rx="370.5" ry="431.5"/>
                                            <g id="Layer_5">
                                                <ellipse cx="274.4" cy="484" rx="36" ry="67.5"/>
                                                <ellipse cx="483.4" cy="410" rx="36" ry="67.5"/>
                                            </g>
                                            <path
                                                d="M363.4,47.5c0,0,155-10,179,56l-82.8,8.7l-96.2,0.3v-21h32v-12L363.4,47.5z"/>
                                            <ellipse class="listn-st1" cx="276.4" cy="503.5" rx="18" ry="30"/>
                                            <ellipse class="listn-st1" cx="486.4" cy="433.5" rx="18" ry="30"/>
                                            <path
                                                d="M513.1,31c0,0,143.3,60,135.4,129.8l-78.1-29.1l-86.2-42.5l9.3-18.8l28.7,14.2l5.3-10.7L513.1,31z"/>
                                            <path d="M283.3,68.2c0,0,84.2-31.7,110-17.6c4.4,2.4,19,11.1,23.8,12.5c16.7,5.1,37.5,17.1,19.9,33.6c-23.3,21.9-45.7,7-45.7,7
                                                l-6.1-7.7c59.8-4.7,20.9-25.4-89-1.1c0,0,35.6-14.2,43.4-16.2C347.4,76.7,283.3,68.2,283.3,68.2z"/>
                                        </g>
                                        <g id="eyebrow">
                                            <path
                                                d="M228.4,432.5c0,0,25-38,44-34s32,16,36,26s1-52-32-52S228.4,432.5,228.4,432.5z"/>
                                            <path
                                                d="M439.4,363.5c0,0,25-38,44-34s32,16,36,26s1-52-32-52S439.4,363.5,439.4,363.5z"/>
                                        </g>
                                        <g id="hand">
                                            <path d="M775.9,414c-3,1-3,4-3,4s-26-9-39-7s-75-56-75-56s34,65,93,92c0,0-16,6-21,12c0,0-50-27-72-53c0,0,32,59,57,67
                                                c0,0-7,12-4,21c0,0-34-21-53-50c0,0,54,82,76,96c0,0-30,7-34,16c0,0,61,26,81,29s53,59,34,90c0,0,9,52-65,61s-80,0-80,0
                                                s75,80,145,14c0,0,30-9,49-85c0,0,39,63,127,27c0,0,103,78,158-54s27-257,27-257l-9-32c0,0-14-189-42-203c0,0-16-36-74-6
                                                c0,0-10-54-59-48c0,0-18-5-42,20c0,0-31-15-57,4s-29,34-29,34s-38,88,38,241c0,0-8,6-8,16s-11,69-11,69s-28-34-46-34
                                                c0,0,2-38-35-52s-45-18-45-18s-38,7-99-55C658.9,317,689.9,399,775.9,414"/>
                                            <path class="listn-st2" d="M1146.8,345.9c0,0-5.6-166.8-28.9-189c0,0-8.9-28.9-41.1,0c-32.2,28.9-16.7,107.9-16.7,107.9
                                                s33.4,154.6,41.1,165.7c7.8,11.1-38.9-23.4-42.3-48.9c-3.3-25.6-57.8-134.5-21.1-225.7c0,0-15.6-54.5-35.6-48.9
                                                S970,124.6,970,124.6s-24.5,50-6.7,123.4s51.1,131.2,51.1,131.2l45.6,27.8c0,0-47.8-2.2-110.1,5.6l-31.1,6.7
                                                c0,0,16.7,13.3-31.1,166.8c0,0-11.1-110.1-86.7-117.9c0,0-75.6,11.1-68.9,33.4c6.7,22.2,16.7,25.6,16.7,25.6s18.9,20,65.6,35.6
                                                c0,0,21.1,3.3,47.8,60c0,0,24.5,53.4,56.7,66.7c32.2,13.3,57.8,0,57.8,0s-23.4-41.1-20-48.9c3.3-7.8,31.1-5.6,31.1-5.6
                                                s11.1,60,72.3,70.1c61.2,10,90.1-91.2,87.8-91.2c-2.2,0,42.3-95.6,5.6-268"/>
                                            <path class="listn-st2" d="M935,123.1c0,0-48.2,76.1,45.6,289.1l-46.9,8.9c0,0-88.8-145.8-48.2-271.3C885.5,149.7,899.5,115.5,935,123.1z
                                                "/>
                                        </g>
                                        <g id="smile">
                                            <path class="listn-st3" d="M319.1,670.9c0,0,123.4,188.3,191.6-36.5"/>
                                        </g>
                                    </svg>

                                </div>
                                <div className="right-company-txt">
                                    <p className="company-heading-txt">WE ARE GOOD LISTENERS.</p>
                                    <span className="sub-company-heading-txt">We listen to each and every requirement that you bring to us with utmost attention.
                                We are a customer centric team and your project is our priority.
                        </span>
                                </div>
                            </div>

                            <div className="company-info-thumbnail">
                                <div className="left-company-txt">
                                    <p className="company-heading-txt">WE ALWAYS DELIVER ON THE PROMISE.</p>
                                    <span className="sub-company-heading-txt">We don't belive in making false promise to get you on board. We ensure whats promised
                                           to you gets delivered to you on time without compromising the quality.
                                    </span>
                                </div>
                                <div className="deliver-svg">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         viewBox="0 0 944 932">
                                        <g id="Layer_4">
                                            <circle class="time-st0" cx="463" cy="481" r="414"/>
                                        </g>
                                        <g id="Layer_5">

                                            <path class="time-st1" d="M170.7,309.5L170.7,309.5c-3.3,5.7-10.7,7.7-16.4,4.4l-22.5-13c-5.7-3.3-7.7-10.7-4.4-16.4h0
                                                c3.3-5.7,10.7-7.7,16.4-4.4l22.5,13C172,296.4,174,303.8,170.7,309.5z"/>
                                            <path class="time-st1" d="M169.7,652.5L169.7,652.5c3.3,5.7,1.3,13.1-4.4,16.4l-22.5,13c-5.7,3.3-13.1,1.3-16.4-4.4h0
                                                c-3.3-5.7-1.3-13.1,4.4-16.4l22.5-13C159,644.8,166.4,646.8,169.7,652.5z"/>
                                            <path class="time-st1" d="M295.5,184.7L295.5,184.7c-5.7,3.3-13.1,1.3-16.4-4.4l-13-22.5c-3.3-5.7-1.3-13.1,4.4-16.4l0,0
                                                c5.7-3.3,13.1-1.3,16.4,4.4l13,22.5C303.2,174,301.2,181.4,295.5,184.7z"/>
                                            <path class="time-st1" d="M654.5,139.3L654.5,139.3c5.7,3.3,7.7,10.7,4.4,16.4l-13,22.5c-3.3,5.7-10.7,7.7-16.4,4.4l0,0
                                                c-5.7-3.3-7.7-10.7-4.4-16.4l13-22.5C641.4,138,648.8,136,654.5,139.3z"/>
                                            <path class="time-st1" d="M853,483L853,483c0,6.6-5.4,12-12,12h-26c-6.6,0-12-5.4-12-12l0,0c0-6.6,5.4-12,12-12h26
                                                C847.6,471,853,476.4,853,483z"/>
                                            <path class="time-st1" d="M461,828L461,828c6.6,0,12,5.4,12,12v26c0,6.6-5.4,12-12,12l0,0c-6.6,0-12-5.4-12-12v-26
                                                C449,833.4,454.4,828,461,828z"/>
                                            <path class="time-st1" d="M295.5,779.3L295.5,779.3c5.7,3.3,7.7,10.7,4.4,16.4l-13,22.5c-3.3,5.7-10.7,7.7-16.4,4.4l0,0
                                                c-5.7-3.3-7.7-10.7-4.4-16.4l13-22.5C282.4,778,289.8,776,295.5,779.3z"/>
                                            <path class="time-st1" d="M464,88L464,88c6.6,0,12,5.4,12,12v26c0,6.6-5.4,12-12,12l0,0c-6.6,0-12-5.4-12-12v-26
                                                C452,93.4,457.4,88,464,88z"/>
                                            <path class="time-st1" d="M633.5,782.3L633.5,782.3c5.7-3.3,13.1-1.3,16.4,4.4l13,22.5c3.3,5.7,1.3,13.1-4.4,16.4l0,0
                                                c-5.7,3.3-13.1,1.3-16.4-4.4l-13-22.5C625.8,793,627.8,785.6,633.5,782.3z"/>
                                            <path class="time-st2" d="M165.6,649.4L165.6,649.4c4.1,5.2,3.2,12.8-1.9,16.9l-20.4,16.2c-5.2,4.1-12.8,3.2-16.9-1.9h0
                                                c-4.1-5.2-3.2-12.8,1.9-16.9l20.4-16.2C153.9,643.4,161.5,644.3,165.6,649.4z"/>
                                            <path class="time-st1" d="M799.5,285.3L799.5,285.3c3.3,5.7,1.3,13.1-4.4,16.4l-22.5,13c-5.7,3.3-13.1,1.3-16.4-4.4v0
                                                c-3.3-5.7-1.3-13.1,4.4-16.4l22.5-13C788.9,277.6,796.2,279.6,799.5,285.3z"/>
                                            <path class="time-st1" d="M126.8,480.8L126.8,480.8c0,6.6-5.4,12-12,12h-26c-6.6,0-12-5.4-12-12l0,0c0-6.6,5.4-12,12-12h26
                                                C121.4,468.8,126.8,474.2,126.8,480.8z"/>
                                            <path class="time-st1" d="M752.5,652.7L752.5,652.7c2.8-6,10-8.5,16-5.7l23.5,11.2c6,2.8,8.5,10,5.7,16h0c-2.8,6-10,8.5-16,5.7
                                                l-23.5-11.2C752.2,665.8,749.7,658.6,752.5,652.7z"/>
                                            <path class="time-st1" d="M461,488h8c6.6,0,12-5.4,12-12V155c0-6.6-5.4-12-12-12h-8c-6.6,0-12,5.4-12,12v321
                                                C449,482.6,454.4,488,461,488z"/>
                                            <path class="time-st1 clock-tip" d="M420.2,428.1l-6.9,4c-5.7,3.3-7.7,10.7-4.4,16.4l160.5,278c3.3,5.7,10.7,7.7,16.4,4.4l6.9-4
                                            c5.7-3.3,7.7-10.7,4.4-16.4l-160.5-278C433.3,426.8,425.9,424.8,420.2,428.1z"/>
                                        </g>
                                        <g id="Layer_2">
                                            <path class="time-st3" d="M676,543c-12.8-7.1-13.1-13.1-26-21c-2,18-3.5,42.2-52.5,44.5c-2.2-6.7,32.2,91.3-46,44c0,0,16,44-12,55
                                            s-45-11-45-11s9.9,65.9-35.4,45l17,38.3c6.6-0.3,13.8-1.8,21.3-5.3c0,0,13-2,25-29c0,0,41,14,62-39c0,0,59,3,58-69
                                            C642.5,595.5,677,575,676,543z"/>
                                            <path class="time-st3" d="M146.8,404.3l107.5-153.6c6.4-9.1,19.1-11.4,28.2-5l66.8,46.7c9.1,6.4,11.4,19.1,5,28.2L246.7,474.3
                                            c-6.4,9.1-19.1,11.4-28.2,5l-66.8-46.7C142.6,426.1,140.4,413.4,146.8,404.3z"/>
                                            <path class="time-st3" d="M253,488l114-159c0,0,39-8,73,14s217,145,217,145v75l-45,71l-62,43l-63,32l-104-19
                                            c-23.9-21.7-21.8-39.9-33.3-55.4L285,547C285,547,243,526,253,488z"/>
                                            <path class="time-st3" d="M459.5,695.5c0,0-19,10-11,31c0,0,11.3,9.5,28.5,11.2c-5.8-11.8-10.3-28.8-12.8-39.6
                                            C462.7,697.3,461.1,696.5,459.5,695.5z"/>
                                        </g>
                                        <g id="Layer_3">
                                            <path class="time-st1" d="M785.2,400.3L677.7,246.7c-6.4-9.1-19.1-11.4-28.2-5l-66.8,46.7c-9.1,6.4-11.4,19.1-5,28.2l107.5,153.6
                                            c6.4,9.1,19.1,11.4,28.2,5l66.8-46.7C789.4,422.1,791.6,409.4,785.2,400.3z"/>
                                            <path class="time-st1" d="M676,543c0,0,20-17,8.5-42.5l-130-188c0,0-8-3-10-2s-92-8-92-8s-5,0-8,5s-53,67-53,67s-5,12-4,15
                                            s16,111,16,111s31,24,51-9s10-86,10-86s45,35,100,32c0,0,8.5,65.5,92.5,90.5c0,0-1,0,0,1l0,0C657.5,525.3,670,543,676,543z"/>
                                            <path class="time-st1" d="M307.5,515.5c0,0,62-9,47,46c0,0,43-4,37,41c0,0,48-8,44,32c0,0,65-1,38,48c0,0,4,34-26,47s-43-25-43-25
                                            s-58,23-63-42c0,0-56,7-49-53c0,0-52-7-36-62C256.5,547.5,269.5,520.5,307.5,515.5z"/>
                                        </g>
                                    </svg>


                                </div>
                            </div>

                            <div className="company-info-thumbnail">
                                <div className="innovation-svg">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         viewBox="0 0 1080 1080">

                                        <g id="Layer_1">


                                            <path class="ino-st0"
                                                  d="M425.5,830l226-62.5c0,0,7.9-100,55.5-133.3c47.6-33.3,175.5-205,25.8-372.9"/>
                                            <path class="ino-st0"
                                                  d="M425.5,769.8c0,0,12.1-96.5-72.3-160.8s-114.5-231.1-10-347.6"/>
                                            <line class="ino-st0" x1="876.4" y1="386.7" x2="1019.5" y2="389.3"/>
                                            <line class="ino-st0" x1="144.9" y1="723" x2="247.9" y2="623.6"/>
                                            <line class="ino-st0" x1="921.2" y1="736.9" x2="821.9" y2="633.8"/>
                                            <line class="ino-st0" x1="203.6" y1="389.3" x2="60.5" y2="386.7"/>
                                            <line class="ino-st0" x1="425.5" y1="894.3" x2="658.6" y2="834.1"/>
                                            <line class="ino-st0" x1="425.5" y1="966.7" x2="658.6" y2="906.4"/>
                                            <path class="ino-st0" d="M473.7,1002.8c0,0,64.3,72.3,140.7,0"/>
                                        </g>
                                        <g id="Layer_5">
                                            <g>
                                                <path class="ino-st1"
                                                      d="M535.2,84.4c-1-2.7-4.8-2.9-6-0.3l-7.5,15.1l19.1,0.9L535.2,84.4z"/>
                                                <polygon class="ino-st2"
                                                         points="559.8,152.6 540.9,100 521.7,99.1 496.8,149.4 		"/>

                                                <rect x="423.3" y="219.7"
                                                      transform="matrix(4.605458e-02 -0.9989 0.9989 4.605458e-02 248.5791 762.8351)"
                                                      class="ino-st3" width="200.8" height="63.1"/>
                                                <path class="st4" d="M491.5,396.9l50.9,2.3c3.3,0.2,6.2-2.4,6.3-5.8l1-22.3l-63-2.9l-1,22.3C485.5,393.9,488.1,396.7,491.5,396.9z
			"/>

                                                <rect x="509.6" y="329.1"
                                                      transform="matrix(4.605458e-02 -0.9989 0.9989 4.605458e-02 134.5099 862.1357)"
                                                      class="ino-st5" width="18.2" height="63.1"/>
                                            </g>
                                        </g>
                                        <g id="Layer_6">
                                            <g>
                                                <path class="ino-st6" d="M402.4,163.8c0,0-5,36-46,35.8c0,0-28.3,2.5-25.5-43.7c0,0-3.7-33.1,21-62.6c0,0,12.7,31.3,29.9,39
			C381.8,132.3,404.6,145.4,402.4,163.8z"/>
                                                <path class="ino-st7" d="M398.6,204.3c0,0,22.4,38.4,32.8,93.7c0,0,24.3,90.3,15.6,104.3c0,0-1.1,4.5-7.7-4.1c0,0-50-81.4-58.9-110.6
			c0,0-29.3-69.6-22.4-72.2C358,215.4,387.3,215.8,398.6,204.3z"/>
                                            </g>
                                        </g>
                                        <g id="Layer_7">
                                            <g>
                                                <path class="ino-st8"
                                                      d="M573.1,281.8l18.4-25.5l58.7,42.5l-18.4,25.5L573.1,281.8z"/>
                                                <path class="ino-st9"
                                                      d="M603.6,263.7l13.2-128.1L748.3,228l-111.9,59.8L603.6,263.7z"/>
                                                <g>
                                                    <path class="ino-st10"
                                                          d="M690.1,143.3c4.2-7.8,14.3-10.2,21.5-5.1c7,5,8.3,14.8,2.9,21.4"/>
                                                    <path class="ino-st10"
                                                          d="M671.9,125.3c13.9-17.5,39.4-20.6,57.1-6.8c16.6,13,20.5,36.5,8.9,54.1"/>
                                                    <path class="ino-st10"
                                                          d="M653.1,113.8c19.6-24.7,54.4-31.3,81.6-15.3c31.1,18.2,41.2,58.4,22.5,89.2"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g id="Layer_4">
                                            <path class="ino-st11" d="M704.2,434.8L704.2,434.8c-0.6-0.3-0.6-1-0.3-1.3l6-11.8c0.3-0.6,1-0.6,1.3-0.3l0,0c0.6,0.3,0.6,1,0.3,1.3
                                                l-6,11.8C705.5,434.8,704.9,435.1,704.2,434.8z"/>
                                            <path class="ino-st11" d="M667,434.5L667,434.5c-0.6,0.3-1.3,0-1.6-0.3l-6.7-11.5c-0.3-0.6,0-1.3,0.3-1.6l0,0c0.6-0.3,1.3,0,1.6,0.3
                                                l7,11.8C667.6,433.9,667.6,434.5,667,434.5z"/>
                                            <path class="ino-st11"
                                                  d="M645.4,465.4h78.3c0,0-0.6-35-40.1-36C683.5,429.4,647.9,430.4,645.4,465.4z"/>
                                            <path class="ino-st11"
                                                  d="M645.7,468.2h77.6v55c0,0,0.3,8.9-7.6,10.5h-8h-52.8c0,0-8,0.3-9.5-8L645.7,468.2z"/>
                                            <path class="ino-st11" d="M735.4,515L735.4,515c-3.5,0-6.4-2.9-6.4-6.4v-32.1c0-3.5,2.9-6.4,6.4-6.4l0,0c3.5,0,6.4,2.9,6.4,6.4v32.1
                                                C742.1,512.1,738.9,515,735.4,515z"/>
                                            <path class="ino-st11" d="M699.1,561.5L699.1,561.5c-3.5,0-6.4-2.9-6.4-6.4v-32.5c0-3.5,2.9-6.4,6.4-6.4l0,0c3.5,0,6.4,2.9,6.4,6.4
                                            v32.1C705.5,558.3,702.6,561.5,699.1,561.5z"/>
                                            <path class="ino-st11" d="M670.2,561.5L670.2,561.5c-3.5,0-6.4-2.9-6.4-6.4v-32.5c0-3.5,2.9-6.4,6.4-6.4l0,0c3.5,0,6.4,2.9,6.4,6.4
                                            v32.1C676.5,558.3,673.7,561.5,670.2,561.5z"/>
                                            <path class="ino-st11" d="M633.6,516.3L633.6,516.3c-3.5,0-6.4-2.9-6.4-6.4v-32.5c0-3.5,2.9-6.4,6.4-6.4l0,0c3.5,0,6.4,2.9,6.4,6.4
                                            v32.1C640.3,513.1,637.4,516.3,633.6,516.3z"/>
                                            <circle class="ino-st12" cx="697.9" cy="447.2" r="2.9"/>
                                            <circle class="ino-st12" cx="669.5" cy="447.2" r="2.9"/>
                                        </g>
                                        <g id="Layer_2">
                                            <g>
                                                <path class="ino-st13"
                                                      d="M513.7,585.3c0,0-11.5-4.2-5.4-13.6c0,0,6.6-7.5,13.9-1.8L513.7,585.3z"/>
                                                <path class="ino-st13"
                                                      d="M581.3,567.7c0,0,10.9-5.7,15.7,2.7c0,0,7.5,10-4.2,14.2L581.3,567.7z"/>
                                                <path class="ino-st14" d="M514.9,629c0,0-4.2-3-9.7,3.9c-5.4,6.9,2.7,2.1,2.7,2.1s-6.6,3.9,0,3.3c0,0,4.8-1.2,6.6-3.6
                                                C516.4,632.3,514.9,629,514.9,629z"/>
                                                <path class="ino-st14" d="M594.2,629c0,0,4.2-3,9.7,3.9c5.4,6.9-2.7,2.1-2.7,2.1s6.6,3.9,0,3.3c0,0-4.8-1.2-6.6-3.6
                                                C592.7,632.3,594.2,629,594.2,629z"/>
                                                <path class="ino-st14"
                                                      d="M529.3,690.9l-6.9-4.5c0,0-9.7,5.7-6,9.4l2.1-1.5c0,0-3.9,3.6,1.5,3.9L529.3,690.9z"/>
                                                <path class="ino-st14"
                                                      d="M578.2,690.9l6.9-4.5c0,0,9.7,5.7,6,9.4l-2.1-1.5c0,0,3.9,3.6-1.5,3.9L578.2,690.9z"/>
                                                <path class="ino-st13" d="M512.4,651.4c0,0-1.2,17.8,2.7,25.1c0,0,5.1,11.5,15.4,15.1c0,0,13.3,5.4,24.4,4.2c0,0,19.9,0,29.3-8.8
                                                c0,0,10.9-7.5,12.1-24.1c0,0,1.2-14.5,0.6-16.6l-1.5-26.9c0,0,2.1-14.8-2.4-34.4c0,0-3-20.8-26.9-23.8c-23.8-3-38.3,5.1-38.3,5.1
                                                s-10,3.9-13.9,19c-3.9,15.1-0.3,34.4-0.3,34.4s-0.3,4.2,0.3,6.3C513.7,626,512.4,649.8,512.4,651.4z"/>
                                                <path class="ino-st15" d="M555.3,597c-0.6,0-1.5,0.6-1.8,1.5c-0.6-0.9-1.2-1.5-1.8-1.5c-1.5,0-2.4,1.8-2.4,4.2c0,2.4,1.2,4.2,2.4,4.2
                                                c0.6,0,1.5-0.6,1.8-1.5c0.6,0.9,1.2,1.5,1.8,1.5c1.5,0,2.4-1.8,2.4-4.2C557.7,598.8,556.8,597,555.3,597z"/>
                                                <ellipse class="ino-st16" cx="536" cy="580.7" rx="13.6" ry="12.7"/>
                                                <ellipse class="ino-st16" cx="569.2" cy="580.1" rx="13.6" ry="12.7"/>
                                                <circle class="ino-st17" cx="530.6" cy="581.6" r="4.2"/>
                                                <circle class="ino-st17" cx="563.5" cy="580.4" r="3.9"/>
                                                <ellipse class="ino-st17" cx="553.5" cy="592.8" rx="6" ry="3.6"/>
                                                <path class="ino-st14"
                                                      d="M546.9,592.8c0,0-8.8,5.7,0,8.1l6-1.5c0,0,4.8,0,6,1.5s8.5-1.8,2.7-7.2l-2.7-0.9H546.9z"/>
                                                <path class="ino-st18" d="M547.5,600.9"/>
                                                <path class="ino-st17"
                                                      d="M586.7,572.3c0,0,4.3-2.3,6.3,1.1c0,0,3,4-1.7,5.7L586.7,572.3z"/>
                                                <path class="ino-st17"
                                                      d="M513.9,581.2c0,0-6.2-2.3-2.9-7.3c0,0,3.6-4.1,7.5-1L513.9,581.2z"/>
                                            </g>
                                        </g>
                                        <g id="Layer_3">
                                            <g>
                                                <ellipse class="ino-st19" cx="394.8" cy="511.6" rx="64.2" ry="18.7"/>
                                                <path class="ino-st19"
                                                      d="M353.9,453.1c7-6.2,31,15.2,53.6,47.7s35.3,63.8,28.3,70s-31-15.2-53.6-47.7S346.9,459.2,353.9,453.1z"/>
                                                <path class="ino-st19" d="M382.2,500.7c22.6-32.5,46.6-53.8,53.6-47.7c7,6.2-5.7,37.5-28.3,70c-22.6,32.5-46.6,53.8-53.6,47.7
			C346.9,564.5,359.5,533.2,382.2,500.7z"/>
                                                <ellipse class="ino-st19" cx="394.8" cy="511.6" rx="4.3" ry="4.8"/>
                                            </g>
                                        </g>
                                    </svg>

                                </div>
                                <div className="right-company-txt">
                                    <p className="company-heading-txt">WE BRING INNOVATION.</p>
                                    <span className="sub-company-heading-txt">We have a reputation of never comming to you with the same concept twicw or repeating our concepts.
                                       We prepare the newest templates just for you like no other in the market.
                        </span>
                                </div>
                            </div>

                            <div className="company-info-thumbnail">
                                <div className="left-company-txt">
                                    <p className="company-heading-txt">WE ARE BUILT TO LAST.</p>
                                    <span className="sub-company-heading-txt">Present is passe already. We are all about the future.Even though we give are working now, we are keeping in
                                                 the mind the future. Pushing to give you something that will still br of great valu ahead in time.
                        </span>
                                </div>
                                <div className="built-svg">
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </div>
                <footer>
                    <div className="footer-info float-left">Powered by <span>Floratechno Solutions Pvt. Ltd.</span></div>
                    <div className="footer-info float-right text-align-right"><span className="copyright-info">©2018 India</span></div>
                </footer>
            </div>
        );
    }
}
render(<About/>, document.getElementById('about'));