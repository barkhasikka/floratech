import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {

    constructor(props){
        super(props);
        // this.headerPages = this.headerPages.bind(this);
        this.state = {
            isJoined: false
        }
    }
    componentWillMount() {

    };
    componentDidMount() {
        var i = 0;
        var txt = 'GROW';
        var speed = 300;

        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("type-grow").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }else if(txt==="GROW"){
                document.getElementById("type-grow").innerHTML = "";
                txt ='CREATE.'
                i = 0;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
        function getWordPressContent() {
            fetch("http://192.168.1.14:1234/wordpress/wp-json/wp/v2/posts", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(),
            }).then(response => response.json())
                .then(response => {debugger
                    console.log(response);
                });
        }
        setTimeout(getWordPressContent, 9000);
    };


    headerPages(page) {
        // window.location  = '/'+page
    }
    render () {
        return (
            <div>

                <header className="header-section">
                    <div className="logo-section">
                        <div className="flower-svg">
                            <svg  id="Layer_1"  x="0px" y="0px" viewBox="0 0 400 400">
                                <g>
                                    <g className="flora-st0">
                                        <path className="flora-st1" d="M196.9,18.6c-36.8,21-67.3,49.9-89.8,83.5c-24.3,35.4-40.4,77.6-39,122.5c1.9,78.2,56.8,145.6,133,163.2
                                    c76.3-25,126.4-97.7,122.3-177.6c-2.2-41-18.3-78.5-40.7-111C260.5,67.1,231.6,39.6,196.9,18.6z"/>
                                    </g>
                                    <g>
                                        <g className="flora-st0">
                                            <path className="flora-st2" d="M192.4,382.8c-27.9-10.5-51.5-30.4-66.4-56.1c-13.1-23.2-19-49.8-18.1-76.8c1.5-47.6,21.6-90.5,50.8-125
                                        s68.2-61.1,113.6-75.5c14.8,17.4,28,35.4,39.6,54c11.9,18.7,22.1,38,28.7,58.9c13,41.4,10.1,87.7-10.5,128.7
                                        C303.6,343.9,251.5,378.7,192.4,382.8z"/>
                                        </g>
                                        <g className="flora-st0">
                                            <path className="flora-st2" d="M198.5,389.2c28.1-10.8,51.3-30.9,65.9-56.9c13.3-23,18.6-49.6,17.5-76.6c-1.8-47.8-22-90.5-51.6-124.7
                                        c-29.4-34.4-68.5-60.7-114.1-74.5c-14.6,17.4-27.6,35.5-39.1,54c-11.6,18.8-21.9,38.2-28.2,59c-12.7,41.8-9.5,87.9,11.6,129
                                        C87.2,351,139.7,385.5,198.5,389.2z"/>
                                        </g>
                                    </g>
                                    <g className="flora-st0">
                                        <path className="flora-st2" d="M193.2,107.7c47.3,35.7,77,90.4,81.6,149.8c2,28.7-1.7,57.4-15.6,81.8c-13.8,24.1-36.4,42.4-63.6,50.3
                                    c-23.6-6.9-43.8-21.9-57.4-41.7c-13.4-19.7-19.8-43.8-21.5-68.1C112.1,213.1,140.6,148.6,193.2,107.7z"/>
                                    </g>
                                    <g>
                                        <path className="flora-st3" d="M188.6,390.9c-18.8-18.6-30.1-43-32.6-69c-2.3-25.2,3.8-50.5,14.6-73.9c27.7-60.6,83.3-103.7,148.8-116.1
                                    c29.7,46.8,34.3,104.8,12.8,155.7c-12.5,29.3-32.6,54.1-57.8,72.2C249.7,377.4,220.1,388.5,188.6,390.9z"/>
                                        <path className="flora-st3" d="M201.3,390.6c18.5-18.6,29.5-43.2,31.8-69c2.2-25.5-4.1-50.5-15.1-74.1c-28.3-60.4-84.1-103-149.7-114.7
                                    C39.1,179.5,34.7,238,56.6,288.5c12.9,29.4,33.3,54,58.5,71.6C140.2,377.6,169.8,388.6,201.3,390.6z"/>
                                    </g>
                                    <g className="flora-st4">
                                        <g className="flora-st0">
                                            <path className="flora-st5" d="M194,383.7c4.8-18.3,4.3-37.3-0.6-55.2c-5.3-20-16.6-37.8-30.2-53.6c-32.9-39-78.5-65.6-128.9-75.4
                                        c-1.9,21.3,0.3,42.4,5.8,62.5s15.3,39.1,27.9,56.2c14.7,20.4,33.3,36.8,54.8,48.1C144.7,378.1,169,384.1,194,383.7z"/>
                                        </g>
                                        <g className="flora-st0">
                                            <path className="flora-st5" d="M187.1,392c-4.9-18.1-4.9-37.3,0-55.2c5.6-19.9,16.5-38,29.8-53.7c32.8-39.4,78-66.5,128.4-76.3
                                        c2.1,21.2,0.3,42.4-5.3,62.4c-5.7,20.2-14.9,39.4-27.5,56.7c-14.6,20.1-33.2,36.9-54.8,48.5C236.2,385.9,212.1,392.3,187.1,392z"
                                            />
                                        </g>
                                    </g>
                                    <g className="flora-st6">
                                        <g className="flora-st0">
                                            <path className="flora-st7" d="M196.2,381.1c9.8-27.6,26.6-51.9,49-71c27.2-23.1,61.3-36.8,97-38.9c-10.3,30.3-29.6,57.1-55.5,76.6
                                        C260.5,367.8,229,379.4,196.2,381.1z"/>
                                        </g>
                                        <g className="flora-st0">
                                            <path className="flora-st7" d="M189,378.2c-9.9-27.4-27-51.8-49.1-70.6c-27.7-23-61.9-36.5-97.8-38.2c10.8,30.4,30.3,56.9,56.4,76.3
                                        C124.8,365.4,156.3,376.6,189,378.2z"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>

                        <div className="logo-text">
                            <span className="flora-text">flora</span>
                            <span className="techno-text">techno</span>
                        </div>
                    </div>
                    <div className="header-options">
                        <span className="header-options-span" onClick={() =>this.headerPages('about')}>ABOUT</span>
                        <span className="header-options-span" onClick={() =>this.headerPages('clients')}>CLIENTS</span>
                        <span className="header-options-span" onClick={() =>this.headerPages('services')}>SERVICES</span>
                        <span className="header-options-span" onClick={() =>this.headerPages('contact')}>CONTACT</span>
                    </div>
                </header>

                <section id="video-container" className="introduction-video">
                    <video className="intro-video" autoPlay loop>
                        <source src="./assets/flower.mp4" type="video/mp4"/>
                    </video>
                    <div className="video-overlay">
                        <div className="introduction-text">
                            <span className="first-heading">LETS</span>
                            <span className="grow-heading" id="type-grow"></span>
                            <span className="heading">
                                <div className="menu-bar ">
                                    <ul className="menu anim-blink">
                                        <li className="menu-list" onClick={() =>this.headerPages('about')}><span>ABOUT</span></li>
                                        <li className="menu-list" onClick={() =>this.headerPages('clients')}><span>CLIENTS</span></li>
                                        <li className="menu-list" onClick={() =>this.headerPages('services')}><span>SERVICES</span></li>
                                        <li className="menu-list" onClick={() =>this.headerPages('contact')}><span>CONTACT</span></li>
                                    </ul>
						        </div>
                            </span>
                        </div>
                    </div>
                </section>

                <section className="company-details-container">
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
                                    Floratechnosolutions is a leading software solution company located at the heart of Pune Maharashtra.
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

                <section className="services-container">
                    <div className="services-title">
                        <span className="service-txt">SERVICES</span>
                        <span className="offer-txt">WE OFFER</span>
                    </div>

                    <div className="services-description">
                        <div className="flip-container">
                            <div className="card">
                                <div className="side">
                                    <svg className="svg-info" id="Layer_1"  x="0px" y="0px" viewBox="0 0 800 900">
                                        <g>
                                            <path className="mobile-st0" d="M790.6,374.5c0.3-1.3,0.2-3.8,0-5.2c-1-8.8-6.4-14.8-12.7-15.3c-0.5-35.6,0.2-252.9,0.2-252.9s0-90.5-82.6-94
									c-75.4-3.1-565.8,1.7-565.8,1.7S38.1,0,23.7,108v191.6c0,0-10.7,0-10.7,13.9v66.1c0,6.7,5.7,12.2,12.6,12.3v17.4
									c0,0-10.7,3.5-10.7,13.9c0,10.4,0,76.6,0,76.6s0,6.9,10.7,6.9V897l23.3-1.7V94.1c0,0,10.7-48.7,53.8-52.2s100.6,0,100.6,0
									s0,41.8,32.4,45.3c32.4,3.5,327,0,327,0s32.4,6.9,35.9-45.3H692c0,0,50.3,3.5,57.5,52.2c7.2,48.7,0,801.1,0,801.1h28.8V452.8
									c0,0,12.6,1.7,12.6-15.6v-62.7C791.2,373.8,790.5,375.6,790.6,374.5z"/>
                                            <ellipse className="mobile-st1" cx="520.6" cy="52.4" rx="10.7" ry="10.4"/>
                                            <path className="mobile-st1" d="M476,63.3H301.5c-6,0-11-3.9-11-8.5v-4.2c0-4.7,5-8.5,11-8.5H476c6,0,11,3.9,11,8.5v4.2
									C487,59.4,482,63.3,476,63.3z"/>
                                        </g>
                                    </svg>
                                    <blockquote className="svg-description">
                                        Mobile Application Devlopment
                                    </blockquote>
                                </div>
                                <div className="side back">
                                    <blockquote className="service-text">You have an awesome App idea and just looking for ways to turn it into reality.
                                        Whether it is Android or iOS, we at Floratechnoslutions have years of expertise in developing mobile apps for different market segment.
                                        We understand every app is different and has it’s sets of challenges.
                                        We work closely to understand our clients Idea and expectation. With our expert team at dispose,
                                        we deliver quick and always stay alert for smooth working on back-end, for their growing need.
                                    </blockquote>
                                    <span className="see-more-txt">SEE MORE</span>
                                </div>
                            </div>
                        </div>


                        <div className="flip-container">
                            <div className="card">
                                <div className="side">
                                    <svg className="svg-info"  id="Layer_1"  x="0px" y="0px" viewBox="0 0 1000 650">
                                        <rect x="27.6" y="46.1" className="desktop-st0" width="948" height="601.9"/>
                                        <g>
                                            <path className="desktop-st1" d="M10.2,648V30.5c0,0,0-19.6,27.7-29.4h928.9c0,0,23.1,0,23.1,22.1V648h-30V52.5h-915V648H10.2z"/>
                                            <ellipse className="desktop-st2" cx="506.9" cy="25.6" rx="9.8" ry="10.4"/>
                                        </g>
                                    </svg>
                                    <blockquote className="svg-description">
                                        Web Applications
                                    </blockquote>
                                </div>
                                <div className="side back">
                                    <blockquote className="service-text">Our web applications are creative and most efficient..
                                        We plan, strategize, research and develop design keeping our client’s business goals in mind from day 1.
                                        We work with latest technologies and remain clean and clear on with our clients without any false promises.
                                        Whether it is long term support for application or updating as per the new technologies we always provide support whenever needed.
                                    </blockquote>
                                    <span className="see-more-txt">SEE MORE</span>
                                </div>
                            </div>
                        </div>

                        <div className="flip-container">
                            <div className="card">
                                <div className="side">
                                    <svg className="svg-info" id="Layer_1"   x="0px" y="0px" viewBox="0 0 980 550">
                                        <path className="cloud-st0" d="M890.2,537.1c0,0,106.5-96.5,61.3-205.1c-8.8-64.5-64.2-86.8-102-96.8c-34.8-9.2-61.9-36.6-71.1-71.2
									C765.9,117,722,57.9,635,34.7C530.4,6.8,456.9,43.2,413.3,86c-26.2,25.7-63.7,36.7-99.4,28.2c-25.7-6.1-58.7-6.1-96.5,11.7
									c-40.3,19-54.8,49.4-58.3,77.2c-4.3,34.5-25.6,64.3-56.2,80.7c-19.3,10.3-39.9,26.6-57.5,52.1C11.6,385,22.8,444.8,42,484.4
									c0,0,15.6,32.3,29.9,41"/>
                                        <path className="cloud-st1" d="M72.4,524.8c0,0-101.2-63.3-53.1-192.3c0,0,43-83.5,118.9-81c0,0-20.2-101.2,65.8-141.7s159.4,0,159.4,0
									S464-52.1,650.7,17.8c5.2,2,10.5,3.7,15.8,5.4c27.1,8.4,124.6,48,139.8,182.8c0,0,149.3,7.6,169.5,167c0,0,17.7,93.6-86,164.5
									c0,0,92.4-84.8,59.5-203.7S787.3,230,787.3,230s0-154.4-151.8-194.9C482.6-5.7,396.2,90.9,372.3,144c0,0-63.3-60.7-154.4-17.7
									s-50.6,144.2-48,141.7c2.5-2.5-73.4-5.1-124,68.3S45.9,505.8,72.4,524.8z"/>
                                    </svg>
                                    <blockquote className="svg-description">
                                        Web Designing
                                    </blockquote>
                                </div>
                                <div className="side back">
                                    <blockquote className="service-text">
                                        Every business starts with a website in their mind.
                                        Your website is your first and last interaction with your potential customer.
                                        At floratechnosolutions, we understand how customer behavior works and come up with new and unique web design UI to help you get more in terms of value.
                                        We don’t believe in ready made template and never pitch them to our client.
                                        We study and understand the need of our customer in terms of UI and its functions.
                                    </blockquote>
                                    <span className="see-more-txt">SEE MORE</span>
                                </div>
                            </div>
                        </div><div className="flip-container">
                        <div className="card">
                            <div className="side">
                                <svg className="svg-info" id="Layer_1"   x="0px" y="0px" viewBox="0 0 980 550">
                                    <path className="cloud-st0" d="M890.2,537.1c0,0,106.5-96.5,61.3-205.1c-8.8-64.5-64.2-86.8-102-96.8c-34.8-9.2-61.9-36.6-71.1-71.2
									C765.9,117,722,57.9,635,34.7C530.4,6.8,456.9,43.2,413.3,86c-26.2,25.7-63.7,36.7-99.4,28.2c-25.7-6.1-58.7-6.1-96.5,11.7
									c-40.3,19-54.8,49.4-58.3,77.2c-4.3,34.5-25.6,64.3-56.2,80.7c-19.3,10.3-39.9,26.6-57.5,52.1C11.6,385,22.8,444.8,42,484.4
									c0,0,15.6,32.3,29.9,41"/>
                                    <path className="cloud-st1" d="M72.4,524.8c0,0-101.2-63.3-53.1-192.3c0,0,43-83.5,118.9-81c0,0-20.2-101.2,65.8-141.7s159.4,0,159.4,0
									S464-52.1,650.7,17.8c5.2,2,10.5,3.7,15.8,5.4c27.1,8.4,124.6,48,139.8,182.8c0,0,149.3,7.6,169.5,167c0,0,17.7,93.6-86,164.5
									c0,0,92.4-84.8,59.5-203.7S787.3,230,787.3,230s0-154.4-151.8-194.9C482.6-5.7,396.2,90.9,372.3,144c0,0-63.3-60.7-154.4-17.7
									s-50.6,144.2-48,141.7c2.5-2.5-73.4-5.1-124,68.3S45.9,505.8,72.4,524.8z"/>
                                </svg>
                                <blockquote className="svg-description">
                                    Digital Marketing
                                </blockquote>
                            </div>
                            <div className="side back">
                                <blockquote className="service-text">
                                    With our digital marketing services, we help business owners create brand image and generate traffic which helps in sales.
                                    We develop and understand the customer journey from search page till they buy your product or service.
                                    We optimize your web presence on social media organically for best returns.
                                    We help you generate online marketing strategies for every facet of digital marketing.
                                </blockquote>
                                <span className="see-more-txt">SEE MORE</span>
                            </div>
                        </div>
                    </div>
                    </div>

                </section>

                <section className="team-container">
                    <div className="team-text">
                        <span className="team-txt">TEAM</span>
                        <span className="behind-txt">BEHIND THIS</span>
                    </div>
                    <div className="team-photos-section">
                        <div className="team-photos-wrapper">
                            <div className="photos-thumbnail">
                                <div className="photos"></div>
                            </div>
                            <div className="photos-thumbnail">
                                <div className="photos"></div>
                            </div>
                            <div className="photos-thumbnail">
                                <div className="photos"></div>
                            </div>
                            <div className="photos-thumbnail">
                                <div className="photos"></div>
                            </div>
                            <div className="photos-thumbnail">
                                <div className="photos"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="motto-container">
                    <div className="motto-txt-section">
                        <span className="motto-txt">MOTTO</span>
                        <span className="ceo-txt">BY THE CEO</span>
                    </div>

                    <div className="motto-description">
                        <div className="pic-description">
                            <blockquote className="img-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec felis venenatis, maximus libero vitae, ultricies neque.
                                Cras aliquam, metus a auctor efficitur, velit erat ornare libero, at mollis lacus lectus in augue.
                                Proin commodo leo vel tincidunt maximus. Donec sit amet dui quam. Sed euismod sollicitudin nulla,
                                sit amet dignissim ante posuere non. In efficitur volutpat est, ultrices tincidunt augue efficitur
                                euismod.
                            </blockquote>

                            <div className="talk-bubble tri-right round border right-top">
                                <div className="talktext">
                                    <i className="fa fa-quote-left single-quote"><span className="quote"> INSERT SOME QUOTE</span><i className="fa fa-quote-right"></i></i>
                                </div>
                            </div>
                        </div>
                        <div className="image-section">
                            <div className="image"></div>
                            <span className="ceo-name">NAME OF CEO</span>
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
                            <div className="company-info-thumbnail">
                                <div className="listener-svg">
                                    <svg  id="Layer_1"   x="0px" y="0px" viewBox="0 0 400 400">
                                        <g>
                                            <g className="flora-st0">
                                                <path className="flora-st1" d="M196.9,18.6c-36.8,21-67.3,49.9-89.8,83.5c-24.3,35.4-40.4,77.6-39,122.5c1.9,78.2,56.8,145.6,133,163.2
                                    c76.3-25,126.4-97.7,122.3-177.6c-2.2-41-18.3-78.5-40.7-111C260.5,67.1,231.6,39.6,196.9,18.6z"/>
                                            </g>
                                            <g>
                                                <g className="flora-st0">
                                                    <path className="flora-st2" d="M192.4,382.8c-27.9-10.5-51.5-30.4-66.4-56.1c-13.1-23.2-19-49.8-18.1-76.8c1.5-47.6,21.6-90.5,50.8-125
                                        s68.2-61.1,113.6-75.5c14.8,17.4,28,35.4,39.6,54c11.9,18.7,22.1,38,28.7,58.9c13,41.4,10.1,87.7-10.5,128.7
                                        C303.6,343.9,251.5,378.7,192.4,382.8z"/>
                                                </g>
                                                <g className="flora-st0">
                                                    <path className="flora-st2" d="M198.5,389.2c28.1-10.8,51.3-30.9,65.9-56.9c13.3-23,18.6-49.6,17.5-76.6c-1.8-47.8-22-90.5-51.6-124.7
                                        c-29.4-34.4-68.5-60.7-114.1-74.5c-14.6,17.4-27.6,35.5-39.1,54c-11.6,18.8-21.9,38.2-28.2,59c-12.7,41.8-9.5,87.9,11.6,129
                                        C87.2,351,139.7,385.5,198.5,389.2z"/>
                                                </g>
                                            </g>
                                            <g className="flora-st0">
                                                <path className="flora-st2" d="M193.2,107.7c47.3,35.7,77,90.4,81.6,149.8c2,28.7-1.7,57.4-15.6,81.8c-13.8,24.1-36.4,42.4-63.6,50.3
                                    c-23.6-6.9-43.8-21.9-57.4-41.7c-13.4-19.7-19.8-43.8-21.5-68.1C112.1,213.1,140.6,148.6,193.2,107.7z"/>
                                            </g>
                                            <g>
                                                <path className="flora-st3" d="M188.6,390.9c-18.8-18.6-30.1-43-32.6-69c-2.3-25.2,3.8-50.5,14.6-73.9c27.7-60.6,83.3-103.7,148.8-116.1
                                    c29.7,46.8,34.3,104.8,12.8,155.7c-12.5,29.3-32.6,54.1-57.8,72.2C249.7,377.4,220.1,388.5,188.6,390.9z"/>
                                                <path className="flora-st3" d="M201.3,390.6c18.5-18.6,29.5-43.2,31.8-69c2.2-25.5-4.1-50.5-15.1-74.1c-28.3-60.4-84.1-103-149.7-114.7
                                    C39.1,179.5,34.7,238,56.6,288.5c12.9,29.4,33.3,54,58.5,71.6C140.2,377.6,169.8,388.6,201.3,390.6z"/>
                                            </g>
                                            <g className="flora-st4">
                                                <g className="flora-st0">
                                                    <path className="flora-st5" d="M194,383.7c4.8-18.3,4.3-37.3-0.6-55.2c-5.3-20-16.6-37.8-30.2-53.6c-32.9-39-78.5-65.6-128.9-75.4
                                        c-1.9,21.3,0.3,42.4,5.8,62.5s15.3,39.1,27.9,56.2c14.7,20.4,33.3,36.8,54.8,48.1C144.7,378.1,169,384.1,194,383.7z"/>
                                                </g>
                                                <g className="flora-st0">
                                                    <path className="flora-st5" d="M187.1,392c-4.9-18.1-4.9-37.3,0-55.2c5.6-19.9,16.5-38,29.8-53.7c32.8-39.4,78-66.5,128.4-76.3
                                        c2.1,21.2,0.3,42.4-5.3,62.4c-5.7,20.2-14.9,39.4-27.5,56.7c-14.6,20.1-33.2,36.9-54.8,48.5C236.2,385.9,212.1,392.3,187.1,392z"
                                                    />
                                                </g>
                                            </g>
                                            <g className="flora-st6">
                                                <g className="flora-st0">
                                                    <path className="flora-st7" d="M196.2,381.1c9.8-27.6,26.6-51.9,49-71c27.2-23.1,61.3-36.8,97-38.9c-10.3,30.3-29.6,57.1-55.5,76.6
                                        C260.5,367.8,229,379.4,196.2,381.1z"/>
                                                </g>
                                                <g className="flora-st0">
                                                    <path className="flora-st7" d="M189,378.2c-9.9-27.4-27-51.8-49.1-70.6c-27.7-23-61.9-36.5-97.8-38.2c10.8,30.4,30.3,56.9,56.4,76.3
                                        C124.8,365.4,156.3,376.6,189,378.2z"/>
                                                </g>
                                            </g>
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
                                    <svg  id="Layer_1"   x="0px" y="0px" viewBox="0 0 400 400">
                                        <g>
                                            <g className="flora-st0">
                                                <path className="flora-st1" d="M196.9,18.6c-36.8,21-67.3,49.9-89.8,83.5c-24.3,35.4-40.4,77.6-39,122.5c1.9,78.2,56.8,145.6,133,163.2
                                    c76.3-25,126.4-97.7,122.3-177.6c-2.2-41-18.3-78.5-40.7-111C260.5,67.1,231.6,39.6,196.9,18.6z"/>
                                            </g>
                                            <g>
                                                <g className="flora-st0">
                                                    <path className="flora-st2" d="M192.4,382.8c-27.9-10.5-51.5-30.4-66.4-56.1c-13.1-23.2-19-49.8-18.1-76.8c1.5-47.6,21.6-90.5,50.8-125
                                        s68.2-61.1,113.6-75.5c14.8,17.4,28,35.4,39.6,54c11.9,18.7,22.1,38,28.7,58.9c13,41.4,10.1,87.7-10.5,128.7
                                        C303.6,343.9,251.5,378.7,192.4,382.8z"/>
                                                </g>
                                                <g className="flora-st0">
                                                    <path className="flora-st2" d="M198.5,389.2c28.1-10.8,51.3-30.9,65.9-56.9c13.3-23,18.6-49.6,17.5-76.6c-1.8-47.8-22-90.5-51.6-124.7
                                        c-29.4-34.4-68.5-60.7-114.1-74.5c-14.6,17.4-27.6,35.5-39.1,54c-11.6,18.8-21.9,38.2-28.2,59c-12.7,41.8-9.5,87.9,11.6,129
                                        C87.2,351,139.7,385.5,198.5,389.2z"/>
                                                </g>
                                            </g>
                                            <g className="flora-st0">
                                                <path className="flora-st2" d="M193.2,107.7c47.3,35.7,77,90.4,81.6,149.8c2,28.7-1.7,57.4-15.6,81.8c-13.8,24.1-36.4,42.4-63.6,50.3
                                    c-23.6-6.9-43.8-21.9-57.4-41.7c-13.4-19.7-19.8-43.8-21.5-68.1C112.1,213.1,140.6,148.6,193.2,107.7z"/>
                                            </g>
                                            <g>
                                                <path className="flora-st3" d="M188.6,390.9c-18.8-18.6-30.1-43-32.6-69c-2.3-25.2,3.8-50.5,14.6-73.9c27.7-60.6,83.3-103.7,148.8-116.1
                                    c29.7,46.8,34.3,104.8,12.8,155.7c-12.5,29.3-32.6,54.1-57.8,72.2C249.7,377.4,220.1,388.5,188.6,390.9z"/>
                                                <path className="flora-st3" d="M201.3,390.6c18.5-18.6,29.5-43.2,31.8-69c2.2-25.5-4.1-50.5-15.1-74.1c-28.3-60.4-84.1-103-149.7-114.7
                                    C39.1,179.5,34.7,238,56.6,288.5c12.9,29.4,33.3,54,58.5,71.6C140.2,377.6,169.8,388.6,201.3,390.6z"/>
                                            </g>
                                            <g className="flora-st4">
                                                <g className="flora-st0">
                                                    <path className="flora-st5" d="M194,383.7c4.8-18.3,4.3-37.3-0.6-55.2c-5.3-20-16.6-37.8-30.2-53.6c-32.9-39-78.5-65.6-128.9-75.4
                                        c-1.9,21.3,0.3,42.4,5.8,62.5s15.3,39.1,27.9,56.2c14.7,20.4,33.3,36.8,54.8,48.1C144.7,378.1,169,384.1,194,383.7z"/>
                                                </g>
                                                <g className="flora-st0">
                                                    <path className="flora-st5" d="M187.1,392c-4.9-18.1-4.9-37.3,0-55.2c5.6-19.9,16.5-38,29.8-53.7c32.8-39.4,78-66.5,128.4-76.3
                                        c2.1,21.2,0.3,42.4-5.3,62.4c-5.7,20.2-14.9,39.4-27.5,56.7c-14.6,20.1-33.2,36.9-54.8,48.5C236.2,385.9,212.1,392.3,187.1,392z"
                                                    />
                                                </g>
                                            </g>
                                            <g className="flora-st6">
                                                <g className="flora-st0">
                                                    <path className="flora-st7" d="M196.2,381.1c9.8-27.6,26.6-51.9,49-71c27.2-23.1,61.3-36.8,97-38.9c-10.3,30.3-29.6,57.1-55.5,76.6
                                        C260.5,367.8,229,379.4,196.2,381.1z"/>
                                                </g>
                                                <g className="flora-st0">
                                                    <path className="flora-st7" d="M189,378.2c-9.9-27.4-27-51.8-49.1-70.6c-27.7-23-61.9-36.5-97.8-38.2c10.8,30.4,30.3,56.9,56.4,76.3
                                        C124.8,365.4,156.3,376.6,189,378.2z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>

                            <div className="company-info-thumbnail">
                                <div className="innovation-svg">
                                    <svg  id="Layer_1"   x="0px" y="0px" viewBox="0 0 400 400">
                                        <g>
                                            <g className="flora-st0">
                                                <path className="flora-st1" d="M196.9,18.6c-36.8,21-67.3,49.9-89.8,83.5c-24.3,35.4-40.4,77.6-39,122.5c1.9,78.2,56.8,145.6,133,163.2
                                    c76.3-25,126.4-97.7,122.3-177.6c-2.2-41-18.3-78.5-40.7-111C260.5,67.1,231.6,39.6,196.9,18.6z"/>
                                            </g>
                                            <g>
                                                <g className="flora-st0">
                                                    <path className="flora-st2" d="M192.4,382.8c-27.9-10.5-51.5-30.4-66.4-56.1c-13.1-23.2-19-49.8-18.1-76.8c1.5-47.6,21.6-90.5,50.8-125
                                        s68.2-61.1,113.6-75.5c14.8,17.4,28,35.4,39.6,54c11.9,18.7,22.1,38,28.7,58.9c13,41.4,10.1,87.7-10.5,128.7
                                        C303.6,343.9,251.5,378.7,192.4,382.8z"/>
                                                </g>
                                                <g className="flora-st0">
                                                    <path className="flora-st2" d="M198.5,389.2c28.1-10.8,51.3-30.9,65.9-56.9c13.3-23,18.6-49.6,17.5-76.6c-1.8-47.8-22-90.5-51.6-124.7
                                        c-29.4-34.4-68.5-60.7-114.1-74.5c-14.6,17.4-27.6,35.5-39.1,54c-11.6,18.8-21.9,38.2-28.2,59c-12.7,41.8-9.5,87.9,11.6,129
                                        C87.2,351,139.7,385.5,198.5,389.2z"/>
                                                </g>
                                            </g>
                                            <g className="flora-st0">
                                                <path className="flora-st2" d="M193.2,107.7c47.3,35.7,77,90.4,81.6,149.8c2,28.7-1.7,57.4-15.6,81.8c-13.8,24.1-36.4,42.4-63.6,50.3
                                    c-23.6-6.9-43.8-21.9-57.4-41.7c-13.4-19.7-19.8-43.8-21.5-68.1C112.1,213.1,140.6,148.6,193.2,107.7z"/>
                                            </g>
                                            <g>
                                                <path className="flora-st3" d="M188.6,390.9c-18.8-18.6-30.1-43-32.6-69c-2.3-25.2,3.8-50.5,14.6-73.9c27.7-60.6,83.3-103.7,148.8-116.1
                                    c29.7,46.8,34.3,104.8,12.8,155.7c-12.5,29.3-32.6,54.1-57.8,72.2C249.7,377.4,220.1,388.5,188.6,390.9z"/>
                                                <path className="flora-st3" d="M201.3,390.6c18.5-18.6,29.5-43.2,31.8-69c2.2-25.5-4.1-50.5-15.1-74.1c-28.3-60.4-84.1-103-149.7-114.7
                                    C39.1,179.5,34.7,238,56.6,288.5c12.9,29.4,33.3,54,58.5,71.6C140.2,377.6,169.8,388.6,201.3,390.6z"/>
                                            </g>
                                            <g className="flora-st4">
                                                <g className="flora-st0">
                                                    <path className="flora-st5" d="M194,383.7c4.8-18.3,4.3-37.3-0.6-55.2c-5.3-20-16.6-37.8-30.2-53.6c-32.9-39-78.5-65.6-128.9-75.4
                                        c-1.9,21.3,0.3,42.4,5.8,62.5s15.3,39.1,27.9,56.2c14.7,20.4,33.3,36.8,54.8,48.1C144.7,378.1,169,384.1,194,383.7z"/>
                                                </g>
                                                <g className="flora-st0">
                                                    <path className="flora-st5" d="M187.1,392c-4.9-18.1-4.9-37.3,0-55.2c5.6-19.9,16.5-38,29.8-53.7c32.8-39.4,78-66.5,128.4-76.3
                                        c2.1,21.2,0.3,42.4-5.3,62.4c-5.7,20.2-14.9,39.4-27.5,56.7c-14.6,20.1-33.2,36.9-54.8,48.5C236.2,385.9,212.1,392.3,187.1,392z"
                                                    />
                                                </g>
                                            </g>
                                            <g className="flora-st6">
                                                <g className="flora-st0">
                                                    <path className="flora-st7" d="M196.2,381.1c9.8-27.6,26.6-51.9,49-71c27.2-23.1,61.3-36.8,97-38.9c-10.3,30.3-29.6,57.1-55.5,76.6
                                        C260.5,367.8,229,379.4,196.2,381.1z"/>
                                                </g>
                                                <g className="flora-st0">
                                                    <path className="flora-st7" d="M189,378.2c-9.9-27.4-27-51.8-49.1-70.6c-27.7-23-61.9-36.5-97.8-38.2c10.8,30.4,30.3,56.9,56.4,76.3
                                        C124.8,365.4,156.3,376.6,189,378.2z"/>
                                                </g>
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
                                    <svg  id="Layer_1"   x="0px" y="0px" viewBox="0 0 400 400">
                                        <g>
                                            <g className="flora-st0">
                                                <path className="flora-st1" d="M196.9,18.6c-36.8,21-67.3,49.9-89.8,83.5c-24.3,35.4-40.4,77.6-39,122.5c1.9,78.2,56.8,145.6,133,163.2
                                    c76.3-25,126.4-97.7,122.3-177.6c-2.2-41-18.3-78.5-40.7-111C260.5,67.1,231.6,39.6,196.9,18.6z"/>
                                            </g>
                                            <g>
                                                <g className="flora-st0">
                                                    <path className="flora-st2" d="M192.4,382.8c-27.9-10.5-51.5-30.4-66.4-56.1c-13.1-23.2-19-49.8-18.1-76.8c1.5-47.6,21.6-90.5,50.8-125
                                        s68.2-61.1,113.6-75.5c14.8,17.4,28,35.4,39.6,54c11.9,18.7,22.1,38,28.7,58.9c13,41.4,10.1,87.7-10.5,128.7
                                        C303.6,343.9,251.5,378.7,192.4,382.8z"/>
                                                </g>
                                                <g className="flora-st0">
                                                    <path className="flora-st2" d="M198.5,389.2c28.1-10.8,51.3-30.9,65.9-56.9c13.3-23,18.6-49.6,17.5-76.6c-1.8-47.8-22-90.5-51.6-124.7
                                        c-29.4-34.4-68.5-60.7-114.1-74.5c-14.6,17.4-27.6,35.5-39.1,54c-11.6,18.8-21.9,38.2-28.2,59c-12.7,41.8-9.5,87.9,11.6,129
                                        C87.2,351,139.7,385.5,198.5,389.2z"/>
                                                </g>
                                            </g>
                                            <g className="flora-st0">
                                                <path className="flora-st2" d="M193.2,107.7c47.3,35.7,77,90.4,81.6,149.8c2,28.7-1.7,57.4-15.6,81.8c-13.8,24.1-36.4,42.4-63.6,50.3
                                    c-23.6-6.9-43.8-21.9-57.4-41.7c-13.4-19.7-19.8-43.8-21.5-68.1C112.1,213.1,140.6,148.6,193.2,107.7z"/>
                                            </g>
                                            <g>
                                                <path className="flora-st3" d="M188.6,390.9c-18.8-18.6-30.1-43-32.6-69c-2.3-25.2,3.8-50.5,14.6-73.9c27.7-60.6,83.3-103.7,148.8-116.1
                                    c29.7,46.8,34.3,104.8,12.8,155.7c-12.5,29.3-32.6,54.1-57.8,72.2C249.7,377.4,220.1,388.5,188.6,390.9z"/>
                                                <path className="flora-st3" d="M201.3,390.6c18.5-18.6,29.5-43.2,31.8-69c2.2-25.5-4.1-50.5-15.1-74.1c-28.3-60.4-84.1-103-149.7-114.7
                                    C39.1,179.5,34.7,238,56.6,288.5c12.9,29.4,33.3,54,58.5,71.6C140.2,377.6,169.8,388.6,201.3,390.6z"/>
                                            </g>
                                            <g className="flora-st4">
                                                <g className="flora-st0">
                                                    <path className="flora-st5" d="M194,383.7c4.8-18.3,4.3-37.3-0.6-55.2c-5.3-20-16.6-37.8-30.2-53.6c-32.9-39-78.5-65.6-128.9-75.4
                                        c-1.9,21.3,0.3,42.4,5.8,62.5s15.3,39.1,27.9,56.2c14.7,20.4,33.3,36.8,54.8,48.1C144.7,378.1,169,384.1,194,383.7z"/>
                                                </g>
                                                <g className="flora-st0">
                                                    <path className="flora-st5" d="M187.1,392c-4.9-18.1-4.9-37.3,0-55.2c5.6-19.9,16.5-38,29.8-53.7c32.8-39.4,78-66.5,128.4-76.3
                                        c2.1,21.2,0.3,42.4-5.3,62.4c-5.7,20.2-14.9,39.4-27.5,56.7c-14.6,20.1-33.2,36.9-54.8,48.5C236.2,385.9,212.1,392.3,187.1,392z"
                                                    />
                                                </g>
                                            </g>
                                            <g className="flora-st6">
                                                <g className="flora-st0">
                                                    <path className="flora-st7" d="M196.2,381.1c9.8-27.6,26.6-51.9,49-71c27.2-23.1,61.3-36.8,97-38.9c-10.3,30.3-29.6,57.1-55.5,76.6
                                        C260.5,367.8,229,379.4,196.2,381.1z"/>
                                                </g>
                                                <g className="flora-st0">
                                                    <path className="flora-st7" d="M189,378.2c-9.9-27.4-27-51.8-49.1-70.6c-27.7-23-61.9-36.5-97.8-38.2c10.8,30.4,30.3,56.9,56.4,76.3
                                        C124.8,365.4,156.3,376.6,189,378.2z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>

                            <div className="company-info-thumbnail">
                                <div className="bloom-svg">
                                    <svg  id="Layer_1"   x="0px" y="0px" viewBox="0 0 400 400">
                                        <g>
                                            <g className="flora-st0">
                                                <path className="flora-st1" d="M196.9,18.6c-36.8,21-67.3,49.9-89.8,83.5c-24.3,35.4-40.4,77.6-39,122.5c1.9,78.2,56.8,145.6,133,163.2
                                    c76.3-25,126.4-97.7,122.3-177.6c-2.2-41-18.3-78.5-40.7-111C260.5,67.1,231.6,39.6,196.9,18.6z"/>
                                            </g>
                                            <g>
                                                <g className="flora-st0">
                                                    <path className="flora-st2" d="M192.4,382.8c-27.9-10.5-51.5-30.4-66.4-56.1c-13.1-23.2-19-49.8-18.1-76.8c1.5-47.6,21.6-90.5,50.8-125
                                        s68.2-61.1,113.6-75.5c14.8,17.4,28,35.4,39.6,54c11.9,18.7,22.1,38,28.7,58.9c13,41.4,10.1,87.7-10.5,128.7
                                        C303.6,343.9,251.5,378.7,192.4,382.8z"/>
                                                </g>
                                                <g className="flora-st0">
                                                    <path className="flora-st2" d="M198.5,389.2c28.1-10.8,51.3-30.9,65.9-56.9c13.3-23,18.6-49.6,17.5-76.6c-1.8-47.8-22-90.5-51.6-124.7
                                        c-29.4-34.4-68.5-60.7-114.1-74.5c-14.6,17.4-27.6,35.5-39.1,54c-11.6,18.8-21.9,38.2-28.2,59c-12.7,41.8-9.5,87.9,11.6,129
                                        C87.2,351,139.7,385.5,198.5,389.2z"/>
                                                </g>
                                            </g>
                                            <g className="flora-st0">
                                                <path className="flora-st2" d="M193.2,107.7c47.3,35.7,77,90.4,81.6,149.8c2,28.7-1.7,57.4-15.6,81.8c-13.8,24.1-36.4,42.4-63.6,50.3
                                    c-23.6-6.9-43.8-21.9-57.4-41.7c-13.4-19.7-19.8-43.8-21.5-68.1C112.1,213.1,140.6,148.6,193.2,107.7z"/>
                                            </g>
                                            <g>
                                                <path className="flora-st3" d="M188.6,390.9c-18.8-18.6-30.1-43-32.6-69c-2.3-25.2,3.8-50.5,14.6-73.9c27.7-60.6,83.3-103.7,148.8-116.1
                                    c29.7,46.8,34.3,104.8,12.8,155.7c-12.5,29.3-32.6,54.1-57.8,72.2C249.7,377.4,220.1,388.5,188.6,390.9z"/>
                                                <path className="flora-st3" d="M201.3,390.6c18.5-18.6,29.5-43.2,31.8-69c2.2-25.5-4.1-50.5-15.1-74.1c-28.3-60.4-84.1-103-149.7-114.7
                                    C39.1,179.5,34.7,238,56.6,288.5c12.9,29.4,33.3,54,58.5,71.6C140.2,377.6,169.8,388.6,201.3,390.6z"/>
                                            </g>
                                            <g className="flora-st4">
                                                <g className="flora-st0">
                                                    <path className="flora-st5" d="M194,383.7c4.8-18.3,4.3-37.3-0.6-55.2c-5.3-20-16.6-37.8-30.2-53.6c-32.9-39-78.5-65.6-128.9-75.4
                                        c-1.9,21.3,0.3,42.4,5.8,62.5s15.3,39.1,27.9,56.2c14.7,20.4,33.3,36.8,54.8,48.1C144.7,378.1,169,384.1,194,383.7z"/>
                                                </g>
                                                <g className="flora-st0">
                                                    <path className="flora-st5" d="M187.1,392c-4.9-18.1-4.9-37.3,0-55.2c5.6-19.9,16.5-38,29.8-53.7c32.8-39.4,78-66.5,128.4-76.3
                                        c2.1,21.2,0.3,42.4-5.3,62.4c-5.7,20.2-14.9,39.4-27.5,56.7c-14.6,20.1-33.2,36.9-54.8,48.5C236.2,385.9,212.1,392.3,187.1,392z"
                                                    />
                                                </g>
                                            </g>
                                            <g className="flora-st6">
                                                <g className="flora-st0">
                                                    <path className="flora-st7" d="M196.2,381.1c9.8-27.6,26.6-51.9,49-71c27.2-23.1,61.3-36.8,97-38.9c-10.3,30.3-29.6,57.1-55.5,76.6
                                        C260.5,367.8,229,379.4,196.2,381.1z"/>
                                                </g>
                                                <g className="flora-st0">
                                                    <path className="flora-st7" d="M189,378.2c-9.9-27.4-27-51.8-49.1-70.6c-27.7-23-61.9-36.5-97.8-38.2c10.8,30.4,30.3,56.9,56.4,76.3
                                        C124.8,365.4,156.3,376.6,189,378.2z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="right-company-txt">
                                    <p className="company-heading-txt">WE BLOOM WITH YOU.</p>
                                    <span className="sub-company-heading-txt">A team of young enterpreneurs with budding ideas that belive in growing and blooming with their clients success.
                                         Thats our motto right there.
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-container">
                    <div className="contact-section">
                        <div className="contact-heading">
                            <span className="contact-heading-txt">CONTACT</span>
                            <span className="contact-heading-txt-second">US WHENEVER</span>
                        </div>
                        <div className="contact-us-section">
                            <div className="contact-wrapper">
                                <div className="contact-us-left-section">
                                    <span className="left-contact-txt">ADDRESS</span>
                                </div>
                                <div className="contact-us-right-section">
                                    <span className="insert-txt">INSERT</span>
                                </div>
                            </div>

                            <div className="contact-wrapper">
                                <div className="contact-us-left-section">
                                    <span className="left-contact-txt">CALL</span>
                                </div>
                                <div className="contact-us-right-section">
                                    <span className="insert-txt">INSERT</span>
                                </div>
                            </div>

                            <div className="contact-wrapper">
                                <div className="contact-us-left-section">
                                    <span className="left-contact-txt">EMAIL</span>
                                </div>
                                <div className="contact-us-right-section">
                                    <span className="insert-txt">INSERT</span>
                                </div>
                            </div>
                        </div>

                        <div className="social-media-connect">
                            <ul className="social-media-wrapper">
                                <li className="social-media-icons"><i className="fa fa-facebook fa-size"></i></li>
                                <li className="social-media-icons"><i className="fa fa-linkedin fa-size"></i></li>
                                <li className="social-media-icons"><i className="fa fa-twitter fa-size"></i></li>
                                <li className="social-media-icons"><i className="fa fa-instagram fa-size"></i></li>
                                <li className="social-media-icons"><i className="fa fa-youtube-play fa-size"></i></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <footer>
                    <div className="footer-info float-left">Powered by <span>Floratechno Solutions Pvt. Ltd.</span></div>
                    <div className="footer-info float-right text-align-right"><span className="copyright-info">©2018 India</span></div>
                </footer>
            </div>
        
        );
    }
}

render(<App/>, document.getElementById('app'));