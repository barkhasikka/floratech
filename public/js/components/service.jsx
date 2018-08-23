import React from 'react';
import {render} from 'react-dom';
import {smoothScroll} from './commoncomponent/helper.js'
import DigitalMarketingIcon from '../../assets/digitalmarketing.svg'
import MobileApplicationDevelopmentIcon from '../../assets/mobile_app.svg'
import WebApplicationDevelopmentIcon from '../../assets/webdevelopment.svg'
import WebDesignIcon from '../../assets/web_design.svg'
class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {
        smoothScroll("servicesContainer", 100);
        this.setState({selectedTab: "servicesContainer"})
    }
    show (){
        if( document.getElementById("to").style.display == "block"  ){
            document.getElementById("to").style.display = "none" ;
        }
        else{
            document.getElementById("to").style.display = "block" ;
        }

    }

    render() {
        return (
            <div >

                <header className="header-section" id="myHeader">
                    <i className="fa fa-bars cates" onClick={() => this.show()}></i>
                    <div className="bind-header">
                        <div className="header-options-right" id="myHeaderSpan1">
                            <a href="/about" target="_parent" className="header-a">
                           <span
                               className="header-option-span "
                               onClick={(e) => this.goToElement(e, "about-container", 70, false)}>ABOUT
                                <span className="span-border"></span>
                            </span>
                            </a>
                            <a href="/team" target="_parent" className="header-a">
                            <span
                                className="header-option-span "
                                onClick={(e) => this.goToElement(e, "team-containers", 101, false)}>TEAM
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
                            <span
                                className={"header-option-span " + (this.state.selectedTab == 'servicesContainer' ? 'orange-color' : '')}
                                onClick={(e) => this.goToElement(e, "servicesContainer", 85, false)}>SERVICES
                             <span className="span-border"></span>
                            </span>
                            </a>
                            <a href="/contact" target="_parent" className="header-a">
                            <span
                                className="header-option-span "
                                onClick={(e) => this.goToElement(e, "contact-container", 40, false)}>CONTACT
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
                <div className="services-main-wrapper">
                    <div id="triangle-topleft"></div>
                    <div id="triangle-topright"></div>
                    <div id="triangle-bottomleft"></div>
                    <div id="triangle-bottomright"></div>

                <section className="services-container" id="servicesContainer">
                    <div className="services-title">
                        <span className="service-txt">SERVICES</span>
                        <span className="offer-txt">WE OFFER</span>
                    </div>

                    <div className="services-description">
                        <div className="service-wrapper">
                            <div className="service-svg">
                               <MobileApplicationDevelopmentIcon/>
                            </div>
                            <div className="service-detail">
                                <blockquote className="svg-description">
                                    Mobile Application Devlopment
                                </blockquote>
                                <div className="blockquote-txt">
                                <blockquote className="service-text">You have an awesome app idea and just looking
                                    for ways to turn it into a reality; you have come to a right place.
                                    Whether it is Android or iOS, we at Floratechno Solutions have expertise in developing mobile apps for different market segments.
                                    We understand every app is different and has its sets of challenges. With our expert
                                    team at dispose, we deliver quick and always stay alert for smooth working for your
                                    growing needs.
                                </blockquote>
                                </div>
                                {/*<span className="see-more-txt">SEE MORE</span>*/}
                            </div>
                        </div>


                        <div className="service-wrapper">
                            <div className="service-svg">
                               <WebApplicationDevelopmentIcon/>

                            </div>
                            <div className="service-detail">
                                <blockquote className="svg-description">
                                    Web Applications
                                </blockquote>
                                <blockquote className="service-text">We make the most creative and efficient web applications.
                                    We plan, strategize, research, design and develop keeping our client’s business
                                    goals in mind from day one.
                                    We work with latest technologies to make sure your application is always one step ahead. We are always transparent when it comes to our bond with clients.
                                </blockquote>
                                {/*<span className="see-more-txt">SEE MORE</span>*/}
                            </div>
                        </div>

                        <div className="service-wrapper">
                            <div className="service-svg">
                                <WebDesignIcon/>
                            </div>
                            <div className="service-detail">
                                <blockquote className="svg-description">
                                    Web Designing
                                </blockquote>
                                <blockquote className="service-text">
                                    Every business starts with a website in their mind.
                                    Your website is the first and last interaction with your potential customer.
                                    At Floratechno Solutions, we understand how customer behavior works and so we come up
                                    with new and unique web design to help you get more in terms of value.
                                    We study and understand the need of our customer in terms of UI and UX; this is how we ensure that you have a unique website.
                                </blockquote>
                                {/*<span className="see-more-txt">SEE MORE</span>*/}
                            </div>
                        </div>
                        <div className="service-wrapper">
                            <div className="service-svg">
                                <DigitalMarketingIcon/>
                            </div>
                            <div className="service-detail">
                                <blockquote className="svg-description">
                                    Digital Marketing
                                </blockquote>
                                <blockquote className="service-text">
                                    With our digital marketing services, we help business owners create brand image
                                    and generate traffic which helps in sales.
                                    We develop and understand the customer journey from search page till they buy
                                    your product or service.
                                    We optimize your web presence on social media organically for best returns.
                                    We help you generate online marketing strategies for every facet of digital
                                    marketing.
                                </blockquote>
                                {/*<span className="see-more-txt">SEE MORE</span>*/}
                            </div>
                        </div>
                    </div>

                </section>
                <div className="company-info-container">
                    <div className="about-technology">
                        <h5>Our Technologies</h5>
                        <div className="our-technology">

                            <section>
                                <p>FRONT END</p>
                                <div className="techo-div">
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path
                                                d="M11.1,47.7H8.6c0,0-2.3-0.4-2.5-2.6V4.7c0,0-0.1-2.8,2.8-3.1h20l12.2,11.8v21.3L11.1,47.7z"/>
                                            <path className="ht-st0"
                                                  d="M29.4,4.4l8.9,8.5h-7.2c0,0-1.8,0.2-1.7-1.4S29.4,4.4,29.4,4.4z"/>
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
                                            <path className="ht-st2"
                                                  d="M10.7,47.5H8.5c0,0-2.5-0.6-2.8-2.9V3.9c0,0,1-2.6,3-2.6h19.8l12.4,11.9v21.4L10.7,47.5z"/>
                                            <path className="ht-st3"
                                                  d="M29,4.1l8.9,8.5h-7.2c0,0-1.8,0.2-1.7-1.4S29,4.1,29,4.1z"/>
                                            <path className="ht-st0" d="M10.5,45.7H8.4c0,0-1.2-0.2-1-2.2v-39c0,0,0.5-2.2,2.4-1.7l17.4-0.1l0.4,9.1c0,0,0.8,2.5,3,2.3l8.6,0.1v20.2
                                            L10.5,45.7z"/>
                                            <path d="M21.4,30.6L21.4,30.6c-0.3-0.1-0.5-0.4-0.4-0.8l3.4-11.4c0.1-0.3,0.4-0.5,0.8-0.4l0,0c0.3,0.1,0.5,0.4,0.4,0.8l-3.4,11.4
                                            C22.1,30.5,21.8,30.7,21.4,30.6z"/>
                                            <path d="M20.4,25.1L16.9,22l4.5-2c0.4-0.2,0.6-0.6,0.4-1s-0.6-0.6-1-0.4l-5.3,2.3c-0.1,0-0.2,0.1-0.3,0.2c-0.1,0-0.1,0.1-0.2,0.1
                                            l0,0c-0.2,0.3-0.2,0.7,0.1,0.9l4.4,3.9c0.3,0.2,0.7,0.2,0.9-0.1C20.7,25.8,20.6,25.3,20.4,25.1z"/>
                                            <path d="M25.3,27.2l4.5-1.3l-3.3-3.7c-0.3-0.3-0.2-0.8,0.1-1.1c0.3-0.3,0.8-0.2,1.1,0.1l3.8,4.3c0.1,0.1,0.1,0.2,0.2,0.3
                                            c0,0.1,0.1,0.1,0.1,0.2l0,0c0.1,0.3-0.1,0.7-0.4,0.8l-5.6,1.6c-0.3,0.1-0.7-0.1-0.8-0.4C24.8,27.6,25,27.3,25.3,27.2z"/>
                                            <path
                                                d="M40,50.3H14c-2.4,0-4.3-2-4.3-4.3v-7c0-2.4,2-4.3,4.3-4.3h26c2.4,0,4.3,2,4.3,4.3v7C44.3,48.3,42.4,50.3,40,50.3z"/>
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


                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path className="css-st0"
                                                  d="M9.6,50.2c0,0-1.9-0.2-1.9-1.9s0-45.7,0-45.7s0-1.9,1.9-1.9l23.7,0l10.1,11.2l0.2,35.6v0.8c0,0,0,1.6-1.9,1.9H9.6z"/>
                                            <path className="css-st0" d="M54.9,13.1"/>
                                            <path className="css-st1"
                                                  d="M9.6,33.6V2.6h22.5v9.9c0,0-0.1,1,1,1h8.6v20.1H9.6z"/>
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

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">
                                            <g>
                                                <g>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M13.2,4.6h13.5C33.9,4.6,38,8.3,38,15c0,5.1-2.3,7.4-4.8,8.4c2.9,1.2,5.9,3.7,5.9,9.7c0,8-4.9,12-12.7,12H13.2V4.6z
                                                     M24.7,20.4c3.4,0,4.2-1.4,4.2-4.5c0-3.2-1.3-4.5-4.1-4.5h-2.6v9H24.7z M22.2,38.4h2.9c2.9,0,4.4-1.4,4.4-5.6
                                                    c0-4.1-1.2-5.8-4.9-5.8h-2.4V38.4z"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                </g>
                                            </g>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

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

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path className="js-st0"
                                                  d="M11.7,47.5H9.5c0,0-2.5-0.6-2.8-2.9V3.9c0,0,1-2.6,3-2.6h19.8l12.4,11.9v21.4L11.7,47.5z"/>
                                            <path className="js-st3"
                                                  d="M30,4.1l8.9,8.5h-7.2c0,0-1.8,0.2-1.7-1.4S30,4.1,30,4.1z"/>
                                            <path className="js-st1" d="M11.5,45.7H9.4c0,0-1.2-0.2-1-2.2l0-39c0,0,0.5-2.2,2.4-1.7l17.4-0.1l0.4,9.1c0,0,0.8,2.5,3,2.3l8.6,0.1v20.2
                                        L11.5,45.7z"/>
                                            <path d="M22.4,30.6L22.4,30.6c-0.3-0.1-0.5-0.4-0.4-0.8l3.4-11.4c0.1-0.3,0.4-0.5,0.8-0.4l0,0c0.3,0.1,0.5,0.4,0.4,0.8l-3.4,11.4
                                        C23.1,30.5,22.8,30.7,22.4,30.6z"/>
                                            <path d="M21.4,25.1L17.9,22l4.5-2c0.4-0.2,0.6-0.6,0.4-1c-0.2-0.4-0.6-0.6-1-0.4l-5.3,2.3c-0.1,0-0.2,0.1-0.3,0.2
                                        c-0.1,0-0.1,0.1-0.2,0.1l0,0c-0.2,0.3-0.2,0.7,0.1,0.9l4.4,3.9c0.3,0.2,0.7,0.2,0.9-0.1C21.7,25.8,21.6,25.3,21.4,25.1z"/>
                                            <path d="M26.3,27.2l4.5-1.3l-3.3-3.7c-0.3-0.3-0.2-0.8,0.1-1.1c0.3-0.3,0.8-0.2,1.1,0.1l3.8,4.3c0.1,0.1,0.1,0.2,0.2,0.3
                                        c0,0.1,0.1,0.1,0.1,0.2v0c0.1,0.3-0.1,0.7-0.4,0.8l-5.6,1.6c-0.3,0.1-0.7-0.1-0.8-0.4C25.8,27.6,26,27.3,26.3,27.2z"/>
                                            <path
                                                d="M41,50.3H15c-2.4,0-4.3-2-4.3-4.3v-7c0-2.4,2-4.3,4.3-4.3h26c2.4,0,4.3,2,4.3,4.3v7C45.3,48.3,43.4,50.3,41,50.3z"/>
                                            <path className="js-st1" d="M16.1,48.5h24.2c1.9,0,3.4-1.5,3.4-3.4v-5.4c0-1.9-1.5-3.4-3.4-3.4H16.1c-1.9,0-3.4,1.5-3.4,3.4v5.4
                                        C12.6,47,14.2,48.5,16.1,48.5z"/>
                                            <rect x="16.8" y="44.4" width="1.5" height="1.5"/>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M22.4,44.1c0,1.2-0.3,1.9-1.7,1.9c-0.3,0-0.5,0-0.7-0.1v-1.2c0.1,0,0.2,0,0.4,0c0.4,0,0.5-0.2,0.5-0.6v-4.8h1.5V44.1z"/>
                                                    <path d="M24.5,44c0,0.5,0.2,0.9,0.6,0.9c0.4,0,0.6-0.3,0.6-0.7c0-0.4-0.2-0.7-1-1.1c-1.1-0.6-1.6-1.1-1.6-2c0-1.1,0.7-1.8,2-1.8
                                                c1.5,0,1.9,0.9,2,1.9h-1.4c0-0.5-0.1-0.8-0.5-0.8c-0.3,0-0.5,0.2-0.5,0.6c0,0.4,0.1,0.6,0.8,0.9c1.2,0.6,1.7,1.1,1.7,2.2
                                                c0,1.1-0.6,1.9-2.1,1.9c-1.6,0-2.1-0.9-2.1-2H24.5z"/>
                                                </g>
                                            </g>
                                            <polygon className="js-st2" points="23.6,41.6 29.1,41.6 29.1,41.6 23.6,41.6 "/>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px" viewBox="0 0 50 50">

                                            <path className="jq-st0" d="M9.3,7.9c0,0-5.6,5.7-4.6,13.1c0,0,0.8,6.9,5.2,11.1c0,0,3.5,3.5,4.2,3.6c0,0,8.8,6,17.6,2.9
                                            c0,0,5.8-1.6,8.9-8.2c0,0-6.8,5.2-14.9,3.5c0,0-11.7-3-15.7-12.2C10.1,21.7,7,16.7,9.3,7.9z"/>
                                            <path className="jq-st0" d="M41.5,19.9c0,0-2.3,5.2-7.4,6.4c0,0-4.8,1.3-8.6-0.5c0,0-3.2-1.4-3.5-1.9c0,0-6.2-4.2-6.5-10.8c0,0-0.4-4.2,3-8
                                            c0,0-1.7,5.8,1.6,10.7c0,0,5,6.9,12.1,7.1C32.2,23,36.3,23.8,41.5,19.9z"/>
                                            <path className="jq-st0" d="M41.5,11.5c0,0-1.5,3.4-4.8,4.2c0,0-3.1,0.8-5.6-0.4c0,0-2.1-0.9-2.2-1.2c0,0-4.1-2.7-4.2-7c0,0-0.3-2.7,2-5.2
                                            c0,0-1.1,3.8,1,7c0,0,3.3,4.5,7.9,4.6C35.4,13.5,38.1,14,41.5,11.5z"/>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <ellipse className="react-st0" cx="25" cy="24.3" rx="24" ry="6.2"/>
                                            <ellipse transform="matrix(0.787 -0.6169 0.6169 0.787 -9.7167 20.6039)"
                                                     className="react-st0" cx="25" cy="24.4" rx="6" ry="24.8"/>
                                            <ellipse transform="matrix(0.6169 -0.787 0.787 0.6169 -9.6134 28.9983)"
                                                     className="react-st0" cx="25" cy="24.4" rx="24.8" ry="6"/>
                                            <ellipse cx="25" cy="24.3" rx="1.6" ry="1.6"/>
                                        </svg>
                                    </section>
                                </div>

                            </section>
                            <section className="our-technology-margin">
                                <p>BACK END</p>
                                <div className="techo-div">
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path className="go-st0"
                                                  d="M12,10.7c0,0-3.8-1.4-1.8-4.5c0,0,2.2-2.5,4.6-0.6L12,10.7z"/>
                                            <path className="go-st0"
                                                  d="M34.4,4.9c0,0,3.6-1.9,5.2,0.9c0,0,2.5,3.3-1.4,4.7L34.4,4.9z"/>
                                            <path className="go-st0"
                                                  d="M12.4,25.2c0,0-1.4-1-3.2,1.3s0.9,0.7,0.9,0.7s-2.2,1.3,0,1.1c0,0,1.6-0.4,2.2-1.2S12.4,25.2,12.4,25.2z"/>
                                            <path className="go-st0"
                                                  d="M38.7,25.2c0,0,1.4-1,3.2,1.3s-0.9,0.7-0.9,0.7s2.2,1.3,0,1.1c0,0-1.6-0.4-2.2-1.2S38.7,25.2,38.7,25.2z"/>
                                            <path className="go-st0"
                                                  d="M17.2,45.7l-2.3-1.5c0,0-3.2,1.9-2,3.1l0.7-0.5c0,0-1.3,1.2,0.5,1.3L17.2,45.7z"/>
                                            <path className="go-st0"
                                                  d="M33.4,45.7l2.3-1.5c0,0,3.2,1.9,2,3.1L37,46.8c0,0,1.3,1.2-0.5,1.3L33.4,45.7z"/>
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
                                            <path className="go-st2"
                                                  d="M23,13.2c0,0-2.9,1.9,0,2.7l2-0.5c0,0,1.6,0,2,0.5c0.4,0.5,2.8-0.6,0.9-2.4L27,13.2H23z"/>
                                            <path className="go-st3" d="M23.2,15.9"/>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path d="M9.8,49.4c0,0-1.4,0.1-1.9-1.6l0-46.1c0,0-0.1-1.2,1.4-1.9l24.3,0l10,11.2l0.2,35.9c0,0,0.8,2.5-1.9,2.5
                            C39.1,49.4,9.8,49.4,9.8,49.4z"/>
                                            <path className="php-st0"
                                                  d="M9.8,46.9V1.8h22.5v9.6c0,0-0.3,1.6,1.7,1.3h7.9l0,34.2H9.8z"/>
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

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">
                                            <path className="net-st0" d="M1,34.4c0,0,5.5-16.5,12.4-17.3H25c0,0,3-2,5.9,10.9l0.9,2.7l3.7-10c0,0,1.3-3.8,4.7-3.7l8.7,0l-5.4,8.6
                                            c0,0-4.8,8.1-8.1,8.2l-11,0.5c0,0-3.4,0.6-5.9-10.4c0,0-0.5-3-1.1-3.2c-0.5-0.2-1,0-1,0s-3.7,5.3-4.8,10.7c0,0-2.4,2.9-4.1,2.9
                                            C5.7,34.4,1,34.4,1,34.4z"/>
                                            <path className="net-st0" d="M60.3,24.3"/>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path className="py-st0" d="M40.2,45.9H12.7c0,0-2.9,0.4-2.5-2.3V3.7c0,0,0.5-2.1,2.4-1.7l20.6,0.1l8.6,9.8L42,43.5
                                                C42,43.5,42.3,45.9,40.2,45.9z"/>
                                            <polygon className="py-st1"
                                                     points="11.9,3.7 11.9,31.2 40.2,31.2 40.2,13.4 31.7,13.3 31.8,3.7 "/>
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
                                                <g>
                                                </g>
                                            </g>
                                        </svg>

                                    </section>

                                </div>

                            </section>
                        </div>
                        <div className="our-right-technology">
                            <section id="web">
                                <p>WEB DESIGN</p>
                                <div className="techo-div">
                                    <section>
                                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 240 234">

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
                                    </section>
                                    <section>
                                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 240 234">

                                            <path className="photos-st0" d="M10,10h220v214H10V10z"/>
                                            <path className="photos-st1" d="M0,0v234h240V0H0z M10,10h220v214H10V10z M58,54.8c0-0.7,1.4-1.2,2.2-1.2c6.4-0.3,15.9-0.5,25.8-0.5
                                                c27.7,0,38.5,15.2,38.5,34.7c0,25.4-18.4,36.3-41,36.3c-3.8,0-5.1-0.2-7.8-0.2v38.4c0,0.8-0.3,1.2-1.2,1.2H59.2
                                                c-0.8,0-1.2-0.3-1.2-1.2L58,54.8L58,54.8z M75.8,107.9c2.3,0.2,4.1,0.2,8.1,0.2c11.7,0,22.7-4.1,22.7-20c0-12.7-7.9-19.1-21.2-19.1
                                                c-4,0-7.8,0.2-9.6,0.3V107.9L75.8,107.9z M161.8,96c-7.9,0-10.6,4-10.6,7.3c0,3.6,1.8,6.1,12.4,11.6c15.7,7.6,20.6,14.9,20.6,25.6
                                                c0,16-12.2,24.6-28.7,24.6c-8.7,0-16.2-1.8-20.5-4.3c-0.7-0.3-0.8-0.8-0.8-1.6v-14.7c0-1,0.5-1.3,1.2-0.8c6.3,4.1,13.5,5.9,20.1,5.9
                                                c7.9,0,11.2-3.3,11.2-7.8c0-3.6-2.3-6.8-12.4-12c-14.2-6.8-20.1-13.7-20.1-25.2c0-12.9,10.1-23.6,27.6-23.6c8.6,0,14.6,1.3,17.9,2.8
                                                c0.8,0.5,1,1.3,1,2v13.7c0,0.8-0.5,1.3-1.5,1C174.8,97.7,168.3,96,161.8,96L161.8,96z"/>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 240 234">

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

                                    </section>

                                </div>

                            </section>
                            <section>
                                <p>OTHER</p>
                                <div className="techo-div">
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                             viewBox="0 0 50 50" >

                                            <circle className="press-st0" cx="25" cy="24.5" r="24.2"/>
                                            <circle className="press-st1" cx="25" cy="24.5" r="20.8"/>
                                            <path className="press-st2" d="M14.1,19.2h1.6v-0.9H5.1v0.9l9.9,24.6l3.6,1.5l6.9-15.7l6.2,15.7l3.7-1.6L44,21.4c0,0,1.2-8.5-3.6-8.4
                                            c-4.8,0.1-1.3,7.7-1.3,7.7l0.6,5.5c0,0-2.7,10.4-3.5,10.3C35.3,36.4,30,21.4,30,21.4s-1.3-2,2.6-2.2v-1.1l-14-0.1v1.1
                                            c0,0,3.7,0.4,3.6,2.3l2.4,5.3l-4.4,10.9l-6.8-16.1C13.4,21.4,13.4,19.2,14.1,19.2z"/>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path d="M9.8,49.4c0,0-1.4,0.1-1.9-1.6l0-46.1c0,0-0.1-1.2,1.4-1.9l24.3,0l10,11.2l0.2,35.9c0,0,0.8,2.5-1.9,2.5
                                                C39.1,49.4,9.8,49.4,9.8,49.4z"/>
                                            <path className="sql-st0"
                                                  d="M9.8,46.9V1.8h22.5v9.6c0,0-0.1,1.9,1.7,1.3h7.9l0,34.2H9.8z"/>
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

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path className="android-st0" d="M9.5,32.1L9.5,32.1c-1.1,0-2-0.9-2-2V19.9c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2V30C11.6,31.1,10.7,32.1,9.5,32.1z
                                                    "/>
                                            <path className="android-st0"
                                                  d="M21,46.3L21,46.3c-1.1,0-2-0.9-2-2V34.1c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v10.1C23,45.3,22.1,46.3,21,46.3z"/>
                                            <path className="android-st0" d="M30.1,46.3L30.1,46.3c-1.1,0-2-0.9-2-2V34.1c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v10.1
                                                    C32.1,45.3,31.2,46.3,30.1,46.3z"/>
                                            <path className="android-st0" d="M41.5,31.7L41.5,31.7c-1.1,0-2-0.9-2-2V19.6c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v10.1
                                                    C43.6,30.8,42.6,31.7,41.5,31.7z"/>
                                            <path
                                                d="M13.3,17h24.4v17.3c0,0,0.1,2.8-2.4,3.3l-2.5,0l-16.6,0c0,0-2.5,0.1-3-2.5L13.3,17z"/>
                                            <path d="M13.2,16.1h24.6c0,0-0.2-11-12.6-11.3C25.2,4.8,14,5.1,13.2,16.1z"/>
                                            <circle className="android-st1" cx="20.8" cy="10.4" r="0.9"/>
                                            <circle className="android-st1" cx="29.7" cy="10.4" r="0.9"/>
                                            <path className="android-st0" d="M20,6.4L20,6.4c-0.2,0.1-0.4,0-0.5-0.1l-2.1-3.6c-0.1-0.2,0-0.4,0.1-0.5l0,0c0.2-0.1,0.4,0,0.5,0.1L20.2,6
                                                    C20.2,6.2,20.2,6.4,20,6.4z"/>
                                            <path className="android-st0" d="M31.7,6.5L31.7,6.5c-0.2-0.1-0.2-0.3-0.1-0.4l1.9-3.7c0.1-0.2,0.3-0.2,0.4-0.1l0,0c0.2,0.1,0.2,0.3,0.1,0.4
                                                    l-1.9,3.7C32.1,6.5,31.9,6.6,31.7,6.5z"/>
                                        </svg>

                                    </section>
                                </div>

                            </section>

                        </div>
                    </div>
                </div>
                </div>
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
render(<Services/>, document.getElementById('floraService'));