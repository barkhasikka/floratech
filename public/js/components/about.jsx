import React from 'react';
import {smoothScroll} from './commoncomponent/helper.js'

class About extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        };

    }
    componentDidMount(){
        smoothScroll("about-container", 70);
    }
    render (){
        return (
            <section className="company-details-container" id="about-container">
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
        );
    }
}
export default About;