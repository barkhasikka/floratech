import React from 'react';
import {render} from 'react-dom';
import {smoothScroll} from './commoncomponent/helper.js'
import HeaderComponent from './header.jsx'

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
               <HeaderComponent selectedTab={this.state.selectedTab} />
                <div className="Drop-down" id="to">
                    <section className="section-icon">
                        <section className="icon-place">
                            <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="section-feed">
                                <path d="M64,32A32,32,0,1,0,32,64,32,32,0,0,0,64,32Zm-5.57,0A26.43,26.43,0,1,1,32,5.57,26.45,26.45,0,0,1,58.43,32Z" data-name="&lt;Compound Path&gt;" id="_Compound_Path_"/>
                                <rect height="6.96" width="6.96" x="28.52" y="12.19"/><polygon points="35.48 44.39 35.48 30.85 35.48 23.89 28.88 23.89 25.65 23.89 25.65 30.85 28.88 30.85 28.88 44.39 25.65 44.39 25.65 51.35 28.88 51.35 35.48 51.35 38.35 51.35 38.35 44.39 35.48 44.39"/>
                            </svg>
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
                                <path d="M182.1,365.8h-27.4v-13.7c0-22.6-18.4-41.1-41.1-41.1s-41.1,18.4-41.1,41.1H45.2c0-37.7,30.7-68.4,68.4-68.4    s68.4,30.7,68.4,68.4V365.8z"/></g></g>
                            </svg>
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
                <div className="contact-container" id="contact-container">
                    <div className="contact-section">
                        <nav>
                            <p></p>                            
                        </nav>
                        <div className="contact-us-wrapper">
                        <div class="contact-title"><span class="service-txt">CONTACT US</span></div>
                            <div className="contact-parts">
                                <section className="about-contact">
                                    <section>
                                        <span class="icon-wrapper">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        </span>
                                        <address>
                                            Office No. 205, 2nd Floor,Times Square,
                                            Swargate, Pune, Maharashtra 411037
                                        </address>
                                         
                                    </section>
                                    <section>
                                        <span class="icon-wrapper">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                        </span>
                                        <p> 020-48616736 </p>
                                    </section>
                                    <section>
                                        <span class="icon-wrapper">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                        <p> admin@floratechno.com </p>
                                    </section>
                                </section>
                                <section className="drop">
                                   <div className="contact-us-section">
                                       <div className="contact-wrapper input-height">
                                           <input className="input-data" type="text"  required/>
                                           <label>Name</label>
                                           <span className="error-msgs" id="mobilenum">Please Enter Name</span>
                                       </div>
                                       <div className="contact-wrapper input-height">
                                           <input className="input-data" type="text"  required/>
                                           <label>Subject</label>
                                           <span className="error-msgs" id="mobilenum">Please Enter subject</span>
                                       </div>
                                       <div className="contact-wrapper input-height">
                                           <input value={this.state.MobileNo} onChange={(e) => this.handleMobileNoChange(e)} className="input-data" type="number"  required/>
                                           <label>Call</label>
                                           <span className="error-msgs" id="mobilenum">Please Enter Number</span>
                                       </div>
                                       <div className="contact-wrapper input-height">
                                           <input value={this.state.Email} onChange={(e) => this.handleContactEmailChange(e)} className="input-data" type="email"  required/>
                                           <label>Email</label>
                                           <span className="error-msgs" id="text">Please Enter Email</span>
                                       </div>
                                       <div className="contact-textarea">
                                            <textarea value={this.state.Content} onChange={(e) => this.handleContentChange(e)} rows="4" className="input-data" type="text"  required></textarea>
                                            <label>Address</label>
                                            <span className="error-msgs" id="address">Please Enter Email</span>
                                       </div>
                                       <div className="flora-loader">
                                           <button className="flora-btn" onClick={() => this.sendEmail()}>SEND</button>
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
                    <div className="footer-info float-right text-align-right"><span className="copyright-info">©2020 India</span>
                    </div>
                </footer>
            </div>
        );
    }
}
render(<Contact/>, document.getElementById('contact'));