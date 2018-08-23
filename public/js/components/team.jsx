import React from 'react';
import {render} from 'react-dom';
import {smoothScroll} from './commoncomponent/helper.js'
class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.onImageHover = this.onImageHover.bind(this);
        this.onImageMouseOut = this.onImageMouseOut.bind(this);

    }

    onImageHover(e,imageName){
        e.target.src = "../assets/"+imageName+"_coloured.jpg";
    }

    onImageMouseOut(e,imageName){
        e.target.src = "../assets/"+imageName+".png";
    }

    componentDidMount(){
        smoothScroll("team-containers", 100);
        this.setState({selectedTab: "team-containers"})
        document.getElementsByTagName("body")[0].addEventListener("scroll", function () {
            var elmnt =  document.getElementsByTagName("body")[0];
            var y = elmnt.scrollTop;
            if(y >=100){

                document.getElementById("myHeader").classList.add("header-background");
                document.getElementById("myHeaderSpan").classList.add("header-span-background");
                document.getElementById("firstSvg").classList.add("display-none");
                document.getElementById("secSvg").classList.add("display-block");
            }else{
                document.getElementById("myHeader").classList.remove("header-background");
                document.getElementById("myHeaderSpan").classList.remove("header-span-background");
                document.getElementById("firstSvg").classList.remove("display-none");
                document.getElementById("secSvg").classList.remove("display-block");
            }

        });
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
        return(
            <div >


                <header className="header-section" id="myHeader">
                    <i className="fa fa-bars cates" onClick={() => this.show()}></i>
                    <div className="bind-header">
                        <div className="header-options-right" id="myHeaderSpan1">
                            <a href="/about" target="_parent" className="header-a">
                           <span className="header-option-span " onClick={(e) => this.goToElement(e, "about-container", 70, false)}>ABOUT
                                <span className="span-border"></span>
                            </span>
                            </a>
                            <a href="/team" target="_parent" className="header-a">
                            <span className={"header-option-span " + (this.state.selectedTab == 'team-containers' ? 'orange-color' : '')} onClick={(e) => this.goToElement(e, "team-containers", 101, false)}>TEAM
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
                            <span className="header-option-span "onClick={(e) => this.goToElement(e, "servicesContainer", 85, false)}>SERVICES
                             <span className="span-border"></span>
                            </span>
                            </a>
                            <a href="/contact" target="_parent" className="header-a">
                            <span className="header-option-span " onClick={(e) => this.goToElement(e, "contact-container", 40, false)}>CONTACT
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
                <div className="team-main-wrapper">
                    <div id="triangle-topright"></div>
                    <div id="triangle-bottomleft"></div>
                    <div id="triangle-bottomright"></div>
                    <div id="triangle-topleft"></div>
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
                    </section>
                    <section className="team-container" >
                    <div className="team-text">
                        <span className="team-txt">TEAM</span>
                        <span className="behind-txt">BEHIND THIS</span>
                    </div>
                    <div className="team-photos-section">
                        <div className="team-photos-wrapper">
                            <div className="photos-thumbnail">
                                <div className="photos" >
                                    <img onMouseOver={(e) => this.onImageHover(e,'timothy') } onMouseOut={(e) => this.onImageMouseOut(e,'timothy') } className="photo-wrapper" src="../assets/timothy.png"/>
                                    <span className="pic-name">Timothy Virgillo</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail">
                                <div className="photos">
                                    <img onMouseOver={(e) => this.onImageHover(e,'barkha') } onMouseOut={(e) => this.onImageMouseOut(e,'barkha') } className="photo-wrapper" src="../assets/barkha.png"/>
                                    <span className="pic-name">Barkha Sikka</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail">
                                <div className="photos ">
                                    <img onMouseOver={(e) => this.onImageHover(e,'krishna') } onMouseOut={(e) => this.onImageMouseOut(e,'krishna') } className="photo-wrapper" src="../assets/krishna.png"/>
                                    <span className="pic-name">Krishna Khandagale</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail">
                                <div className="photos">
                                    <img onMouseOver={(e) => this.onImageHover(e,'nafeesa') } onMouseOut={(e) => this.onImageMouseOut(e,'nafeesa') } className="photo-wrapper" src="../assets/nafeesa.png"/>
                                    <span className="pic-name">Nafeesa Langde</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail bottom-30">
                                <div className="photos">
                                    <img onMouseOver={(e) => this.onImageHover(e,'tejal') } onMouseOut={(e) => this.onImageMouseOut(e,'tejal') } className="photo-wrapper" src="../assets/tejal.png"/>
                                    <span className="pic-name">Tejal Ohara</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail bottom-30">
                                <div className="photos">
                                    <img onMouseOver={(e) => this.onImageHover(e,'tejas') } onMouseOut={(e) => this.onImageMouseOut(e,'tejas') } className="photo-wrapper" src="../assets/tejas.png"/>
                                    <span className="pic-name">Tejas Bari</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail bottom-30">
                                <div className="photos">
                                    <img onMouseOver={(e) => this.onImageHover(e,'barkha') } onMouseOut={(e) => this.onImageMouseOut(e,'barkha') } className="photo-wrapper" src="../assets/barkha.png"/>
                                    <span className="pic-name">Barkha Sikka</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail bottom-60">
                                <div className="photos">
                                    <img onMouseOver={(e) => this.onImageHover(e,'aniket') } onMouseOut={(e) => this.onImageMouseOut(e,'aniket') } className="photo-wrapper" src="../assets/aniket.png"/>
                                    <span className="pic-name">Aniket Mane</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail bottom-60">
                                <div className="photos">
                                    <img onMouseOver={(e) => this.onImageHover(e,'mahendra') } onMouseOut={(e) => this.onImageMouseOut(e,'mahendra') } className="photo-wrapper" src="../assets/mahendra.png"/>
                                    <span className="pic-name">Mahendra Kulkarni</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail bottom-60">
                                <div className="photos">
                                    <img onMouseOver={(e) => this.onImageHover(e,'clinton') } onMouseOut={(e) => this.onImageMouseOut(e,'clinton') } className="photo-wrapper" src="../assets/clinton.png"/>
                                    <span className="pic-name">Clinton Fernandes</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail bottom-60">
                                <div className="photos">
                                    <img onMouseOver={(e) => this.onImageHover(e,'samar') } onMouseOut={(e) => this.onImageMouseOut(e,'samar') } className="photo-wrapper" src="../assets/samar.png"/>
                                    <span className="pic-name">Samar Deshpande</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail bottom-90">
                                <div className="photos">
                                    <img onMouseOver={(e) => this.onImageHover(e,'shweta') } onMouseOut={(e) => this.onImageMouseOut(e,'shweta') } className="photo-wrapper" src="../assets/shweta.png"/>
                                    <span className="pic-name">Shweta Takale</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail bottom-90">
                                <div className="photos">
                                    <img onMouseOver={(e) => this.onImageHover(e,'pratiksha') } onMouseOut={(e) => this.onImageMouseOut(e,'pratiksha') } className="photo-wrapper" src="../assets/pratiksha.png"/>
                                    <span className="pic-name">Pratiksha Kature</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail bottom-90">
                                <div className="photos">
                                    <img className="photo-wrapper" onMouseOver={(e) => this.onImageHover(e,'lalit') } onMouseOut={(e) => this.onImageMouseOut(e,'lalit') } src="../assets/lalit.png"/>
                                    <span className="pic-name">Lalit Dhumal</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail bottom-120">
                                <div className="photos">
                                    <img onMouseOver={(e) => this.onImageHover(e,'reshma') } onMouseOut={(e) => this.onImageMouseOut(e,'reshma') } className="photo-wrapper" src="../assets/reshma.png"/>
                                    <span className="pic-name">Reshma Ritond</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail bottom-120">
                                <div className="photos">
                                    <img onMouseOver={(e) => this.onImageHover(e,'aishwarya') } onMouseOut={(e) => this.onImageMouseOut(e,'aishwarya') } className="photo-wrapper" src="../assets/aishwarya.png"/>
                                    <span className="pic-name">Aishwarya Kulkarni</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail bottom-120">
                                <div className="photos">
                                    <img onMouseOver={(e) => this.onImageHover(e,'vikash') } onMouseOut={(e) => this.onImageMouseOut(e,'vikash') } className="photo-wrapper" src="../assets/vikash.png"/>
                                    <span className="pic-name">Vikas Kumar</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail bottom-120">
                                <div className="photos">
                                    <img onMouseOver={(e) => this.onImageHover(e,'vikash') } onMouseOut={(e) => this.onImageMouseOut(e,'vikash') } className="photo-wrapper" src="../assets/vikash.png"/>
                                    <span className="pic-name">Vikas Kumar</span>
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
render(<Team/>, document.getElementById('team'));