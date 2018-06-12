import React from 'react';
import ReactDOM from 'react-dom'
import {render} from 'react-dom';
import {smoothScroll} from "../common";

class App extends React.Component {


    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.isValidEmail = this.isValidEmail.bind(this);
        this.isValidMobileNO = this.isValidMobileNO.bind(this);
        this.state = {
            Email:'',
            EmailErrorMessage:false,
            MobileNo:'',
            MobileErrorMessage:false,
            Content :'',
            ContentErrorMessage:false,
            loader:false,
            currentTab:''
        };

    }
    goToElement(e,id,offset){
        if (id == "about"){
            this.setState({currentTab:"aboutUs"})
        } else if(id == "services"){
            this.setState({currentTab:"service"})
        }else if(id == "contact") {
            this.setState({currentTab: "contactus"})
        }
          smoothScroll(id, offset)
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
        var elmnt = document.getElementById("myHeader");
        var y = elmnt.offsetTop;
        console.log(y);

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

    displayMessage(){
        setTimeout(() => {
            this.setState({EmailErrorMessage:false,
                            MobileErrorMessage:false,
                            ContentErrorMessage:false});
        }, 3000);
    }

    sendEmail() {
        let email = this.isValidEmail(this.state.Email);
        if(!email) {
                this.setState({
                EmailErrorMessage:true
            });
                this.displayMessage();
                return;
        }
                this.setState({EmailErrorMessage:false});
                let mobNo = this.isValidMobileNO(this.state.MobileNo);
        if(!mobNo){
                this.setState({
                MobileErrorMessage:true,
            });
                this.displayMessage();
                return;
        }
                this.setState({MobileErrorMessage:false});
        if(!this.state.Content){
                this.setState({
                ContentErrorMessage:true,
        });
                this.displayMessage();
                return;
        }
        this.setState({ContentErrorMessage:false});
        this.setState({loader:true});
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
                    loader:false
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
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(phoneno.test(mNo)){
            this.state.MobileErrorMessage = true
        }else {
            this.state.MobileErrorMessage = false
        }
        return this.state.MobileErrorMessage;
    }
    // function headerPages(page) {
    //     // window.location  = '/'+page
    // }
    render () {
        return (
        );
    }
}

render(<App/>, document.getElementById('app'));