import React from 'react';
import {render} from 'react-dom';
import {smoothScroll} from './commoncomponent/helper.js'

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    componentDidMount(){
        smoothScroll("contact-container", 100);
    }
    arrowDown(){
        document.getElementById("contact-wrapper").classList.add("height-0");
        document.getElementById("contact-p").classList.add("display-none");

    }
    render(){
        return(
            <div >

                <header class="header-section" id="myHeader">
                    <div className="bind-header">
                        <div className="header-options-right" id="myHeaderSpan1">
                            <a href="/about" target="_parent" className="header-a">
                           <span className={"header-options-span " + (this.state.selectedTab == 'about-container' ? 'orange-color' : '')} onClick={(e) => this.goToElement(e, "about-container", 70, false)}>ABOUT
                                <span className="span-border"></span>
                            </span>
                            </a>
                            <a href="/team" target="_parent" className="header-a">
                            <span className={"header-options-span " + (this.state.selectedTab == 'team-containers' ? 'orange-color' : '')} onClick={(e) => this.goToElement(e, "team-containers", 101, false)}>TEAM
                                <span className="span-border"></span>
                            </span>
                            </a>
                        </div>
                        <div class="logo-section">
                            <a href="/" target="_parent">
                                <div class="flower-svg">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                         viewBox="0 0 400 400"  id="secSvg" className="third-svg">

                                        <g id="Layer_1">
                                            <g>
                                                <path class="flo-st0" d="M204,9.5c-80.2,0-124.4,60.9-124.4,125.9S132.3,253,197.3,253s123.6-57.9,123.6-122.9S269,9.5,204,9.5z
                                         M203.3,244c-63.2,0-117.6-55.9-117.6-119.1S135.5,17.1,199.6,17c63.2-0.1,114,54,114,117.3S266.5,244,203.3,244z"/>
                                                <g class="flo-st1">
                                                    <path class="flo-st2" d="M146,113.8v-7.4h20.7V82.6c0-16.2,11.5-22.9,25.4-22.9c3.4,0,6.7,0.4,10.1,1.1v7.4
                                            c-3.4-0.7-6.7-1.1-10.1-1.1c-9.4,0-16.9,3.4-16.9,16.2v23.2h24.1v7.4h-24.1v108.1h-8.5V113.8H146z"/>
                                                </g>
                                                <g class="flo-st1">
                                                    <path class="flo-st3" d="M254.5,113.8h-25.2v80.7c0,18.7,8.8,20.5,24.9,20v7.4c-17.5,1.1-34.4-1.3-33.5-27.4v-80.7h-21.4v-7.4h21.4
                                            v-36h8.5v36h25.2L254.5,113.8L254.5,113.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g id="Layer_2">
                                            <g>
                                                <path class="flo-st4" d="M25.6,283.2c0-3.4-0.3-6.4-0.6-8.9c-0.4-2.5-1.3-4.8-2.5-6.9c-1.4-2.3-2.6-3.5-3.6-3.8
                                        c-0.6-0.1-1.3,0.3-2,1.1c-0.9,1-1.6,2.4-2.3,4.2c-0.6,1.9-1.1,3.6-1.3,5.4c-0.6,5-0.9,10.8-0.5,17.4c3.8-0.9,7.2-1.5,10.2-2
                                        c0.5,0,0.9,0,1.4,0.4c0.4,0.3,0.6,0.8,0.8,1.1c0,0.5,0,0.9-0.4,1.4c-0.3,0.4-0.8,0.6-1.1,0.8c-3.1,0.4-6.7,1.1-10.6,2
                                        c0.1,1.6,0.3,3.4,0.5,5.3c0,1.3,0.3,3.4,0.5,6.5l0.6,7.2c0.1,1.6,0.4,3.8,0.5,6.3c0.1,2.5,0.1,4.8,0.1,6.9c0,0.5-0.1,0.9-0.5,1.3
                                        c-0.4,0.4-0.8,0.5-1.3,0.5s-0.9-0.1-1.3-0.5c-0.4-0.4-0.5-0.8-0.5-1.3c0-2,0-4.3-0.1-6.8c-0.1-2.5-0.3-4.5-0.5-6.2l-0.6-7
                                        c-0.3-3-0.5-5.3-0.6-6.4c-0.1-1.9-0.3-3.5-0.4-4.8l-7.2,1.8c-0.5,0.1-0.9,0-1.4-0.1c-0.4-0.3-0.8-0.6-0.8-1.1
                                        c-0.1-0.5,0-0.9,0.1-1.4c0.3-0.4,0.6-0.8,1.1-0.8l7.8-2.1c-0.4-7-0.1-13.2,0.5-18.6c0.3-1.9,0.9-4,1.6-6.2
                                        c0.8-2.1,1.8-3.9,2.9-5.3c1.6-2,3.5-2.8,5.5-2.3c2,0.5,4,2.4,5.9,5.5c1.5,2.5,2.5,5.2,3,7.9c0.4,2.8,0.6,6,0.6,9.7
                                        c0,0.5-0.1,0.9-0.5,1.3c-0.4,0.4-0.8,0.5-1.3,0.5c-0.5,0-0.9-0.1-1.3-0.5C25.7,284.2,25.6,283.7,25.6,283.2z"/>
                                                <path class="flo-st4" d="M32.8,324.9c1.4-1,2.9-3.5,4.7-7.5c0.8-1.9,1.6-4,2.5-6.5c-0.3-0.9-0.5-1.9-0.6-2.8
                                        c-1.3-6.2-1.6-13.6-1.3-22.3c0.1-3.8,0.9-7.8,2-11.8c0.8-2.8,1.5-4.9,2.5-6.5c1.4-2.3,3-3.5,5-3.8c1.9-0.1,3.3,0.8,4.2,2.9
                                        c0.5,1.3,0.8,3,0.8,5.2c0,2.4-0.3,5-0.6,8.1c-1.1,6.8-3.1,15.2-6.2,25.2l-1.9,6c1.8,6.4,4.8,10.8,8.9,13.2c0.5,0.3,1,0.4,1.5,0.5
                                        c0.5,0.1,1.3,0.3,2.4,0.3c1,0,1.8,0.1,2.3,0.1c0.5,0,0.9,0.3,1.3,0.6s0.5,0.9,0.4,1.3c0,0.5-0.3,0.9-0.6,1.3s-0.9,0.5-1.3,0.4
                                        c-0.1,0-0.6,0-1.5-0.1c-0.8,0-1.5-0.1-2-0.1c-0.5,0-1.3-0.1-2-0.4c-0.8-0.1-1.5-0.5-2-0.8c-3.9-2.3-6.9-5.9-9.1-10.9l-1.4,2.6
                                        c-2,4.7-3.9,7.7-5.7,8.9c-0.4,0.3-0.8,0.4-1.3,0.4c-0.5,0-0.9-0.3-1.3-0.6c-0.3-0.4-0.4-0.9-0.4-1.4
                                        C32.2,325.5,32.4,325.1,32.8,324.9z M42.2,303.7c3-9.8,4.9-18,6-24.5c0.4-2.9,0.6-5.3,0.6-7.5c0-1.6-0.1-3-0.5-3.8L48,267v0.3
                                        c-0.8,0-1.5,0.8-2.1,2c-0.9,1.4-1.6,3.1-2.3,5.7c-1,3.8-1.6,7.5-1.8,11.1C41.5,292.7,41.6,298.6,42.2,303.7z"/>
                                                <path class="flo-st4" d="M84.6,286.5c1.9,1.4,3.5,3.4,4.9,6c2.1,4.2,3.3,9.2,3.3,15s-1,10.7-3.1,14.7c-2.5,4.9-6,7.4-10.6,7.5
                                        c-3.1,0-5.9-0.8-7.9-2.3c-2.1-1.5-3.6-3.8-4.7-6.5c-1.9-4.8-2.1-10.6-0.9-17.4c1.3-6.5,3.4-11.7,6.7-15.4c1.8-2,3.8-3.1,5.8-3.5
                                        c0.3,0,0.5-0.1,0.6-0.1c0.3,0,0.5-0.1,0.8-0.1c0.1,0,0.3,0,0.4,0.1C81.2,284.7,83,285.4,84.6,286.5z M82.6,289.6L82.6,289.6
                                        l-0.1-0.1c-1-0.6-2-1.1-3.1-1.3c-0.3,0-0.5,0-0.8,0.1c-1.4,0.3-2.6,1-3.8,2.4c-2.8,3-4.8,7.5-5.9,13.5c-1.1,6-0.9,11.3,0.8,15.5
                                        c1.6,4.4,4.8,6.5,9.2,6.4c3.1,0,5.7-1.9,7.5-5.5c1.8-3.5,2.8-7.9,2.8-13.1c0-5.2-0.9-9.7-2.8-13.3C85.3,292.3,84,290.8,82.6,289.6
                                        z"/>
                                                <path class="flo-st4" d="M97.8,283.6c0.3,3,0.6,9.1,0.8,18.2v1.1c0.4-1.4,0.9-2.5,1.4-3.8c0.8-2,1.6-3.9,2.6-5.7
                                        c0.9-1.6,2-3.3,3.4-4.9c1.3-1.5,2.6-2.8,4.2-3.6c1.5-0.9,3.1-1.5,5-1.9c1.9-0.4,3.9-0.3,6,0.4c0.5,0.1,0.9,0.4,1.1,0.8
                                        c0.3,0.4,0.3,0.9,0.1,1.4c-0.1,0.5-0.4,0.9-0.8,1.1c-0.4,0.3-0.9,0.3-1.4,0.1c-3.6-0.9-6.8-0.1-9.7,2.3c-2.9,2.4-5.3,6.2-7.2,11.2
                                        c-2.3,5.8-3.6,12.1-4,18.9v3.5v1.1c0,0.4,0,0.8,0,1.3s0,0.9,0,1.1v1.4v0.4l-0.1,0.5c-0.3,0.5-0.8,0.9-1.4,1
                                        c-0.8,0.1-1.4-0.1-1.8-0.8l-0.3-0.6c0,0,0-0.1,0-0.3s0-0.3,0-0.4c-0.3-2.3-0.3-5-0.1-8.3c0-0.9,0-2.3-0.1-3.9
                                        c0-1.6-0.1-2.8-0.1-3.3c0-2.3-0.1-3.9-0.1-4.9c0-0.9-0.1-2.6-0.1-5.3c-0.3-9.1-0.5-15.1-0.8-18c0-0.5,0.1-0.9,0.4-1.3
                                        c0.4-0.4,0.8-0.6,1.3-0.6c0.5,0,0.9,0.1,1.3,0.4C97.6,282.7,97.8,283.1,97.8,283.6z"/>
                                                <path class="flo-st4" d="M154.8,299.5c-0.9,1.9-1.6,3.5-2.3,4.8c-0.1,0.1-0.5,1-1.3,2.4l-2.1,4c-0.6,1.3-1.4,2.6-2.5,4.5
                                        c-1,1.8-2,3.4-3,4.8c-2.5,3.5-4.9,5.9-7.2,7.3c-3.3,1.9-6.2,1.5-8.6-1c-3-2.9-3.9-7.4-2.8-13.5c0.9-5.4,3-10.7,6.4-16
                                        c3.5-5.5,7.3-9.4,11.5-11.8c5-3,9.7-2.9,13.7,0.1c0.4,0.3,0.6,0.6,0.6,1.1c0.1,0.5,0,0.9-0.3,1.3c0.1,0,0.3,0.1,0.5,0.1
                                        c0.3,0.1,0.4,0.3,0.6,0.5c0.1,0.1,0.3,0.4,0.3,0.5l0.1,0.1c0,0.1,0,0.3,0.1,0.4c0.1,1.1,0.1,2.8,0,4.8c-0.1,2.1-0.3,3.6-0.3,4.3
                                        c0.3,11.1,1.8,20.4,4.7,27.7c0.1,0.5,0.1,1,0,1.4c-0.3,0.5-0.5,0.8-1,1c-0.5,0.1-1,0.1-1.4,0c-0.5-0.3-0.8-0.5-1-1
                                        C156.9,319.5,155.2,310.3,154.8,299.5z M154.7,287.9c-2.8-2-6-2-9.8,0.1c-3.6,2.1-7,5.7-10.2,10.8c-3.1,4.9-5.2,9.8-6,14.6
                                        c-0.9,4.9-0.3,8.3,1.8,10.4c1.3,1.3,2.6,1.4,4.3,0.4c1.8-1,3.8-3,6-6.2c0.9-1.4,1.9-2.9,2.9-4.5c1-1.6,1.9-3.1,2.4-4.4l2-4
                                        c0.8-1.5,1.1-2.3,1.3-2.4c0.6-1.3,2.1-4.3,4.3-9.2c0.5-1.3,0.9-2.3,1.1-3c0,0,0-0.4,0.1-1c0-0.4,0.1-0.6,0.1-0.8
                                        c0-0.1,0.1-0.4,0.3-0.5C155.2,288.1,155,288,154.7,287.9z"/>
                                                <path class="flo-st5" d="M163.1,295.3v-6.4h6.5v-11.7h8.6v11.7h7.8v6.4h-7.8v20.9c0,2,0.3,3.4,0.6,4c0.5,0.9,1.8,1.4,3.5,1.4
                                        c1.6,0,2.8-0.1,3.6-0.3v6.7c-3.8,0.3-5.7,0.5-5.5,0.5c-4.3,0-7.2-0.9-8.8-2.5c-1.4-1.4-2-3.9-2-7.4v-23.3H163.1z"/>
                                                <path class="flo-st5" d="M227.7,310.7H199c0,3.3,0.9,5.9,2.5,8.1c1.9,2.3,4.5,3.5,7.9,3.5c4.8,0,8.1-2.1,9.6-6.5h8.2
                                        c-0.9,4.2-3,7.4-6.2,9.8c-3.3,2.4-7,3.5-11.5,3.5c-6,0-10.7-1.9-14.1-5.7c-3.4-3.8-5-8.7-5-14.8c0-5.8,1.6-10.6,5-14.5
                                        c3.5-4,8.2-6.2,13.8-6.2c5.5,0,9.9,2,13.5,6c3.4,3.8,5,8.4,5,13.8C227.8,308.8,227.7,309.7,227.7,310.7z M199,305h20.1
                                        c-0.1-2.9-1.1-5.3-2.9-7.3c-1.8-2-4.2-3-6.9-3c-2.9,0-5.3,1-7.3,2.9C200,299.6,199,302,199,305z"/>
                                                <path class="flo-st5" d="M269.2,302h-8.6c-0.8-4.9-3.6-7.3-8.9-7.3c-2.9,0-5.2,0.9-7,2.6c-2.5,2.4-3.6,6.3-3.6,11.6
                                        c0,3.6,0.8,6.7,2.4,9.2c1.9,2.8,4.5,4.3,8.1,4.3c2.5,0,4.5-0.8,6.2-2.4c1.6-1.6,2.6-3.8,3-6.5h8.6c-1.6,10.4-7.7,15.7-17.9,15.7
                                        c-5.9,0-10.6-1.9-14.1-5.8c-3.3-3.6-4.9-8.4-4.9-14.3c0-6.2,1.6-11.2,4.8-15c3.4-4,8.2-6,14.5-6c4.8,0,8.7,1.1,11.8,3.5
                                        C266.8,293.8,268.7,297.3,269.2,302z"/>
                                                <path class="flo-st5" d="M276.1,327.9V274h8.6v20h0.1c1.1-1.8,2.6-3.3,4.8-4.4c2.1-1.1,4.4-1.8,6.9-1.8c4.3,0,7.7,1.1,10.2,3.4
                                        c2.4,2.3,3.6,5.5,3.6,9.9V328h-8.6v-24.7c0-5.8-2.5-8.8-7.7-8.8c-2.8,0-5,1-6.8,2.9c-1.8,2-2.6,4.4-2.6,7.3v23h-8.6V327.9z"/>
                                                <path class="flo-st5" d="M319.6,327.9v-39h8.2v5.8l0.1,0.1c2.8-4.7,6.8-6.9,12.2-6.9c4.3,0,7.7,1.1,10.2,3.4c2.4,2.3,3.6,5.5,3.6,9.9
                                        V328h-8.6v-24.7c0-5.8-2.5-8.8-7.7-8.8c-2.8,0-5,1-6.8,2.9c-1.8,2-2.6,4.4-2.6,7.3v23h-8.7V327.9z"/>
                                                <path class="flo-st5" d="M380.7,329c-6.2,0-10.9-1.9-14.6-5.8c-3.4-3.8-5.2-8.7-5.2-14.8c0-6,1.8-11.1,5.3-14.8
                                        c3.5-3.8,8.3-5.7,14.5-5.7c6.2,0,10.9,1.9,14.6,5.8c3.4,3.8,5.2,8.7,5.2,14.7c0,6.2-1.8,11.1-5.2,14.8
                                        C391.8,327,386.9,329,380.7,329z M380.7,322.2c3.6,0,6.4-1.5,8.4-4.4c1.8-2.5,2.6-5.7,2.6-9.4c0-3.8-0.9-6.8-2.6-9.3
                                        c-2-2.9-4.8-4.4-8.4-4.4c-3.6,0-6.4,1.5-8.4,4.4c-1.8,2.5-2.6,5.7-2.6,9.3c0,3.8,0.9,6.9,2.6,9.4
                                        C374.3,320.7,377.2,322.2,380.7,322.2z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div class="header-options desktop-nav" id="myHeaderSpan">

                            <a href="/services" target="_parent" className="header-a">
                            <span className={"header-options-span " + (this.state.selectedTab == 'servicesContainer' ? 'orange-color' : '')} onClick={(e) => this.goToElement(e, "servicesContainer", 85, false)}>SERVICES
                             <span className="span-border"></span>
                            </span>
                            </a>
                            <a href="/contact" target="_parent" className="header-a">
                            <span className={"header-options-span " + (this.state.selectedTab == 'contact-container' ? 'orange-color' : '')} onClick={(e) => this.goToElement(e, "contact-container", 40, false)}>CONTACT
                             <span className="span-border"></span>
                            </span>
                            </a>
                        </div>
                    </div>
                </header>
            <section class="contact-container" id="contact-container">

                <div class="contact-section">
                    <div class="contact-heading">
                    </div>
                    <div class="contact-us-section">
                        <div class="contact-wrapper">
                            <div class="contact-us-left-section">
                                <span class="left-contact-txt">ADDRESS</span>
                            </div>
                            <div class="contact-us-right-section">
                                <textarea value={this.state.Content} onChange={(e) => this.handleContentChange(e)} rows="4" class="input-data" type="text" placeholder="Address"></textarea>
                                <span className="error-msgs" id="address">Please Enter Email</span>
                            </div>
                        </div>

                        <div class="contact-wrapper input-height">
                            <div class="contact-us-left-section">
                                <span class="left-contact-txt">CALL</span>
                            </div>
                            <div class="contact-us-right-section ">
                                <input value={this.state.MobileNo} onChange={(e) => this.handleMobileNoChange(e)} class="input-data" type="text" placeholder="Call"/>
                                <span className="error-msgs" id="mobilenum">Please Enter Number</span>
                            </div>
                        </div>

                        <div class="contact-wrapper input-height">
                            <div class="contact-us-left-section">
                                <span class="left-contact-txt">EMAIL</span>
                            </div>
                            <div class="contact-us-right-section ">
                                <input value={this.state.Email} onChange={(e) => this.handleContactEmailChange(e)} class="input-data" type="text" placeholder="Email"/>
                                <span className="error-msgs" id="text">Please Enter Email</span>
                            </div>
                        </div>
                        <div className="flora-loader">
                            <button class="flora-btn" onClick={() => this.sendEmail()} >SEND</button>
                            {this.state.showContactLoader ? <div className="loader-flora"></div> : null }
                        </div>
                    </div>

                    <div class="social-media-connect">
                        <ul class="social-media-wrapper">
                            <a href="https://www.facebook.com/Floratechno-Solutions-Private-Limited-1687218574707601/?modal=admin_todo_tour" target="_blank">
                                <li class="social-media-icons "><i class="fa fa-facebook fa-size facebook"></i></li>
                            </a>
                            <li class="social-media-icons"><i class="fa fa-youtube-play fa-size youtube"></i></li>
                            <li class="social-media-icons"><i class="fa fa-linkedin fa-size linkin"></i></li>
                            <li class="social-media-icons"><i class="fa fa-instagram fa-size insta"></i></li>
                            <li class="social-media-icons"><i class="fa fa-twitter fa-size twit"></i></li>

                        </ul>
                    </div>
                </div>
                <section className="contact-container-wrapper" id="contact-wrapper">
                    <p className="contact-p" id="contact-p">CONTACT US</p>
                    <a onClick={() => this.arrowDown()}><i class="fa fa-arrow-circle-down contact-container-i" aria-hidden="true"></i></a>
                </section>
            </section>
                <footer>
                    <div className="footer-info float-left">Powered by <span>Floratechno Solutions Pvt. Ltd.</span></div>
                    <div className="footer-info float-right text-align-right"><span className="copyright-info">©2018 India</span></div>
                </footer>
            </div>
        );
    }
}
render(<Contact/>, document.getElementById('contact'));