import React from 'react';
import {render} from 'react-dom';
import {smoothScroll} from './commoncomponent/helper.js'


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
        document.getElementById("nu1").classList.add("yellow-border");

    }


    movea(){
        document.getElementById("myH1").style.left = "0";
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
    movec(){
        document.getElementById("myH1").style.left = -100 + "vw";
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
        document.getElementById("myH1").style.left = -200 + "vw";
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

                <header class="header-section" id="myHeader">
                    <div class="logo-section">
                        <div class="flower-svg">
                            <svg version="1.1" id="firstSvg" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                 viewBox="0 0 369 98"  class="flora-logo">

                                <g>
                                    <path class="st0" d="M45.2,45.7c0-2.7-0.2-5.1-0.5-7.1c-0.3-2-1-3.8-2-5.5c-1.1-1.8-2.1-2.8-2.9-3c-0.5-0.1-1,0.2-1.6,0.9
                        c-0.7,0.8-1.3,1.9-1.8,3.3c-0.5,1.5-0.9,2.9-1,4.3c-0.5,4-0.7,8.6-0.4,13.8c3-0.7,5.7-1.2,8.1-1.6c0.4,0,0.7,0,1.1,0.3
                        c0.3,0.2,0.5,0.6,0.6,0.9c0,0.4,0,0.7-0.3,1.1c-0.2,0.3-0.6,0.5-0.9,0.6c-2.5,0.3-5.3,0.9-8.4,1.6c0.1,1.3,0.2,2.7,0.4,4.2
                        c0,1,0.2,2.7,0.4,5.2l0.5,5.7c0.1,1.3,0.3,3,0.4,5c0.1,2,0.1,3.8,0.1,5.5c0,0.4-0.1,0.7-0.4,1c-0.3,0.3-0.6,0.4-1,0.4
                        c-0.4,0-0.7-0.1-1-0.4c-0.3-0.3-0.4-0.6-0.4-1c0-1.6,0-3.4-0.1-5.4c-0.1-2-0.2-3.6-0.4-4.9L33.2,65c-0.2-2.4-0.4-4.2-0.5-5.1
                        c-0.1-1.5-0.2-2.8-0.3-3.8l-5.7,1.4c-0.4,0.1-0.7,0-1.1-0.1c-0.3-0.2-0.6-0.5-0.6-0.9c-0.1-0.4,0-0.7,0.1-1.1
                        c0.2-0.3,0.5-0.6,0.9-0.6l6.2-1.7c-0.3-5.6-0.1-10.5,0.4-14.8c0.2-1.5,0.7-3.2,1.3-4.9c0.6-1.7,1.4-3.1,2.3-4.2
                        c1.3-1.6,2.8-2.2,4.4-1.8c1.6,0.4,3.2,1.9,4.7,4.4c1.2,2,2,4.1,2.4,6.3c0.3,2.2,0.5,4.8,0.5,7.7c0,0.4-0.1,0.7-0.4,1
                        c-0.3,0.3-0.6,0.4-1,0.4c-0.4,0-0.7-0.1-1-0.4C45.3,46.5,45.2,46.1,45.2,45.7z"/>
                                    <path class="st0" d="M50.9,78.8c1.1-0.8,2.3-2.8,3.7-6c0.6-1.5,1.3-3.2,2-5.2c-0.2-0.7-0.4-1.5-0.5-2.2c-1-4.9-1.3-10.8-1-17.7
                        c0.1-3,0.7-6.2,1.6-9.4c0.6-2.2,1.2-3.9,2-5.2c1.1-1.8,2.4-2.8,4-3c1.5-0.1,2.6,0.6,3.3,2.3c0.4,1,0.6,2.4,0.6,4.1
                        c0,1.9-0.2,4-0.5,6.4c-0.9,5.4-2.5,12.1-4.9,20l-1.5,4.8c1.4,5.1,3.8,8.6,7.1,10.5c0.4,0.2,0.8,0.3,1.2,0.4c0.4,0.1,1,0.2,1.9,0.2
                        c0.8,0,1.4,0.1,1.8,0.1c0.4,0,0.7,0.2,1,0.5c0.3,0.3,0.4,0.7,0.3,1c0,0.4-0.2,0.7-0.5,1c-0.3,0.3-0.7,0.4-1,0.3
                        c-0.1,0-0.5,0-1.2-0.1c-0.6,0-1.2-0.1-1.6-0.1c-0.4,0-1-0.1-1.6-0.3c-0.6-0.1-1.2-0.4-1.6-0.6c-3.1-1.8-5.5-4.7-7.2-8.7L57.2,74
                        c-1.6,3.7-3.1,6.1-4.5,7.1c-0.3,0.2-0.6,0.3-1,0.3c-0.4,0-0.7-0.2-1-0.5c-0.2-0.3-0.3-0.7-0.3-1.1C50.4,79.3,50.6,79,50.9,78.8z
                         M58.4,62c2.4-7.8,3.9-14.3,4.8-19.5c0.3-2.3,0.5-4.2,0.5-6c0-1.3-0.1-2.4-0.4-3L63,32.8V33c-0.6,0-1.2,0.6-1.7,1.6
                        c-0.7,1.1-1.3,2.5-1.8,4.5c-0.8,3-1.3,6-1.4,8.8C57.8,53.2,57.9,57.9,58.4,62z"/>
                                    <path class="st0" d="M92.1,48.3c1.5,1.1,2.8,2.7,3.9,4.8c1.7,3.3,2.6,7.3,2.6,11.9c0,4.6-0.8,8.5-2.5,11.7c-2,3.9-4.8,5.9-8.4,6
                        c-2.5,0-4.7-0.6-6.3-1.8c-1.7-1.2-2.9-3-3.7-5.2c-1.5-3.8-1.7-8.4-0.7-13.8c1-5.2,2.7-9.3,5.3-12.2c1.4-1.6,3-2.5,4.6-2.8
                        c0.2,0,0.4-0.1,0.5-0.1c0.2,0,0.4-0.1,0.6-0.1c0.1,0,0.2,0,0.3,0.1C89.4,46.9,90.8,47.4,92.1,48.3z M90.5,50.8
                        C90.5,50.8,90.5,50.8,90.5,50.8l-0.1-0.1c-0.8-0.5-1.6-0.9-2.5-1c-0.2,0-0.4,0-0.6,0.1c-1.1,0.2-2.1,0.8-3,1.9
                        c-2.2,2.4-3.8,6-4.7,10.7c-0.9,4.8-0.7,9,0.6,12.3c1.3,3.5,3.8,5.2,7.3,5.1c2.5,0,4.5-1.5,6-4.4c1.4-2.8,2.2-6.3,2.2-10.4
                        c0-4.1-0.7-7.7-2.2-10.6C92.6,52.9,91.6,51.7,90.5,50.8z"/>
                                    <path class="st0" d="M102.6,46c0.2,2.4,0.5,7.2,0.6,14.5v0.9c0.3-1.1,0.7-2,1.1-3c0.6-1.6,1.3-3.1,2.1-4.5c0.7-1.3,1.6-2.6,2.7-3.9
                        c1-1.2,2.1-2.2,3.3-2.9c1.2-0.7,2.5-1.2,4-1.5c1.5-0.3,3.1-0.2,4.8,0.3c0.4,0.1,0.7,0.3,0.9,0.6c0.2,0.3,0.2,0.7,0.1,1.1
                        c-0.1,0.4-0.3,0.7-0.6,0.9c-0.3,0.2-0.7,0.2-1.1,0.1c-2.9-0.7-5.4-0.1-7.7,1.8c-2.3,1.9-4.2,4.9-5.7,8.9c-1.8,4.6-2.9,9.6-3.2,15
                        v2.8V78c0,0.3,0,0.6,0,1c0,0.4,0,0.7,0,0.9v1.1v0.3l-0.1,0.4c-0.2,0.4-0.6,0.7-1.1,0.8c-0.6,0.1-1.1-0.1-1.4-0.6l-0.2-0.5
                        c0,0,0-0.1,0-0.2c0-0.1,0-0.2,0-0.3c-0.2-1.8-0.2-4-0.1-6.6c0-0.7,0-1.8-0.1-3.1c0-1.3-0.1-2.2-0.1-2.6c0-1.8-0.1-3.1-0.1-3.9
                        c0-0.7-0.1-2.1-0.1-4.2c-0.2-7.2-0.4-12-0.6-14.3c0-0.4,0.1-0.7,0.3-1c0.3-0.3,0.6-0.5,1-0.5c0.4,0,0.7,0.1,1,0.3
                        C102.4,45.3,102.6,45.6,102.6,46z"/>
                                    <path class="st0" d="M147.9,58.6c-0.7,1.5-1.3,2.8-1.8,3.8c-0.1,0.1-0.4,0.8-1,1.9l-1.7,3.2c-0.5,1-1.1,2.1-2,3.6
                        c-0.8,1.4-1.6,2.7-2.4,3.8c-2,2.8-3.9,4.7-5.7,5.8c-2.6,1.5-4.9,1.2-6.8-0.8c-2.4-2.3-3.1-5.9-2.2-10.7c0.7-4.3,2.4-8.5,5.1-12.7
                        c2.8-4.4,5.8-7.5,9.1-9.4c4-2.4,7.7-2.3,10.9,0.1c0.3,0.2,0.5,0.5,0.5,0.9c0.1,0.4,0,0.7-0.2,1c0.1,0,0.2,0.1,0.4,0.1
                        c0.2,0.1,0.3,0.2,0.5,0.4c0.1,0.1,0.2,0.3,0.2,0.4l0.1,0.1c0,0.1,0,0.2,0.1,0.3c0.1,0.9,0.1,2.2,0,3.8c-0.1,1.7-0.2,2.9-0.2,3.4
                        c0.2,8.8,1.4,16.2,3.7,22c0.1,0.4,0.1,0.8,0,1.1c-0.2,0.4-0.4,0.6-0.8,0.8c-0.4,0.1-0.8,0.1-1.1,0c-0.4-0.2-0.6-0.4-0.8-0.8
                        C149.5,74.5,148.2,67.2,147.9,58.6z M147.8,49.4c-2.2-1.6-4.8-1.6-7.8,0.1c-2.9,1.7-5.6,4.5-8.1,8.6c-2.5,3.9-4.1,7.8-4.8,11.6
                        c-0.7,3.9-0.2,6.6,1.4,8.3c1,1,2.1,1.1,3.4,0.3c1.4-0.8,3-2.4,4.8-4.9c0.7-1.1,1.5-2.3,2.3-3.6c0.8-1.3,1.5-2.5,1.9-3.5l1.6-3.2
                        c0.6-1.2,0.9-1.8,1-1.9c0.5-1,1.7-3.4,3.4-7.3c0.4-1,0.7-1.8,0.9-2.4c0,0,0-0.3,0.1-0.8c0-0.3,0.1-0.5,0.1-0.6
                        c0-0.1,0.1-0.3,0.2-0.4C148.2,49.6,148,49.5,147.8,49.4z"/>
                                    <path class="st1" d="M154.5,55.3v-5.1h5.2v-9.3h6.8v9.3h6.2v5.1h-6.2v16.6c0,1.6,0.2,2.7,0.5,3.2c0.4,0.7,1.4,1.1,2.8,1.1
                        c1.3,0,2.2-0.1,2.9-0.2v5.3c-3,0.2-4.5,0.4-4.4,0.4c-3.4,0-5.7-0.7-7-2c-1.1-1.1-1.6-3.1-1.6-5.9V55.3H154.5z"/>
                                    <path class="st1" d="M205.8,67.5H183c0,2.6,0.7,4.7,2,6.4c1.5,1.8,3.6,2.8,6.3,2.8c3.8,0,6.4-1.7,7.6-5.2h6.5
                        c-0.7,3.3-2.4,5.9-4.9,7.8c-2.6,1.9-5.6,2.8-9.1,2.8c-4.8,0-8.5-1.5-11.2-4.5c-2.7-3-4-6.9-4-11.8c0-4.6,1.3-8.4,4-11.5
                        c2.8-3.2,6.5-4.9,11-4.9c4.4,0,7.9,1.6,10.7,4.8c2.7,3,4,6.7,4,11C205.9,66,205.8,66.7,205.8,67.5z M183,63h16
                        c-0.1-2.3-0.9-4.2-2.3-5.8c-1.4-1.6-3.3-2.4-5.5-2.4c-2.3,0-4.2,0.8-5.8,2.3C183.8,58.7,183,60.6,183,63z"/>
                                    <path class="st1" d="M238.8,60.6h-6.8c-0.6-3.9-2.9-5.8-7.1-5.8c-2.3,0-4.1,0.7-5.6,2.1c-2,1.9-2.9,5-2.9,9.2
                        c0,2.9,0.6,5.3,1.9,7.3c1.5,2.2,3.6,3.4,6.4,3.4c2,0,3.6-0.6,4.9-1.9c1.3-1.3,2.1-3,2.4-5.2h6.8c-1.3,8.3-6.1,12.5-14.2,12.5
                        c-4.7,0-8.4-1.5-11.2-4.6c-2.6-2.9-3.9-6.7-3.9-11.4c0-4.9,1.3-8.9,3.8-11.9c2.7-3.2,6.5-4.8,11.5-4.8c3.8,0,6.9,0.9,9.4,2.8
                        C236.9,54.1,238.4,56.9,238.8,60.6z"/>
                                    <path class="st1" d="M244.3,81.2V38.4h6.8v15.9h0.1c0.9-1.4,2.1-2.6,3.8-3.5c1.7-0.9,3.5-1.4,5.5-1.4c3.4,0,6.1,0.9,8.1,2.7
                        c1.9,1.8,2.9,4.4,2.9,7.9v21.3h-6.8V61.7c0-4.6-2-7-6.1-7c-2.2,0-4,0.8-5.4,2.3c-1.4,1.6-2.1,3.5-2.1,5.8v18.3H244.3z"/>
                                    <path class="st1" d="M278.8,81.2v-31h6.5v4.6l0.1,0.1c2.2-3.7,5.4-5.5,9.7-5.5c3.4,0,6.1,0.9,8.1,2.7c1.9,1.8,2.9,4.4,2.9,7.9v21.3
                        h-6.8V61.7c0-4.6-2-7-6.1-7c-2.2,0-4,0.8-5.4,2.3c-1.4,1.6-2.1,3.5-2.1,5.8v18.3H278.8z"/>
                                    <path class="st1" d="M327.4,82.1c-4.9,0-8.7-1.5-11.6-4.6c-2.7-3-4.1-6.9-4.1-11.8c0-4.8,1.4-8.8,4.2-11.8c2.8-3,6.6-4.5,11.5-4.5
                        c4.9,0,8.7,1.5,11.6,4.6c2.7,3,4.1,6.9,4.1,11.7c0,4.9-1.4,8.8-4.1,11.8C336.2,80.5,332.3,82.1,327.4,82.1z M327.4,76.7
                        c2.9,0,5.1-1.2,6.7-3.5c1.4-2,2.1-4.5,2.1-7.5c0-3-0.7-5.4-2.1-7.4c-1.6-2.3-3.8-3.5-6.7-3.5c-2.9,0-5.1,1.2-6.7,3.5
                        c-1.4,2-2.1,4.5-2.1,7.4c0,3,0.7,5.5,2.1,7.5C322.3,75.5,324.6,76.7,327.4,76.7z"/>
                                </g>
                            </svg >
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                             viewBox="0 0 400 400"  id="secSvg" className="second-svg">

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
                    </div>
                    <div class="header-options desktop-nav" id="myHeaderSpan">
                       <a href="/about" target="_parent">
                           <span className={"header-options-span " + (this.state.selectedTab == 'about-container' ? 'orange-color' : '')} onClick={(e) => this.goToElement(e, "about-container", 70, false)}>ABOUT
                           <span className="span-border"></span>
                        </span></a>
                        <a href="/team" target="_parent">
                            <span className={"header-options-span " + (this.state.selectedTab == 'team-containers' ? 'orange-color' : '')} onClick={(e) => this.goToElement(e, "team-containers", 101, false)}>TEAM
                            <span className="span-border"></span>
                        </span>
                        </a>
                        <a href="/services" target="_parent">
                        <span className={"header-options-span " + (this.state.selectedTab == 'servicesContainer' ? 'orange-color' : '')} onClick={(e) => this.goToElement(e, "servicesContainer", 85, false)}>SERVICES
                         <span className="span-border"></span>
                        </span>
                            </a>
                        <a href="/contact" target="_parent">
                        <span className={"header-options-span " + (this.state.selectedTab == 'contact-container' ? 'orange-color' : '')} onClick={(e) => this.goToElement(e, "contact-container", 40, false)}>CONTACT
                         <span className="span-border"></span>
                        </span>
                            </a>
                    </div>
                    <div class="dropdown mobile-nav">
                        <i class="fa fa-bars fa-color menu-font-size" aria-hidden="true"></i>
                        <ul class="dropdown-content">
                            <li class="">ABOUT</li>
                            <li class="">CLIENTS</li>
                            <li class="">SERVICES</li>
                            <li class="">CONTACT</li>
                        </ul>
                    </div>
                </header>

                <section id="video-container" className="introduction-video">
                    {/*<video className="intro-video" autoPlay loop>*/}
                    {/*<source src="./assets/flower.mp4" type="video/mp4"/>*/}
                    {/*</video>*/}
                    <div className="video-overlay">
                        <div className="introduction-text first-background" id="myH1">
                            <div className="text-div" >
                                <h5 id="header" className="text-div-h5 show-h5">HELLO!!!</h5>
                                <p id="page" className="text-div-p show-p">WE ARE HERE TECHNOLOGY MEETS INOVATION.</p>
                            </div>
                        </div>
                        <div className="introduction-text sec-background" id="myH2">
                            <div className="text-div" >
                                <h5 id="header1" className="text-div-h5">WE PROVIDE</h5>
                                <p id="page1" className="text-div-p">ALL THAT YOU NEED FOR YOUR BUSINESS.</p>
                                <div className="div-align" id="animate-div">
                                    <section><i class="fa fa-check" aria-hidden="true"></i><span>Designing</span></section>
                                    <section><i class="fa fa-check" aria-hidden="true"></i><span>Development</span></section>
                                    <section><i class="fa fa-check" aria-hidden="true"></i><span>Digital Marketing</span></section>
                                </div>
                            </div>
                        </div>
                        <div className="introduction-text third-background" id="myH3">
                            <div className="third-text-div">
                                <h5 id="header2" className="third-text-div-h5">POWERED BY YOUTH DRIVEN BY TECHNOLOGY</h5>
                                <div className="div-align" id="animate-div1">
                                    <section>LETS <span> CO</span>DREAM</section>
                                    <section>LETS <span> CO</span>THINK</section>
                                    <section>LETS <span> CO</span>GROW</section>
                                    <section>LETS <span> CO</span>DREAM</section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slide-no">
                        <span onClick={() => this.movea()} id="nu1">01</span>
                        <span  onClick={() => this.movec()} id="nu2">02</span>
                        <span  onClick={() => this.moveb()} id="nu3">03</span>

                    </div>
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
                <div className="company-info-container">
                    <div className="about-technology">
                        <h5>Our Technologies</h5>
                        <div className="our-technology">

                            <section>
                                <p>FRONT END</p>
                                <div className="techo-div">
                                    <section>
                                        <img src="https://cdn0.iconfinder.com/data/icons/document-file-types/512/html-512.png"/>
                                    </section>
                                    <section>
                                        <img src="https://image.flaticon.com/icons/svg/29/29088.svg"/>
                                    </section>
                                    <section>
                                        <img src="http://www.iconninja.com/files/795/251/801/black-bootstrap-icon.png"/>
                                    </section>
                                    <section>
                                        <img src="https://png.icons8.com/ios/1600/angularjs.png"/>
                                    </section>
                                    <section>
                                        <img src="https://cdn0.iconfinder.com/data/icons/file-extension/100/JS_TAG-512.png"/>
                                    </section>
                                    <section>
                                        <img src="http://www.free-icons-download.net/images/jquery-icon-17841.png"/>
                                    </section>
                                    <section>
                                        <img src="http://felknar.com/images/icon-react-7b609cd3.svg"/>
                                    </section>
                                </div>

                            </section>
                            <section>
                                <p>BACK END</p>
                                <div className="techo-div">
                                    <section>
                                        <img src="https://intami.pl/wp-content/uploads/sites/3/2016/09/golang-icon.png"/>
                                    </section>
                                    <section>
                                        <img src="https://cdn1.iconfinder.com/data/icons/files-vol-2/24/_php-512.png"/>
                                    </section>
                                    <section>
                                        <img src="http://www.cloudwareoutsourcing.com/test/dotnet-256-black.png"/>
                                    </section>
                                    <section>
                                        <img src="https://image.flaticon.com/icons/svg/28/28884.svg"/>
                                    </section>

                                </div>

                            </section>
                        </div>
                        <div className="our-right-technology">
                            <section>
                                <p>OTHER</p>
                                <div className="techo-div">
                                    <section>
                                        <img src="http://simpleicon.com/wp-content/uploads/wordpress.png"/>
                                    </section>
                                    <section>
                                        <img src="https://image.flaticon.com/icons/svg/29/29594.svg"/>
                                    </section>
                                    <section>
                                        <img src="http://www.myiconfinder.com/uploads/iconsets/1c99182403db6fa330f0b15024c587a9-android.png"/>
                                    </section>
                                    <section>
                                        <img src="https://image.flaticon.com/icons/svg/28/28884.svg"/>
                                    </section>

                                </div>

                            </section>
                            <section>
                                <p>WEB DESIGN</p>
                                <div className="techo-div">
                                    <section>
                                        <img src="https://cdn.iconscout.com/public/images/icon/free/png-512/adobe-illustrator-logo-3ab7f1b01fdac1ec-512x512.png"/>
                                    </section>
                                    <section>
                                        <img src="https://png.icons8.com/ios/1600/adobe-photoshop.png"/>
                                    </section>
                                    <section>
                                        <img src="https://png.icons8.com/windows/1600/adobe-after-effects.png"/>
                                    </section>

                                </div>

                            </section>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="footer-info float-left">Powered by <span>Floratechno Solutions Pvt. Ltd.</span></div>
                    <div className="footer-info float-right text-align-right"><span className="copyright-info">©2018 India</span></div>
                </footer>
            </div>

        );
    }

}

render(<App/>, document.getElementById('app'));