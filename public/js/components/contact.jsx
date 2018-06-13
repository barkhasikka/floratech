import React from 'react';
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
    render(){
        return(
            <section class="contact-container" id="contact-container">
                <div class="contact-section">
                    <div class="contact-heading">
                        <span class="contact-heading-txt">CONTACT</span>
                        <span class="contact-heading-txt-second">US WHENEVER</span>
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
            </section>
        );
    }
}
export default Contact;