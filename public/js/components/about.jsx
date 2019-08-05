import React from 'react';
import {render} from 'react-dom';
import {smoothScroll} from './commoncomponent/helper.js'

class About extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            hideCards: false
        };

    }
    componentDidMount(){
        // smoothScroll("about-container", 70);
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
    showVideo(){
        this.setState({hideCards: !this.state.hideCards});
        let widthOfVideo = document.getElementsByTagName('video')[1].offsetWidth;
        let widthOfParent = document.getElementById('myVideo').offsetWidth;
        let positionForCancel = (widthOfParent - widthOfVideo ) / 2 ;

        document.getElementsByClassName("close-video")[0].style.right = positionForCancel;
    }
    closeVideo(){
        document.getElementById("myVideo").classList.add("closeWidth");
        this.setState({hideCards: false});
    }

    render (){
        return (
            <div >
                <header className="header-section" id="myHeader">
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
                        <div className="logo-section">
                            <a href="/" target="_parent">
                                <div className="flower-svg">
                                    <svg version="1.1" id="Layer_1" className="ft-logo" x="0px" y="0px" viewBox="0 0 400 400">
                                        <g>
                                            <path className="st0" d="M206.5,33.5c-107,0-166,81.3-166,168s70.3,157,157,157s165-77.3,165-164S293.2,33.5,206.5,33.5z M205.5,346.5
                                                c-84.4,0-157-74.6-157-159s66.5-143.8,152-144c84.4-0.2,152.2,72.1,152.2,156.5S289.9,346.5,205.5,346.5z"/>
                                            <g className="st1">
                                                <path className="st2" d="M129,172.7v-9.9h27.6V131c0-21.6,15.3-30.6,33.9-30.6c4.5,0,9,0.6,13.5,1.5v9.9c-4.5-0.9-9-1.5-13.5-1.5
                                                    c-12.6,0-22.5,4.5-22.5,21.6v30.9h32.1v9.9H168V317h-11.4V172.7H129z"/>
                                            </g>
                                            <g className="st1">
                                                <path className="st3" d="M273.8,172.7h-33.6v107.7c0,24.9,11.7,27.3,33.3,26.7v9.9c-23.4,1.5-45.9-1.8-44.7-36.6V172.7h-28.5v-9.9
                                                    h28.5v-48h11.4v48h33.6L273.8,172.7L273.8,172.7z"/>
                                            </g>
                                        </g>
                                    </svg>

                                </div>
                            </a>
                        </div>
                        <div className="header-options desktop-nav" id="myHeaderSpan">
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
                            <svg id="Layer_1" version="1.1" viewBox="0 0 500 500"  xmlns="http://www.w3.org/2000/svg" className="section-svg"><g><g>
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
                            <i className="fa fa-address-book-o contact-book"></i>
                        </section>
                        <a href="/contact" target="_parent">
                            <span id="mySpan3" className={"profile " + (this.state.selectedTab == 'contact-container' ? 'orange-colors' : '')} onClick={(e) => this.goToElement(e, "contact-container", 40, false)}>Contact</span>
                        </a>
                    </section>
                </div>
                <div className="about-wrapper">
                    {/*<div id="triangle-topleft"></div>*/}
                    {/*<div id="triangle-topright"></div>*/}
                    {/*<div id="triangle-bottomleft"></div>*/}
                    {/*<div id="triangle-bottomright"></div>*/}

                    <section className="about-container" id="servicesContainer">
                        <div className="company-info-heading">
                            <span className="motto-txt">WHAT MAKES US DIFFERENT</span>
                            <span className="ceo-txt"> AND YOU HAPPY</span>
                        </div>

                        <div className="services-description">
                            <div className="video-wrapper">
                                <div className={"about-video-container " + (this.state.hideCards ? 'opacity-0' : '')}>
                                    <video autoPlay loop muted>
                                        <source src="../../assets/floratechno.mp4" type="video/mp4"></source>
                                        <source src="../../assets/floratechno.ogg" type="video/ogg"></source>
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div id="myVideo" className={"full-about-video-container " + (this.state.hideCards ? 'show-full-video' : '')}>
                                    <video autoPlay loop className="temp">
                                        <source src="../../assets/floratechno.mp4" type="video/mp4"></source>
                                        <source src="../../assets/floratechno.ogg" type="video/ogg"></source>
                                        Your browser does not support the video tag.
                                    </video>
                                    <i className="fa fa-times close-video" aria-hidden="true" title="Close" onClick={() => this.closeVideo()}></i>
                                </div>
                                <button className={"watch-about-video spin thick " + (this.state.hideCards && 'display-none')} onClick={() => this.showVideo()}>Watch</button>
                            </div>
                            <div className={"about-flip-container " + (this.state.hideCards && 'display-none')}>
                                <div className="flip-container">
                                    <div className="card">
                                        <div className="side">
                                            <div className="about-svg-wrapper">
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                     viewBox="0 0 1212 1043">
                                                    <g id="face">
                                                        <ellipse className="listn-st0" cx="448.4" cy="543.5" rx="370.5" ry="431.5"/>
                                                        <g id="Layer_5">
                                                            <ellipse cx="274.4" cy="484" rx="36" ry="67.5"/>
                                                            <ellipse cx="483.4" cy="410" rx="36" ry="67.5"/>
                                                        </g>
                                                        <path
                                                            d="M363.4,47.5c0,0,155-10,179,56l-82.8,8.7l-96.2,0.3v-21h32v-12L363.4,47.5z"/>
                                                        <ellipse className="listn-st1" cx="276.4" cy="503.5" rx="18" ry="30"/>
                                                        <ellipse className="listn-st1" cx="486.4" cy="433.5" rx="18" ry="30"/>
                                                        <path d="M513.1,31c0,0,143.3,60,135.4,129.8l-78.1-29.1l-86.2-42.5l9.3-18.8l28.7,14.2l5.3-10.7L513.1,31z"/>
                                                        <path d="M283.3,68.2c0,0,84.2-31.7,110-17.6c4.4,2.4,19,11.1,23.8,12.5c16.7,5.1,37.5,17.1,19.9,33.6c-23.3,21.9-45.7,7-45.7,7
                                                    l-6.1-7.7c59.8-4.7,20.9-25.4-89-1.1c0,0,35.6-14.2,43.4-16.2C347.4,76.7,283.3,68.2,283.3,68.2z"/>
                                                    </g>
                                                    <g id="eyebrow">
                                                        <path d="M228.4,432.5c0,0,25-38,44-34s32,16,36,26s1-52-32-52S228.4,432.5,228.4,432.5z"/>
                                                        <path d="M439.4,363.5c0,0,25-38,44-34s32,16,36,26s1-52-32-52S439.4,363.5,439.4,363.5z"/>
                                                    </g>
                                                    <g id="hand">
                                                        <path d="M775.9,414c-3,1-3,4-3,4s-26-9-39-7s-75-56-75-56s34,65,93,92c0,0-16,6-21,12c0,0-50-27-72-53c0,0,32,59,57,67
                                                    c0,0-7,12-4,21c0,0-34-21-53-50c0,0,54,82,76,96c0,0-30,7-34,16c0,0,61,26,81,29s53,59,34,90c0,0,9,52-65,61s-80,0-80,0
                                                    s75,80,145,14c0,0,30-9,49-85c0,0,39,63,127,27c0,0,103,78,158-54s27-257,27-257l-9-32c0,0-14-189-42-203c0,0-16-36-74-6
                                                    c0,0-10-54-59-48c0,0-18-5-42,20c0,0-31-15-57,4s-29,34-29,34s-38,88,38,241c0,0-8,6-8,16s-11,69-11,69s-28-34-46-34
                                                    c0,0,2-38-35-52s-45-18-45-18s-38,7-99-55C658.9,317,689.9,399,775.9,414"/>
                                                        <path className="listn-st2" d="M1146.8,345.9c0,0-5.6-166.8-28.9-189c0,0-8.9-28.9-41.1,0c-32.2,28.9-16.7,107.9-16.7,107.9
                                                    s33.4,154.6,41.1,165.7c7.8,11.1-38.9-23.4-42.3-48.9c-3.3-25.6-57.8-134.5-21.1-225.7c0,0-15.6-54.5-35.6-48.9
                                                    S970,124.6,970,124.6s-24.5,50-6.7,123.4s51.1,131.2,51.1,131.2l45.6,27.8c0,0-47.8-2.2-110.1,5.6l-31.1,6.7
                                                    c0,0,16.7,13.3-31.1,166.8c0,0-11.1-110.1-86.7-117.9c0,0-75.6,11.1-68.9,33.4c6.7,22.2,16.7,25.6,16.7,25.6s18.9,20,65.6,35.6
                                                    c0,0,21.1,3.3,47.8,60c0,0,24.5,53.4,56.7,66.7c32.2,13.3,57.8,0,57.8,0s-23.4-41.1-20-48.9c3.3-7.8,31.1-5.6,31.1-5.6
                                                    s11.1,60,72.3,70.1c61.2,10,90.1-91.2,87.8-91.2c-2.2,0,42.3-95.6,5.6-268"/>
                                                        <path className="listn-st2" d="M935,123.1c0,0-48.2,76.1,45.6,289.1l-46.9,8.9c0,0-88.8-145.8-48.2-271.3C885.5,149.7,899.5,115.5,935,123.1z
                                                    "/>
                                                    </g>
                                                    <g id="smile">
                                                        <path className="listn-st3" d="M319.1,670.9c0,0,123.4,188.3,191.6-36.5"/>
                                                    </g>
                                                </svg>
                                            </div>
                                            <blockquote className="svg-description">
                                                WE ARE GOOD LISTENERS.
                                            </blockquote>
                                        </div>
                                        <div className="side back">
                                            <blockquote className="service-text">We listen to each and every requirement that you bring to us with utmost attention.
                                                We are a customer centric team and your project is our priority.
                                            </blockquote>
                                            {/*<span className="see-more-txt">SEE MORE</span>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-container">
                                    <div className="card">
                                        <div className="side">
                                            <div className="about-svg-wrapper">
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                     viewBox="0 0 944 932">
                                                    <g id="Layer_4">
                                                        <circle className="time-st0" cx="463" cy="481" r="414"/>
                                                    </g>
                                                    <g id="Layer_5">
                                                        <path className="time-st1" d="M170.7,309.5L170.7,309.5c-3.3,5.7-10.7,7.7-16.4,4.4l-22.5-13c-5.7-3.3-7.7-10.7-4.4-16.4h0
                                                c3.3-5.7,10.7-7.7,16.4-4.4l22.5,13C172,296.4,174,303.8,170.7,309.5z"/>
                                                        <path className="time-st1" d="M169.7,652.5L169.7,652.5c3.3,5.7,1.3,13.1-4.4,16.4l-22.5,13c-5.7,3.3-13.1,1.3-16.4-4.4h0
                                                c-3.3-5.7-1.3-13.1,4.4-16.4l22.5-13C159,644.8,166.4,646.8,169.7,652.5z"/>
                                                        <path className="time-st1" d="M295.5,184.7L295.5,184.7c-5.7,3.3-13.1,1.3-16.4-4.4l-13-22.5c-3.3-5.7-1.3-13.1,4.4-16.4l0,0
                                                c5.7-3.3,13.1-1.3,16.4,4.4l13,22.5C303.2,174,301.2,181.4,295.5,184.7z"/>
                                                        <path className="time-st1" d="M654.5,139.3L654.5,139.3c5.7,3.3,7.7,10.7,4.4,16.4l-13,22.5c-3.3,5.7-10.7,7.7-16.4,4.4l0,0
                                                c-5.7-3.3-7.7-10.7-4.4-16.4l13-22.5C641.4,138,648.8,136,654.5,139.3z"/>
                                                        <path className="time-st1" d="M853,483L853,483c0,6.6-5.4,12-12,12h-26c-6.6,0-12-5.4-12-12l0,0c0-6.6,5.4-12,12-12h26
                                                C847.6,471,853,476.4,853,483z"/>
                                                        <path className="time-st1" d="M461,828L461,828c6.6,0,12,5.4,12,12v26c0,6.6-5.4,12-12,12l0,0c-6.6,0-12-5.4-12-12v-26
                                                C449,833.4,454.4,828,461,828z"/>
                                                        <path className="time-st1" d="M295.5,779.3L295.5,779.3c5.7,3.3,7.7,10.7,4.4,16.4l-13,22.5c-3.3,5.7-10.7,7.7-16.4,4.4l0,0
                                                c-5.7-3.3-7.7-10.7-4.4-16.4l13-22.5C282.4,778,289.8,776,295.5,779.3z"/>
                                                        <path className="time-st1" d="M464,88L464,88c6.6,0,12,5.4,12,12v26c0,6.6-5.4,12-12,12l0,0c-6.6,0-12-5.4-12-12v-26
                                                C452,93.4,457.4,88,464,88z"/>
                                                        <path className="time-st1" d="M633.5,782.3L633.5,782.3c5.7-3.3,13.1-1.3,16.4,4.4l13,22.5c3.3,5.7,1.3,13.1-4.4,16.4l0,0
                                                c-5.7,3.3-13.1,1.3-16.4-4.4l-13-22.5C625.8,793,627.8,785.6,633.5,782.3z"/>
                                                        <path className="time-st2" d="M165.6,649.4L165.6,649.4c4.1,5.2,3.2,12.8-1.9,16.9l-20.4,16.2c-5.2,4.1-12.8,3.2-16.9-1.9h0
                                                c-4.1-5.2-3.2-12.8,1.9-16.9l20.4-16.2C153.9,643.4,161.5,644.3,165.6,649.4z"/>
                                                        <path className="time-st1" d="M799.5,285.3L799.5,285.3c3.3,5.7,1.3,13.1-4.4,16.4l-22.5,13c-5.7,3.3-13.1,1.3-16.4-4.4v0
                                                c-3.3-5.7-1.3-13.1,4.4-16.4l22.5-13C788.9,277.6,796.2,279.6,799.5,285.3z"/>
                                                        <path className="time-st1" d="M126.8,480.8L126.8,480.8c0,6.6-5.4,12-12,12h-26c-6.6,0-12-5.4-12-12l0,0c0-6.6,5.4-12,12-12h26
                                                C121.4,468.8,126.8,474.2,126.8,480.8z"/>
                                                        <path className="time-st1" d="M752.5,652.7L752.5,652.7c2.8-6,10-8.5,16-5.7l23.5,11.2c6,2.8,8.5,10,5.7,16h0c-2.8,6-10,8.5-16,5.7
                                                l-23.5-11.2C752.2,665.8,749.7,658.6,752.5,652.7z"/>
                                                        <path className="time-st1" d="M461,488h8c6.6,0,12-5.4,12-12V155c0-6.6-5.4-12-12-12h-8c-6.6,0-12,5.4-12,12v321
                                                C449,482.6,454.4,488,461,488z"/>
                                                        <path className="time-st1 clock-tip" d="M420.2,428.1l-6.9,4c-5.7,3.3-7.7,10.7-4.4,16.4l160.5,278c3.3,5.7,10.7,7.7,16.4,4.4l6.9-4
                                            c5.7-3.3,7.7-10.7,4.4-16.4l-160.5-278C433.3,426.8,425.9,424.8,420.2,428.1z"/>
                                                    </g>
                                                    <g id="Layer_2">
                                                        <path className="time-st3" d="M676,543c-12.8-7.1-13.1-13.1-26-21c-2,18-3.5,42.2-52.5,44.5c-2.2-6.7,32.2,91.3-46,44c0,0,16,44-12,55
                                            s-45-11-45-11s9.9,65.9-35.4,45l17,38.3c6.6-0.3,13.8-1.8,21.3-5.3c0,0,13-2,25-29c0,0,41,14,62-39c0,0,59,3,58-69
                                            C642.5,595.5,677,575,676,543z"/>
                                                        <path className="time-st3" d="M146.8,404.3l107.5-153.6c6.4-9.1,19.1-11.4,28.2-5l66.8,46.7c9.1,6.4,11.4,19.1,5,28.2L246.7,474.3
                                            c-6.4,9.1-19.1,11.4-28.2,5l-66.8-46.7C142.6,426.1,140.4,413.4,146.8,404.3z"/>
                                                        <path className="time-st3" d="M253,488l114-159c0,0,39-8,73,14s217,145,217,145v75l-45,71l-62,43l-63,32l-104-19
                                            c-23.9-21.7-21.8-39.9-33.3-55.4L285,547C285,547,243,526,253,488z"/>
                                                        <path className="time-st3" d="M459.5,695.5c0,0-19,10-11,31c0,0,11.3,9.5,28.5,11.2c-5.8-11.8-10.3-28.8-12.8-39.6
                                            C462.7,697.3,461.1,696.5,459.5,695.5z"/>
                                                    </g>
                                                    <g id="Layer_3">
                                                        <path className="time-st1" d="M785.2,400.3L677.7,246.7c-6.4-9.1-19.1-11.4-28.2-5l-66.8,46.7c-9.1,6.4-11.4,19.1-5,28.2l107.5,153.6
                                            c6.4,9.1,19.1,11.4,28.2,5l66.8-46.7C789.4,422.1,791.6,409.4,785.2,400.3z"/>
                                                        <path className="time-st1" d="M676,543c0,0,20-17,8.5-42.5l-130-188c0,0-8-3-10-2s-92-8-92-8s-5,0-8,5s-53,67-53,67s-5,12-4,15
                                            s16,111,16,111s31,24,51-9s10-86,10-86s45,35,100,32c0,0,8.5,65.5,92.5,90.5c0,0-1,0,0,1l0,0C657.5,525.3,670,543,676,543z"/>
                                                        <path className="time-st1" d="M307.5,515.5c0,0,62-9,47,46c0,0,43-4,37,41c0,0,48-8,44,32c0,0,65-1,38,48c0,0,4,34-26,47s-43-25-43-25
                                            s-58,23-63-42c0,0-56,7-49-53c0,0-52-7-36-62C256.5,547.5,269.5,520.5,307.5,515.5z"/>
                                                    </g>
                                                </svg>
                                            </div>
                                            <blockquote className="svg-description">
                                                WE ALWAYS DELIVER ON THE PROMISE.
                                            </blockquote>
                                        </div>
                                        <div className="side back">
                                            <blockquote className="service-text">We don't belive in making false promise to get you on board. We ensure whats promised
                                                to you gets delivered to you on time without compromising the quality.
                                            </blockquote>
                                            {/*<span className="see-more-txt">SEE MORE</span>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-container">
                                    <div className="card">
                                        <div className="side">
                                            <div className="about-svg-wrapper">
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1080 1080">
                                                    <g id="Layer_1">
                                                        <path className="ino-st0" d="M425.5,830l226-62.5c0,0,7.9-100,55.5-133.3c47.6-33.3,175.5-205,25.8-372.9"/>
                                                        <path className="ino-st0" d="M425.5,769.8c0,0,12.1-96.5-72.3-160.8s-114.5-231.1-10-347.6"/>
                                                        <line className="ino-st0" x1="876.4" y1="386.7" x2="1019.5" y2="389.3"/>
                                                        <line className="ino-st0" x1="144.9" y1="723" x2="247.9" y2="623.6"/>
                                                        <line className="ino-st0" x1="921.2" y1="736.9" x2="821.9" y2="633.8"/>
                                                        <line className="ino-st0" x1="203.6" y1="389.3" x2="60.5" y2="386.7"/>
                                                        <line className="ino-st0" x1="425.5" y1="894.3" x2="658.6" y2="834.1"/>
                                                        <line className="ino-st0" x1="425.5" y1="966.7" x2="658.6" y2="906.4"/>
                                                        <path className="ino-st0" d="M473.7,1002.8c0,0,64.3,72.3,140.7,0"/>
                                                    </g>
                                                    <g id="Layer_5">
                                                        <g>
                                                            <path className="ino-st1" d="M535.2,84.4c-1-2.7-4.8-2.9-6-0.3l-7.5,15.1l19.1,0.9L535.2,84.4z"/>
                                                            <polygon className="ino-st2" points="559.8,152.6 540.9,100 521.7,99.1 496.8,149.4 		"/>

                                                            <rect x="423.3" y="219.7" transform="matrix(4.605458e-02 -0.9989 0.9989 4.605458e-02 248.5791 762.8351)"
                                                                  className="ino-st3" width="200.8" height="63.1"/>
                                                            <path className="st4" d="M491.5,396.9l50.9,2.3c3.3,0.2,6.2-2.4,6.3-5.8l1-22.3l-63-2.9l-1,22.3C485.5,393.9,488.1,396.7,491.5,396.9z"/>
                                                            <rect x="509.6" y="329.1" transform="matrix(4.605458e-02 -0.9989 0.9989 4.605458e-02 134.5099 862.1357)"
                                                                  className="ino-st5" width="18.2" height="63.1"/>
                                                        </g>
                                                    </g>
                                                    <g id="Layer_6">
                                                        <g>
                                                            <path className="ino-st6" d="M402.4,163.8c0,0-5,36-46,35.8c0,0-28.3,2.5-25.5-43.7c0,0-3.7-33.1,21-62.6c0,0,12.7,31.3,29.9,39
			C381.8,132.3,404.6,145.4,402.4,163.8z"/>
                                                            <path className="ino-st7" d="M398.6,204.3c0,0,22.4,38.4,32.8,93.7c0,0,24.3,90.3,15.6,104.3c0,0-1.1,4.5-7.7-4.1c0,0-50-81.4-58.9-110.6
			c0,0-29.3-69.6-22.4-72.2C358,215.4,387.3,215.8,398.6,204.3z"/>
                                                        </g>
                                                    </g>
                                                    <g id="Layer_7">
                                                        <g>
                                                            <path className="ino-st8" d="M573.1,281.8l18.4-25.5l58.7,42.5l-18.4,25.5L573.1,281.8z"/>
                                                            <path className="ino-st9" d="M603.6,263.7l13.2-128.1L748.3,228l-111.9,59.8L603.6,263.7z"/>
                                                            <g>
                                                                <path className="ino-st10" d="M690.1,143.3c4.2-7.8,14.3-10.2,21.5-5.1c7,5,8.3,14.8,2.9,21.4"/>
                                                                <path className="ino-st10" d="M671.9,125.3c13.9-17.5,39.4-20.6,57.1-6.8c16.6,13,20.5,36.5,8.9,54.1"/>
                                                                <path className="ino-st10" d="M653.1,113.8c19.6-24.7,54.4-31.3,81.6-15.3c31.1,18.2,41.2,58.4,22.5,89.2"/>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g id="Layer_4">
                                                        <path className="ino-st11" d="M704.2,434.8L704.2,434.8c-0.6-0.3-0.6-1-0.3-1.3l6-11.8c0.3-0.6,1-0.6,1.3-0.3l0,0c0.6,0.3,0.6,1,0.3,1.3
                                                l-6,11.8C705.5,434.8,704.9,435.1,704.2,434.8z"/>
                                                        <path className="ino-st11" d="M667,434.5L667,434.5c-0.6,0.3-1.3,0-1.6-0.3l-6.7-11.5c-0.3-0.6,0-1.3,0.3-1.6l0,0c0.6-0.3,1.3,0,1.6,0.3
                                                l7,11.8C667.6,433.9,667.6,434.5,667,434.5z"/>
                                                        <path className="ino-st11" d="M645.4,465.4h78.3c0,0-0.6-35-40.1-36C683.5,429.4,647.9,430.4,645.4,465.4z"/>
                                                        <path className="ino-st11" d="M645.7,468.2h77.6v55c0,0,0.3,8.9-7.6,10.5h-8h-52.8c0,0-8,0.3-9.5-8L645.7,468.2z"/>
                                                        <path className="ino-st11" d="M735.4,515L735.4,515c-3.5,0-6.4-2.9-6.4-6.4v-32.1c0-3.5,2.9-6.4,6.4-6.4l0,0c3.5,0,6.4,2.9,6.4,6.4v32.1
                                                C742.1,512.1,738.9,515,735.4,515z"/>
                                                        <path className="ino-st11" d="M699.1,561.5L699.1,561.5c-3.5,0-6.4-2.9-6.4-6.4v-32.5c0-3.5,2.9-6.4,6.4-6.4l0,0c3.5,0,6.4,2.9,6.4,6.4
                                            v32.1C705.5,558.3,702.6,561.5,699.1,561.5z"/>
                                                        <path className="ino-st11" d="M670.2,561.5L670.2,561.5c-3.5,0-6.4-2.9-6.4-6.4v-32.5c0-3.5,2.9-6.4,6.4-6.4l0,0c3.5,0,6.4,2.9,6.4,6.4
                                            v32.1C676.5,558.3,673.7,561.5,670.2,561.5z"/>
                                                        <path className="ino-st11" d="M633.6,516.3L633.6,516.3c-3.5,0-6.4-2.9-6.4-6.4v-32.5c0-3.5,2.9-6.4,6.4-6.4l0,0c3.5,0,6.4,2.9,6.4,6.4
                                            v32.1C640.3,513.1,637.4,516.3,633.6,516.3z"/>
                                                        <circle className="ino-st12" cx="697.9" cy="447.2" r="2.9"/>
                                                        <circle className="ino-st12" cx="669.5" cy="447.2" r="2.9"/>
                                                    </g>
                                                    <g id="Layer_2">
                                                        <g>
                                                            <path className="ino-st13"
                                                                  d="M513.7,585.3c0,0-11.5-4.2-5.4-13.6c0,0,6.6-7.5,13.9-1.8L513.7,585.3z"/>
                                                            <path className="ino-st13" d="M581.3,567.7c0,0,10.9-5.7,15.7,2.7c0,0,7.5,10-4.2,14.2L581.3,567.7z"/>
                                                            <path className="ino-st14" d="M514.9,629c0,0-4.2-3-9.7,3.9c-5.4,6.9,2.7,2.1,2.7,2.1s-6.6,3.9,0,3.3c0,0,4.8-1.2,6.6-3.6
                                                C516.4,632.3,514.9,629,514.9,629z"/>
                                                            <path className="ino-st14" d="M594.2,629c0,0,4.2-3,9.7,3.9c5.4,6.9-2.7,2.1-2.7,2.1s6.6,3.9,0,3.3c0,0-4.8-1.2-6.6-3.6
                                                C592.7,632.3,594.2,629,594.2,629z"/>
                                                            <path className="ino-st14" d="M529.3,690.9l-6.9-4.5c0,0-9.7,5.7-6,9.4l2.1-1.5c0,0-3.9,3.6,1.5,3.9L529.3,690.9z"/>
                                                            <path className="ino-st14" d="M578.2,690.9l6.9-4.5c0,0,9.7,5.7,6,9.4l-2.1-1.5c0,0,3.9,3.6-1.5,3.9L578.2,690.9z"/>
                                                            <path className="ino-st13" d="M512.4,651.4c0,0-1.2,17.8,2.7,25.1c0,0,5.1,11.5,15.4,15.1c0,0,13.3,5.4,24.4,4.2c0,0,19.9,0,29.3-8.8
                                                c0,0,10.9-7.5,12.1-24.1c0,0,1.2-14.5,0.6-16.6l-1.5-26.9c0,0,2.1-14.8-2.4-34.4c0,0-3-20.8-26.9-23.8c-23.8-3-38.3,5.1-38.3,5.1
                                                s-10,3.9-13.9,19c-3.9,15.1-0.3,34.4-0.3,34.4s-0.3,4.2,0.3,6.3C513.7,626,512.4,649.8,512.4,651.4z"/>
                                                            <path className="ino-st15" d="M555.3,597c-0.6,0-1.5,0.6-1.8,1.5c-0.6-0.9-1.2-1.5-1.8-1.5c-1.5,0-2.4,1.8-2.4,4.2c0,2.4,1.2,4.2,2.4,4.2
                                                c0.6,0,1.5-0.6,1.8-1.5c0.6,0.9,1.2,1.5,1.8,1.5c1.5,0,2.4-1.8,2.4-4.2C557.7,598.8,556.8,597,555.3,597z"/>
                                                            <ellipse className="ino-st16" cx="536" cy="580.7" rx="13.6" ry="12.7"/>
                                                            <ellipse className="ino-st16" cx="569.2" cy="580.1" rx="13.6" ry="12.7"/>
                                                            <circle className="ino-st17" cx="530.6" cy="581.6" r="4.2"/>
                                                            <circle className="ino-st17" cx="563.5" cy="580.4" r="3.9"/>
                                                            <ellipse className="ino-st17" cx="553.5" cy="592.8" rx="6" ry="3.6"/>
                                                            <path className="ino-st14" d="M546.9,592.8c0,0-8.8,5.7,0,8.1l6-1.5c0,0,4.8,0,6,1.5s8.5-1.8,2.7-7.2l-2.7-0.9H546.9z"/>
                                                            <path className="ino-st18" d="M547.5,600.9"/>
                                                            <path className="ino-st17" d="M586.7,572.3c0,0,4.3-2.3,6.3,1.1c0,0,3,4-1.7,5.7L586.7,572.3z"/>
                                                            <path className="ino-st17" d="M513.9,581.2c0,0-6.2-2.3-2.9-7.3c0,0,3.6-4.1,7.5-1L513.9,581.2z"/>
                                                        </g>
                                                    </g>
                                                    <g id="Layer_3">
                                                        <g>
                                                            <ellipse className="ino-st19" cx="394.8" cy="511.6" rx="64.2" ry="18.7"/>
                                                            <path className="ino-st19" d="M353.9,453.1c7-6.2,31,15.2,53.6,47.7s35.3,63.8,28.3,70s-31-15.2-53.6-47.7S346.9,459.2,353.9,453.1z"/>
                                                            <path className="ino-st19" d="M382.2,500.7c22.6-32.5,46.6-53.8,53.6-47.7c7,6.2-5.7,37.5-28.3,70c-22.6,32.5-46.6,53.8-53.6,47.7
			C346.9,564.5,359.5,533.2,382.2,500.7z"/>
                                                            <ellipse className="ino-st19" cx="394.8" cy="511.6" rx="4.3" ry="4.8"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <blockquote className="svg-description">
                                                WE BRING INNOVATION.
                                            </blockquote>
                                        </div>
                                        <div className="side back">
                                            <blockquote className="service-text">
                                                We have a reputation of never coming to you with the same concept twice.
                                                We prepare the newest templates just for you like no other in the market.
                                            </blockquote>
                                            {/*<span className="see-more-txt">SEE MORE</span>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-container">
                                    <div className="card">
                                        <div className="side">
                                            <div className="built-svg about-svg-wrapper"></div>
                                            <blockquote className="svg-description">
                                                WE ARE BUILT TO LAST.
                                            </blockquote>
                                        </div>
                                        <div className="side back">
                                            <blockquote className="service-text">
                                                Present is passe already. We are all about the future. Even though we are working now, we are keeping in
                                                mind the future- pushing to give you something that will still be of great value ahead in time.
                                            </blockquote>
                                            {/*<span className="see-more-txt">SEE MORE</span>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <div className="company-info-container">
                        <div className="about-technology">
                            <h5> Technologies We Use </h5>
                            <div className="our-technology">
                                <section>
                                    <p>FRONT END</p>
                                    <div className="techo-div">
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                                    <path d="M11.1,47.7H8.6c0,0-2.3-0.4-2.5-2.6V4.7c0,0-0.1-2.8,2.8-3.1h20l12.2,11.8v21.3L11.1,47.7z"/>
                                                    <path className="ht-st0" d="M29.4,4.4l8.9,8.5h-7.2c0,0-1.8,0.2-1.7-1.4S29.4,4.4,29.4,4.4z"/>
                                                    <path d="M21.9,30.9L21.9,30.9c-0.3-0.1-0.5-0.4-0.4-0.8l3.4-11.4c0.1-0.3,0.4-0.5,0.8-0.4h0c0.3,0.1,0.5,0.4,0.4,0.8l-3.4,11.4
                                            C22.5,30.8,22.2,31,21.9,30.9z"/>
                                                    <path d="M20.8,25.4l-3.5-3.1l4.5-2c0.4-0.2,0.6-0.6,0.4-1c-0.2-0.4-0.6-0.6-1-0.4l-5.3,2.3c-0.1,0-0.2,0.1-0.3,0.2
                                            c-0.1,0-0.1,0.1-0.2,0.1l0,0c-0.2,0.3-0.2,0.7,0.1,0.9l4.4,3.9c0.3,0.2,0.7,0.2,0.9-0.1C21.1,26.1,21.1,25.7,20.8,25.4z"/>
                                                    <path d="M25.7,27.5l4.5-1.3l-3.3-3.7c-0.3-0.3-0.2-0.8,0.1-1.1c0.3-0.3,0.8-0.2,1.1,0.1l3.8,4.3c0.1,0.1,0.1,0.2,0.2,0.3
                                            c0,0.1,0.1,0.1,0.1,0.2v0c0.1,0.3-0.1,0.7-0.4,0.8l-5.6,1.6c-0.3,0.1-0.7-0.1-0.8-0.4C25.2,27.9,25.4,27.6,25.7,27.5z"/>
                                                    <path d="M38.7,49.6H14.3c-2.4,0-4.3-1.9-4.3-4.3v-7.1c0-2.4,1.9-4.3,4.3-4.3h24.4c2.4,0,4.3,1.9,4.3,4.3v7.1
                                            C43,47.7,41.1,49.6,38.7,49.6z"/>
                                                    <rect x="16.2" y="44.7" width="1.5" height="1.5"/>
                                                    <polygon className="ht-st1" points="24,41.9 29.5,41.9 29.5,41.9 24,41.9 "/>
                                                    <g>
                                                        <g>
                                                            <path d="M20.7,38.4v2.2c0.2-0.3,0.5-0.5,1.1-0.5c0.9,0,1.2,0.6,1.2,1.5v3.6h-1.5v-3.3c0-0.4-0.1-0.6-0.4-0.6
                                            c-0.4,0-0.5,0.3-0.5,0.8v3.2h-1.5v-6.8H20.7z"/>
                                                            <path d="M23.5,40.2h0.6V39h1.4v1.2h0.7v1.2h-0.7v2.4c0,0.3,0.1,0.4,0.4,0.4c0.1,0,0.1,0,0.2,0v1.1c-0.3,0.1-0.6,0.1-0.8,0.1
                                            c-0.9,0-1.3-0.4-1.3-1.3v-2.7h-0.6V40.2z"/>
                                                            <path d="M26.8,41.7c0-1,0-1.3,0-1.6h1.4c0,0.1,0,0.3,0,0.5c0.2-0.4,0.6-0.5,1.1-0.5c0.6,0,0.9,0.3,1,0.6c0.2-0.3,0.6-0.6,1.2-0.6
                                            c0.8,0,1.3,0.5,1.3,1.5v3.6h-1.4v-3.4c0-0.3-0.1-0.5-0.4-0.5c-0.3,0-0.5,0.2-0.5,0.7v3.2h-1.4v-3.4c0-0.4-0.1-0.5-0.4-0.5
                                            c-0.3,0-0.5,0.2-0.5,0.7v3.2h-1.4V41.7z"/>
                                                            <path d="M33.6,45.2v-6.8h1.5v6.8H33.6z"/>
                                                        </g>
                                                    </g>
                                                    <rect x="12" y="36" className="ht-st0" width="29" height="12"/>
                                                    <path className="ht-st2" d="M10.7,47.5H8.5c0,0-2.5-0.6-2.8-2.9V3.9c0,0,1-2.6,3-2.6h19.8l12.4,11.9v21.4L10.7,47.5z"/>
                                                    <path className="ht-st3" d="M29,4.1l8.9,8.5h-7.2c0,0-1.8,0.2-1.7-1.4S29,4.1,29,4.1z"/>
                                                    <path className="ht-st0" d="M10.5,45.7H8.4c0,0-1.2-0.2-1-2.2v-39c0,0,0.5-2.2,2.4-1.7l17.4-0.1l0.4,9.1c0,0,0.8,2.5,3,2.3l8.6,0.1v20.2
                                            L10.5,45.7z"/>
                                                    <path d="M21.4,30.6L21.4,30.6c-0.3-0.1-0.5-0.4-0.4-0.8l3.4-11.4c0.1-0.3,0.4-0.5,0.8-0.4l0,0c0.3,0.1,0.5,0.4,0.4,0.8l-3.4,11.4
                                            C22.1,30.5,21.8,30.7,21.4,30.6z"/>
                                                    <path d="M20.4,25.1L16.9,22l4.5-2c0.4-0.2,0.6-0.6,0.4-1s-0.6-0.6-1-0.4l-5.3,2.3c-0.1,0-0.2,0.1-0.3,0.2c-0.1,0-0.1,0.1-0.2,0.1
                                            l0,0c-0.2,0.3-0.2,0.7,0.1,0.9l4.4,3.9c0.3,0.2,0.7,0.2,0.9-0.1C20.7,25.8,20.6,25.3,20.4,25.1z"/>
                                                    <path d="M25.3,27.2l4.5-1.3l-3.3-3.7c-0.3-0.3-0.2-0.8,0.1-1.1c0.3-0.3,0.8-0.2,1.1,0.1l3.8,4.3c0.1,0.1,0.1,0.2,0.2,0.3
                                            c0,0.1,0.1,0.1,0.1,0.2l0,0c0.1,0.3-0.1,0.7-0.4,0.8l-5.6,1.6c-0.3,0.1-0.7-0.1-0.8-0.4C24.8,27.6,25,27.3,25.3,27.2z"/>
                                                    <path d="M40,50.3H14c-2.4,0-4.3-2-4.3-4.3v-7c0-2.4,2-4.3,4.3-4.3h26c2.4,0,4.3,2,4.3,4.3v7C44.3,48.3,42.4,50.3,40,50.3z"/>
                                                    <path className="ht-st0" d="M15.1,48.5h24.2c1.9,0,3.4-1.5,3.4-3.4v-5.4c0-1.9-1.5-3.4-3.4-3.4H15.1c-1.9,0-3.4,1.5-3.4,3.4v5.4
                                            C11.6,47,13.2,48.5,15.1,48.5z"/>
                                                    <rect x="15.8" y="44.4" width="1.5" height="1.5"/>
                                                    <polygon className="ht-st1" points="22.6,41.6 28.1,41.6 28.1,41.6 "/>
                                                    <g>
                                                        <g>
                                                            <path d="M20.2,38.4v2.2c0.2-0.3,0.6-0.5,1.3-0.5c1,0,1.4,0.6,1.4,1.5v3.6h-1.7v-3.3c0-0.4-0.1-0.6-0.5-0.6c-0.4,0-0.5,0.3-0.5,0.8
                                                v3.2h-1.7v-6.8H20.2z"/>
                                                            <path d="M23.3,40.1H24v-1.2h1.7v1.2h0.8v1.2h-0.8v2.4c0,0.3,0.1,0.4,0.4,0.4c0.1,0,0.2,0,0.3,0v1.1c-0.3,0.1-0.7,0.1-0.9,0.1
                                                c-1.1,0-1.4-0.4-1.4-1.3v-2.7h-0.7V40.1z"/>
                                                            <path d="M27.1,41.7c0-1,0-1.3,0-1.6h1.6c0,0.1,0,0.3,0,0.5C29,40.2,29.4,40,30,40c0.7,0,1,0.3,1.2,0.6c0.2-0.3,0.7-0.6,1.4-0.6
                                                c0.9,0,1.5,0.5,1.5,1.5v3.6h-1.6v-3.4c0-0.3-0.1-0.5-0.4-0.5c-0.4,0-0.5,0.2-0.5,0.7v3.2h-1.7v-3.4c0-0.4-0.1-0.5-0.4-0.5
                                                c-0.4,0-0.5,0.2-0.5,0.7v3.2h-1.7V41.7z"/>
                                                            <path d="M35,45.2v-6.8h1.7v6.8H35z"/>
                                                        </g>
                                                    </g>
                                                    <polygon className="ht-st1" points="26,43 18.7,43 18.7,43 26,43 "/>
                                                </svg>
                                            </div>
                                            <label> HTML </label>
                                        </section>
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                                    <path className="css-st0" d="M9.6,50.2c0,0-1.9-0.2-1.9-1.9s0-45.7,0-45.7s0-1.9,1.9-1.9l23.7,0l10.1,11.2l0.2,35.6v0.8c0,0,0,1.6-1.9,1.9H9.6z"/>
                                                    <path className="css-st0" d="M54.9,13.1"/>
                                                    <path className="css-st1" d="M9.6,33.6V2.6h22.5v9.9c0,0-0.1,1,1,1h8.6v20.1H9.6z"/>
                                                    <path className="css-st2" d="M19.2,20.2l0.4-0.2c0,0,1.1-0.5,1.1-2.1c0,0,0-1.4-0.1-1.5c-0.1-0.1-0.3-1.9-0.2-1.9c0,0,0-1.8,2-1.5v-1.2
                                            c0,0-1.9-0.1-2.7,0.7c0,0-1.1,0.8-0.8,2.8c0,0,0.4,2.4,0.3,2.5c-0.1,0.1,0.4,1.9-1.7,1.8v1.1c0,0,1.5-0.2,1.7,1.3c0,0,0,1.2-0.1,1.3
                                            c0,0-0.5,2.9-0.2,3.2c0,0,0.2,2.4,3.5,2.1v-1.2c0,0-2.2,0.4-2.1-2l0.3-2.3C20.7,23.1,21.2,20.9,19.2,20.2z"/>
                                                    <path className="css-st2" d="M31.3,20.2L30.9,20c0,0-1.1-0.5-1.1-2.1c0,0,0-1.4,0.1-1.5c0.1-0.1,0.3-1.9,0.2-1.9c0,0,0-1.8-2-1.5v-1.2
                                            c0,0,1.9-0.1,2.7,0.7c0,0,1.1,0.8,0.8,2.8c0,0-0.4,2.4-0.3,2.5c0.1,0.1-0.4,1.9,1.7,1.8v1.1c0,0-1.5-0.2-1.7,1.3c0,0,0,1.2,0.1,1.3
                                            c0,0,0.5,2.9,0.2,3.2c0,0-0.2,2.4-3.5,2.1v-1.2c0,0,2.2,0.4,2.1-2l-0.3-2.3C29.8,23.1,29.3,20.9,31.3,20.2z"/>
                                                    <g>
                                                        <g>
                                                            <path className="css-st1" d="M22.4,42.9c0,1-0.4,2.6-2.7,2.6c-2.2,0-2.7-1.6-2.7-3.7c0-2.2,0.8-3.6,2.8-3.6c2.3,0,2.5,1.8,2.6,2.6h-2
                                                    c0-0.5,0-1-0.6-1c-0.5,0-0.7,0.5-0.7,2.1c0,1.6,0.1,2.2,0.7,2.2c0.5,0,0.6-0.5,0.6-1.1H22.4z"/>
                                                            <path className="css-st1" d="M24.8,43.2c0,0.4,0.2,0.9,0.7,0.9c0.4,0,0.6-0.2,0.6-0.6c0-0.4-0.2-0.6-1-0.9C23.5,42,23,41.4,23,40.3
                                                    c0-1.1,0.7-2.1,2.4-2.1c2.1,0,2.5,1.3,2.5,2.2h-1.9c0-0.3,0-0.8-0.6-0.8c-0.3,0-0.5,0.2-0.5,0.5c0,0.4,0.2,0.6,1,0.8
                                                    c1.5,0.6,2.1,1.2,2.1,2.3c0,1.4-0.8,2.3-2.6,2.3c-1.9,0-2.6-1.1-2.6-2.3H24.8z"/>
                                                            <path className="css-st1" d="M30.6,43.2c0,0.4,0.2,0.9,0.7,0.9c0.4,0,0.6-0.2,0.6-0.6c0-0.4-0.2-0.6-1-0.9c-1.6-0.6-2.1-1.2-2.1-2.3
                                                    c0-1.1,0.7-2.1,2.4-2.1c2.1,0,2.5,1.3,2.5,2.2h-1.9c0-0.3,0-0.8-0.6-0.8c-0.3,0-0.5,0.2-0.5,0.5c0,0.4,0.2,0.6,1,0.8
                                                    c1.5,0.6,2.1,1.2,2.1,2.3c0,1.4-0.8,2.3-2.6,2.3c-1.9,0-2.6-1.1-2.6-2.3H30.6z"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <label> CSS </label>
                                        </section>
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                                    <g>
                                                        <g> </g>
                                                    </g>
                                                    <g>
                                                        <g>
                                                            <path d="M13.2,4.6h13.5C33.9,4.6,38,8.3,38,15c0,5.1-2.3,7.4-4.8,8.4c2.9,1.2,5.9,3.7,5.9,9.7c0,8-4.9,12-12.7,12H13.2V4.6z
                                                     M24.7,20.4c3.4,0,4.2-1.4,4.2-4.5c0-3.2-1.3-4.5-4.1-4.5h-2.6v9H24.7z M22.2,38.4h2.9c2.9,0,4.4-1.4,4.4-5.6
                                                    c0-4.1-1.2-5.8-4.9-5.8h-2.4V38.4z"/>
                                                        </g>
                                                    </g>
                                                    <g>
                                                        <g> </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <label> Bootstrap </label>
                                        </section>
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                                <path d="M7.1,35.2c0,0-1.1-0.3-1-1.5L3,9c0,0-0.4-1.4,0.8-1.5l18.8-6.6l1.1-0.4L43,7l1,0.4c0,0,1.4-0.1,0.6,2.5l-2.7,23.3
                                                c0,0,0.5,1.6-1.4,2L24.7,44c0,0-0.6,1-2.1-0.2L7.1,35.2z"/>
                                                <path className="angular-st0" d="M9.1,33.5c0,0-1-0.2-0.9-1.3L5.6,10.4c0,0-0.4-1.2,0.7-1.3l16.5-5.8l1-0.4l16.9,5.7L41.6,9c0,0,1.3-0.1,0.5,2.2
                                                l-2.4,20.5c0,0,0.4,1.4-1.3,1.8l-13.9,7.6c0,0-0.5,0.8-1.8-0.2L9.1,33.5z"/>
                                                <g>
                                                    <g>
                                                        <path d="M22.5,24.9l-0.6,3.5h-3.7l3.2-16.2h5.2l3.2,16.2H26l-0.6-3.5H22.5z M24.9,21.8c-0.4-2.4-0.7-5-0.9-6.5h-0.1
                                                        c-0.2,1.6-0.6,4.1-0.9,6.5H24.9z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                            </div>
                                            <label> Angular </label>
                                        </section>
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                                <path className="js-st0" d="M11.7,47.5H9.5c0,0-2.5-0.6-2.8-2.9V3.9c0,0,1-2.6,3-2.6h19.8l12.4,11.9v21.4L11.7,47.5z"/>
                                                <path className="js-st3" d="M30,4.1l8.9,8.5h-7.2c0,0-1.8,0.2-1.7-1.4S30,4.1,30,4.1z"/>
                                                <path className="js-st1" d="M11.5,45.7H9.4c0,0-1.2-0.2-1-2.2l0-39c0,0,0.5-2.2,2.4-1.7l17.4-0.1l0.4,9.1c0,0,0.8,2.5,3,2.3l8.6,0.1v20.2
                                        L11.5,45.7z"/>
                                                <path d="M22.4,30.6L22.4,30.6c-0.3-0.1-0.5-0.4-0.4-0.8l3.4-11.4c0.1-0.3,0.4-0.5,0.8-0.4l0,0c0.3,0.1,0.5,0.4,0.4,0.8l-3.4,11.4
                                        C23.1,30.5,22.8,30.7,22.4,30.6z"/>
                                                <path d="M21.4,25.1L17.9,22l4.5-2c0.4-0.2,0.6-0.6,0.4-1c-0.2-0.4-0.6-0.6-1-0.4l-5.3,2.3c-0.1,0-0.2,0.1-0.3,0.2
                                        c-0.1,0-0.1,0.1-0.2,0.1l0,0c-0.2,0.3-0.2,0.7,0.1,0.9l4.4,3.9c0.3,0.2,0.7,0.2,0.9-0.1C21.7,25.8,21.6,25.3,21.4,25.1z"/>
                                                <path d="M26.3,27.2l4.5-1.3l-3.3-3.7c-0.3-0.3-0.2-0.8,0.1-1.1c0.3-0.3,0.8-0.2,1.1,0.1l3.8,4.3c0.1,0.1,0.1,0.2,0.2,0.3
                                        c0,0.1,0.1,0.1,0.1,0.2v0c0.1,0.3-0.1,0.7-0.4,0.8l-5.6,1.6c-0.3,0.1-0.7-0.1-0.8-0.4C25.8,27.6,26,27.3,26.3,27.2z"/>
                                                <path d="M41,50.3H15c-2.4,0-4.3-2-4.3-4.3v-7c0-2.4,2-4.3,4.3-4.3h26c2.4,0,4.3,2,4.3,4.3v7C45.3,48.3,43.4,50.3,41,50.3z"/>
                                                <path className="js-st1" d="M16.1,48.5h24.2c1.9,0,3.4-1.5,3.4-3.4v-5.4c0-1.9-1.5-3.4-3.4-3.4H16.1c-1.9,0-3.4,1.5-3.4,3.4v5.4
                                        C12.6,47,14.2,48.5,16.1,48.5z"/>
                                                <rect x="16.8" y="44.4" width="1.5" height="1.5"/>
                                                <g>
                                                    <g>
                                                        <path d="M22.4,44.1c0,1.2-0.3,1.9-1.7,1.9c-0.3,0-0.5,0-0.7-0.1v-1.2c0.1,0,0.2,0,0.4,0c0.4,0,0.5-0.2,0.5-0.6v-4.8h1.5V44.1z"/>
                                                        <path d="M24.5,44c0,0.5,0.2,0.9,0.6,0.9c0.4,0,0.6-0.3,0.6-0.7c0-0.4-0.2-0.7-1-1.1c-1.1-0.6-1.6-1.1-1.6-2c0-1.1,0.7-1.8,2-1.8
                                                c1.5,0,1.9,0.9,2,1.9h-1.4c0-0.5-0.1-0.8-0.5-0.8c-0.3,0-0.5,0.2-0.5,0.6c0,0.4,0.1,0.6,0.8,0.9c1.2,0.6,1.7,1.1,1.7,2.2
                                                c0,1.1-0.6,1.9-2.1,1.9c-1.6,0-2.1-0.9-2.1-2H24.5z"/>
                                                    </g>
                                                </g>
                                                <polygon className="js-st2" points="23.6,41.6 29.1,41.6 29.1,41.6 23.6,41.6 "/>
                                            </svg>
                                            </div>
                                            <label> JavaScript </label>
                                        </section>
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                                    <path className="jq-st0" d="M9.3,7.9c0,0-5.6,5.7-4.6,13.1c0,0,0.8,6.9,5.2,11.1c0,0,3.5,3.5,4.2,3.6c0,0,8.8,6,17.6,2.9
                                            c0,0,5.8-1.6,8.9-8.2c0,0-6.8,5.2-14.9,3.5c0,0-11.7-3-15.7-12.2C10.1,21.7,7,16.7,9.3,7.9z"/>
                                                    <path className="jq-st0" d="M41.5,19.9c0,0-2.3,5.2-7.4,6.4c0,0-4.8,1.3-8.6-0.5c0,0-3.2-1.4-3.5-1.9c0,0-6.2-4.2-6.5-10.8c0,0-0.4-4.2,3-8
                                            c0,0-1.7,5.8,1.6,10.7c0,0,5,6.9,12.1,7.1C32.2,23,36.3,23.8,41.5,19.9z"/>
                                                    <path className="jq-st0" d="M41.5,11.5c0,0-1.5,3.4-4.8,4.2c0,0-3.1,0.8-5.6-0.4c0,0-2.1-0.9-2.2-1.2c0,0-4.1-2.7-4.2-7c0,0-0.3-2.7,2-5.2
                                            c0,0-1.1,3.8,1,7c0,0,3.3,4.5,7.9,4.6C35.4,13.5,38.1,14,41.5,11.5z"/>
                                                </svg>
                                            </div>
                                            <label> JQuery </label>
                                        </section>
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                                    <ellipse className="react-st0" cx="25" cy="24.3" rx="24" ry="6.2"/>
                                                    <ellipse transform="matrix(0.787 -0.6169 0.6169 0.787 -9.7167 20.6039)" className="react-st0" cx="25" cy="24.4" rx="6" ry="24.8"/>
                                                    <ellipse transform="matrix(0.6169 -0.787 0.787 0.6169 -9.6134 28.9983)" className="react-st0" cx="25" cy="24.4" rx="24.8" ry="6"/>
                                                    <ellipse cx="25" cy="24.3" rx="1.6" ry="1.6"/>
                                                </svg>
                                            </div>
                                            <label> ReactJS </label>
                                        </section>
                                    </div>

                                </section>
                                <section className="our-technology-margin padding-top-16px">
                                    <p>BACK END</p>
                                    <div className="techo-div">
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                                <path className="go-st0" d="M12,10.7c0,0-3.8-1.4-1.8-4.5c0,0,2.2-2.5,4.6-0.6L12,10.7z"/>
                                                <path className="go-st0" d="M34.4,4.9c0,0,3.6-1.9,5.2,0.9c0,0,2.5,3.3-1.4,4.7L34.4,4.9z"/>
                                                <path className="go-st0" d="M12.4,25.2c0,0-1.4-1-3.2,1.3s0.9,0.7,0.9,0.7s-2.2,1.3,0,1.1c0,0,1.6-0.4,2.2-1.2S12.4,25.2,12.4,25.2z"/>
                                                <path className="go-st0" d="M38.7,25.2c0,0,1.4-1,3.2,1.3s-0.9,0.7-0.9,0.7s2.2,1.3,0,1.1c0,0-1.6-0.4-2.2-1.2S38.7,25.2,38.7,25.2z"/>
                                                <path className="go-st0" d="M17.2,45.7l-2.3-1.5c0,0-3.2,1.9-2,3.1l0.7-0.5c0,0-1.3,1.2,0.5,1.3L17.2,45.7z"/>
                                                <path className="go-st0" d="M33.4,45.7l2.3-1.5c0,0,3.2,1.9,2,3.1L37,46.8c0,0,1.3,1.2-0.5,1.3L33.4,45.7z"/>
                                                <path className="go-st1" d="M11.6,32.6c0,0-0.4,5.9,0.9,8.3c0,0,1.7,3.8,5.1,5c0,0,4.4,1.8,8.1,1.4c0,0,6.6,0,9.7-2.9c0,0,3.6-2.5,4-8
                                            c0,0,0.4-4.8,0.2-5.5l-0.5-8.9c0,0,0.7-4.9-0.8-11.4c0,0-1-6.9-8.9-7.9S16.7,4.4,16.7,4.4s-3.3,1.3-4.6,6.3s-0.1,11.4-0.1,11.4
                                            s-0.1,1.4,0.1,2.1C12,24.2,11.6,32.1,11.6,32.6z"/>
                                                <path className="go-st0" d="M25.8,14.6c-0.2,0-0.5,0.2-0.6,0.5c-0.2-0.3-0.4-0.5-0.6-0.5c-0.5,0-0.8,0.6-0.8,1.4c0,0.8,0.4,1.4,0.8,1.4
                                            c0.2,0,0.5-0.2,0.6-0.5c0.2,0.3,0.4,0.5,0.6,0.5c0.5,0,0.8-0.6,0.8-1.4C26.6,15.2,26.3,14.6,25.8,14.6z"/>
                                                <ellipse className="go-st1" cx="19.4" cy="9.2" rx="4.5" ry="4.2"/>
                                                <ellipse className="go-st1" cx="30.4" cy="9" rx="4.5" ry="4.2"/>
                                                <circle className="go-st2" cx="17.6" cy="9.5" r="1.4"/>
                                                <circle className="go-st2" cx="28.5" cy="9.1" r="1.3"/>
                                                <ellipse className="go-st2" cx="25.2" cy="13.2" rx="2" ry="1.2"/>
                                                <path className="go-st2" d="M23,13.2c0,0-2.9,1.9,0,2.7l2-0.5c0,0,1.6,0,2,0.5c0.4,0.5,2.8-0.6,0.9-2.4L27,13.2H23z"/>
                                                <path className="go-st3" d="M23.2,15.9"/>
                                            </svg>
                                            </div>
                                            <label> GOLANG </label>
                                        </section>
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                                    <path d="M9.8,49.4c0,0-1.4,0.1-1.9-1.6l0-46.1c0,0-0.1-1.2,1.4-1.9l24.3,0l10,11.2l0.2,35.9c0,0,0.8,2.5-1.9,2.5
                            C39.1,49.4,9.8,49.4,9.8,49.4z"/>
                                                    <path className="php-st0" d="M9.8,46.9V1.8h22.5v9.6c0,0-0.3,1.6,1.7,1.3h7.9l0,34.2H9.8z"/>
                                                    <g>
                                                        <g>
                                                            <path d="M19.8,27.4V30h-1.8v-6.7c0-0.8,0-1.4,0-1.8h1.8c0,0.2,0,0.4,0.1,0.6c0.2-0.4,0.5-0.8,1.4-0.8c1.1,0,1.8,0.9,1.8,3.2
                                    c0,2.5-0.8,3.4-2,3.4C20.4,28,20,27.7,19.8,27.4z M21,24.6c0-1.5-0.2-1.8-0.7-1.8c-0.5,0-0.6,0.5-0.6,1.7c0,1.4,0.1,1.9,0.6,1.9
                                    C20.8,26.5,21,26.1,21,24.6z"/>
                                                            <path d="M25.6,19.4v2.7c0.2-0.4,0.7-0.7,1.4-0.7c1.1,0,1.6,0.7,1.6,1.9v4.5h-1.8v-4.2c0-0.5-0.1-0.8-0.5-0.8c-0.5,0-0.6,0.3-0.6,1
                                    v4h-1.8v-8.5H25.6z"/>
                                                            <path d="M31.4,27.4V30h-1.8v-6.7c0-0.8,0-1.4,0-1.8h1.8c0,0.2,0,0.4,0.1,0.6c0.2-0.4,0.5-0.8,1.4-0.8c1.1,0,1.8,0.9,1.8,3.2
                                    c0,2.5-0.8,3.4-2,3.4C32,28,31.6,27.7,31.4,27.4z M32.7,24.6c0-1.5-0.2-1.8-0.7-1.8c-0.5,0-0.6,0.5-0.6,1.7c0,1.4,0.1,1.9,0.6,1.9
                                    C32.5,26.5,32.7,26.1,32.7,24.6z"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <label> PHP </label>
                                        </section>
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                                    <path className="net-st0" d="M1,34.4c0,0,5.5-16.5,12.4-17.3H25c0,0,3-2,5.9,10.9l0.9,2.7l3.7-10c0,0,1.3-3.8,4.7-3.7l8.7,0l-5.4,8.6
                                            c0,0-4.8,8.1-8.1,8.2l-11,0.5c0,0-3.4,0.6-5.9-10.4c0,0-0.5-3-1.1-3.2c-0.5-0.2-1,0-1,0s-3.7,5.3-4.8,10.7c0,0-2.4,2.9-4.1,2.9
                                            C5.7,34.4,1,34.4,1,34.4z"/>
                                                    <path className="net-st0" d="M60.3,24.3"/>
                                                </svg>
                                            </div>
                                            <label> .NET </label>
                                        </section>
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                                <path className="py-st0" d="M40.2,45.9H12.7c0,0-2.9,0.4-2.5-2.3V3.7c0,0,0.5-2.1,2.4-1.7l20.6,0.1l8.6,9.8L42,43.5
                                                C42,43.5,42.3,45.9,40.2,45.9z"/>
                                                <polygon className="py-st1" points="11.9,3.7 11.9,31.2 40.2,31.2 40.2,13.4 31.7,13.3 31.8,3.7 "/>
                                                <path d="M20.6,21.6l0.1-2.1c0,0,0.8-1.9,2.4-1.9l4.4,0c0,0,1.8-0.3,1.8-1.9c0-1.6-0.1-4.4-0.1-4.4s-0.4-1.5-2.3-1.6
                                                c-1.8-0.1-4,0.1-4,0.1s-1.7,0.3-1.7,1.7l0,1.4c0,0,0.1,0.4,0.4,0.4c0.4,0,3.3,0,3.3,0s0.8,0.6-0.1,0.6s-5.7,0-5.7,0
                                                s-3.2,0.2-2.1,5.6c0,0,0.1,1.8,1.6,2.5l1.7,0L20.6,21.6z"/>
                                                <path d="M30.1,15.4l-0.1,2.1c0,0-0.8,1.9-2.4,1.9l-4.4,0c0,0-1.8,0.3-1.8,1.9c0,1.6,0.1,4.4,0.1,4.4s0.4,1.5,2.3,1.6s4-0.1,4-0.1
                                                s1.7-0.3,1.7-1.7l0-1.4c0,0-0.1-0.4-0.4-0.4c-0.4,0-3.3,0-3.3,0s-0.8-0.6,0.1-0.6c0.9,0,5.7,0,5.7,0s3.2-0.2,2.1-5.6
                                                c0,0-0.1-1.8-1.6-2.5l-1.7,0L30.1,15.4z"/>
                                                <circle className="py-st1" cx="23.9" cy="11.5" r="0.7"/>
                                                <circle className="py-st1" cx="27.9" cy="25.5" r="0.7"/>
                                                <g>
                                                    <g>
                                                        <path className="py-st1" d="M20.7,34.9h3.2c1.7,0,2.9,0.9,2.9,2.9c0,2-1.1,3-3,3h-0.9v3.8h-2.2V34.9z M22.9,39.1h0.6
                                                        c0.8,0,1.1-0.4,1.1-1.3c0-0.9-0.4-1.3-1-1.3h-0.6V39.1z"/>
                                                        <path className="py-st1" d="M29.3,44.6v-3.2c0-0.1,0-0.3-0.1-0.4l-2.3-6.1h2.5c0.4,1.5,0.8,3.2,1.1,4.4c0.3-1.1,0.8-2.9,1.1-4.4h2.3
                                                        L31.6,41c0,0.1-0.1,0.2-0.1,0.4v3.2H29.3z"/>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g> </g>
                                                </g>
                                            </svg>
                                            </div>
                                            <label> Python </label>
                                        </section>
                                    </div>
                                </section>
                            </div>
                            <div className="our-right-technology">
                                <section id="web">
                                    <p>WEB DESIGN</p>
                                    <div className="techo-div">
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 240 234">
                                                <g>
                                                    <path className="illustr-st0" d="M10,10h220v214H10V10z"/>
                                                    <path className="illustr-st1" d="M0,0v234h240V0H0z M10,10h220v214H10V10z"/>
                                                    <path className="illustr-st1" d="M83.3,132.5l-7.9,30c-0.2,0.8-0.5,1-1.5,1H59.2c-1,0-1.2-0.3-1-1.5l28.4-99.4c0.5-1.8,0.8-3.4,1-8.3
                                                    c0-0.7,0.3-1,0.8-1h21c0.7,0,1,0.2,1.2,1l31.8,107.9c0.2,0.8,0,1.3-0.8,1.3H125c-0.8,0-1.3-0.2-1.5-0.9l-8.3-30.1L83.3,132.5
                                                    L83.3,132.5z M111.1,116.3c-2.8-11.1-9.4-35.3-11.9-47h-0.2c-2.1,11.7-7.4,31.5-11.6,47H111.1z M156.1,60.7
                                                    c0-6.4,4.5-10.2,10.2-10.2c6.1,0,10.2,4.1,10.2,10.2c0,6.6-4.3,10.2-10.4,10.2C160.3,70.9,156.1,67.3,156.1,60.7L156.1,60.7z
                                                     M157.3,83.4c0-0.8,0.3-1.2,1.2-1.2h15.7c0.8,0,1.2,0.3,1.2,1.2v78.9c0,0.8-0.2,1.2-1.2,1.2h-15.5c-1,0-1.3-0.5-1.3-1.3V83.4z"/>
                                                </g>
                                            </svg>
                                            </div>
                                            <label> Adobe Illustrator </label>
                                        </section>
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 240 234">
                                                    <path className="photos-st0" d="M10,10h220v214H10V10z"/>
                                                    <path className="photos-st1" d="M0,0v234h240V0H0z M10,10h220v214H10V10z M58,54.8c0-0.7,1.4-1.2,2.2-1.2c6.4-0.3,15.9-0.5,25.8-0.5
                                                    c27.7,0,38.5,15.2,38.5,34.7c0,25.4-18.4,36.3-41,36.3c-3.8,0-5.1-0.2-7.8-0.2v38.4c0,0.8-0.3,1.2-1.2,1.2H59.2
                                                    c-0.8,0-1.2-0.3-1.2-1.2L58,54.8L58,54.8z M75.8,107.9c2.3,0.2,4.1,0.2,8.1,0.2c11.7,0,22.7-4.1,22.7-20c0-12.7-7.9-19.1-21.2-19.1
                                                    c-4,0-7.8,0.2-9.6,0.3V107.9L75.8,107.9z M161.8,96c-7.9,0-10.6,4-10.6,7.3c0,3.6,1.8,6.1,12.4,11.6c15.7,7.6,20.6,14.9,20.6,25.6
                                                    c0,16-12.2,24.6-28.7,24.6c-8.7,0-16.2-1.8-20.5-4.3c-0.7-0.3-0.8-0.8-0.8-1.6v-14.7c0-1,0.5-1.3,1.2-0.8c6.3,4.1,13.5,5.9,20.1,5.9
                                                    c7.9,0,11.2-3.3,11.2-7.8c0-3.6-2.3-6.8-12.4-12c-14.2-6.8-20.1-13.7-20.1-25.2c0-12.9,10.1-23.6,27.6-23.6c8.6,0,14.6,1.3,17.9,2.8
                                                    c0.8,0.5,1,1.3,1,2v13.7c0,0.8-0.5,1.3-1.5,1C174.8,97.7,168.3,96,161.8,96L161.8,96z"/>
                                                </svg>
                                            </div>
                                            <label> Photoshop </label>
                                        </section>
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 240 234">
                                                <g>
                                                    <path className="ae-st0" d="M10,10h220v214H10V10z"/>
                                                    <path className="ae-st1" d="M0,0v234h240V0H0z M10,10h220v214H10V10z M67.8,132.5l-7.9,29.9c-0.2,0.8-0.5,1.1-1.5,1.1H43.7
                                                    c-1,0-1.2-0.3-1-1.5l28.4-99.3c0.5-1.8,0.8-3.2,1-8.2c0-0.7,0.3-1,0.8-1h21c0.7,0,1,0.2,1.2,1l31.8,107.7c0.2,0.8,0,1.3-0.8,1.3
                                                    h-16.5c-0.8,0-1.3-0.3-1.5-1l-8.3-30H67.8L67.8,132.5z M95.9,116.3c-2.8-11.1-9.6-35.3-12.1-47h-0.2c-2.1,11.7-7.6,31.5-11.7,47
                                                    C72,116.3,95.9,116.3,95.9,116.3z M149.5,126.5c0.2,13.5,6.6,22.6,21.8,22.6c5.9,0,11-0.8,16.3-3.1c0.7-0.3,1.2-0.2,1.2,0.7v12.5
                                                    c0,1-0.3,1.5-1,2c-5.3,2.6-11.9,3.8-20.1,3.8c-26.4,0-36.3-19.5-36.3-41.3c0-23.6,12.2-42.9,33.7-42.9c21.8,0,29.4,18.3,29.4,33.2
                                                    c0,4.8-0.3,8.7-0.8,10.6c-0.2,0.8-0.5,1.1-1.3,1.3c-2,0.3-7.9,0.7-16.7,0.7L149.5,126.5L149.5,126.5z M169.8,112.7
                                                    c5.1,0,6.9,0,7.4-0.2c0-0.7,0.2-1.2,0.2-1.7c0-5.4-2.6-15.4-13-15.4c-9.6,0-13.7,8.4-14.7,17.3L169.8,112.7L169.8,112.7z"/>
                                                </g>
                                            </svg>
                                            </div>
                                            <label> After Effects </label>
                                        </section>
                                    </div>
                                </section>
                                <section className="padding-top-16px">
                                    <p>OTHER</p>
                                    <div className="techo-div">
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 50 50" >
                                                <circle className="press-st0" cx="25" cy="24.5" r="24.2"/>
                                                <circle className="press-st1" cx="25" cy="24.5" r="20.8"/>
                                                <path className="press-st2" d="M14.1,19.2h1.6v-0.9H5.1v0.9l9.9,24.6l3.6,1.5l6.9-15.7l6.2,15.7l3.7-1.6L44,21.4c0,0,1.2-8.5-3.6-8.4
                                            c-4.8,0.1-1.3,7.7-1.3,7.7l0.6,5.5c0,0-2.7,10.4-3.5,10.3C35.3,36.4,30,21.4,30,21.4s-1.3-2,2.6-2.2v-1.1l-14-0.1v1.1
                                            c0,0,3.7,0.4,3.6,2.3l2.4,5.3l-4.4,10.9l-6.8-16.1C13.4,21.4,13.4,19.2,14.1,19.2z"/>
                                            </svg>
                                            </div>
                                            <label> WORDPRESS </label>
                                        </section>
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                                <path d="M9.8,49.4c0,0-1.4,0.1-1.9-1.6l0-46.1c0,0-0.1-1.2,1.4-1.9l24.3,0l10,11.2l0.2,35.9c0,0,0.8,2.5-1.9,2.5
                                                C39.1,49.4,9.8,49.4,9.8,49.4z"/>
                                                <path className="sql-st0" d="M9.8,46.9V1.8h22.5v9.6c0,0-0.1,1.9,1.7,1.3h7.9l0,34.2H9.8z"/>
                                                <path d="M42.7,37.6H8.1c-2.3,0-4.2-1.9-4.2-4.2V22.1c0-2.3,1.9-4.2,4.2-4.2h34.6c2.3,0,4.2,1.9,4.2,4.2v11.3
                                                C46.9,35.7,45,37.6,42.7,37.6z"/>
                                                <g>
                                                    <g>
                                                        <path className="sql-st0" d="M16.6,29.8c0.1,0.9,0.3,1.5,1.1,1.5c0.7,0,1-0.5,1-1.1c0-0.8-0.4-1.2-1.7-1.9c-1.9-1-2.6-1.8-2.6-3.4
                                                        c0-1.9,1.1-3.1,3.3-3.1c2.5,0,3.3,1.6,3.3,3.3h-2.4c0-0.8-0.2-1.4-0.9-1.4c-0.6,0-0.8,0.4-0.8,1c0,0.6,0.2,1,1.4,1.5
                                                        c2,1,2.9,1.9,2.9,3.7c0,1.8-1.1,3.3-3.5,3.3c-2.7,0-3.5-1.5-3.5-3.4H16.6z"/>
                                                        <path className="sql-st0" d="M29.5,27.4c0,4-1.1,5.7-3.8,5.7c-2.5,0-3.7-1.8-3.7-5.8c0-3.9,1.3-5.5,3.8-5.5C28.4,21.8,29.5,23.6,29.5,27.4
                                                        z M24.7,27.4c0,2.7,0.2,3.8,1.1,3.8c0.9,0,1.1-1,1.1-3.8c0-2.6-0.2-3.6-1.1-3.6C24.9,23.8,24.7,24.8,24.7,27.4z M28.6,31.5
                                                        l1.8,1.3l-1.3,1.6l-2.4-1.7L28.6,31.5z"/>
                                                        <path className="sql-st0" d="M30.9,22h2.5v8.9h3.5l-0.2,2h-5.8V22z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                            </div>
                                            <label> SQL </label>
                                        </section>
                                        <section>
                                            <div>
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                                <path className="android-st0" d="M9.5,32.1L9.5,32.1c-1.1,0-2-0.9-2-2V19.9c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2V30C11.6,31.1,10.7,32.1,9.5,32.1z
                                                    "/>
                                                <path className="android-st0" d="M21,46.3L21,46.3c-1.1,0-2-0.9-2-2V34.1c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v10.1C23,45.3,22.1,46.3,21,46.3z"/>
                                                <path className="android-st0" d="M30.1,46.3L30.1,46.3c-1.1,0-2-0.9-2-2V34.1c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v10.1
                                                    C32.1,45.3,31.2,46.3,30.1,46.3z"/>
                                                <path className="android-st0" d="M41.5,31.7L41.5,31.7c-1.1,0-2-0.9-2-2V19.6c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v10.1
                                                    C43.6,30.8,42.6,31.7,41.5,31.7z"/>
                                                <path d="M13.3,17h24.4v17.3c0,0,0.1,2.8-2.4,3.3l-2.5,0l-16.6,0c0,0-2.5,0.1-3-2.5L13.3,17z"/>
                                                <path d="M13.2,16.1h24.6c0,0-0.2-11-12.6-11.3C25.2,4.8,14,5.1,13.2,16.1z"/>
                                                <circle className="android-st1" cx="20.8" cy="10.4" r="0.9"/>
                                                <circle className="android-st1" cx="29.7" cy="10.4" r="0.9"/>
                                                <path className="android-st0" d="M20,6.4L20,6.4c-0.2,0.1-0.4,0-0.5-0.1l-2.1-3.6c-0.1-0.2,0-0.4,0.1-0.5l0,0c0.2-0.1,0.4,0,0.5,0.1L20.2,6
                                                    C20.2,6.2,20.2,6.4,20,6.4z"/>
                                                <path className="android-st0" d="M31.7,6.5L31.7,6.5c-0.2-0.1-0.2-0.3-0.1-0.4l1.9-3.7c0.1-0.2,0.3-0.2,0.4-0.1l0,0c0.2,0.1,0.2,0.3,0.1,0.4
                                                    l-1.9,3.7C32.1,6.5,31.9,6.6,31.7,6.5z"/>
                                            </svg>
                                            </div>
                                            <label> Android </label>
                                        </section>
                                        <section>
                                            <div>
                                                <svg version="1.1" x="0px" y="0px"viewBox="0 0 385.3 340.2">
                                                    <g id="Layer_1"> </g>
                                                    <g id="Layer_2">
                                                        <path d="M356.7,200.2c-0.3,11.8-2.5,23.2-5.6,34.6c-0.6,2.3-0.8,4.1,1,6.3c19.9,24.4,31,52.3,32,84c0,0.8-0.1,1.7,0.9,2.1
                                                            c0,3,0,6,0,9c-1.5,3.9-2.9,2.9-5,0.3c-8.6-10.5-18.3-19.6-30.8-25.6c-17.7-8.5-35.2-7.2-52.3,1.1c-19.1,9.3-37.6,19.9-58.6,24.4
                                                            c-22.8,4.9-45.8,4.2-68.6,0.5C96.9,325.1,41.9,286.3,2.1,224.8c-0.3-0.4-0.5-0.9-0.8-1.4c2.6-1,4,1.1,5.7,2.1
                                                            c29,17.9,59.7,31.8,93.6,37c33.5,5.1,66.4,2,98.3-9.5c4.4-1.6,8.4-3.9,12.4-6.4c2.7-1.7,3-2.6,0.3-5
                                                            c-14.4-12.6-28.5-25.5-42.7-38.3c-0.4-0.3-0.6-0.8-0.9-1.2c0.5-2.7,2.7-2,4.4-2C233.9,200.1,295.3,200.2,356.7,200.2z"/>
                                                        <path d="M356.7,200.2c-61.4,0-122.8-0.1-184.3-0.1c-1.7,0-3.9-0.7-4.4,2c-27.6-25.1-54-51.5-78-80.1c-17.9-21.3-35-43.2-51.3-65.7
                                                            c-0.4-0.6-0.9-1.2-1.4-2c3.1-0.6,4.5,1.7,6.2,3c34.5,26.9,68.5,54.6,104.2,80c9.5,6.8,19.1,13.3,28.8,19.8c0.8,0.5,1.4,2.5,2.7,1.1
                                                            c1.4-1.4-0.6-2-1.2-2.6c-17.1-18.9-33.9-38.1-48.7-58.8c-14-19.6-27.8-39.4-41.6-59.1c-0.2-0.3-0.3-0.8-0.7-2.3
                                                            c8,7.1,15.2,13.4,22.3,19.8c37.7,33.8,76,66.7,117.7,95.7c12.5,8.7,24.8,17.8,37.2,26.7c4.6,3.3,5,3.2,6.6-2
                                                            c9.4-30.7,9-61.7,2.1-92.7c-6.5-29.3-19-56.1-34.7-81.9c3.6,2.5,7.3,4.9,10.9,7.4c32.1,22.7,60.2,49.4,80.6,83.5
                                                            c19.3,32.4,28.8,67.4,27.5,105.3C357.1,198.2,356.9,199.2,356.7,200.2z"/>
                                                    </g>
                                                </svg>
                                            </div>
                                            <label> Swift </label>
                                        </section>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div>*/}
                {/*<section className="company-info-container">*/}
                    {/*<div className="company-info-heading">*/}
                        {/*<span className="motto-txt">WHAT MAKES US DIFFERENT</span>*/}
                        {/*<span className="ceo-txt"> AND YOU HAPPY</span>*/}
                    {/*</div>*/}

                    {/*<div className="company-info-section">*/}
                        {/*<div className="company-info-section-wrapper">*/}
                            {/*<div className="company-info-thumbnail " id="wrapper">*/}
                                {/*<div className="listener-svg">*/}

                                    {/*<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"*/}
                                         {/*viewBox="0 0 1212 1043">*/}
                                        {/*<g id="face">*/}
                                            {/*<ellipse class="listn-st0" cx="448.4" cy="543.5" rx="370.5" ry="431.5"/>*/}
                                            {/*<g id="Layer_5">*/}
                                                {/*<ellipse cx="274.4" cy="484" rx="36" ry="67.5"/>*/}
                                                {/*<ellipse cx="483.4" cy="410" rx="36" ry="67.5"/>*/}
                                            {/*</g>*/}
                                            {/*<path*/}
                                                {/*d="M363.4,47.5c0,0,155-10,179,56l-82.8,8.7l-96.2,0.3v-21h32v-12L363.4,47.5z"/>*/}
                                            {/*<ellipse class="listn-st1" cx="276.4" cy="503.5" rx="18" ry="30"/>*/}
                                            {/*<ellipse class="listn-st1" cx="486.4" cy="433.5" rx="18" ry="30"/>*/}
                                            {/*<path*/}
                                                {/*d="M513.1,31c0,0,143.3,60,135.4,129.8l-78.1-29.1l-86.2-42.5l9.3-18.8l28.7,14.2l5.3-10.7L513.1,31z"/>*/}
                                            {/*<path d="M283.3,68.2c0,0,84.2-31.7,110-17.6c4.4,2.4,19,11.1,23.8,12.5c16.7,5.1,37.5,17.1,19.9,33.6c-23.3,21.9-45.7,7-45.7,7*/}
                                                {/*l-6.1-7.7c59.8-4.7,20.9-25.4-89-1.1c0,0,35.6-14.2,43.4-16.2C347.4,76.7,283.3,68.2,283.3,68.2z"/>*/}
                                        {/*</g>*/}
                                        {/*<g id="eyebrow">*/}
                                            {/*<path*/}
                                                {/*d="M228.4,432.5c0,0,25-38,44-34s32,16,36,26s1-52-32-52S228.4,432.5,228.4,432.5z"/>*/}
                                            {/*<path*/}
                                                {/*d="M439.4,363.5c0,0,25-38,44-34s32,16,36,26s1-52-32-52S439.4,363.5,439.4,363.5z"/>*/}
                                        {/*</g>*/}
                                        {/*<g id="hand">*/}
                                            {/*<path d="M775.9,414c-3,1-3,4-3,4s-26-9-39-7s-75-56-75-56s34,65,93,92c0,0-16,6-21,12c0,0-50-27-72-53c0,0,32,59,57,67*/}
                                                {/*c0,0-7,12-4,21c0,0-34-21-53-50c0,0,54,82,76,96c0,0-30,7-34,16c0,0,61,26,81,29s53,59,34,90c0,0,9,52-65,61s-80,0-80,0*/}
                                                {/*s75,80,145,14c0,0,30-9,49-85c0,0,39,63,127,27c0,0,103,78,158-54s27-257,27-257l-9-32c0,0-14-189-42-203c0,0-16-36-74-6*/}
                                                {/*c0,0-10-54-59-48c0,0-18-5-42,20c0,0-31-15-57,4s-29,34-29,34s-38,88,38,241c0,0-8,6-8,16s-11,69-11,69s-28-34-46-34*/}
                                                {/*c0,0,2-38-35-52s-45-18-45-18s-38,7-99-55C658.9,317,689.9,399,775.9,414"/>*/}
                                            {/*<path class="listn-st2" d="M1146.8,345.9c0,0-5.6-166.8-28.9-189c0,0-8.9-28.9-41.1,0c-32.2,28.9-16.7,107.9-16.7,107.9*/}
                                                {/*s33.4,154.6,41.1,165.7c7.8,11.1-38.9-23.4-42.3-48.9c-3.3-25.6-57.8-134.5-21.1-225.7c0,0-15.6-54.5-35.6-48.9*/}
                                                {/*S970,124.6,970,124.6s-24.5,50-6.7,123.4s51.1,131.2,51.1,131.2l45.6,27.8c0,0-47.8-2.2-110.1,5.6l-31.1,6.7*/}
                                                {/*c0,0,16.7,13.3-31.1,166.8c0,0-11.1-110.1-86.7-117.9c0,0-75.6,11.1-68.9,33.4c6.7,22.2,16.7,25.6,16.7,25.6s18.9,20,65.6,35.6*/}
                                                {/*c0,0,21.1,3.3,47.8,60c0,0,24.5,53.4,56.7,66.7c32.2,13.3,57.8,0,57.8,0s-23.4-41.1-20-48.9c3.3-7.8,31.1-5.6,31.1-5.6*/}
                                                {/*s11.1,60,72.3,70.1c61.2,10,90.1-91.2,87.8-91.2c-2.2,0,42.3-95.6,5.6-268"/>*/}
                                            {/*<path class="listn-st2" d="M935,123.1c0,0-48.2,76.1,45.6,289.1l-46.9,8.9c0,0-88.8-145.8-48.2-271.3C885.5,149.7,899.5,115.5,935,123.1z*/}
                                                {/*"/>*/}
                                        {/*</g>*/}
                                        {/*<g id="smile">*/}
                                            {/*<path class="listn-st3" d="M319.1,670.9c0,0,123.4,188.3,191.6-36.5"/>*/}
                                        {/*</g>*/}
                                    {/*</svg>*/}

                                {/*</div>*/}
                                {/*<div className="right-company-txt">*/}
                                    {/*<p className="company-heading-txt">WE ARE GOOD LISTENERS.</p>*/}
                                    {/*<span className="sub-company-heading-txt">We listen to each and every requirement that you bring to us with utmost attention.*/}
                                {/*We are a customer centric team and your project is our priority.*/}
                        {/*</span>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="company-info-thumbnail">*/}
                                {/*<div className="left-company-txt">*/}
                                    {/*<p className="company-heading-txt">WE ALWAYS DELIVER ON THE PROMISE.</p>*/}
                                    {/*<span className="sub-company-heading-txt">We don't belive in making false promise to get you on board. We ensure whats promised*/}
                                           {/*to you gets delivered to you on time without compromising the quality.*/}
                                    {/*</span>*/}
                                {/*</div>*/}
                                {/*<div className="deliver-svg">*/}
                                    {/*<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"*/}
                                         {/*viewBox="0 0 944 932">*/}
                                        {/*<g id="Layer_4">*/}
                                            {/*<circle class="time-st0" cx="463" cy="481" r="414"/>*/}
                                        {/*</g>*/}
                                        {/*<g id="Layer_5">*/}

                                            {/*<path class="time-st1" d="M170.7,309.5L170.7,309.5c-3.3,5.7-10.7,7.7-16.4,4.4l-22.5-13c-5.7-3.3-7.7-10.7-4.4-16.4h0*/}
                                                {/*c3.3-5.7,10.7-7.7,16.4-4.4l22.5,13C172,296.4,174,303.8,170.7,309.5z"/>*/}
                                            {/*<path class="time-st1" d="M169.7,652.5L169.7,652.5c3.3,5.7,1.3,13.1-4.4,16.4l-22.5,13c-5.7,3.3-13.1,1.3-16.4-4.4h0*/}
                                                {/*c-3.3-5.7-1.3-13.1,4.4-16.4l22.5-13C159,644.8,166.4,646.8,169.7,652.5z"/>*/}
                                            {/*<path class="time-st1" d="M295.5,184.7L295.5,184.7c-5.7,3.3-13.1,1.3-16.4-4.4l-13-22.5c-3.3-5.7-1.3-13.1,4.4-16.4l0,0*/}
                                                {/*c5.7-3.3,13.1-1.3,16.4,4.4l13,22.5C303.2,174,301.2,181.4,295.5,184.7z"/>*/}
                                            {/*<path class="time-st1" d="M654.5,139.3L654.5,139.3c5.7,3.3,7.7,10.7,4.4,16.4l-13,22.5c-3.3,5.7-10.7,7.7-16.4,4.4l0,0*/}
                                                {/*c-5.7-3.3-7.7-10.7-4.4-16.4l13-22.5C641.4,138,648.8,136,654.5,139.3z"/>*/}
                                            {/*<path class="time-st1" d="M853,483L853,483c0,6.6-5.4,12-12,12h-26c-6.6,0-12-5.4-12-12l0,0c0-6.6,5.4-12,12-12h26*/}
                                                {/*C847.6,471,853,476.4,853,483z"/>*/}
                                            {/*<path class="time-st1" d="M461,828L461,828c6.6,0,12,5.4,12,12v26c0,6.6-5.4,12-12,12l0,0c-6.6,0-12-5.4-12-12v-26*/}
                                                {/*C449,833.4,454.4,828,461,828z"/>*/}
                                            {/*<path class="time-st1" d="M295.5,779.3L295.5,779.3c5.7,3.3,7.7,10.7,4.4,16.4l-13,22.5c-3.3,5.7-10.7,7.7-16.4,4.4l0,0*/}
                                                {/*c-5.7-3.3-7.7-10.7-4.4-16.4l13-22.5C282.4,778,289.8,776,295.5,779.3z"/>*/}
                                            {/*<path class="time-st1" d="M464,88L464,88c6.6,0,12,5.4,12,12v26c0,6.6-5.4,12-12,12l0,0c-6.6,0-12-5.4-12-12v-26*/}
                                                {/*C452,93.4,457.4,88,464,88z"/>*/}
                                            {/*<path class="time-st1" d="M633.5,782.3L633.5,782.3c5.7-3.3,13.1-1.3,16.4,4.4l13,22.5c3.3,5.7,1.3,13.1-4.4,16.4l0,0*/}
                                                {/*c-5.7,3.3-13.1,1.3-16.4-4.4l-13-22.5C625.8,793,627.8,785.6,633.5,782.3z"/>*/}
                                            {/*<path class="time-st2" d="M165.6,649.4L165.6,649.4c4.1,5.2,3.2,12.8-1.9,16.9l-20.4,16.2c-5.2,4.1-12.8,3.2-16.9-1.9h0*/}
                                                {/*c-4.1-5.2-3.2-12.8,1.9-16.9l20.4-16.2C153.9,643.4,161.5,644.3,165.6,649.4z"/>*/}
                                            {/*<path class="time-st1" d="M799.5,285.3L799.5,285.3c3.3,5.7,1.3,13.1-4.4,16.4l-22.5,13c-5.7,3.3-13.1,1.3-16.4-4.4v0*/}
                                                {/*c-3.3-5.7-1.3-13.1,4.4-16.4l22.5-13C788.9,277.6,796.2,279.6,799.5,285.3z"/>*/}
                                            {/*<path class="time-st1" d="M126.8,480.8L126.8,480.8c0,6.6-5.4,12-12,12h-26c-6.6,0-12-5.4-12-12l0,0c0-6.6,5.4-12,12-12h26*/}
                                                {/*C121.4,468.8,126.8,474.2,126.8,480.8z"/>*/}
                                            {/*<path class="time-st1" d="M752.5,652.7L752.5,652.7c2.8-6,10-8.5,16-5.7l23.5,11.2c6,2.8,8.5,10,5.7,16h0c-2.8,6-10,8.5-16,5.7*/}
                                                {/*l-23.5-11.2C752.2,665.8,749.7,658.6,752.5,652.7z"/>*/}
                                            {/*<path class="time-st1" d="M461,488h8c6.6,0,12-5.4,12-12V155c0-6.6-5.4-12-12-12h-8c-6.6,0-12,5.4-12,12v321*/}
                                                {/*C449,482.6,454.4,488,461,488z"/>*/}
                                            {/*<path class="time-st1 clock-tip" d="M420.2,428.1l-6.9,4c-5.7,3.3-7.7,10.7-4.4,16.4l160.5,278c3.3,5.7,10.7,7.7,16.4,4.4l6.9-4*/}
                                            {/*c5.7-3.3,7.7-10.7,4.4-16.4l-160.5-278C433.3,426.8,425.9,424.8,420.2,428.1z"/>*/}
                                        {/*</g>*/}
                                        {/*<g id="Layer_2">*/}
                                            {/*<path class="time-st3" d="M676,543c-12.8-7.1-13.1-13.1-26-21c-2,18-3.5,42.2-52.5,44.5c-2.2-6.7,32.2,91.3-46,44c0,0,16,44-12,55*/}
                                            {/*s-45-11-45-11s9.9,65.9-35.4,45l17,38.3c6.6-0.3,13.8-1.8,21.3-5.3c0,0,13-2,25-29c0,0,41,14,62-39c0,0,59,3,58-69*/}
                                            {/*C642.5,595.5,677,575,676,543z"/>*/}
                                            {/*<path class="time-st3" d="M146.8,404.3l107.5-153.6c6.4-9.1,19.1-11.4,28.2-5l66.8,46.7c9.1,6.4,11.4,19.1,5,28.2L246.7,474.3*/}
                                            {/*c-6.4,9.1-19.1,11.4-28.2,5l-66.8-46.7C142.6,426.1,140.4,413.4,146.8,404.3z"/>*/}
                                            {/*<path class="time-st3" d="M253,488l114-159c0,0,39-8,73,14s217,145,217,145v75l-45,71l-62,43l-63,32l-104-19*/}
                                            {/*c-23.9-21.7-21.8-39.9-33.3-55.4L285,547C285,547,243,526,253,488z"/>*/}
                                            {/*<path class="time-st3" d="M459.5,695.5c0,0-19,10-11,31c0,0,11.3,9.5,28.5,11.2c-5.8-11.8-10.3-28.8-12.8-39.6*/}
                                            {/*C462.7,697.3,461.1,696.5,459.5,695.5z"/>*/}
                                        {/*</g>*/}
                                        {/*<g id="Layer_3">*/}
                                            {/*<path class="time-st1" d="M785.2,400.3L677.7,246.7c-6.4-9.1-19.1-11.4-28.2-5l-66.8,46.7c-9.1,6.4-11.4,19.1-5,28.2l107.5,153.6*/}
                                            {/*c6.4,9.1,19.1,11.4,28.2,5l66.8-46.7C789.4,422.1,791.6,409.4,785.2,400.3z"/>*/}
                                            {/*<path class="time-st1" d="M676,543c0,0,20-17,8.5-42.5l-130-188c0,0-8-3-10-2s-92-8-92-8s-5,0-8,5s-53,67-53,67s-5,12-4,15*/}
                                            {/*s16,111,16,111s31,24,51-9s10-86,10-86s45,35,100,32c0,0,8.5,65.5,92.5,90.5c0,0-1,0,0,1l0,0C657.5,525.3,670,543,676,543z"/>*/}
                                            {/*<path class="time-st1" d="M307.5,515.5c0,0,62-9,47,46c0,0,43-4,37,41c0,0,48-8,44,32c0,0,65-1,38,48c0,0,4,34-26,47s-43-25-43-25*/}
                                            {/*s-58,23-63-42c0,0-56,7-49-53c0,0-52-7-36-62C256.5,547.5,269.5,520.5,307.5,515.5z"/>*/}
                                        {/*</g>*/}
                                    {/*</svg>*/}


                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="company-info-thumbnail">*/}
                                {/*<div className="innovation-svg">*/}
                                    {/*<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"*/}
                                         {/*viewBox="0 0 1080 1080">*/}

                                        {/*<g id="Layer_1">*/}


                                            {/*<path class="ino-st0"*/}
                                                  {/*d="M425.5,830l226-62.5c0,0,7.9-100,55.5-133.3c47.6-33.3,175.5-205,25.8-372.9"/>*/}
                                            {/*<path class="ino-st0"*/}
                                                  {/*d="M425.5,769.8c0,0,12.1-96.5-72.3-160.8s-114.5-231.1-10-347.6"/>*/}
                                            {/*<line class="ino-st0" x1="876.4" y1="386.7" x2="1019.5" y2="389.3"/>*/}
                                            {/*<line class="ino-st0" x1="144.9" y1="723" x2="247.9" y2="623.6"/>*/}
                                            {/*<line class="ino-st0" x1="921.2" y1="736.9" x2="821.9" y2="633.8"/>*/}
                                            {/*<line class="ino-st0" x1="203.6" y1="389.3" x2="60.5" y2="386.7"/>*/}
                                            {/*<line class="ino-st0" x1="425.5" y1="894.3" x2="658.6" y2="834.1"/>*/}
                                            {/*<line class="ino-st0" x1="425.5" y1="966.7" x2="658.6" y2="906.4"/>*/}
                                            {/*<path class="ino-st0" d="M473.7,1002.8c0,0,64.3,72.3,140.7,0"/>*/}
                                        {/*</g>*/}
                                        {/*<g id="Layer_5">*/}
                                            {/*<g>*/}
                                                {/*<path class="ino-st1"*/}
                                                      {/*d="M535.2,84.4c-1-2.7-4.8-2.9-6-0.3l-7.5,15.1l19.1,0.9L535.2,84.4z"/>*/}
                                                {/*<polygon class="ino-st2"*/}
                                                         {/*points="559.8,152.6 540.9,100 521.7,99.1 496.8,149.4 		"/>*/}

                                                {/*<rect x="423.3" y="219.7"*/}
                                                      {/*transform="matrix(4.605458e-02 -0.9989 0.9989 4.605458e-02 248.5791 762.8351)"*/}
                                                      {/*class="ino-st3" width="200.8" height="63.1"/>*/}
                                                {/*<path class="st4" d="M491.5,396.9l50.9,2.3c3.3,0.2,6.2-2.4,6.3-5.8l1-22.3l-63-2.9l-1,22.3C485.5,393.9,488.1,396.7,491.5,396.9z*/}
            {/*"/>*/}

                                                {/*<rect x="509.6" y="329.1"*/}
                                                      {/*transform="matrix(4.605458e-02 -0.9989 0.9989 4.605458e-02 134.5099 862.1357)"*/}
                                                      {/*class="ino-st5" width="18.2" height="63.1"/>*/}
                                            {/*</g>*/}
                                        {/*</g>*/}
                                        {/*<g id="Layer_6">*/}
                                            {/*<g>*/}
                                                {/*<path class="ino-st6" d="M402.4,163.8c0,0-5,36-46,35.8c0,0-28.3,2.5-25.5-43.7c0,0-3.7-33.1,21-62.6c0,0,12.7,31.3,29.9,39*/}
            {/*C381.8,132.3,404.6,145.4,402.4,163.8z"/>*/}
                                                {/*<path class="ino-st7" d="M398.6,204.3c0,0,22.4,38.4,32.8,93.7c0,0,24.3,90.3,15.6,104.3c0,0-1.1,4.5-7.7-4.1c0,0-50-81.4-58.9-110.6*/}
            {/*c0,0-29.3-69.6-22.4-72.2C358,215.4,387.3,215.8,398.6,204.3z"/>*/}
                                            {/*</g>*/}
                                        {/*</g>*/}
                                        {/*<g id="Layer_7">*/}
                                            {/*<g>*/}
                                                {/*<path class="ino-st8"*/}
                                                      {/*d="M573.1,281.8l18.4-25.5l58.7,42.5l-18.4,25.5L573.1,281.8z"/>*/}
                                                {/*<path class="ino-st9"*/}
                                                      {/*d="M603.6,263.7l13.2-128.1L748.3,228l-111.9,59.8L603.6,263.7z"/>*/}
                                                {/*<g>*/}
                                                    {/*<path class="ino-st10"*/}
                                                          {/*d="M690.1,143.3c4.2-7.8,14.3-10.2,21.5-5.1c7,5,8.3,14.8,2.9,21.4"/>*/}
                                                    {/*<path class="ino-st10"*/}
                                                          {/*d="M671.9,125.3c13.9-17.5,39.4-20.6,57.1-6.8c16.6,13,20.5,36.5,8.9,54.1"/>*/}
                                                    {/*<path class="ino-st10"*/}
                                                          {/*d="M653.1,113.8c19.6-24.7,54.4-31.3,81.6-15.3c31.1,18.2,41.2,58.4,22.5,89.2"/>*/}
                                                {/*</g>*/}
                                            {/*</g>*/}
                                        {/*</g>*/}
                                        {/*<g id="Layer_4">*/}
                                            {/*<path class="ino-st11" d="M704.2,434.8L704.2,434.8c-0.6-0.3-0.6-1-0.3-1.3l6-11.8c0.3-0.6,1-0.6,1.3-0.3l0,0c0.6,0.3,0.6,1,0.3,1.3*/}
                                                {/*l-6,11.8C705.5,434.8,704.9,435.1,704.2,434.8z"/>*/}
                                            {/*<path class="ino-st11" d="M667,434.5L667,434.5c-0.6,0.3-1.3,0-1.6-0.3l-6.7-11.5c-0.3-0.6,0-1.3,0.3-1.6l0,0c0.6-0.3,1.3,0,1.6,0.3*/}
                                                {/*l7,11.8C667.6,433.9,667.6,434.5,667,434.5z"/>*/}
                                            {/*<path class="ino-st11"*/}
                                                  {/*d="M645.4,465.4h78.3c0,0-0.6-35-40.1-36C683.5,429.4,647.9,430.4,645.4,465.4z"/>*/}
                                            {/*<path class="ino-st11"*/}
                                                  {/*d="M645.7,468.2h77.6v55c0,0,0.3,8.9-7.6,10.5h-8h-52.8c0,0-8,0.3-9.5-8L645.7,468.2z"/>*/}
                                            {/*<path class="ino-st11" d="M735.4,515L735.4,515c-3.5,0-6.4-2.9-6.4-6.4v-32.1c0-3.5,2.9-6.4,6.4-6.4l0,0c3.5,0,6.4,2.9,6.4,6.4v32.1*/}
                                                {/*C742.1,512.1,738.9,515,735.4,515z"/>*/}
                                            {/*<path class="ino-st11" d="M699.1,561.5L699.1,561.5c-3.5,0-6.4-2.9-6.4-6.4v-32.5c0-3.5,2.9-6.4,6.4-6.4l0,0c3.5,0,6.4,2.9,6.4,6.4*/}
                                            {/*v32.1C705.5,558.3,702.6,561.5,699.1,561.5z"/>*/}
                                            {/*<path class="ino-st11" d="M670.2,561.5L670.2,561.5c-3.5,0-6.4-2.9-6.4-6.4v-32.5c0-3.5,2.9-6.4,6.4-6.4l0,0c3.5,0,6.4,2.9,6.4,6.4*/}
                                            {/*v32.1C676.5,558.3,673.7,561.5,670.2,561.5z"/>*/}
                                            {/*<path class="ino-st11" d="M633.6,516.3L633.6,516.3c-3.5,0-6.4-2.9-6.4-6.4v-32.5c0-3.5,2.9-6.4,6.4-6.4l0,0c3.5,0,6.4,2.9,6.4,6.4*/}
                                            {/*v32.1C640.3,513.1,637.4,516.3,633.6,516.3z"/>*/}
                                            {/*<circle class="ino-st12" cx="697.9" cy="447.2" r="2.9"/>*/}
                                            {/*<circle class="ino-st12" cx="669.5" cy="447.2" r="2.9"/>*/}
                                        {/*</g>*/}
                                        {/*<g id="Layer_2">*/}
                                            {/*<g>*/}
                                                {/*<path class="ino-st13"*/}
                                                      {/*d="M513.7,585.3c0,0-11.5-4.2-5.4-13.6c0,0,6.6-7.5,13.9-1.8L513.7,585.3z"/>*/}
                                                {/*<path class="ino-st13"*/}
                                                      {/*d="M581.3,567.7c0,0,10.9-5.7,15.7,2.7c0,0,7.5,10-4.2,14.2L581.3,567.7z"/>*/}
                                                {/*<path class="ino-st14" d="M514.9,629c0,0-4.2-3-9.7,3.9c-5.4,6.9,2.7,2.1,2.7,2.1s-6.6,3.9,0,3.3c0,0,4.8-1.2,6.6-3.6*/}
                                                {/*C516.4,632.3,514.9,629,514.9,629z"/>*/}
                                                {/*<path class="ino-st14" d="M594.2,629c0,0,4.2-3,9.7,3.9c5.4,6.9-2.7,2.1-2.7,2.1s6.6,3.9,0,3.3c0,0-4.8-1.2-6.6-3.6*/}
                                                {/*C592.7,632.3,594.2,629,594.2,629z"/>*/}
                                                {/*<path class="ino-st14"*/}
                                                      {/*d="M529.3,690.9l-6.9-4.5c0,0-9.7,5.7-6,9.4l2.1-1.5c0,0-3.9,3.6,1.5,3.9L529.3,690.9z"/>*/}
                                                {/*<path class="ino-st14"*/}
                                                      {/*d="M578.2,690.9l6.9-4.5c0,0,9.7,5.7,6,9.4l-2.1-1.5c0,0,3.9,3.6-1.5,3.9L578.2,690.9z"/>*/}
                                                {/*<path class="ino-st13" d="M512.4,651.4c0,0-1.2,17.8,2.7,25.1c0,0,5.1,11.5,15.4,15.1c0,0,13.3,5.4,24.4,4.2c0,0,19.9,0,29.3-8.8*/}
                                                {/*c0,0,10.9-7.5,12.1-24.1c0,0,1.2-14.5,0.6-16.6l-1.5-26.9c0,0,2.1-14.8-2.4-34.4c0,0-3-20.8-26.9-23.8c-23.8-3-38.3,5.1-38.3,5.1*/}
                                                {/*s-10,3.9-13.9,19c-3.9,15.1-0.3,34.4-0.3,34.4s-0.3,4.2,0.3,6.3C513.7,626,512.4,649.8,512.4,651.4z"/>*/}
                                                {/*<path class="ino-st15" d="M555.3,597c-0.6,0-1.5,0.6-1.8,1.5c-0.6-0.9-1.2-1.5-1.8-1.5c-1.5,0-2.4,1.8-2.4,4.2c0,2.4,1.2,4.2,2.4,4.2*/}
                                                {/*c0.6,0,1.5-0.6,1.8-1.5c0.6,0.9,1.2,1.5,1.8,1.5c1.5,0,2.4-1.8,2.4-4.2C557.7,598.8,556.8,597,555.3,597z"/>*/}
                                                {/*<ellipse class="ino-st16" cx="536" cy="580.7" rx="13.6" ry="12.7"/>*/}
                                                {/*<ellipse class="ino-st16" cx="569.2" cy="580.1" rx="13.6" ry="12.7"/>*/}
                                                {/*<circle class="ino-st17" cx="530.6" cy="581.6" r="4.2"/>*/}
                                                {/*<circle class="ino-st17" cx="563.5" cy="580.4" r="3.9"/>*/}
                                                {/*<ellipse class="ino-st17" cx="553.5" cy="592.8" rx="6" ry="3.6"/>*/}
                                                {/*<path class="ino-st14"*/}
                                                      {/*d="M546.9,592.8c0,0-8.8,5.7,0,8.1l6-1.5c0,0,4.8,0,6,1.5s8.5-1.8,2.7-7.2l-2.7-0.9H546.9z"/>*/}
                                                {/*<path class="ino-st18" d="M547.5,600.9"/>*/}
                                                {/*<path class="ino-st17"*/}
                                                      {/*d="M586.7,572.3c0,0,4.3-2.3,6.3,1.1c0,0,3,4-1.7,5.7L586.7,572.3z"/>*/}
                                                {/*<path class="ino-st17"*/}
                                                      {/*d="M513.9,581.2c0,0-6.2-2.3-2.9-7.3c0,0,3.6-4.1,7.5-1L513.9,581.2z"/>*/}
                                            {/*</g>*/}
                                        {/*</g>*/}
                                        {/*<g id="Layer_3">*/}
                                            {/*<g>*/}
                                                {/*<ellipse class="ino-st19" cx="394.8" cy="511.6" rx="64.2" ry="18.7"/>*/}
                                                {/*<path class="ino-st19"*/}
                                                      {/*d="M353.9,453.1c7-6.2,31,15.2,53.6,47.7s35.3,63.8,28.3,70s-31-15.2-53.6-47.7S346.9,459.2,353.9,453.1z"/>*/}
                                                {/*<path class="ino-st19" d="M382.2,500.7c22.6-32.5,46.6-53.8,53.6-47.7c7,6.2-5.7,37.5-28.3,70c-22.6,32.5-46.6,53.8-53.6,47.7*/}
            {/*C346.9,564.5,359.5,533.2,382.2,500.7z"/>*/}
                                                {/*<ellipse class="ino-st19" cx="394.8" cy="511.6" rx="4.3" ry="4.8"/>*/}
                                            {/*</g>*/}
                                        {/*</g>*/}
                                    {/*</svg>*/}

                                {/*</div>*/}
                                {/*<div className="right-company-txt">*/}
                                    {/*<p className="company-heading-txt">WE BRING INNOVATION.</p>*/}
                                    {/*<span className="sub-company-heading-txt">We have a reputation of never comming to you with the same concept twicw or repeating our concepts.*/}
                                       {/*We prepare the newest templates just for you like no other in the market.*/}
                        {/*</span>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="company-info-thumbnail">*/}
                                {/*<div className="left-company-txt">*/}
                                    {/*<p className="company-heading-txt">WE ARE BUILT TO LAST.</p>*/}
                                    {/*<span className="sub-company-heading-txt">Present is passe already. We are all about the future.Even though we give are working now, we are keeping in*/}
                                                 {/*the mind the future. Pushing to give you something that will still br of great valu ahead in time.*/}
                        {/*</span>*/}
                                {/*</div>*/}
                                {/*<div className="built-svg">*/}
                                {/*</div>*/}
                            {/*</div>*/}


                        {/*</div>*/}
                    {/*</div>*/}
                {/*</section>*/}
            {/*</div>*/}
                <footer>
                    <div className="footer-info float-left">Powered by <span>Floratechno Solutions Pvt. Ltd.</span></div>
                    <div className="footer-info float-right text-align-right"><span className="copyright-info">©2019 India</span></div>
                </footer>
            </div>
        );
    }
}
render(<About/>, document.getElementById('about'));