import React from 'react';
import { render } from 'react-dom';
import { smoothScroll } from './commoncomponent/helper.js'
import HeaderComponent from './header.jsx'
class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.onImageHover = this.onImageHover.bind(this);
        this.onImageMouseOut = this.onImageMouseOut.bind(this);

    }

    onImageHover(e, imageName) {
        e.target.src = "/assets/coloured/" + imageName + ".jpg";
    }

    onImageMouseOut(e, imageName) {
        e.target.src = "/assets/team/" + imageName + ".jpg";
    }

    sendEmail() {
        let contactUsParams = {
            params: [{
            }],
            method: "LandingService.GetTeamPictures",
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

    componentDidMount() {
        smoothScroll("team-containers", 100);
        this.setState({ selectedTab: "team-containers" })
        document.getElementsByTagName("body")[0].addEventListener("scroll", function () {
            var elmnt = document.getElementsByTagName("body")[0];
            var y = elmnt.scrollTop;
            if (y >= 100) {

                document.getElementById("myHeader").classList.add("header-background");
                document.getElementById("myHeaderSpan").classList.add("header-span-background");
                document.getElementById("firstSvg").classList.add("display-none");
                document.getElementById("secSvg").classList.add("display-block");
            } else {
                document.getElementById("myHeader").classList.remove("header-background");
                document.getElementById("myHeaderSpan").classList.remove("header-span-background");
                document.getElementById("firstSvg").classList.remove("display-none");
                document.getElementById("secSvg").classList.remove("display-block");
            }

        });
        this.sendEmail()
    }

    show() {
        if (document.getElementById("to").style.display == "block") {
            document.getElementById("to").style.display = "none";
        }
        else {
            document.getElementById("to").style.display = "block";
        }

    }

    render() {
        return (
            <div >
                <HeaderComponent selectedTab={this.state.selectedTab} />
                <div className="Drop-down" id="to">
                    <section className="section-icon">
                        <section className="icon-place">
                            <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="section-feed">
                                <path d="M64,32A32,32,0,1,0,32,64,32,32,0,0,0,64,32Zm-5.57,0A26.43,26.43,0,1,1,32,5.57,26.45,26.45,0,0,1,58.43,32Z" data-name="&lt;Compound Path&gt;" id="_Compound_Path_" />
                                <rect height="6.96" width="6.96" x="28.52" y="12.19" /><polygon points="35.48 44.39 35.48 30.85 35.48 23.89 28.88 23.89 25.65 23.89 25.65 30.85 28.88 30.85 28.88 44.39 25.65 44.39 25.65 51.35 28.88 51.35 35.48 51.35 38.35 51.35 38.35 44.39 35.48 44.39" /></svg>

                        </section>
                        <a href="/about" target="_parent" >
                            <span id="mySpan" className={"profile " + (this.state.selectedTab == 'about-container' ? 'orange-colors' : '')} onClick={(e) => this.goToElement(e, "about-container", 70, false)}>About</span>
                        </a>
                    </section>
                    <section className="section-icon">
                        <section className="icon-place">
                            <svg id="Layer_1" version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="section-svg"><g><g>
                                <path d="M113.6,311c-30.2,0-54.8-24.6-54.8-54.8c0-30.2,24.6-54.8,54.8-54.8s54.8,24.6,54.8,54.8C168.4,286.5,143.8,311,113.6,311    z M113.6,228.9c-15.1,0-27.4,12.3-27.4,27.4c0,15.1,12.3,27.4,27.4,27.4s27.4-12.3,27.4-27.4C141,241.2,128.7,228.9,113.6,228.9z" /></g><g>
                                    <path d="M346.3,365.8h-27.4c0-37.7-30.7-68.4-68.4-68.4s-68.4,30.7-68.4,68.4h-27.4c0-52.8,43-95.8,95.8-95.8    S346.3,313,346.3,365.8z" /></g><g>
                                    <path d="M387.4,311c-30.2,0-54.8-24.6-54.8-54.8c0-30.2,24.6-54.8,54.8-54.8c30.2,0,54.8,24.6,54.8,54.8    C442.1,286.5,417.6,311,387.4,311z M387.4,228.9c-15.1,0-27.4,12.3-27.4,27.4c0,15.1,12.3,27.4,27.4,27.4    c15.1,0,27.4-12.3,27.4-27.4C414.8,241.2,402.5,228.9,387.4,228.9z" /></g><g><path d="M250.5,297.4c-37.7,0-68.4-30.7-68.4-68.4s30.7-68.4,68.4-68.4s68.4,30.7,68.4,68.4S288.2,297.4,250.5,297.4z     M250.5,187.9c-22.6,0-41.1,18.4-41.1,41.1s18.4,41.1,41.1,41.1s41.1-18.4,41.1-41.1S273.1,187.9,250.5,187.9z" /></g><g><path d="M346.3,365.8h-27.4v-13.7c0-37.7,30.7-68.4,68.4-68.4s68.4,30.7,68.4,68.4h-27.4c0-22.6-18.4-41.1-41.1-41.1    s-41.1,18.4-41.1,41.1V365.8z" /></g><g>
                                    <path d="M182.1,365.8h-27.4v-13.7c0-22.6-18.4-41.1-41.1-41.1s-41.1,18.4-41.1,41.1H45.2c0-37.7,30.7-68.4,68.4-68.4    s68.4,30.7,68.4,68.4V365.8z" /></g></g></svg>

                        </section>
                        <a href="/team" target="_parent" >
                            <span id="mySpan1" className={"profile " + (this.state.selectedTab == 'team-containers' ? 'orange-colors' : '')} onClick={(e) => this.goToElement(e, "team-containers", 101, false)}>Team</span>
                        </a>
                    </section>
                    <section className="section-icon">
                        <section className="icon-place">

                        </section>
                        <a href="/services" target="_parent">
                            <span id="mySpan2" className={"profile " + (this.state.selectedTab == 'servicesContainer' ? 'orange-colors' : '')} onClick={(e) => this.goToElement(e, "servicesContainer", 85, false)}>Services</span>
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
                <div className="team-main-wrapper">
                    {/*<div id="triangle-topright"></div>*/}
                    {/*<div id="triangle-bottomleft"></div>*/}
                    {/*<div id="triangle-bottomright"></div>*/}
                    {/*<div id="triangle-topleft"></div>*/}
                    <section className="team-info-container clear-both" id="team-containers">
                        <div className="puzzle-body">
                            <div className="jig">
                                <div className="jigsaw1">
                                    <span className="t"></span>
                                    <span className="r"></span>
                                    <span className="b"></span>
                                    <span className="l"></span>

                                    <span className="text">MISSION</span>
                                    <div className="vission-name">
                                        <p> To be a reality of other’s dreams by building the best teams to work with.</p>
                                    </div>
                                </div>
                                <div className="jigsaw2">
                                    <span className="t"></span>
                                    <span className="l"></span>
                                    <span className="r"></span>
                                    <span className="b"></span>

                                    <span className="text1">VISION</span>
                                    <div className="vision-name">
                                        <p>Floratechno turns your ideas into a saleable product by working on its design, development and marketing. We deliver best quality on time, every time.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="jig1">
                                <div className="jigsaw3">
                                    <span className="t"></span>
                                    <span className="r"></span>
                                    <span className="l"></span>
                                    <span className="p"></span>
                                    <span className="text2">VALUES</span>
                                    <div className="vision-name vission-section">
                                        <ul>
                                            <li>Keep it simple, silly!</li>
                                            <li>Work is not work if you are passionate about it.</li>
                                            <li>Your time is money, and so is others'</li>
                                            <li> innovation is the heart beat of progress .</li>
                                            <li>Trust is directly proportional to transparency.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="team-container" >
                            <div className="team-text">
                                <span className="team-txt">TEAM</span>
                                <span className="behind-txt">BEHIND THIS</span>
                            </div>
                            <div className="team-photos-section">
                                <div class="portfolio-thumbnails">
                                    <a href="#" class="large polaroid img1">
                                    <img onMouseOver={(e) => this.onImageHover(e,'Mahesh_Navgire_coloured') } onMouseOut={(e) => this.onImageMouseOut(e,'Mahesh_Navgire_sketch') } src="/assets/team/Mahesh_Navgire_sketch.jpg" className="photo-wrapper" alt="" />
                                    Mahesh Navgire</a>                                     
                                    <a href="#" class="polaroid img2">
                                        <img onMouseOver={(e) => this.onImageHover(e,'Komal_Pardeshi_coloured') } onMouseOut={(e) => this.onImageMouseOut(e,'Komal_Pardeshi_sketch') } src="/assets/team/Komal_Pardeshi_sketch.jpg" className="photo-wrapper" alt="" />
                                        Komal Pardesi</a>
                                    <a href="#" class="small polaroid img3">
                                        <img onMouseOver={(e) => this.onImageHover(e,'Barkha_Sikka_coloured') } onMouseOut={(e) => this.onImageMouseOut(e,'Barkha_Sikka_sketch') } src="/assets/team/Barkha_Sikka_sketch.jpg" className="photo-wrapper" alt="" />Barkha Sikka</a>
                                    <a href="/assets/team/Vikash_Kumar_sketch.jpg" class="medium polaroid img4">
                                        <img onMouseOver={(e) => this.onImageHover(e,'Vikash_Kumar_coloured') } onMouseOut={(e) => this.onImageMouseOut(e,'Vikash_Kumar_sketch') } src="/assets/team/Vikash_Kumar_sketch.jpg" className="photo-wrapper" alt="" />Vikash Kumar</a>
                                    <a href="#" class="polaroid img5">
                                        <img onMouseOver={(e) => this.onImageHover(e,'Preeti_Ladde_coloured') } onMouseOut={(e) => this.onImageMouseOut(e,'Preeti_Ladde_sketch') } src="/assets/team/Preeti_Ladde_sketch.jpg" className="photo-wrapper" alt="" />Preeti Ladde</a>
                                    <a href="#" class="polaroid img6">
                                        <img onMouseOver={(e) => this.onImageHover(e,'Nafeesa_Langde_coloured') } onMouseOut={(e) => this.onImageMouseOut(e,'Nafeesa_Langde_sketch') } src="/assets/team/Nafeesa_Langde_sketch.jpg" className="photo-wrapper" alt="" />Nafeesa Langde</a>
                                    <a href="#" class="polaroid img7">
                                        <img onMouseOver={(e) => this.onImageHover(e,'Tejas_Bari_coloured') } onMouseOut={(e) => this.onImageMouseOut(e,'Tejas_Bari_sketch') } src="/assets/team/Tejas_Bari_sketch.jpg" className="photo-wrapper" alt="" />Tejas Bari</a>
                                    <a href="#" class="medium polaroid img9">
                                        <img onMouseOver={(e) => this.onImageHover(e,'Shweta_Takale_coloured') } onMouseOut={(e) => this.onImageMouseOut(e,'Shweta_Takale_sketch') } src="/assets/team/Shweta_Takale_sketch.jpg" className="photo-wrapper" alt="" />Shweta Takale</a>
                                    <a href="#" class="polaroid img10">
                                        <img onMouseOver={(e) => this.onImageHover(e,'Sayma_Shaikh_coloured') } onMouseOut={(e) => this.onImageMouseOut(e,'Sayma_Shaikh_sketch') } src="/assets/team/Sayma_Shaikh_sketch.jpg" className="photo-wrapper" alt="" />Sayma Shaikh</a>
                                    <a href="#" class="small polaroid img11">
                                    <img onMouseOver={(e) => this.onImageHover(e,'Timothy_Virgillo_coloured') } onMouseOut={(e) => this.onImageMouseOut(e,'Timothy_Virgillo_sketch') }src="/assets/team/Timothy_Virgillo_sketch.jpg" className="photo-wrapper" alt="" />
                                        Timothy Vigillo</a>
                                    <a href="#" class="small polaroid img12">
                                        <img onMouseOver={(e) => this.onImageHover(e,'Aniket_Mane_coloured') } onMouseOut={(e) => this.onImageMouseOut(e,'Aniket_Mane_sketch') } src="/assets/team/Aniket_Mane_sketch.jpg" className="photo-wrapper" alt="" />Aniket Mane!</a>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
                <footer>
                    <div className="footer-info float-left">Powered by <span>Floratechno Solutions Pvt. Ltd.</span></div>
                    <div className="footer-info float-right text-align-right"><span className="copyright-info">©2020 India</span></div>
                </footer>
            </div>
        );
    }
}
render(<Team />, document.getElementById('team'));