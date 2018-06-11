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

    // let p = document.getElementById("video-container");
    //   let q = p.offsetWidth;
    //     this.movea(q);
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
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
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
                    </svg>

                        </div>
                    </div>
                    <div class="header-options desktop-nav">
                        <span class="header-options-span">ABOUT</span>
                        <span class="header-options-span">CLIENTS</span>
                        <span class="header-options-span">SERVICES</span>
                        <span class="header-options-span">CONTACT</span>
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
                                 <p id="page" className="text-div-p show-p">ALL THAT YOU NEED FOR YOUR BUSINESS.</p>
                             </div>
                        </div>
                        <div className="introduction-text sec-background" id="myH2">
                            <div className="text-div" >
                                <h5 id="header1" className="text-div-h5">WE PROVIDE</h5>
                                <p id="page1" className="text-div-p">WE ARE HERE TECHNOLOGY MEETS INOVATION.</p>
                                <div className="div-align" id="animate-div">
                                    <section><input type="checkbox" checked/><span>Designing</span></section>
                                    <section><input type="checkbox" checked/><span>Development</span></section>
                                    <section><input type="checkbox" checked/><span>Digital Marketing</span></section>
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
                                        Whether it is Android or iOS, we at Floratechno solutions have years of expertise in developing mobile apps for different market segment.
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
                                        At floratechno solutions, we understand how customer behavior works and come up with new and unique web design UI to help you get more in terms of value.
                                        We don’t believe in ready made template and never pitch them to our client.
                                        We study and understand the need of our customer in terms of UI and its functions.
                                    </blockquote>
                                    <span className="see-more-txt">SEE MORE</span>
                                </div>
                            </div>
                        </div><div className="flip-container">
                        <div className="card">
                            <div className="side">
                                <svg class="svg-info" xmlns="http://www.w3.org/2000/svg"  clip-rule="evenodd" stroke-miterlimit="4.00" viewBox="0 0 1024 768">
                                    <g transform="matrix(1.00, 0.00, -0.00, -1.00, 0.0, 768.0)">
                                        <path d="M 0.0 768.0 L 1024.0 768.0 L 1024.0 0.0 L 0.0 0.0 Z M 0.0  768.0 " fill="#fbfbfb"></path>
                                        <path d="M 532.8 91.4 C 654.7 213.3 654.7 410.9 532.8 532.8 C 410.9 654.7 213.3 654.7 91.4 532.8 C -30.5 410.9 -30.5 213.3 91.4 91.4 C
                                             213.3 -30.5 410.9 -30.5 532.8 91.4 Z M 532.8 91.4 " fill="none" stroke="#000000" stroke-width="5.00" stroke-linecap="round"
                                              stroke-linejoin="round" stroke-dasharray="0.0, 15.0" transform="matrix(1.00, 0.00, 0.00, -1.00, 221.3, 683.7)">
                                        </path>
                                        <path d="M 317.4 663.9 L 366.1 663.9 C 372.0 663.9 375.0 663.9 378.2 662.9 C 381.7 661.7 384.4 658.9 385.7 655.4 C 386.7
                                            652.2 386.7 649.2 386.7 643.2 L 386.7 594.7 C 386.7 588.8 386.7 585.8 385.7 582.6 C 384.4 579.1 381.7 576.4 378.2 575.1 C
                                            375.0 574.1 372.0 574.1 366.0 574.1 L 317.4 574.1 C 311.5 574.1 308.5 574.1 305.3 575.1 C 301.9 576.4 299.1 579.1 297.8
                                            582.6 C 296.8 585.8 296.8 588.8 296.8 594.8 L 296.8 643.3 C 296.8 649.2 296.8 652.2 297.8 655.4 C 299.1 658.9 301.9 661.7
                                            305.3 662.9 C 308.5 663.9 311.5 663.9 317.5 663.9 Z M 317.4 663.9 " fill="#fbfbfb" className="digital-logo1">
                                        </path>
                                        <path d="M 20.6 0.0 L 69.2 0.0 C 75.2 0.0 78.2 0.0 81.3 1.0 C 84.8 2.3 87.6 5.0 88.8 8.5 C 89.9 11.7 89.9 14.7 89.9 20.7 L
                                            89.9 69.2 C 89.9 75.2 89.9 78.2 88.8 81.3 C 87.6 84.8 84.8 87.6 81.3 88.8 C 78.2 89.9 75.2 89.9 69.2 89.9 L 20.6 89.9 C 14.7
                                            89.9 11.7 89.9 8.5 88.8 C 5.0 87.6 2.3 84.8 1.0 81.3 C 0.0 78.2 0.0 75.2 0.0 69.2 L 0.0 20.6 C 0.0 14.7 0.0 11.7 1.0 8.5 C
                                            2.3 5.0 5.0 2.3 8.5 1.0 C 11.7 0.0 14.7 0.0 20.7 0.0 Z M 20.6 0.0 " fill="none" stroke="#000000" stroke-width="2.00"
                                              transform="matrix(1.00, 0.00, 0.00, -1.00, 296.8, 663.9)">
                                        </path>
                                        <g>
                                            <clipPath id="clip-40"><path d="M -35.0 -62.0 L 989.0 -62.0 L 989.0 -702.0 L -35.0 -702.0 Z M -35.2 -62.3 "></path></clipPath>
                                            <g clip-path="url(#clip-40)">
                                                <image  width="864.00" height="540.00" transform="matrix(1.19,0.00, -0.00, -1.19, -35.0, -62.0)">
                                                </image>
                                            </g>
                                        </g>
                                        <path d="M 174.0 132.7 L 266.3 329.0 L 424.1 108.8 L 212.8 76.1 L 174.0 132.7 Z M 174.0 132.7 " fill="#fbfbfb"></path>
                                        <path d="M 0.0 196.3 L 92.4 0.0 L 250.1 220.2 L 38.8 252.9 L 0.0 196.3 Z M 0.0 196.3 " fill="none" stroke="#000000" stroke-width="7.00"
                                              transform="matrix(1.00, 0.00, 0.00, -1.00, 174.0, 329.0)">
                                        </path>
                                        <path d="M 0.0 0.0 L 53.1 0.0 L 53.1 122.3 L 0.0 122.3 Z M 0.0 0.0 " fill="none" stroke="#000000" stroke-width="7.00"
                                              transform="matrix(0.82, 0.57, 0.57, -0.82, 115.5, 121.0)"></path>
                                        <path d="M 0.0 6.5 C 11.0 -3.6 28.4 -1.7 37.1 10.4 C 45.5 22.2 42.1 38.6 29.7 46.1 " fill="none" stroke="#000000" stroke-width="7.00"
                                              transform="matrix(1.00, 0.00, 0.00, -1.00, 358.1, 268.2)"></path>
                                        <path d="M 0.0 10.6 C 31.9 -9.5	74.2 -0.2 94.6 31.6 C 113.7 61.5 106.8 101.1 78.5 122.6 " fill="none" stroke="#000000"
                                              stroke-width="7.00" transform="matrix(1.00,	0.00, 0.00, -1.00, 339.3, 311.0)">
                                        </path>
                                        <path d="M 0.0 16.5 C 44.9 -11.9 103.9 -2.9 138.3 37.7 C 177.6 84.0 171.3 153.6 124.3 192.1 " fill="none" stroke="#000000"
                                              stroke-width="7.00" transform="matrix(1.00, 0.00, 0.00, -1.00, 315.7, 345.7)">
                                        </path>
                                        <path d="M 281.8 468.0 L 294.3 482.8 C 265.0 502.2 222.0 487.5 218.1 450.5 C 215.7 428.6 228.7 409.6 247.9 403.7 C
                                            279.1 394.0 310.9 419.6 306.5 453.2 L 264.3 453.7 L 263.7 436.1 L 288.0 436.6 C 284.2 424.7 273.7 418.5 263.0 418.7 C
                                            250.3 419.0 238.6 428.0 236.7 443.2 C 233.5 468.0 262.5 484.0 281.8 468.0 Z M 281.8 468.0 " fill="#fbfbfb"
                                              className="digital-logo0">
                                        </path>
                                        <path d="M 64.0 23.4 L 76.5 8.6 C 47.2 -10.8 4.3 3.8 0.3 40.9 C -2.1 62.8 10.9 81.8 30.1 87.7 C 61.3 97.3 93.1 71.8 88.7 38.2
                                            L 46.5 37.7 L 45.9 55.3 L 70.2 54.7 C 66.4 66.7 55.9 72.9 45.2 72.7 C 32.5 72.4 20.8 63.4 18.9 48.2 C 15.7 23.3 44.7
                                            7.4 64.0 23.4 Z M 64.0 23.4 " fill="none" stroke="#000000" stroke-width="2.00" transform="matrix(1.00, 0.00, 0.00, -1.00, 217.8, 491.4)">
                                        </path>
                                        <path d="M 0.0 0.0 L 0.4 23.8 " fill="none" stroke="#000000" stroke-width="2.00" transform="matrix(1.00, -0.02, -0.02, -1.00, 307.7, 486.3)"
                                              className="digital-logo1">
                                        </path>
                                        <path d="M 0.0 0.0 L 18.3 0.0 " fill="none" stroke="#000000" stroke-width="2.00" transform="matrix(1.00, 0.00, 0.00, -1.00, 298.5, 474.5)"
                                              className="digital-logo1">
                                        </path>
                                        <path d="M 306.0 632.4 L 321.7 632.4 L 321.1 588.9 L 305.6 588.9 L 306.0 632.4 Z M 306.0 632.4 " fill="#fbfbfb"
                                              className="digital-logo2">
                                        </path>
                                        <path d="M 0.4 0.0 L 16.1 0.0 L 15.5 43.5 L 0.0 43.5 L 0.4 0.0 Z M 0.4 0.0 " fill="none" stroke="#000000" stroke-width="2.00"
                                              transform="matrix(1.00, 0.00, 0.00, -1.00, 305.6, 632.4)">
                                        </path>
                                        <path d="M 318.9 651.4 C 321.8 648.5 321.8 643.8 318.9 640.9 C 316.0 638.0 311.3 638.0 308.4 640.9 C 305.5 643.8 305.5 648.5 308.4 651.4 C
				                            311.3 654.3 316.0 654.3 318.9 651.4 Z M 318.9 651.4 " fill="#fbfbfb" className="digital-logo2">
                                        </path>
                                        <path d="M 12.6 2.2 C 15.5 5.1 15.5 9.8 12.6 12.6 C 9.8 15.5 5.1 15.5 2.2 12.6 C -0.7 9.8 -0.7 5.1 2.2 2.2 C 5.1 -0.7 9.8 -0.7 12.6
		                                     2.2 Z M 12.6 2.2 " fill="none" stroke="#000000" stroke-width="2.00" transform="matrix(1.00, 0.00, 0.00, -1.00, 306.2, 653.6)">
                                        </path>
                                        <path d="M 331.7 632.5 L 331.3 589.2 L 346.0 588.8 L 346.4 616.1 C 347.4 619.1 350.2 621.2
                                            353.4 621.1 C 357.2 620.9 360.2 617.9 360.3 614.1 L 360.3 587.4 L 374.7 587.5 L 374.5 624.6 C 371.7 630.8 365.6 634.7 358.8
                                            634.6 C 351.9 634.5 345.8 630.3 343.3 623.8 L 343.8 632.1 L 331.7 632.5 Z M 331.7 632.5 " fill="#fbfbfb" className="digital-logo2">
                                        </path>
                                        <path d="M 0.5 2.1 L 0.0 45.4 L 14.7 45.8 L 15.1 18.5 C 16.1 15.5 18.9 13.4 22.1 13.6 C 25.9 13.7 28.9 16.7 29.1 20.5 L 29.1 47.2 L 43.4 47.1 L 43.2
                                             10.0 C 40.4 3.9 34.3 -0.1 27.6 0.0 C 20.7 0.1 14.5 4.4 12.0 10.8 L 12.6 2.5 L 0.5 2.1 Z M 0.5 2.1 " fill="none" stroke="#000000"
                                              stroke-width="2.00" transform="matrix(1.00, 0.00, 0.00, -1.00, 331.3, 634.6)">
                                        </path>
                                        <path d="M 551.0 709.5 L 592.5 708.9 L 593.1 650.4 L 551.8 650.5 L 551.0 709.5 Z M 551.0 709.5 " fill="#fbfbfb"  className="digital-logo0"></path>
                                        <path d="M 0.0 0.0 L 41.5 0.6 L 42.1 59.1 L 0.8 59.0 L 0.0 0.0 Z M 0.0 0.0 " fill="none" stroke="#000000" stroke-width="2.00"
                                              transform="matrix(1.00, 0.00, 0.00, -1.00, 551.0, 709.5)">
                                        </path>
                                        <path d="M 593.6 706.3 C 599.3 710.7 604.5 715.8 609.0 721.5 C 613.7 727.6 617.5 734.3 620.4 741.5 C 619.8 745.0 619.5 748.5 619.5 752.0 C 619.5 755.5
                                            619.7 759.0 620.2 762.4 C 622.2 765.9 626.2 767.6 630.1 766.7 C 633.2 766.0 635.6 763.9 637.2 761.3 C 638.6 759.2 639.6 756.7 639.9 754.0 C 640.6
                                            747.8 640.6 741.5 640.1 735.3 C 639.5 729.2 638.4 723.2 636.8 717.4 L 677.2 719.0 C 679.2 716.9 680.1 713.9 679.6 710.9	C 678.9 707.2 676.0
                                            704.2 672.3 703.4 C 674.7 701.0 675.7 697.7 675.2 694.4 C 674.5 690.6 671.9 687.4 668.3 686.1 C 671.9 685.8 674.5 682.8 674.5 679.2 C 674.5 675.1
                                            671.0 672.0 667.0 672.3 C 670.2 670.4 671.9 666.6 671.1 663.0 C 670.4 659.4 667.5 656.7 664.0 656.1 L 595.1 658.0 " fill="#fbfbfb"
                                              className="digital-logo0">
                                        </path>
                                        <path d="M 0.0 60.7 C 5.8 56.3 11.0 51.2 15.4 45.4 C 20.1 39.3 24.0 32.6 26.8 25.5 C 26.3 22.0 26.0 18.5 25.9 15.0 C
                                            25.9 11.5 26.1 8.0 26.6 4.5 C 28.6 1.1 32.6 -0.7 36.5 0.2 C 39.6 0.9 42.0 3.1 43.7 5.6 C 45.1 7.8 46.0 10.3 46.4 13.0
                                            C 47.0 19.2 47.0 25.5 46.5 31.7 C 46.0 37.7 44.9 43.7 43.2 49.6 L 83.6 48.0 C 85.7 50.1 86.6 53.1 86.0 56.0 C 85.3 59.8
                                            82.5 62.7 78.8 63.5 C 81.1 65.9 82.1 69.3 81.6 72.6 C 81.0 76.4 78.3 79.5 74.7 80.8 C 78.3 81.2 81.0 84.2 80.9 87.8 C 80.9
                                            91.8 77.5 95.0 73.4 94.7 C 76.6 96.6 78.3 100.3 77.6 104.0 C 76.8 107.6 74.0 110.3 70.4 110.9 L 1.6 108.9 " fill="none"
                                              stroke="#000000" stroke-width="2.00" transform="matrix(1.00, 0.00, 0.00, -1.00, 593.6, 767.0)">
                                        </path>
                                        <path d="M 767.2 342.8 L 907.8 341.4 L 907.9 268.0 L 767.8 269.9 L 767.1 342.5 L 767.2 342.8 Z M 767.2 342.8 " fill="#fbfbfb"
                                              className="digital-logo0">
                                        </path>
                                        <path d="M 0.0 0.0 L 140.7 1.4 L 140.8 74.8 L 0.6 72.9 L 0.0 0.2 L 0.0 0.0 Z M 0.0 0.0 " fill="none" stroke="#000000" stroke-width="2.00"
                                              transform="matrix(1.00, 0.00, 0.00, -1.00, 767.1, 342.8)" className="digital-logo0">
                                        </path>
                                        <path d="M 766.2 343.0 L 837.9 290.6 L 908.5 340.9 " fill="#fbfbfb"  className="digital-logo0"></path>
                                        <path d="M 0.0 0.0 L 71.7 52.4 L 142.3 2.1 " fill="none" stroke="#000000" stroke-width="2.00" transform="matrix(1.00,
                                            0.00, 0.00, -1.00, 766.2, 343.0)"  className="digital-logo0">
                                        </path>
                                        <path d="M 637.6 63.6 L 653.4 63.6 L 653.6 105.6 L 667.4 106.2 L 667.0 119.6 L 652.7 119.7 L 652.4 131.6 C 654.4 133.6 657.1 134.8 660.0 135.1 C
                                            663.2 135.5 666.5 134.6 669.1 132.7 L 669.4 147.7 L 635.6 147.5 C 635.6 142.7 635.6 137.9 635.7 133.1 C 635.8 128.5 636.0 123.9 636.3
                                            119.3 L 625.3 119.2 L 625.3 105.1 L 636.9 105.2 L 637.6 63.6 Z M 637.6 63.6 " fill="#fbfbfb"  className="digital-logo0">
                                        </path>
                                        <path d="M 12.3 84.1 L 28.1 84.1 L 28.3 42.1 L 42.1
                                            41.5 L 41.7 28.1 L 27.5 28.0 L 27.1 16.0 C 29.2 14.1 31.8 12.9 34.7 12.6 C 37.9 12.2 41.2 13.1 43.9 15.0 L 44.1 0.0 L
                                            10.4 0.2 C 10.3 5.0 10.3 9.8 10.4 14.6 C 10.5 19.2 10.7 23.8 11.0 28.4 L 0.0 28.5 L 0.0 42.6 L 11.6 42.4 L 12.3 84.1
                                            Z M 12.3 84.1 " fill="none" stroke="#000000" stroke-width="2.00" transform="matrix(1.00, 0.00, 0.00, -1.00, 625.3, 147.7)">
                                        </path>
                                        <path d="M 442.5 421.5 C 449.2 414.7 449.2 403.8 442.5 397.0 C 435.7 390.3 424.8 390.3 418.0 397.0 C 411.3 403.8 411.3
                                            414.7 418.0 421.5 C 424.8 428.2 435.7 428.2 442.5 421.5 Z M 442.5 421.5 " fill="#000000"></path>
                                        <path d="M 450.0 496.6 C 456.8 489.8 456.8 478.8 450.0 472.1 C 443.3 465.3 432.3 465.3 425.5 472.1 C 418.8 478.8 418.8 489.8 425.5 496.6 C 432.3
				                            503.3 443.3 503.3 450.0 496.6 Z M 450.0 496.6 " fill="#000000"></path>
                                        <path d="M 457.4 571.6 C 464.2 564.9 464.2 553.9 457.4 547.2 C 450.7 540.4 439.7 540.4 433.0 547.2 C 426.2 553.9 426.2 564.9 433.0 571.6 C 439.7
                                            578.4 450.7 578.4 457.4 571.6 Z M 457.4 571.6 " fill="#000000"></path>
                                        <path d="M 464.0 647.0 C 470.8 640.2 470.8 629.3 464.0 622.5 C 457.3 615.8 446.3 615.8 439.6 622.5 C 432.8 629.3 432.8 640.2 439.6
				                            647.0 C 446.3 653.7 457.3 653.7 464.0 647.0 Z M 464.0 647.0 " fill="#000000"></path>
                                        <path d="M 464.0 647.0 C 470.8 640.2 470.8 629.3 464.0 622.5 C 457.3 615.8 446.3 615.8 439.6 622.5 C 432.8 629.3 432.8 640.2 439.6 647.0 C 446.3
				                            653.7 457.3 653.7 464.0 647.0 Z M 464.0 647.0 " fill="#000000"></path>
                                        <path d="M 471.8 723.8 C 478.6 717.0 478.6 706.1 471.8 699.3 C 465.1 692.5 454.1 692.5 447.4 699.3 C 440.6 706.1 440.6
			                            	717.0 447.4 723.8 C 454.1 730.5 465.1 730.5 471.8 723.8 Z M 471.8 723.8 " fill="#000000"></path>
                                        <path d="M 554.5 406.4 C 561.3 399.6 561.3 388.7 554.5 381.9 C 547.7 375.1 536.8 375.1 530.0 381.9 C 523.3 388.7 523.3 399.6 530.0 406.4 C 536.8
				                            413.1 547.7 413.1 554.5 406.4 Z M 554.5 406.4 " fill="#000000"></path>
                                        <path d="M 602.7 469.3 C 609.4 462.6 609.4 451.6 602.7 444.9 C 595.9 438.1 584.9 438.1 578.2 444.9 C 571.4 451.6 571.4 462.6 578.2 469.3 C 584.9 476.1
			                            	595.9 476.1 602.7 469.3 Z M 602.7 469.3 " fill="#000000"></path>
                                        <path d="M 649.2 529.9 C 656.0 523.1 656.0 512.2 649.2 505.4 C 642.4 498.6 631.5 498.6 624.7 505.4 C 618.0 512.2 618.0
                                            523.1 624.7 529.9 C 631.5 536.6 642.4 536.6 649.2 529.9 Z M 649.2 529.9 " fill="#000000"></path>
                                        <path d="M 694.5 589.6 C 701.3 582.8 701.3 571.9 694.5 565.1 C 687.7 558.4 676.8 558.4 670.0 565.1 C 663.3 571.9 663.3 582.8 670.0 589.6 C 676.8
				                            596.3 687.7 596.3 694.5 589.6 Z M 694.5 589.6 " fill="#000000"></path>
                                        <path d="M 738.6 647.0 C 745.3 640.2 745.3 629.3 738.6 622.5 C 731.8 615.8 720.9 615.8 714.1 622.5 C 707.4 629.3 707.4 640.2 714.1 647.0 C 720.9 653.7
				                            731.8 653.7 738.6 647.0 Z M 738.6 647.0 " fill="#000000"></path>
                                        <path d="M 602.7 348.6 C 609.4 341.8 609.4 330.9 602.7 324.1 C 595.9 317.4 584.9 317.4 578.2 324.1 C 571.4 330.9 571.4 341.8 578.2 348.6 C 584.9 355.4
                                            595.9 355.4 602.7 348.6 Z M 602.7 348.6 " fill="#000000"></path>
                                        <path d="M 674.9 383.8 C 681.7 377.0 681.7 366.1 674.9 359.3 C 668.2 352.5 657.2 352.5 650.5 359.3 C 643.7 366.1 643.7 377.0 650.5 383.8
                                            C 657.2 390.5 668.2 390.5 674.9 383.8 Z M 674.9 383.8 " fill="#000000"></path>
                                        <path d="M 744.8 413.3 C 751.5 406.5 751.5 395.6 744.8 388.8 C 738.0 382.1 727.1 382.1 720.3 388.8 C 713.6 395.6 713.6
			                            	406.5 720.3 413.3 C 727.1 420.0 738.0 420.0 744.8 413.3 Z M 744.8 413.3 " fill="#000000"></path>
                                        <path d="M 813.1 447.5 C 819.9 440.8 819.9 429.8 813.1 423.1 C 806.4 416.3 795.4 416.3 788.7 423.1 C 781.9 429.8 781.9
			                            	440.8 788.7 447.5 C 795.4 454.3 806.4 454.3 813.1 447.5 Z M 813.1 447.5 " fill="#000000"></path>
                                        <path d="M 882.3 478.0 C 889.1 471.2 889.1 460.3 882.3 453.5 C 875.6 446.8 864.6 446.8 857.9 453.5 C 851.1 460.3 851.1 471.2 857.9 478.0 C 864.6
			                            	484.8 875.6 484.8 882.3 478.0 Z M 882.3 478.0 " fill="#000000"></path>
                                        <path d="M 584.3 254.6 C 591.0 247.8 591.0 236.9 584.3 230.1 C 577.5 223.4 566.5 223.4 559.8 230.1 C 553.0 236.9 553.0
			                            	247.8 559.8 254.6 C 566.5 261.4 577.5 261.4 584.3 254.6 Z M 584.3 254.6 " fill="#000000"></path>
                                        <path d="M 649.2 217.2 C 656.0 210.4 656.0 199.5 649.2 192.7 C 642.4 186.0 631.5 186.0 624.7 192.7 C 618.0 199.5 618.0
				                            210.4 624.7 217.2 C 631.5 224.0 642.4 224.0 649.2 217.2 Z M 649.2 217.2 " fill="#000000"></path>
                                        <path d="M 721.5 187.9 C 728.3 181.2 728.3 170.2 721.5 163.5 C 714.8 156.7 703.8 156.7 697.0 163.5 C 690.3 170.2 690.3
				                            181.2 697.0 187.9 C 703.8 194.7 714.8 194.7 721.5 187.9 Z M 721.5 187.9 " fill="#000000"></path>
                                        <path d="M 787.5 150.6 C 794.2 143.8 794.2 132.8 787.5 126.1 C 780.7 119.3 769.8 119.3 763.0 126.1 C 756.2 132.8 756.2
			                            	143.8 763.0 150.6 C 769.8 157.3 780.7 157.3 787.5 150.6 Z M 787.5 150.6 " fill="#000000"></path>
                                        <path d="M 857.9 121.4 C 864.7 114.6 864.7 103.7 857.9 96.9 C 851.2 90.2 840.2 90.2 833.5 96.9 C 826.7 103.7 826.7 114.6 833.5 121.4 C 840.2 128.2
			                            	851.2 128.2 857.9 121.4 Z M 857.9 121.4 " fill="#000000"></path>
                                        <path d="M 796.6 567.8 C 793.7 579.5 797.7 591.9 806.9 599.7 C 820.7 611.4 841.3 610.0 853.4 596.6 L 873.6 605.8 C 872.8 602.6
                                            871.5 599.6 869.8 596.8 C 867.3 592.8 863.9 589.4 859.9 586.8 L 880.7 590.3 L 862.4 574.8 C 862.9 539.6 843.8 506.9 812.8
                                            490.1 C 783.1 473.9 747.0 474.9 718.2 492.6 C 727.0 490.9 736.1 491.4 744.7 493.9 C 752.9 496.3 760.5 500.6 766.8 506.4 C
                                            760.3 507.2 754.1 509.6 748.8 513.4 C 743.6 517.2 739.3 522.1 736.4 527.9 C 738.6 527.2 740.9 527.0 743.2 527.3 C 745.3 527.5
                                            747.3 528.1 749.2 529.1 C 741.3 530.6 734.4 535.1 729.9 541.7 C 725.8 547.6 724.0 554.9 724.8 562.0 C 726.5 559.7 729.0 558.0
                                            731.8 557.3 C 734.3 556.7 737.0 556.9 739.4 557.8 C 732.1 561.7 726.8 568.5 724.8 576.5 C 722.8 584.6 724.4 593.2 729.3 600.1
                                            C 738.1 589.8 749.2 581.5 761.5 575.9 C 772.6 571.0 784.5 568.2 796.6 567.8 Z M 796.6 567.8 " fill="#fbfbfb" className="digital-logo0">
                                        </path>
                                        <path d="M 78.3 39.9 C 75.4 28.1 79.4 15.8 88.6 8.0 C 102.4 -3.7 123.0 -2.4 135.1 11.0 L 155.3 1.8 C 154.6 5.0 153.3
                                            8.0 151.6 10.8 C 149.1 14.8 145.7 18.3 141.6 20.8 L 162.4 17.3 L 144.1 32.8 C 144.6 68.1 125.5 100.7 94.5 117.6 C 64.8
                                            133.7 28.8 132.7 0.0 115.0 C 8.8 116.7 17.9 116.2 26.5 113.7 C 34.7 111.3 42.2 107.0 48.5 101.3 C 42.1 100.4 35.9 98.0
                                            30.6 94.2 C 25.3 90.5 21.1 85.5 18.1 79.8 C 20.3 80.4 22.7 80.6 25.0 80.4 C 27.0 80.1 29.1 79.5 30.9 78.6 C 23.1 77.1
                                            16.1 72.5 11.6 66.0 C 7.5 60.0 5.7 52.8 6.5 45.6 C 8.3 47.9 10.8 49.6 13.6 50.3 C 16.1 50.9 18.7 50.7 21.1 49.8 C 13.9
                                            45.9 8.6 39.2 6.6 31.2 C 4.6 23.0 6.2 14.4 11.0 7.5 C 19.9 17.8 30.9 26.1 43.3 31.7 C 54.3 36.7 66.2 39.4 78.3 39.9 Z
                                            M 78.3 39.9 " fill="none" stroke="#000000" stroke-width="2.00" transform="matrix(1.00, 0.00, 0.00, -1.00, 718.2, 607.6)">
                                        </path>
                                    </g>
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
                                <div className="photos">
                                    <img className="photo-wrapper" src="../assets/tim.png"/>
                                    <span className="pic-name">Timothy Virgillo</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail">
                                <div className="photos">
                                    <img className="photo-wrapper" src="../assets/barkha.png"/>
                                        <span className="pic-name">Barkha Sikka</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail">
                                <div className="photos background-krishna">
                                    {/*<img className="photo-wrapper" src=".."/>*/}
                                    <span className="pic-name">Krishna Khandagale</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail">
                                <div className="photos">
                                    <img className="photo-wrapper" src="../assets/shankar.png"/>
                                        <span className="pic-name">Shankar Jamge</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail">
                                <div className="photos">
                                    <img className="photo-wrapper" src="../assets/aniket.png"/>
                                        <span className="pic-name">Aniket Mane</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail pic-wrapper">
                                <div className="photos">
                                    <img className="photo-wrapper" src="../assets/mahendra.png"/>
                                        <span className="pic-name">Mahendra Kulkarni</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail pic-wrapper">
                                <div className="photos">
                                    <img className="photo-wrapper" src="../assets/clinton.png"/>
                                        <span className="pic-name">Clinton Fernandes</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail pic-wrapper-one">
                                <div className="photos">
                                    <img className="photo-wrapper" src="../assets/harpreet.png"/>
                                        <span className="pic-name">Harpreet Arora</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail pic-wrapper-one">
                                <div className="photos">
                                    <img className="photo-wrapper" src="../assets/shweta.png"/>
                                        <span className="pic-name">Shweta Takale</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail pic-wrapper-one">
                                <div className="photos">
                                    <img className="photo-wrapper" src="../assets/pratiksha.png"/>
                                        <span className="pic-name">Pratiksha Kature</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail pic-wrapper-one">
                                <div className="photos">
                                    <img className="photo-wrapper" src="../assets/sneha.png"/>
                                        <span className="pic-name">Sneha Dhumal</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail pic-wrapper-two">
                                <div className="photos">
                                    <img className="photo-wrapper" src="../assets/reshma.png"/>
                                        <span className="pic-name">Reshma Ritond</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail pic-wrapper-two">
                                <div className="photos">
                                    <img className="photo-wrapper" src="../assets/ash.png"/>
                                        <span className="pic-name">Aishwarya Kulkarni</span>
                                </div>
                            </div>
                            <div className="photos-thumbnail pic-wrapper-two">
                                <div className="photos">
                                    <img className="photo-wrapper" src="../assets/vikas.png"/>
                                        <span className="pic-name">Vikas Kumar</span>
                                </div>
                            </div>
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
                <section class="contact-container">
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
                                    <textarea rows="4" class="input-data" type="text" placeholder="Address"></textarea>
                                </div>
                            </div>

                            <div class="contact-wrapper input-height">
                                <div class="contact-us-left-section">
                                    <span class="left-contact-txt">CALL</span>
                                </div>
                                <div class="contact-us-right-section ">
                                    <input class="input-data" type="text" placeholder="Call"/>
                                </div>
                            </div>

                            <div class="contact-wrapper input-height">
                                <div class="contact-us-left-section">
                                    <span class="left-contact-txt">EMAIL</span>
                                </div>
                                <div class="contact-us-right-section ">
                                    <input class="input-data" type="text" placeholder="Email"/>
                                </div>
                            </div>
                            <button class="flora-btn" >SEND</button>
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

                <footer>
                    <div className="footer-info float-left">Powered by <span>Floratechno Solutions Pvt. Ltd.</span></div>
                    <div className="footer-info float-right text-align-right"><span className="copyright-info">©2018 India</span></div>
                </footer>
            </div>
        
        );
    }
}

render(<App/>, document.getElementById('app'));