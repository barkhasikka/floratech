import React from 'react';
import {render} from 'react-dom';
import {smoothScroll} from './commoncomponent/helper.js'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.sendEmail = this.sendEmail.bind(this);

        this.isValidEmail = this.isValidEmail.bind(this);
        this.handleContactEmailChange = this.handleContactEmailChange.bind(this);
        this.handleMobileNoChange = this.handleMobileNoChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.isValidMobileNO = this.isValidMobileNO.bind(this);
        this.state = {
            Content: '',
            contactEmail: "",
            showContactLoader: false,
            ContentErrorMessage: false,
            loader: false,
            currentTab: '',
            selectedTab: ''
        };


    }

    componentDidMount() {
        smoothScroll("contact-container", 100);
        this.setState({selectedTab: "contact-container"})
    }

    show (){
        if( document.getElementById("to").style.display == "block"  ){
            document.getElementById("to").style.display = "none" ;
        }
        else{
            document.getElementById("to").style.display = "block" ;
        }

    }
    sendEmail() {
        let email = this.isValidEmail(this.state.Email);
        if (!email) {
            this.setState({
                EmailErrorMessage: true
            });
            document.getElementById("text").classList.add("display-block");
            setTimeout(function () {
                document.getElementById("text").classList.remove("display-block");
            }, 5000);
            this.displayMessage();
            return;
        }
        this.setState({EmailErrorMessage: false});
        let isValidMobNo = this.isValidMobileNO(this.state.MobileNo);
        if (!isValidMobNo) {
            this.setState({
                MobileErrorMessage: true,
            });
            document.getElementById("mobilenum").classList.add("display-block");
            setTimeout(function () {
                document.getElementById("mobilenum").classList.remove("display-block");
            }, 5000);

            this.displayMessage();
            return;
        }
        this.setState({MobileErrorMessage: false});
        if (!this.state.Content) {
            this.setState({
                ContentErrorMessage: true,
            });
            document.getElementById("address").classList.add("display-block");
            setTimeout(function () {
                document.getElementById("address").classList.remove("display-block");
            }, 5000);

            this.displayMessage();

            return;
        }
        this.setState({ContentErrorMessage: false});
        this.setState({showContactLoader: true});
        let contactUsParams = {
            params: [{
                Email: this.state.Email,
                MobileNo: this.state.MobileNo,
                Content: this.state.Content,

            }],
            method: "LandingService.SendContactUs",
            id: "1"
        };

        fetch("/api/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "same-origin",
            body: JSON.stringify(contactUsParams),
        }).then(response => response.json())
            .then((contactResponse) => {
                this.setState({
                    Email: "",
                    MobileNo: "",
                    Content: "",
                    showContactLoader: false
                });
            }).catch(function (error) {
            console.log(error);
        });
    }

    isValidEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            this.state.EmailErrorMessage = true;
        } else {
            this.state.EmailErrorMessage = false;
        }
        return this.state.EmailErrorMessage;
    }

    isValidMobileNO(mNo) {
        let isValidPhone = false;
        var phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phoneNumberRegex.test(mNo)) {
            isValidPhone = true
        } else {
            isValidPhone = false
        }
        return isValidPhone;
    }

    handleContactEmailChange(event) {
        this.setState({
            Email: event.target.value
        });
    }

    handleContentChange(event) {
        this.setState({
            Content: event.target.value
        });
    }

    handleMobileNoChange(event) {
        this.setState({
            MobileNo: event.target.value
        });
    }

    render() {
        return (
            <div >

                <header class="header-section" id="myHeader">
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
                            <span
                                className="header-option-span "
                                onClick={(e) => this.goToElement(e, "servicesContainer", 85, false)}>SERVICES
                             <span className="span-border"></span>
                            </span>
                            </a>
                            <a href="/contact" target="_parent" className="header-a">
                            <span
                                className={"header-option-span " + (this.state.selectedTab == 'contact-container' ? 'orange-color' : '')}
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
                <div class="contact-container" id="contact-container">

                    <div class="contact-section">
                        <nav>
                            <p>CONTACT US</p>
                        </nav>
                        <div class="contact-us-wrapper">
                           <div className="contact-parts">
                             <section className="about-contact">
                               <section>
                                   <span>
                                       <i class="fa fa-map-marker" aria-hidden="true"></i>
                                   </span>
                                   <address>
                                        Office No.202, Astha Seagull,
                                       Jambhulkar Chowk, Wanowrie, Pune- 411040.
                                   </address>
                                </section>
                                 <section>
                                   <span>
                                       <i class="fa fa-phone" aria-hidden="true"></i>
                                   </span>
                                    <p>8975669513</p>
                                 </section>
                                 <section>
                                   <span>
                                      <i class="fa fa-envelope" aria-hidden="true"></i>
                                   </span>
                                     <p>floratechnosolutions@gmail.com
                                     </p>
                                 </section>
                            </section>
                               <section className="drop">
                                   <div class="contact-us-section">
                                       <div class="contact-wrapper input-height">
                                           <input
                                                  class="input-data" type="text"  required/><label>Name</label>
                                           <span className="error-msgs" id="mobilenum">Please Enter Name</span>
                                       </div>
                                       <div class="contact-wrapper input-height">
                                           <input
                                                  class="input-data" type="text"  required/><label>Subject</label>
                                           <span className="error-msgs" id="mobilenum">Please Enter subject</span>
                                       </div>

                                       <div class="contact-wrapper input-height">
                                               <input value={this.state.MobileNo} onChange={(e) => this.handleMobileNoChange(e)}
                                                      class="input-data" type="number"  required/><label>Call</label>
                                               <span className="error-msgs" id="mobilenum">Please Enter Number</span>
                                       </div>

                                       <div class="contact-wrapper input-height">
                                               <input value={this.state.Email} onChange={(e) => this.handleContactEmailChange(e)}
                                                      class="input-data" type="email"  required/><label>Email</label>
                                               <span className="error-msgs" id="text">Please Enter Email</span>
                                       </div>
                                       <div class="contact-textarea">

                                            <textarea value={this.state.Content} onChange={(e) => this.handleContentChange(e)}
                                                      rows="4" class="input-data" type="text"  required></textarea><label>Address</label>
                                           <span className="error-msgs" id="address">Please Enter Email</span>

                                       </div>
                                       <div className="flora-loader">
                                           <button class="flora-btn" onClick={() => this.sendEmail()}>SEND</button>
                                           {this.state.showContactLoader ? <div className="loader-flora"></div> : null }
                                       </div>
                                   </div>

                               </section>
                           </div>
                            <section className="contact-parts google-mobile">
                                <div id="map" className="google-map"></div>
                            </section>
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
render(<Contact/>, document.getElementById('contact'));