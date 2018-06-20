import React from 'react';
import {render} from 'react-dom';
import {smoothScroll} from './commoncomponent/helper.js'

var keyPressCount = 0;
class App extends React.Component {


    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.isValidEmail = this.isValidEmail.bind(this);
        this.handleContactEmailChange = this.handleContactEmailChange.bind(this);
        this.handleMobileNoChange = this.handleMobileNoChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.isValidMobileNO = this.isValidMobileNO.bind(this);
        this.arrowFunction = this.arrowFunction.bind(this);
        this.state = {
            Email:'',
            EmailErrorMessage:false,
            MobileNo:'',
            MobileErrorMessage:false,
            Content :'',
            contactEmail:"",
            showContactLoader : false,
            ContentErrorMessage:false,
            loader:false,
            currentTab:'',
            selectedTab: ''
        };

    }
    arrowFunction(event){
        if(event.keyCode === 39) {
            //Do whatever when esc is pressed
        }
    }
    handleScroll(event) {
        let scrollerTop  = event.target.scrollTop;
        let scrollerBottom = scrollerTop + 50;

        let aboutOffsetTop = document.querySelector("#about").offsetTop - 50 ;
        let aboutBottom = aboutOffsetTop +  document.querySelector("#about").clientHeight;

        let servicesOffsetTop =  document.querySelector("#services").offsetTop - 50;
        let servicesBottom = servicesOffsetTop +  document.querySelector("#services").clientHeight;

        let contactOffsetTop =  document.querySelector("#contact").offsetTop - 50;
        let contactBottom = contactOffsetTop +  document.querySelector("#contact").clientHeight;

        let isSet = false;
        if(scrollerBottom >= aboutOffsetTop && scrollerBottom <= aboutBottom){
            this.setState({currentTab: ""})
            if(document.querySelectorAll(".header-options-span").length > 0) {
                document.querySelectorAll(".header-options-span").forEach((ele) => {
                    ele.classList.remove("tab-color");
                })
            }
            isSet = true;
            document.querySelector("#option-about").classList.add("tab-color");
        }
        if(scrollerBottom >= servicesOffsetTop && scrollerBottom <= servicesBottom){
            this.setState({currentTab: ""})
            if(document.querySelectorAll(".header-options-span").length > 0) {
                document.querySelectorAll(".header-options-span").forEach((ele) => {
                    ele.classList.remove("tab-color");
                })
            }
            isSet = true;
            document.querySelector("#option-services").classList.add("tab-color");

        }

        if(scrollerBottom >= contactOffsetTop && scrollerBottom <= contactBottom){
            this.setState({currentTab: ""})
            if(document.querySelectorAll(".header-options-span").length > 0) {
                document.querySelectorAll(".header-options-span").forEach((ele) => {
                    ele.classList.remove("tab-color");
                })
            }
            isSet = true;
            document.querySelector("#option-contact").classList.add("tab-color");

        }

        if ( !isSet){
            if(document.querySelectorAll(".header-options-span").length > 0) {
                document.querySelectorAll(".header-options-span").forEach((ele) => {
                    ele.classList.remove("tab-color");
                })
            }
            isSet = false;
        }
    }
    componentWillUnmount() {
        document.querySelector("body").removeEventListener("scroll",this.handleScroll);
    };
    componentDidMount() {


    // let p = document.getElementById("video-container");
    //   let q = p.offsetWidth;
    //     this.movea(q);


        document.addEventListener("keydown",function (e) {

                if(e.which == 39) {
                    keyPressCount ++;
                    if(keyPressCount > 2 ){
                        keyPressCount = 0;
                    }
                    document.getElementById("particles-js").style.left = (keyPressCount * -100) + "vw";
                    document.getElementById("myH2").style.left = (keyPressCount * -100) + "vw";
                    document.getElementById("myH3").style.left =(keyPressCount * -100) + "vw";
                }

            if(e.which == 37) {

                keyPressCount --;
                if(keyPressCount < 0 ){
                    keyPressCount = 0;
                }
                document.getElementById("myH2").style.left = (keyPressCount * -100) + "vw";
                document.getElementById("myH3").style.left =  (keyPressCount * -100) + "vw";
                document.getElementById("particles-js").style.left =  (keyPressCount * -100) + "vw";;

            }
        });

         document.getElementsByTagName("body")[0].addEventListener("scroll", function () {
             var elmnt =  document.getElementsByTagName("body")[0];
             var y = elmnt.scrollTop;
             console.log(y);
             if(y >=585){

                 document.getElementById("myHeader").classList.add("header-background");
                 document.getElementById("myHeaderSpan").classList.add("header-span-background");
                 document.getElementById("myHeaderSpan1").classList.add("header-span-background");
                 document.getElementById("mySpan").classList.add("lin-height-100");
                 document.getElementById("mySpan1").classList.add("lin-height-100");
                 document.getElementById("mySpan2").classList.add("lin-height-100");
                 document.getElementById("mySpan3").classList.add("lin-height-100");
                 document.getElementById("firstSvg").classList.add("display-none");
                 document.getElementById("secSvg").classList.add("display-block");
             }else{
                 document.getElementById("myHeader").classList.remove("header-background");
                 document.getElementById("myHeaderSpan").classList.remove("header-span-background");
                 document.getElementById("myHeaderSpan1").classList.remove("header-span-background");
                 document.getElementById("firstSvg").classList.remove("display-none");
                 document.getElementById("secSvg").classList.remove("display-block");
                 document.getElementById("mySpan").classList.remove("lin-height-100");
                 document.getElementById("mySpan1").classList.remove("lin-height-100");
                 document.getElementById("mySpan2").classList.remove("lin-height-100");
                 document.getElementById("mySpan3").classList.remove("lin-height-100");
            }

        });

    }




    movea(){
        document.getElementById("particles-js").style.left = "0";
        document.getElementById("myH2").style.left = 100 + "vw";
        document.getElementById("myH3").style.left = 100 + "vw";
        document.getElementById("nu1").classList.add("yellow-border");
        document.getElementById("header").classList.remove("show-h5");
        document.getElementById("page").classList.remove("show-p");
        document.getElementById("nu2").classList.remove("yellow-border");
        document.getElementById("nu3").classList.remove("yellow-border");
        document.getElementById("header").classList.add("h5-transition");
        document.getElementById("page").classList.add("p-transition");
        setTimeout(function(){
            document.getElementById("header").classList.remove("h5-transition");
            document.getElementById("page").classList.remove("p-transition");}, 2000);
    }
    moved(){
        document.getElementById("particles-js").style.left = "0";
        document.getElementById("myH2").style.left = "0";
    }
    movec(){
        document.getElementById("particles-js").style.left = -100 + "vw";
        document.getElementById("myH2").style.left = -100 + "vw";
        document.getElementById("myH3").style.left = -100 + "vw";
        document.getElementById("nu2").classList.add("yellow-border");
        document.getElementById("nu1").classList.remove("yellow-border");
        document.getElementById("nu3").classList.remove("yellow-border");
        document.getElementById("header1").classList.add("h5-transition");
        document.getElementById("page1").classList.add("p-transition");
        document.getElementById("animate-div").classList.add("div-transition");
        setTimeout(function(){
            document.getElementById("header1").classList.remove("h5-transition");
            document.getElementById("page1").classList.remove("p-transition");
            document.getElementById("animate-div").classList.remove("div-transition");
        }, 3000);
    }
    moveb(){
        document.getElementById("particles-js").style.left = -200 + "vw";
        document.getElementById("myH2").style.left = -200 + "vw";
        document.getElementById("myH3").style.left = -200 + "vw";
        document.getElementById("nu3").classList.add("yellow-border");
        document.getElementById("nu2").classList.remove("yellow-border");
        document.getElementById("nu1").classList.remove("yellow-border");
        document.getElementById("header2").classList.add("h5-transition");
        document.getElementById("animate-div1").classList.add("div-transition");
        setTimeout(function(){
            document.getElementById("header2").classList.remove("h5-transition");
            document.getElementById("animate-div1").classList.remove("div-transition");
        }, 3000);
    };


    sendEmail() {
        let email = this.isValidEmail(this.state.Email);
        if(!email) {
                this.setState({
                EmailErrorMessage:true
            });
            document.getElementById("text").classList.add("display-block");
            setTimeout(function(){
                document.getElementById("text").classList.remove("display-block");
            }, 5000);
                this.displayMessage();
                return;
        }
                this.setState({EmailErrorMessage:false});
                let isValidMobNo = this.isValidMobileNO(this.state.MobileNo);
        if(!isValidMobNo){
                this.setState({
                MobileErrorMessage:true,
            });
            document.getElementById("mobilenum").classList.add("display-block");
            setTimeout(function(){
                document.getElementById("mobilenum").classList.remove("display-block");
            }, 5000);

            this.displayMessage();
                return;
        }
                this.setState({MobileErrorMessage:false});
        if(!this.state.Content){
                this.setState({
                ContentErrorMessage:true,
        });
            document.getElementById("address").classList.add("display-block");
            setTimeout(function(){
                document.getElementById("address").classList.remove("display-block");
            }, 5000);

                this.displayMessage();

                return;
        }
        this.setState({ContentErrorMessage:false});
        this.setState({ showContactLoader:true});
        let contactUsParams = {
            params: [{
            Email:this.state.Email,
            MobileNo:this.state.MobileNo,
            Content :this.state.Content,

        }],
        method: "LandingService.SendContactUs",
        id: "1"
    };

    fetch("/api/", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "same-origin",
            body: JSON.stringify(contactUsParams),
        }).then(response => response.json())
            .then((contactResponse) => {
                this.setState({
                    Email: "",
                    MobileNo:"",
                    Content:"",
                    showContactLoader:false
                });
            }).catch(function(error){
            console.log(error);
        });
    }
    isValidEmail(email) {
        email = email.trim();
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(email)){
            this.state.EmailErrorMessage = true;
        } else {
            this.state.EmailErrorMessage = false;
        }
        return this.state.EmailErrorMessage;
    }
    isValidMobileNO(mNo) {
        let isValidPhone = false;
        var phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(phoneNumberRegex.test(mNo)){
            isValidPhone = true
        }else {
            isValidPhone = false
        }
        return isValidPhone;
    }
    handleContactEmailChange(event){
        this.setState({
            Email: event.target.value
        });
    }
    handleContentChange(event){
        this.setState({
            Content: event.target.value
        });
    }
    handleMobileNoChange(event){
        this.setState({
            MobileNo: event.target.value
        });
    }
    goToElement(event, id, offset, applySmoothScroll){
        applySmoothScroll && smoothScroll(id, offset);
        this.setState({selectedTab: id})

    }

    // function headerPages(page) {
    //     // window.location  = '/'+page
    // }
    render () {
        return (
            <div >

                <section id="video-container" className="introduction-video">
                    {/*<video className="intro-video" autoPlay loop>*/}
                    {/*<source src="./assets/flower.mp4" type="video/mp4"/>*/}
                    {/*</video>*/}
                    <div className="video-overlay">
                        <div className="introduction-text" id="particles-js" >
                            <div className="text-div" >
                                <h5 id="header" className="text-div-h5 show-h5">HELLO!!!</h5>
                                <p id="page" className="text-div-p show-p">WE ARE WHERE TECHNOLOGY MEETS INOVATION</p>
                            </div>
                            <div className="arrow">
                                <a onClick={() => this.movec()}><i class="fa fa-angle-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="introduction-text" id="myH2">
                            <video  autoPlay loop>
                                <source src="assets/pinkal_video.mp4" type="video/mp4"/>
                                        Your browser does not support the video tag.
                            </video>
                            <div className="text-div1" >
                               <div className="we-pro-div">
                                   <h5 id="header1" className="text-div-h5">WE PROVIDE</h5>
                                   <p id="page1" className="">ALL THAT YOU NEED FOR YOUR BUSINESS</p>
                                   <div className="div-align" id="animate-div">
                                       <section><i class="fa fa-check" aria-hidden="true"></i><span>Designing</span></section>
                                       <section><i class="fa fa-check" aria-hidden="true"></i><span>Development</span></section>
                                       <section><i class="fa fa-check" aria-hidden="true"></i><span>Digital Marketing</span></section>
                                   </div>
                               </div>
                            </div>
                            <div className="arrow">
                                <a onClick={() => this.moveb()}><i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                <a onClick={() => this.moved()}><i class="fa fa-angle-left" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="introduction-text third-background" id="myH3">
                            <div className="text-div1" >
                            <div className="third-text-div">
                                <h5 id="header2" className="third-text-div-h5">POWERED BY YOUTH DRIVEN BY TECHNOLOGY</h5>
                                <div className="div-align" id="animate-div1">
                                    <section>LETS <span> CO</span>DREAM</section>
                                    <section>LETS <span> CO</span>THINK</section>
                                    <section>LETS <span> CO</span>CREATE</section>
                                    <section>LETS <span> CO</span>GROW</section>
                                </div>
                            </div>
                            <div className="arrow">
                                <a></a>
                                <a onClick={() => this.movec()}><i class="fa fa-angle-left " aria-hidden="true"></i></a>
                            </div>
                                </div>
                        </div>
                    </div>
                    <header class="header-section" id="myHeader">
                       <div className="bind-header">
                        <div className="header-options-right" id="myHeaderSpan1">
                            <a href="/about" target="_parent" >
                           <span id="mySpan" className={"header-options-span " + (this.state.selectedTab == 'about-container' ? 'orange-color' : '')} onClick={(e) => this.goToElement(e, "about-container", 70, false)}>ABOUT
                                <span className="span-border"></span>
                            </span>
                            </a>
                            <a href="/team" target="_parent" >
                            <span id="mySpan1" className={"header-options-span " + (this.state.selectedTab == 'team-containers' ? 'orange-color' : '')} onClick={(e) => this.goToElement(e, "team-containers", 101, false)}>TEAM
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

                            <a href="/services" target="_parent">
                            <span id="mySpan2" className={"header-options-span " + (this.state.selectedTab == 'servicesContainer' ? 'orange-color' : '')} onClick={(e) => this.goToElement(e, "servicesContainer", 85, false)}>SERVICES
                             <span className="span-border"></span>
                            </span>
                            </a>
                            <a href="/contact" target="_parent">
                            <span id="mySpan3" className={"header-options-span " + (this.state.selectedTab == 'contact-container' ? 'orange-color' : '')} onClick={(e) => this.goToElement(e, "contact-container", 40, false)}>CONTACT
                             <span className="span-border"></span>
                            </span>
                            </a>
                        </div>
                       </div>
                    </header>
                </section>

                <section className="company-info-container">
                    <div className="company-info-heading">
                        <span className="motto-txt">WHAT MAKES US</span>
                        <span className="ceo-txt">DIFFERENT, AND YOU HAPPY</span>
                    </div>

                    <div className="company-info-section">
                        <div className="company-info-section-wrapper">
                            <div className="company-info-thumbnail " id="wrapper">
                                <div className="listener-svg">
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

                                </div>
                            </div>

                            <div className="company-info-thumbnail">
                                <div className="innovation-svg">
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
                                </div>
                            </div>


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