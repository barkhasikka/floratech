import React from 'react';
import {render} from 'react-dom';
import {smoothScroll} from './commoncomponent/helper.js'
class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {
        smoothScroll("servicesContainer", 100);
        this.setState({selectedTab: "servicesContainer"})
    }
    show (){
        if( document.getElementById("to").style.display == "block"  ){
            document.getElementById("to").style.display = "none" ;
        }
        else{
            document.getElementById("to").style.display = "block" ;
        }

    }

    render() {
        return (
            <div >

                <header className="header-section" id="myHeader">
                    <i className="fa fa-bars cates" onClick={() => this.show()}></i>
                    <div className="bind-header">
                        <div className="header-options-right" id="myHeaderSpan1">
                            <a href="/about" target="_parent" className="header-a">
                           <span
                               className="header-option-span "
                               onClick={(e) => this.goToElement(e, "about-container", 70, false)}>ABOUT
                                <span className="span-border"></span>
                            </span>
                            </a>
                            <a href="/team" target="_parent" className="header-a">
                            <span
                                className="header-option-span "
                                onClick={(e) => this.goToElement(e, "team-containers", 101, false)}>TEAM
                                <span className="span-border"></span>
                            </span>
                            </a>
                        </div>
                        <div className="logo-section">
                            <a href="/" target="_parent">
                                <div className="flower-svg">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         viewBox="0 0 400 400" id="secSvg" className="third-svg">

                                        <g id="Layer_1">
                                            <g>
                                                <path className="flo-st0" d="M204,9.5c-80.2,0-124.4,60.9-124.4,125.9S132.3,253,197.3,253s123.6-57.9,123.6-122.9S269,9.5,204,9.5z
                                         M203.3,244c-63.2,0-117.6-55.9-117.6-119.1S135.5,17.1,199.6,17c63.2-0.1,114,54,114,117.3S266.5,244,203.3,244z"/>
                                                <g className="flo-st1">
                                                    <path className="flo-st2" d="M146,113.8v-7.4h20.7V82.6c0-16.2,11.5-22.9,25.4-22.9c3.4,0,6.7,0.4,10.1,1.1v7.4
                                            c-3.4-0.7-6.7-1.1-10.1-1.1c-9.4,0-16.9,3.4-16.9,16.2v23.2h24.1v7.4h-24.1v108.1h-8.5V113.8H146z"/>
                                                </g>
                                                <g className="flo-st1">
                                                    <path className="flo-st3" d="M254.5,113.8h-25.2v80.7c0,18.7,8.8,20.5,24.9,20v7.4c-17.5,1.1-34.4-1.3-33.5-27.4v-80.7h-21.4v-7.4h21.4
                                            v-36h8.5v36h25.2L254.5,113.8L254.5,113.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g id="Layer_2">
                                            <g>
                                                <path className="flo-st4" d="M25.6,283.2c0-3.4-0.3-6.4-0.6-8.9c-0.4-2.5-1.3-4.8-2.5-6.9c-1.4-2.3-2.6-3.5-3.6-3.8
                                        c-0.6-0.1-1.3,0.3-2,1.1c-0.9,1-1.6,2.4-2.3,4.2c-0.6,1.9-1.1,3.6-1.3,5.4c-0.6,5-0.9,10.8-0.5,17.4c3.8-0.9,7.2-1.5,10.2-2
                                        c0.5,0,0.9,0,1.4,0.4c0.4,0.3,0.6,0.8,0.8,1.1c0,0.5,0,0.9-0.4,1.4c-0.3,0.4-0.8,0.6-1.1,0.8c-3.1,0.4-6.7,1.1-10.6,2
                                        c0.1,1.6,0.3,3.4,0.5,5.3c0,1.3,0.3,3.4,0.5,6.5l0.6,7.2c0.1,1.6,0.4,3.8,0.5,6.3c0.1,2.5,0.1,4.8,0.1,6.9c0,0.5-0.1,0.9-0.5,1.3
                                        c-0.4,0.4-0.8,0.5-1.3,0.5s-0.9-0.1-1.3-0.5c-0.4-0.4-0.5-0.8-0.5-1.3c0-2,0-4.3-0.1-6.8c-0.1-2.5-0.3-4.5-0.5-6.2l-0.6-7
                                        c-0.3-3-0.5-5.3-0.6-6.4c-0.1-1.9-0.3-3.5-0.4-4.8l-7.2,1.8c-0.5,0.1-0.9,0-1.4-0.1c-0.4-0.3-0.8-0.6-0.8-1.1
                                        c-0.1-0.5,0-0.9,0.1-1.4c0.3-0.4,0.6-0.8,1.1-0.8l7.8-2.1c-0.4-7-0.1-13.2,0.5-18.6c0.3-1.9,0.9-4,1.6-6.2
                                        c0.8-2.1,1.8-3.9,2.9-5.3c1.6-2,3.5-2.8,5.5-2.3c2,0.5,4,2.4,5.9,5.5c1.5,2.5,2.5,5.2,3,7.9c0.4,2.8,0.6,6,0.6,9.7
                                        c0,0.5-0.1,0.9-0.5,1.3c-0.4,0.4-0.8,0.5-1.3,0.5c-0.5,0-0.9-0.1-1.3-0.5C25.7,284.2,25.6,283.7,25.6,283.2z"/>
                                                <path className="flo-st4" d="M32.8,324.9c1.4-1,2.9-3.5,4.7-7.5c0.8-1.9,1.6-4,2.5-6.5c-0.3-0.9-0.5-1.9-0.6-2.8
                                        c-1.3-6.2-1.6-13.6-1.3-22.3c0.1-3.8,0.9-7.8,2-11.8c0.8-2.8,1.5-4.9,2.5-6.5c1.4-2.3,3-3.5,5-3.8c1.9-0.1,3.3,0.8,4.2,2.9
                                        c0.5,1.3,0.8,3,0.8,5.2c0,2.4-0.3,5-0.6,8.1c-1.1,6.8-3.1,15.2-6.2,25.2l-1.9,6c1.8,6.4,4.8,10.8,8.9,13.2c0.5,0.3,1,0.4,1.5,0.5
                                        c0.5,0.1,1.3,0.3,2.4,0.3c1,0,1.8,0.1,2.3,0.1c0.5,0,0.9,0.3,1.3,0.6s0.5,0.9,0.4,1.3c0,0.5-0.3,0.9-0.6,1.3s-0.9,0.5-1.3,0.4
                                        c-0.1,0-0.6,0-1.5-0.1c-0.8,0-1.5-0.1-2-0.1c-0.5,0-1.3-0.1-2-0.4c-0.8-0.1-1.5-0.5-2-0.8c-3.9-2.3-6.9-5.9-9.1-10.9l-1.4,2.6
                                        c-2,4.7-3.9,7.7-5.7,8.9c-0.4,0.3-0.8,0.4-1.3,0.4c-0.5,0-0.9-0.3-1.3-0.6c-0.3-0.4-0.4-0.9-0.4-1.4
                                        C32.2,325.5,32.4,325.1,32.8,324.9z M42.2,303.7c3-9.8,4.9-18,6-24.5c0.4-2.9,0.6-5.3,0.6-7.5c0-1.6-0.1-3-0.5-3.8L48,267v0.3
                                        c-0.8,0-1.5,0.8-2.1,2c-0.9,1.4-1.6,3.1-2.3,5.7c-1,3.8-1.6,7.5-1.8,11.1C41.5,292.7,41.6,298.6,42.2,303.7z"/>
                                                <path className="flo-st4" d="M84.6,286.5c1.9,1.4,3.5,3.4,4.9,6c2.1,4.2,3.3,9.2,3.3,15s-1,10.7-3.1,14.7c-2.5,4.9-6,7.4-10.6,7.5
                                        c-3.1,0-5.9-0.8-7.9-2.3c-2.1-1.5-3.6-3.8-4.7-6.5c-1.9-4.8-2.1-10.6-0.9-17.4c1.3-6.5,3.4-11.7,6.7-15.4c1.8-2,3.8-3.1,5.8-3.5
                                        c0.3,0,0.5-0.1,0.6-0.1c0.3,0,0.5-0.1,0.8-0.1c0.1,0,0.3,0,0.4,0.1C81.2,284.7,83,285.4,84.6,286.5z M82.6,289.6L82.6,289.6
                                        l-0.1-0.1c-1-0.6-2-1.1-3.1-1.3c-0.3,0-0.5,0-0.8,0.1c-1.4,0.3-2.6,1-3.8,2.4c-2.8,3-4.8,7.5-5.9,13.5c-1.1,6-0.9,11.3,0.8,15.5
                                        c1.6,4.4,4.8,6.5,9.2,6.4c3.1,0,5.7-1.9,7.5-5.5c1.8-3.5,2.8-7.9,2.8-13.1c0-5.2-0.9-9.7-2.8-13.3C85.3,292.3,84,290.8,82.6,289.6
                                        z"/>
                                                <path className="flo-st4" d="M97.8,283.6c0.3,3,0.6,9.1,0.8,18.2v1.1c0.4-1.4,0.9-2.5,1.4-3.8c0.8-2,1.6-3.9,2.6-5.7
                                        c0.9-1.6,2-3.3,3.4-4.9c1.3-1.5,2.6-2.8,4.2-3.6c1.5-0.9,3.1-1.5,5-1.9c1.9-0.4,3.9-0.3,6,0.4c0.5,0.1,0.9,0.4,1.1,0.8
                                        c0.3,0.4,0.3,0.9,0.1,1.4c-0.1,0.5-0.4,0.9-0.8,1.1c-0.4,0.3-0.9,0.3-1.4,0.1c-3.6-0.9-6.8-0.1-9.7,2.3c-2.9,2.4-5.3,6.2-7.2,11.2
                                        c-2.3,5.8-3.6,12.1-4,18.9v3.5v1.1c0,0.4,0,0.8,0,1.3s0,0.9,0,1.1v1.4v0.4l-0.1,0.5c-0.3,0.5-0.8,0.9-1.4,1
                                        c-0.8,0.1-1.4-0.1-1.8-0.8l-0.3-0.6c0,0,0-0.1,0-0.3s0-0.3,0-0.4c-0.3-2.3-0.3-5-0.1-8.3c0-0.9,0-2.3-0.1-3.9
                                        c0-1.6-0.1-2.8-0.1-3.3c0-2.3-0.1-3.9-0.1-4.9c0-0.9-0.1-2.6-0.1-5.3c-0.3-9.1-0.5-15.1-0.8-18c0-0.5,0.1-0.9,0.4-1.3
                                        c0.4-0.4,0.8-0.6,1.3-0.6c0.5,0,0.9,0.1,1.3,0.4C97.6,282.7,97.8,283.1,97.8,283.6z"/>
                                                <path className="flo-st4" d="M154.8,299.5c-0.9,1.9-1.6,3.5-2.3,4.8c-0.1,0.1-0.5,1-1.3,2.4l-2.1,4c-0.6,1.3-1.4,2.6-2.5,4.5
                                        c-1,1.8-2,3.4-3,4.8c-2.5,3.5-4.9,5.9-7.2,7.3c-3.3,1.9-6.2,1.5-8.6-1c-3-2.9-3.9-7.4-2.8-13.5c0.9-5.4,3-10.7,6.4-16
                                        c3.5-5.5,7.3-9.4,11.5-11.8c5-3,9.7-2.9,13.7,0.1c0.4,0.3,0.6,0.6,0.6,1.1c0.1,0.5,0,0.9-0.3,1.3c0.1,0,0.3,0.1,0.5,0.1
                                        c0.3,0.1,0.4,0.3,0.6,0.5c0.1,0.1,0.3,0.4,0.3,0.5l0.1,0.1c0,0.1,0,0.3,0.1,0.4c0.1,1.1,0.1,2.8,0,4.8c-0.1,2.1-0.3,3.6-0.3,4.3
                                        c0.3,11.1,1.8,20.4,4.7,27.7c0.1,0.5,0.1,1,0,1.4c-0.3,0.5-0.5,0.8-1,1c-0.5,0.1-1,0.1-1.4,0c-0.5-0.3-0.8-0.5-1-1
                                        C156.9,319.5,155.2,310.3,154.8,299.5z M154.7,287.9c-2.8-2-6-2-9.8,0.1c-3.6,2.1-7,5.7-10.2,10.8c-3.1,4.9-5.2,9.8-6,14.6
                                        c-0.9,4.9-0.3,8.3,1.8,10.4c1.3,1.3,2.6,1.4,4.3,0.4c1.8-1,3.8-3,6-6.2c0.9-1.4,1.9-2.9,2.9-4.5c1-1.6,1.9-3.1,2.4-4.4l2-4
                                        c0.8-1.5,1.1-2.3,1.3-2.4c0.6-1.3,2.1-4.3,4.3-9.2c0.5-1.3,0.9-2.3,1.1-3c0,0,0-0.4,0.1-1c0-0.4,0.1-0.6,0.1-0.8
                                        c0-0.1,0.1-0.4,0.3-0.5C155.2,288.1,155,288,154.7,287.9z"/>
                                                <path className="flo-st5" d="M163.1,295.3v-6.4h6.5v-11.7h8.6v11.7h7.8v6.4h-7.8v20.9c0,2,0.3,3.4,0.6,4c0.5,0.9,1.8,1.4,3.5,1.4
                                        c1.6,0,2.8-0.1,3.6-0.3v6.7c-3.8,0.3-5.7,0.5-5.5,0.5c-4.3,0-7.2-0.9-8.8-2.5c-1.4-1.4-2-3.9-2-7.4v-23.3H163.1z"/>
                                                <path className="flo-st5" d="M227.7,310.7H199c0,3.3,0.9,5.9,2.5,8.1c1.9,2.3,4.5,3.5,7.9,3.5c4.8,0,8.1-2.1,9.6-6.5h8.2
                                        c-0.9,4.2-3,7.4-6.2,9.8c-3.3,2.4-7,3.5-11.5,3.5c-6,0-10.7-1.9-14.1-5.7c-3.4-3.8-5-8.7-5-14.8c0-5.8,1.6-10.6,5-14.5
                                        c3.5-4,8.2-6.2,13.8-6.2c5.5,0,9.9,2,13.5,6c3.4,3.8,5,8.4,5,13.8C227.8,308.8,227.7,309.7,227.7,310.7z M199,305h20.1
                                        c-0.1-2.9-1.1-5.3-2.9-7.3c-1.8-2-4.2-3-6.9-3c-2.9,0-5.3,1-7.3,2.9C200,299.6,199,302,199,305z"/>
                                                <path className="flo-st5" d="M269.2,302h-8.6c-0.8-4.9-3.6-7.3-8.9-7.3c-2.9,0-5.2,0.9-7,2.6c-2.5,2.4-3.6,6.3-3.6,11.6
                                        c0,3.6,0.8,6.7,2.4,9.2c1.9,2.8,4.5,4.3,8.1,4.3c2.5,0,4.5-0.8,6.2-2.4c1.6-1.6,2.6-3.8,3-6.5h8.6c-1.6,10.4-7.7,15.7-17.9,15.7
                                        c-5.9,0-10.6-1.9-14.1-5.8c-3.3-3.6-4.9-8.4-4.9-14.3c0-6.2,1.6-11.2,4.8-15c3.4-4,8.2-6,14.5-6c4.8,0,8.7,1.1,11.8,3.5
                                        C266.8,293.8,268.7,297.3,269.2,302z"/>
                                                <path className="flo-st5" d="M276.1,327.9V274h8.6v20h0.1c1.1-1.8,2.6-3.3,4.8-4.4c2.1-1.1,4.4-1.8,6.9-1.8c4.3,0,7.7,1.1,10.2,3.4
                                        c2.4,2.3,3.6,5.5,3.6,9.9V328h-8.6v-24.7c0-5.8-2.5-8.8-7.7-8.8c-2.8,0-5,1-6.8,2.9c-1.8,2-2.6,4.4-2.6,7.3v23h-8.6V327.9z"/>
                                                <path className="flo-st5" d="M319.6,327.9v-39h8.2v5.8l0.1,0.1c2.8-4.7,6.8-6.9,12.2-6.9c4.3,0,7.7,1.1,10.2,3.4c2.4,2.3,3.6,5.5,3.6,9.9
                                        V328h-8.6v-24.7c0-5.8-2.5-8.8-7.7-8.8c-2.8,0-5,1-6.8,2.9c-1.8,2-2.6,4.4-2.6,7.3v23h-8.7V327.9z"/>
                                                <path className="flo-st5" d="M380.7,329c-6.2,0-10.9-1.9-14.6-5.8c-3.4-3.8-5.2-8.7-5.2-14.8c0-6,1.8-11.1,5.3-14.8
                                        c3.5-3.8,8.3-5.7,14.5-5.7c6.2,0,10.9,1.9,14.6,5.8c3.4,3.8,5.2,8.7,5.2,14.7c0,6.2-1.8,11.1-5.2,14.8
                                        C391.8,327,386.9,329,380.7,329z M380.7,322.2c3.6,0,6.4-1.5,8.4-4.4c1.8-2.5,2.6-5.7,2.6-9.4c0-3.8-0.9-6.8-2.6-9.3
                                        c-2-2.9-4.8-4.4-8.4-4.4c-3.6,0-6.4,1.5-8.4,4.4c-1.8,2.5-2.6,5.7-2.6,9.3c0,3.8,0.9,6.9,2.6,9.4
                                        C374.3,320.7,377.2,322.2,380.7,322.2z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div className="header-options desktop-nav" id="myHeaderSpan">

                            <a href="/services" target="_parent" className="header-a">
                            <span
                                className={"header-option-span " + (this.state.selectedTab == 'servicesContainer' ? 'orange-color' : '')}
                                onClick={(e) => this.goToElement(e, "servicesContainer", 85, false)}>SERVICES
                             <span className="span-border"></span>
                            </span>
                            </a>
                            <a href="/contact" target="_parent" className="header-a">
                            <span
                                className="header-option-span "
                                onClick={(e) => this.goToElement(e, "contact-container", 40, false)}>CONTACT
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
                            <svg enable-background="new 0 0 500 500" id="Layer_1" version="1.1" viewBox="0 0 500 500"  xmlns="http://www.w3.org/2000/svg" className="section-svg"><g><g>
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
                            <i class="fa fa-address-book-o contact-book"></i>
                        </section>
                        <a href="/contact" target="_parent">
                            <span id="mySpan3" className={"profile " + (this.state.selectedTab == 'contact-container' ? 'orange-colors' : '')} onClick={(e) => this.goToElement(e, "contact-container", 40, false)}>Contact</span>
                        </a>
                    </section>
                </div>
                <div className="service-wrapper">
                    <div id="triangle-topleft"></div>
                    <div id="triangle-topright"></div>
                    <div id="triangle-bottomleft"></div>
                    <div id="triangle-bottomright"></div>

                <section className="services-container" id="servicesContainer">
                    <div className="services-title">
                        <span className="service-txt">SERVICES</span>
                        <span className="offer-txt">WE OFFER</span>
                    </div>

                    <div className="services-description">
                        <div className="flip-container">
                            <div className="card">
                                <div className="side">
                                    <svg className="svg-info" id="Layer_1" x="0px" y="0px" viewBox="0 0 800 900">
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
                                    <blockquote className="service-text">You have an awesome App idea and just looking
                                        for ways to turn it into reality.
                                        Whether it is Android or iOS, we at Floratechno solutions have years of
                                        expertise in developing mobile apps for different market segment.
                                        We understand every app is different and has it’s sets of challenges.
                                        We work closely to understand our clients Idea and expectation. With our expert
                                        team at dispose,
                                        we deliver quick and always stay alert for smooth working on back-end, for their
                                        growing need.
                                    </blockquote>
                                    <span className="see-more-txt">SEE MORE</span>
                                </div>
                            </div>
                        </div>


                        <div className="flip-container">
                            <div className="card">
                                <div className="side">
                                    <svg className="svg-info" id="Layer_1" x="0px" y="0px" viewBox="0 0 1000 650">
                                        <rect x="27.6" y="46.1" className="desktop-st0" width="948" height="601.9"/>
                                        <g>
                                            <path className="desktop-st1"
                                                  d="M10.2,648V30.5c0,0,0-19.6,27.7-29.4h928.9c0,0,23.1,0,23.1,22.1V648h-30V52.5h-915V648H10.2z"/>
                                            <ellipse className="desktop-st2" cx="506.9" cy="25.6" rx="9.8" ry="10.4"/>
                                        </g>
                                    </svg>
                                    <blockquote className="svg-description">
                                        Web Applications
                                    </blockquote>
                                </div>
                                <div className="side back">
                                    <blockquote className="service-text">Our web applications are creative and most
                                        efficient..
                                        We plan, strategize, research and develop design keeping our client’s business
                                        goals in mind from day 1.
                                        We work with latest technologies and remain clean and clear on with our clients
                                        without any false promises.
                                        Whether it is long term support for application or updating as per the new
                                        technologies we always provide support whenever needed.
                                    </blockquote>
                                    <span className="see-more-txt">SEE MORE</span>
                                </div>
                            </div>
                        </div>

                        <div className="flip-container">
                            <div className="card">
                                <div className="side">
                                    <svg className="svg-info" id="Layer_1" x="0px" y="0px" viewBox="0 0 980 550">
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
                                        At floratechno solutions, we understand how customer behavior works and come up
                                        with new and unique web design UI to help you get more in terms of value.
                                        We don’t believe in ready made template and never pitch them to our client.
                                        We study and understand the need of our customer in terms of UI and its
                                        functions.
                                    </blockquote>
                                    <span className="see-more-txt">SEE MORE</span>
                                </div>
                            </div>
                        </div>
                        <div className="flip-container">
                            <div className="card">
                                <div className="side">
                                    <svg className="svg-info" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd"
                                         stroke-miterlimit="4.00" viewBox="0 0 1024 768">
                                        <g transform="matrix(1.00, 0.00, -0.00, -1.00, 0.0, 768.0)">
                                            <path d="M 0.0 768.0 L 1024.0 768.0 L 1024.0 0.0 L 0.0 0.0 Z M 0.0  768.0 "
                                                  fill="#fbfbfb"></path>
                                            <path d="M 532.8 91.4 C 654.7 213.3 654.7 410.9 532.8 532.8 C 410.9 654.7 213.3 654.7 91.4 532.8 C -30.5 410.9 -30.5 213.3 91.4 91.4 C
                                         213.3 -30.5 410.9 -30.5 532.8 91.4 Z M 532.8 91.4 " fill="none"
                                                  stroke="#000000" stroke-width="5.00" stroke-linecap="round"
                                                  stroke-linejoin="round" stroke-dasharray="0.0, 15.0"
                                                  transform="matrix(1.00, 0.00, 0.00, -1.00, 221.3, 683.7)">
                                            </path>
                                            <path d="M 317.4 663.9 L 366.1 663.9 C 372.0 663.9 375.0 663.9 378.2 662.9 C 381.7 661.7 384.4 658.9 385.7 655.4 C 386.7
                                        652.2 386.7 649.2 386.7 643.2 L 386.7 594.7 C 386.7 588.8 386.7 585.8 385.7 582.6 C 384.4 579.1 381.7 576.4 378.2 575.1 C
                                        375.0 574.1 372.0 574.1 366.0 574.1 L 317.4 574.1 C 311.5 574.1 308.5 574.1 305.3 575.1 C 301.9 576.4 299.1 579.1 297.8
                                        582.6 C 296.8 585.8 296.8 588.8 296.8 594.8 L 296.8 643.3 C 296.8 649.2 296.8 652.2 297.8 655.4 C 299.1 658.9 301.9 661.7
                                        305.3 662.9 C 308.5 663.9 311.5 663.9 317.5 663.9 Z M 317.4 663.9 "
                                                  fill="#fbfbfb" className="digital-logo1">
                                            </path>
                                            <path d="M 20.6 0.0 L 69.2 0.0 C 75.2 0.0 78.2 0.0 81.3 1.0 C 84.8 2.3 87.6 5.0 88.8 8.5 C 89.9 11.7 89.9 14.7 89.9 20.7 L
                                        89.9 69.2 C 89.9 75.2 89.9 78.2 88.8 81.3 C 87.6 84.8 84.8 87.6 81.3 88.8 C 78.2 89.9 75.2 89.9 69.2 89.9 L 20.6 89.9 C 14.7
                                        89.9 11.7 89.9 8.5 88.8 C 5.0 87.6 2.3 84.8 1.0 81.3 C 0.0 78.2 0.0 75.2 0.0 69.2 L 0.0 20.6 C 0.0 14.7 0.0 11.7 1.0 8.5 C
                                        2.3 5.0 5.0 2.3 8.5 1.0 C 11.7 0.0 14.7 0.0 20.7 0.0 Z M 20.6 0.0 " fill="none"
                                                  stroke="#000000" stroke-width="2.00"
                                                  transform="matrix(1.00, 0.00, 0.00, -1.00, 296.8, 663.9)">
                                            </path>
                                            <g>
                                                <clipPath id="clip-40">
                                                    <path
                                                        d="M -35.0 -62.0 L 989.0 -62.0 L 989.0 -702.0 L -35.0 -702.0 Z M -35.2 -62.3 "></path>
                                                </clipPath>
                                                <g clip-path="url(#clip-40)">
                                                    <image width="864.00" height="540.00"
                                                           transform="matrix(1.19,0.00, -0.00, -1.19, -35.0, -62.0)">
                                                    </image>
                                                </g>
                                            </g>
                                            <path
                                                d="M 174.0 132.7 L 266.3 329.0 L 424.1 108.8 L 212.8 76.1 L 174.0 132.7 Z M 174.0 132.7 "
                                                fill="#fbfbfb"></path>
                                            <path
                                                d="M 0.0 196.3 L 92.4 0.0 L 250.1 220.2 L 38.8 252.9 L 0.0 196.3 Z M 0.0 196.3 "
                                                fill="none" stroke="#000000" stroke-width="7.00"
                                                transform="matrix(1.00, 0.00, 0.00, -1.00, 174.0, 329.0)">
                                            </path>
                                            <path d="M 0.0 0.0 L 53.1 0.0 L 53.1 122.3 L 0.0 122.3 Z M 0.0 0.0 "
                                                  fill="none" stroke="#000000" stroke-width="7.00"
                                                  transform="matrix(0.82, 0.57, 0.57, -0.82, 115.5, 121.0)"></path>
                                            <path
                                                d="M 0.0 6.5 C 11.0 -3.6 28.4 -1.7 37.1 10.4 C 45.5 22.2 42.1 38.6 29.7 46.1 "
                                                fill="none" stroke="#000000" stroke-width="7.00"
                                                transform="matrix(1.00, 0.00, 0.00, -1.00, 358.1, 268.2)"></path>
                                            <path
                                                d="M 0.0 10.6 C 31.9 -9.5	74.2 -0.2 94.6 31.6 C 113.7 61.5 106.8 101.1 78.5 122.6 "
                                                fill="none" stroke="#000000"
                                                stroke-width="7.00"
                                                transform="matrix(1.00,	0.00, 0.00, -1.00, 339.3, 311.0)">
                                            </path>
                                            <path
                                                d="M 0.0 16.5 C 44.9 -11.9 103.9 -2.9 138.3 37.7 C 177.6 84.0 171.3 153.6 124.3 192.1 "
                                                fill="none" stroke="#000000"
                                                stroke-width="7.00"
                                                transform="matrix(1.00, 0.00, 0.00, -1.00, 315.7, 345.7)">
                                            </path>
                                            <path d="M 281.8 468.0 L 294.3 482.8 C 265.0 502.2 222.0 487.5 218.1 450.5 C 215.7 428.6 228.7 409.6 247.9 403.7 C
                                        279.1 394.0 310.9 419.6 306.5 453.2 L 264.3 453.7 L 263.7 436.1 L 288.0 436.6 C 284.2 424.7 273.7 418.5 263.0 418.7 C
                                        250.3 419.0 238.6 428.0 236.7 443.2 C 233.5 468.0 262.5 484.0 281.8 468.0 Z M 281.8 468.0 "
                                                  fill="#fbfbfb"
                                                  className="digital-logo0">
                                            </path>
                                            <path d="M 64.0 23.4 L 76.5 8.6 C 47.2 -10.8 4.3 3.8 0.3 40.9 C -2.1 62.8 10.9 81.8 30.1 87.7 C 61.3 97.3 93.1 71.8 88.7 38.2
                                        L 46.5 37.7 L 45.9 55.3 L 70.2 54.7 C 66.4 66.7 55.9 72.9 45.2 72.7 C 32.5 72.4 20.8 63.4 18.9 48.2 C 15.7 23.3 44.7
                                        7.4 64.0 23.4 Z M 64.0 23.4 " fill="none" stroke="#000000" stroke-width="2.00"
                                                  transform="matrix(1.00, 0.00, 0.00, -1.00, 217.8, 491.4)">
                                            </path>
                                            <path d="M 0.0 0.0 L 0.4 23.8 " fill="none" stroke="#000000"
                                                  stroke-width="2.00"
                                                  transform="matrix(1.00, -0.02, -0.02, -1.00, 307.7, 486.3)"
                                                  className="digital-logo1">
                                            </path>
                                            <path d="M 0.0 0.0 L 18.3 0.0 " fill="none" stroke="#000000"
                                                  stroke-width="2.00"
                                                  transform="matrix(1.00, 0.00, 0.00, -1.00, 298.5, 474.5)"
                                                  className="digital-logo1">
                                            </path>
                                            <path
                                                d="M 306.0 632.4 L 321.7 632.4 L 321.1 588.9 L 305.6 588.9 L 306.0 632.4 Z M 306.0 632.4 "
                                                fill="#fbfbfb"
                                                className="digital-logo2">
                                            </path>
                                            <path d="M 0.4 0.0 L 16.1 0.0 L 15.5 43.5 L 0.0 43.5 L 0.4 0.0 Z M 0.4 0.0 "
                                                  fill="none" stroke="#000000" stroke-width="2.00"
                                                  transform="matrix(1.00, 0.00, 0.00, -1.00, 305.6, 632.4)">
                                            </path>
                                            <path d="M 318.9 651.4 C 321.8 648.5 321.8 643.8 318.9 640.9 C 316.0 638.0 311.3 638.0 308.4 640.9 C 305.5 643.8 305.5 648.5 308.4 651.4 C
                            311.3 654.3 316.0 654.3 318.9 651.4 Z M 318.9 651.4 " fill="#fbfbfb"
                                                  className="digital-logo2">
                                            </path>
                                            <path d="M 12.6 2.2 C 15.5 5.1 15.5 9.8 12.6 12.6 C 9.8 15.5 5.1 15.5 2.2 12.6 C -0.7 9.8 -0.7 5.1 2.2 2.2 C 5.1 -0.7 9.8 -0.7 12.6
                                   2.2 Z M 12.6 2.2 " fill="none" stroke="#000000" stroke-width="2.00"
                                                  transform="matrix(1.00, 0.00, 0.00, -1.00, 306.2, 653.6)">
                                            </path>
                                            <path d="M 331.7 632.5 L 331.3 589.2 L 346.0 588.8 L 346.4 616.1 C 347.4 619.1 350.2 621.2
                                        353.4 621.1 C 357.2 620.9 360.2 617.9 360.3 614.1 L 360.3 587.4 L 374.7 587.5 L 374.5 624.6 C 371.7 630.8 365.6 634.7 358.8
                                        634.6 C 351.9 634.5 345.8 630.3 343.3 623.8 L 343.8 632.1 L 331.7 632.5 Z M 331.7 632.5 "
                                                  fill="#fbfbfb" className="digital-logo2">
                                            </path>
                                            <path d="M 0.5 2.1 L 0.0 45.4 L 14.7 45.8 L 15.1 18.5 C 16.1 15.5 18.9 13.4 22.1 13.6 C 25.9 13.7 28.9 16.7 29.1 20.5 L 29.1 47.2 L 43.4 47.1 L 43.2
                                         10.0 C 40.4 3.9 34.3 -0.1 27.6 0.0 C 20.7 0.1 14.5 4.4 12.0 10.8 L 12.6 2.5 L 0.5 2.1 Z M 0.5 2.1 "
                                                  fill="none" stroke="#000000"
                                                  stroke-width="2.00"
                                                  transform="matrix(1.00, 0.00, 0.00, -1.00, 331.3, 634.6)">
                                            </path>
                                            <path
                                                d="M 551.0 709.5 L 592.5 708.9 L 593.1 650.4 L 551.8 650.5 L 551.0 709.5 Z M 551.0 709.5 "
                                                fill="#fbfbfb" className="digital-logo0"></path>
                                            <path d="M 0.0 0.0 L 41.5 0.6 L 42.1 59.1 L 0.8 59.0 L 0.0 0.0 Z M 0.0 0.0 "
                                                  fill="none" stroke="#000000" stroke-width="2.00"
                                                  transform="matrix(1.00, 0.00, 0.00, -1.00, 551.0, 709.5)">
                                            </path>
                                            <path d="M 593.6 706.3 C 599.3 710.7 604.5 715.8 609.0 721.5 C 613.7 727.6 617.5 734.3 620.4 741.5 C 619.8 745.0 619.5 748.5 619.5 752.0 C 619.5 755.5
                                        619.7 759.0 620.2 762.4 C 622.2 765.9 626.2 767.6 630.1 766.7 C 633.2 766.0 635.6 763.9 637.2 761.3 C 638.6 759.2 639.6 756.7 639.9 754.0 C 640.6
                                        747.8 640.6 741.5 640.1 735.3 C 639.5 729.2 638.4 723.2 636.8 717.4 L 677.2 719.0 C 679.2 716.9 680.1 713.9 679.6 710.9	C 678.9 707.2 676.0
                                        704.2 672.3 703.4 C 674.7 701.0 675.7 697.7 675.2 694.4 C 674.5 690.6 671.9 687.4 668.3 686.1 C 671.9 685.8 674.5 682.8 674.5 679.2 C 674.5 675.1
                                        671.0 672.0 667.0 672.3 C 670.2 670.4 671.9 666.6 671.1 663.0 C 670.4 659.4 667.5 656.7 664.0 656.1 L 595.1 658.0 "
                                                  fill="#fbfbfb"
                                                  className="digital-logo0">
                                            </path>
                                            <path d="M 0.0 60.7 C 5.8 56.3 11.0 51.2 15.4 45.4 C 20.1 39.3 24.0 32.6 26.8 25.5 C 26.3 22.0 26.0 18.5 25.9 15.0 C
                                        25.9 11.5 26.1 8.0 26.6 4.5 C 28.6 1.1 32.6 -0.7 36.5 0.2 C 39.6 0.9 42.0 3.1 43.7 5.6 C 45.1 7.8 46.0 10.3 46.4 13.0
                                        C 47.0 19.2 47.0 25.5 46.5 31.7 C 46.0 37.7 44.9 43.7 43.2 49.6 L 83.6 48.0 C 85.7 50.1 86.6 53.1 86.0 56.0 C 85.3 59.8
                                        82.5 62.7 78.8 63.5 C 81.1 65.9 82.1 69.3 81.6 72.6 C 81.0 76.4 78.3 79.5 74.7 80.8 C 78.3 81.2 81.0 84.2 80.9 87.8 C 80.9
                                        91.8 77.5 95.0 73.4 94.7 C 76.6 96.6 78.3 100.3 77.6 104.0 C 76.8 107.6 74.0 110.3 70.4 110.9 L 1.6 108.9 "
                                                  fill="none"
                                                  stroke="#000000" stroke-width="2.00"
                                                  transform="matrix(1.00, 0.00, 0.00, -1.00, 593.6, 767.0)">
                                            </path>
                                            <path
                                                d="M 767.2 342.8 L 907.8 341.4 L 907.9 268.0 L 767.8 269.9 L 767.1 342.5 L 767.2 342.8 Z M 767.2 342.8 "
                                                fill="#fbfbfb"
                                                className="digital-logo0">
                                            </path>
                                            <path
                                                d="M 0.0 0.0 L 140.7 1.4 L 140.8 74.8 L 0.6 72.9 L 0.0 0.2 L 0.0 0.0 Z M 0.0 0.0 "
                                                fill="none" stroke="#000000" stroke-width="2.00"
                                                transform="matrix(1.00, 0.00, 0.00, -1.00, 767.1, 342.8)"
                                                className="digital-logo0">
                                            </path>
                                            <path d="M 766.2 343.0 L 837.9 290.6 L 908.5 340.9 " fill="#fbfbfb"
                                                  className="digital-logo0"></path>
                                            <path d="M 0.0 0.0 L 71.7 52.4 L 142.3 2.1 " fill="none" stroke="#000000"
                                                  stroke-width="2.00" transform="matrix(1.00,
                                        0.00, 0.00, -1.00, 766.2, 343.0)" className="digital-logo0">
                                            </path>
                                            <path d="M 637.6 63.6 L 653.4 63.6 L 653.6 105.6 L 667.4 106.2 L 667.0 119.6 L 652.7 119.7 L 652.4 131.6 C 654.4 133.6 657.1 134.8 660.0 135.1 C
                                        663.2 135.5 666.5 134.6 669.1 132.7 L 669.4 147.7 L 635.6 147.5 C 635.6 142.7 635.6 137.9 635.7 133.1 C 635.8 128.5 636.0 123.9 636.3
                                        119.3 L 625.3 119.2 L 625.3 105.1 L 636.9 105.2 L 637.6 63.6 Z M 637.6 63.6 "
                                                  fill="#fbfbfb" className="digital-logo0">
                                            </path>
                                            <path d="M 12.3 84.1 L 28.1 84.1 L 28.3 42.1 L 42.1
                                        41.5 L 41.7 28.1 L 27.5 28.0 L 27.1 16.0 C 29.2 14.1 31.8 12.9 34.7 12.6 C 37.9 12.2 41.2 13.1 43.9 15.0 L 44.1 0.0 L
                                        10.4 0.2 C 10.3 5.0 10.3 9.8 10.4 14.6 C 10.5 19.2 10.7 23.8 11.0 28.4 L 0.0 28.5 L 0.0 42.6 L 11.6 42.4 L 12.3 84.1
                                        Z M 12.3 84.1 " fill="none" stroke="#000000" stroke-width="2.00"
                                                  transform="matrix(1.00, 0.00, 0.00, -1.00, 625.3, 147.7)">
                                            </path>
                                            <path d="M 442.5 421.5 C 449.2 414.7 449.2 403.8 442.5 397.0 C 435.7 390.3 424.8 390.3 418.0 397.0 C 411.3 403.8 411.3
                                        414.7 418.0 421.5 C 424.8 428.2 435.7 428.2 442.5 421.5 Z M 442.5 421.5 "
                                                  fill="#000000"></path>
                                            <path d="M 450.0 496.6 C 456.8 489.8 456.8 478.8 450.0 472.1 C 443.3 465.3 432.3 465.3 425.5 472.1 C 418.8 478.8 418.8 489.8 425.5 496.6 C 432.3
                            503.3 443.3 503.3 450.0 496.6 Z M 450.0 496.6 " fill="#000000"></path>
                                            <path d="M 457.4 571.6 C 464.2 564.9 464.2 553.9 457.4 547.2 C 450.7 540.4 439.7 540.4 433.0 547.2 C 426.2 553.9 426.2 564.9 433.0 571.6 C 439.7
                                        578.4 450.7 578.4 457.4 571.6 Z M 457.4 571.6 " fill="#000000"></path>
                                            <path d="M 464.0 647.0 C 470.8 640.2 470.8 629.3 464.0 622.5 C 457.3 615.8 446.3 615.8 439.6 622.5 C 432.8 629.3 432.8 640.2 439.6
                            647.0 C 446.3 653.7 457.3 653.7 464.0 647.0 Z M 464.0 647.0 " fill="#000000"></path>
                                            <path d="M 464.0 647.0 C 470.8 640.2 470.8 629.3 464.0 622.5 C 457.3 615.8 446.3 615.8 439.6 622.5 C 432.8 629.3 432.8 640.2 439.6 647.0 C 446.3
                            653.7 457.3 653.7 464.0 647.0 Z M 464.0 647.0 " fill="#000000"></path>
                                            <path d="M 471.8 723.8 C 478.6 717.0 478.6 706.1 471.8 699.3 C 465.1 692.5 454.1 692.5 447.4 699.3 C 440.6 706.1 440.6
                           	717.0 447.4 723.8 C 454.1 730.5 465.1 730.5 471.8 723.8 Z M 471.8 723.8 "
                                                  fill="#000000"></path>
                                            <path d="M 554.5 406.4 C 561.3 399.6 561.3 388.7 554.5 381.9 C 547.7 375.1 536.8 375.1 530.0 381.9 C 523.3 388.7 523.3 399.6 530.0 406.4 C 536.8
                            413.1 547.7 413.1 554.5 406.4 Z M 554.5 406.4 " fill="#000000"></path>
                                            <path d="M 602.7 469.3 C 609.4 462.6 609.4 451.6 602.7 444.9 C 595.9 438.1 584.9 438.1 578.2 444.9 C 571.4 451.6 571.4 462.6 578.2 469.3 C 584.9 476.1
                           	595.9 476.1 602.7 469.3 Z M 602.7 469.3 " fill="#000000"></path>
                                            <path d="M 649.2 529.9 C 656.0 523.1 656.0 512.2 649.2 505.4 C 642.4 498.6 631.5 498.6 624.7 505.4 C 618.0 512.2 618.0
                                        523.1 624.7 529.9 C 631.5 536.6 642.4 536.6 649.2 529.9 Z M 649.2 529.9 "
                                                  fill="#000000"></path>
                                            <path d="M 694.5 589.6 C 701.3 582.8 701.3 571.9 694.5 565.1 C 687.7 558.4 676.8 558.4 670.0 565.1 C 663.3 571.9 663.3 582.8 670.0 589.6 C 676.8
                            596.3 687.7 596.3 694.5 589.6 Z M 694.5 589.6 " fill="#000000"></path>
                                            <path d="M 738.6 647.0 C 745.3 640.2 745.3 629.3 738.6 622.5 C 731.8 615.8 720.9 615.8 714.1 622.5 C 707.4 629.3 707.4 640.2 714.1 647.0 C 720.9 653.7
                            731.8 653.7 738.6 647.0 Z M 738.6 647.0 " fill="#000000"></path>
                                            <path d="M 602.7 348.6 C 609.4 341.8 609.4 330.9 602.7 324.1 C 595.9 317.4 584.9 317.4 578.2 324.1 C 571.4 330.9 571.4 341.8 578.2 348.6 C 584.9 355.4
                                        595.9 355.4 602.7 348.6 Z M 602.7 348.6 " fill="#000000"></path>
                                            <path d="M 674.9 383.8 C 681.7 377.0 681.7 366.1 674.9 359.3 C 668.2 352.5 657.2 352.5 650.5 359.3 C 643.7 366.1 643.7 377.0 650.5 383.8
                                        C 657.2 390.5 668.2 390.5 674.9 383.8 Z M 674.9 383.8 " fill="#000000"></path>
                                            <path d="M 744.8 413.3 C 751.5 406.5 751.5 395.6 744.8 388.8 C 738.0 382.1 727.1 382.1 720.3 388.8 C 713.6 395.6 713.6
                           	406.5 720.3 413.3 C 727.1 420.0 738.0 420.0 744.8 413.3 Z M 744.8 413.3 "
                                                  fill="#000000"></path>
                                            <path d="M 813.1 447.5 C 819.9 440.8 819.9 429.8 813.1 423.1 C 806.4 416.3 795.4 416.3 788.7 423.1 C 781.9 429.8 781.9
                           	440.8 788.7 447.5 C 795.4 454.3 806.4 454.3 813.1 447.5 Z M 813.1 447.5 "
                                                  fill="#000000"></path>
                                            <path d="M 882.3 478.0 C 889.1 471.2 889.1 460.3 882.3 453.5 C 875.6 446.8 864.6 446.8 857.9 453.5 C 851.1 460.3 851.1 471.2 857.9 478.0 C 864.6
                           	484.8 875.6 484.8 882.3 478.0 Z M 882.3 478.0 " fill="#000000"></path>
                                            <path d="M 584.3 254.6 C 591.0 247.8 591.0 236.9 584.3 230.1 C 577.5 223.4 566.5 223.4 559.8 230.1 C 553.0 236.9 553.0
                           	247.8 559.8 254.6 C 566.5 261.4 577.5 261.4 584.3 254.6 Z M 584.3 254.6 "
                                                  fill="#000000"></path>
                                            <path d="M 649.2 217.2 C 656.0 210.4 656.0 199.5 649.2 192.7 C 642.4 186.0 631.5 186.0 624.7 192.7 C 618.0 199.5 618.0
                            210.4 624.7 217.2 C 631.5 224.0 642.4 224.0 649.2 217.2 Z M 649.2 217.2 "
                                                  fill="#000000"></path>
                                            <path d="M 721.5 187.9 C 728.3 181.2 728.3 170.2 721.5 163.5 C 714.8 156.7 703.8 156.7 697.0 163.5 C 690.3 170.2 690.3
                            181.2 697.0 187.9 C 703.8 194.7 714.8 194.7 721.5 187.9 Z M 721.5 187.9 "
                                                  fill="#000000"></path>
                                            <path d="M 787.5 150.6 C 794.2 143.8 794.2 132.8 787.5 126.1 C 780.7 119.3 769.8 119.3 763.0 126.1 C 756.2 132.8 756.2
                           	143.8 763.0 150.6 C 769.8 157.3 780.7 157.3 787.5 150.6 Z M 787.5 150.6 "
                                                  fill="#000000"></path>
                                            <path d="M 857.9 121.4 C 864.7 114.6 864.7 103.7 857.9 96.9 C 851.2 90.2 840.2 90.2 833.5 96.9 C 826.7 103.7 826.7 114.6 833.5 121.4 C 840.2 128.2
                           	851.2 128.2 857.9 121.4 Z M 857.9 121.4 " fill="#000000"></path>
                                            <path d="M 796.6 567.8 C 793.7 579.5 797.7 591.9 806.9 599.7 C 820.7 611.4 841.3 610.0 853.4 596.6 L 873.6 605.8 C 872.8 602.6
                                        871.5 599.6 869.8 596.8 C 867.3 592.8 863.9 589.4 859.9 586.8 L 880.7 590.3 L 862.4 574.8 C 862.9 539.6 843.8 506.9 812.8
                                        490.1 C 783.1 473.9 747.0 474.9 718.2 492.6 C 727.0 490.9 736.1 491.4 744.7 493.9 C 752.9 496.3 760.5 500.6 766.8 506.4 C
                                        760.3 507.2 754.1 509.6 748.8 513.4 C 743.6 517.2 739.3 522.1 736.4 527.9 C 738.6 527.2 740.9 527.0 743.2 527.3 C 745.3 527.5
                                        747.3 528.1 749.2 529.1 C 741.3 530.6 734.4 535.1 729.9 541.7 C 725.8 547.6 724.0 554.9 724.8 562.0 C 726.5 559.7 729.0 558.0
                                        731.8 557.3 C 734.3 556.7 737.0 556.9 739.4 557.8 C 732.1 561.7 726.8 568.5 724.8 576.5 C 722.8 584.6 724.4 593.2 729.3 600.1
                                        C 738.1 589.8 749.2 581.5 761.5 575.9 C 772.6 571.0 784.5 568.2 796.6 567.8 Z M 796.6 567.8 "
                                                  fill="#fbfbfb" className="digital-logo0">
                                            </path>
                                            <path d="M 78.3 39.9 C 75.4 28.1 79.4 15.8 88.6 8.0 C 102.4 -3.7 123.0 -2.4 135.1 11.0 L 155.3 1.8 C 154.6 5.0 153.3
                                        8.0 151.6 10.8 C 149.1 14.8 145.7 18.3 141.6 20.8 L 162.4 17.3 L 144.1 32.8 C 144.6 68.1 125.5 100.7 94.5 117.6 C 64.8
                                        133.7 28.8 132.7 0.0 115.0 C 8.8 116.7 17.9 116.2 26.5 113.7 C 34.7 111.3 42.2 107.0 48.5 101.3 C 42.1 100.4 35.9 98.0
                                        30.6 94.2 C 25.3 90.5 21.1 85.5 18.1 79.8 C 20.3 80.4 22.7 80.6 25.0 80.4 C 27.0 80.1 29.1 79.5 30.9 78.6 C 23.1 77.1
                                        16.1 72.5 11.6 66.0 C 7.5 60.0 5.7 52.8 6.5 45.6 C 8.3 47.9 10.8 49.6 13.6 50.3 C 16.1 50.9 18.7 50.7 21.1 49.8 C 13.9
                                        45.9 8.6 39.2 6.6 31.2 C 4.6 23.0 6.2 14.4 11.0 7.5 C 19.9 17.8 30.9 26.1 43.3 31.7 C 54.3 36.7 66.2 39.4 78.3 39.9 Z
                                        M 78.3 39.9 " fill="none" stroke="#000000" stroke-width="2.00"
                                                  transform="matrix(1.00, 0.00, 0.00, -1.00, 718.2, 607.6)">
                                            </path>
                                        </g>
                                    </svg>
                                    <blockquote className="svg-description">
                                        Digital Marketing
                                    </blockquote>
                                </div>
                                <div className="side back">
                                    <blockquote className="service-text">
                                        With our digital marketing services, we help business owners create brand image
                                        and generate traffic which helps in sales.
                                        We develop and understand the customer journey from search page till they buy
                                        your product or service.
                                        We optimize your web presence on social media organically for best returns.
                                        We help you generate online marketing strategies for every facet of digital
                                        marketing.
                                    </blockquote>
                                    <span className="see-more-txt">SEE MORE</span>
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
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path
                                                d="M11.1,47.7H8.6c0,0-2.3-0.4-2.5-2.6V4.7c0,0-0.1-2.8,2.8-3.1h20l12.2,11.8v21.3L11.1,47.7z"/>
                                            <path className="ht-st0"
                                                  d="M29.4,4.4l8.9,8.5h-7.2c0,0-1.8,0.2-1.7-1.4S29.4,4.4,29.4,4.4z"/>
                                            <path d="M21.9,30.9L21.9,30.9c-0.3-0.1-0.5-0.4-0.4-0.8l3.4-11.4c0.1-0.3,0.4-0.5,0.8-0.4h0c0.3,0.1,0.5,0.4,0.4,0.8l-3.4,11.4
                                            C22.5,30.8,22.2,31,21.9,30.9z"/>
                                            <path d="M20.8,25.4l-3.5-3.1l4.5-2c0.4-0.2,0.6-0.6,0.4-1c-0.2-0.4-0.6-0.6-1-0.4l-5.3,2.3c-0.1,0-0.2,0.1-0.3,0.2
                                            c-0.1,0-0.1,0.1-0.2,0.1l0,0c-0.2,0.3-0.2,0.7,0.1,0.9l4.4,3.9c0.3,0.2,0.7,0.2,0.9-0.1C21.1,26.1,21.1,25.7,20.8,25.4z"/>
                                            <path d="M25.7,27.5l4.5-1.3l-3.3-3.7c-0.3-0.3-0.2-0.8,0.1-1.1c0.3-0.3,0.8-0.2,1.1,0.1l3.8,4.3c0.1,0.1,0.1,0.2,0.2,0.3
                                            c0,0.1,0.1,0.1,0.1,0.2v0c0.1,0.3-0.1,0.7-0.4,0.8l-5.6,1.6c-0.3,0.1-0.7-0.1-0.8-0.4C25.2,27.9,25.4,27.6,25.7,27.5z"/>
                                            <path d="M38.7,49.6H14.3c-2.4,0-4.3-1.9-4.3-4.3v-7.1c0-2.4,1.9-4.3,4.3-4.3h24.4c2.4,0,4.3,1.9,4.3,4.3v7.1
                                            C43,47.7,41.1,49.6,38.7,49.6z"/>
                                            <rect x="16.2" y="44.7" width="1.5" height="1.5"/>
                                            <polygon className="ht-st1" points="24,41.9 29.5,41.9 29.5,41.9 24,41.9 "/>
                                            <g>
                                                <g>
                                                    <path d="M20.7,38.4v2.2c0.2-0.3,0.5-0.5,1.1-0.5c0.9,0,1.2,0.6,1.2,1.5v3.6h-1.5v-3.3c0-0.4-0.1-0.6-0.4-0.6
                                            c-0.4,0-0.5,0.3-0.5,0.8v3.2h-1.5v-6.8H20.7z"/>
                                                    <path d="M23.5,40.2h0.6V39h1.4v1.2h0.7v1.2h-0.7v2.4c0,0.3,0.1,0.4,0.4,0.4c0.1,0,0.1,0,0.2,0v1.1c-0.3,0.1-0.6,0.1-0.8,0.1
                                            c-0.9,0-1.3-0.4-1.3-1.3v-2.7h-0.6V40.2z"/>
                                                    <path d="M26.8,41.7c0-1,0-1.3,0-1.6h1.4c0,0.1,0,0.3,0,0.5c0.2-0.4,0.6-0.5,1.1-0.5c0.6,0,0.9,0.3,1,0.6c0.2-0.3,0.6-0.6,1.2-0.6
                                            c0.8,0,1.3,0.5,1.3,1.5v3.6h-1.4v-3.4c0-0.3-0.1-0.5-0.4-0.5c-0.3,0-0.5,0.2-0.5,0.7v3.2h-1.4v-3.4c0-0.4-0.1-0.5-0.4-0.5
                                            c-0.3,0-0.5,0.2-0.5,0.7v3.2h-1.4V41.7z"/>
                                                    <path d="M33.6,45.2v-6.8h1.5v6.8H33.6z"/>
                                                </g>
                                            </g>
                                            <rect x="12" y="36" className="ht-st0" width="29" height="12"/>
                                            <path className="ht-st2"
                                                  d="M10.7,47.5H8.5c0,0-2.5-0.6-2.8-2.9V3.9c0,0,1-2.6,3-2.6h19.8l12.4,11.9v21.4L10.7,47.5z"/>
                                            <path className="ht-st3"
                                                  d="M29,4.1l8.9,8.5h-7.2c0,0-1.8,0.2-1.7-1.4S29,4.1,29,4.1z"/>
                                            <path className="ht-st0" d="M10.5,45.7H8.4c0,0-1.2-0.2-1-2.2v-39c0,0,0.5-2.2,2.4-1.7l17.4-0.1l0.4,9.1c0,0,0.8,2.5,3,2.3l8.6,0.1v20.2
                                            L10.5,45.7z"/>
                                            <path d="M21.4,30.6L21.4,30.6c-0.3-0.1-0.5-0.4-0.4-0.8l3.4-11.4c0.1-0.3,0.4-0.5,0.8-0.4l0,0c0.3,0.1,0.5,0.4,0.4,0.8l-3.4,11.4
                                            C22.1,30.5,21.8,30.7,21.4,30.6z"/>
                                            <path d="M20.4,25.1L16.9,22l4.5-2c0.4-0.2,0.6-0.6,0.4-1s-0.6-0.6-1-0.4l-5.3,2.3c-0.1,0-0.2,0.1-0.3,0.2c-0.1,0-0.1,0.1-0.2,0.1
                                            l0,0c-0.2,0.3-0.2,0.7,0.1,0.9l4.4,3.9c0.3,0.2,0.7,0.2,0.9-0.1C20.7,25.8,20.6,25.3,20.4,25.1z"/>
                                            <path d="M25.3,27.2l4.5-1.3l-3.3-3.7c-0.3-0.3-0.2-0.8,0.1-1.1c0.3-0.3,0.8-0.2,1.1,0.1l3.8,4.3c0.1,0.1,0.1,0.2,0.2,0.3
                                            c0,0.1,0.1,0.1,0.1,0.2l0,0c0.1,0.3-0.1,0.7-0.4,0.8l-5.6,1.6c-0.3,0.1-0.7-0.1-0.8-0.4C24.8,27.6,25,27.3,25.3,27.2z"/>
                                            <path
                                                d="M40,50.3H14c-2.4,0-4.3-2-4.3-4.3v-7c0-2.4,2-4.3,4.3-4.3h26c2.4,0,4.3,2,4.3,4.3v7C44.3,48.3,42.4,50.3,40,50.3z"/>
                                            <path className="ht-st0" d="M15.1,48.5h24.2c1.9,0,3.4-1.5,3.4-3.4v-5.4c0-1.9-1.5-3.4-3.4-3.4H15.1c-1.9,0-3.4,1.5-3.4,3.4v5.4
                                            C11.6,47,13.2,48.5,15.1,48.5z"/>
                                            <rect x="15.8" y="44.4" width="1.5" height="1.5"/>
                                            <polygon className="ht-st1" points="22.6,41.6 28.1,41.6 28.1,41.6 "/>
                                            <g>
                                                <g>
                                                    <path d="M20.2,38.4v2.2c0.2-0.3,0.6-0.5,1.3-0.5c1,0,1.4,0.6,1.4,1.5v3.6h-1.7v-3.3c0-0.4-0.1-0.6-0.5-0.6c-0.4,0-0.5,0.3-0.5,0.8
                                                v3.2h-1.7v-6.8H20.2z"/>
                                                    <path d="M23.3,40.1H24v-1.2h1.7v1.2h0.8v1.2h-0.8v2.4c0,0.3,0.1,0.4,0.4,0.4c0.1,0,0.2,0,0.3,0v1.1c-0.3,0.1-0.7,0.1-0.9,0.1
                                                c-1.1,0-1.4-0.4-1.4-1.3v-2.7h-0.7V40.1z"/>
                                                    <path d="M27.1,41.7c0-1,0-1.3,0-1.6h1.6c0,0.1,0,0.3,0,0.5C29,40.2,29.4,40,30,40c0.7,0,1,0.3,1.2,0.6c0.2-0.3,0.7-0.6,1.4-0.6
                                                c0.9,0,1.5,0.5,1.5,1.5v3.6h-1.6v-3.4c0-0.3-0.1-0.5-0.4-0.5c-0.4,0-0.5,0.2-0.5,0.7v3.2h-1.7v-3.4c0-0.4-0.1-0.5-0.4-0.5
                                                c-0.4,0-0.5,0.2-0.5,0.7v3.2h-1.7V41.7z"/>
                                                    <path d="M35,45.2v-6.8h1.7v6.8H35z"/>
                                                </g>
                                            </g>
                                            <polygon className="ht-st1" points="26,43 18.7,43 18.7,43 26,43 "/>
                                        </svg>


                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path className="css-st0"
                                                  d="M9.6,50.2c0,0-1.9-0.2-1.9-1.9s0-45.7,0-45.7s0-1.9,1.9-1.9l23.7,0l10.1,11.2l0.2,35.6v0.8c0,0,0,1.6-1.9,1.9H9.6z"/>
                                            <path className="css-st0" d="M54.9,13.1"/>
                                            <path className="css-st1"
                                                  d="M9.6,33.6V2.6h22.5v9.9c0,0-0.1,1,1,1h8.6v20.1H9.6z"/>
                                            <path className="css-st2" d="M19.2,20.2l0.4-0.2c0,0,1.1-0.5,1.1-2.1c0,0,0-1.4-0.1-1.5c-0.1-0.1-0.3-1.9-0.2-1.9c0,0,0-1.8,2-1.5v-1.2
                                            c0,0-1.9-0.1-2.7,0.7c0,0-1.1,0.8-0.8,2.8c0,0,0.4,2.4,0.3,2.5c-0.1,0.1,0.4,1.9-1.7,1.8v1.1c0,0,1.5-0.2,1.7,1.3c0,0,0,1.2-0.1,1.3
                                            c0,0-0.5,2.9-0.2,3.2c0,0,0.2,2.4,3.5,2.1v-1.2c0,0-2.2,0.4-2.1-2l0.3-2.3C20.7,23.1,21.2,20.9,19.2,20.2z"/>
                                            <path className="css-st2" d="M31.3,20.2L30.9,20c0,0-1.1-0.5-1.1-2.1c0,0,0-1.4,0.1-1.5c0.1-0.1,0.3-1.9,0.2-1.9c0,0,0-1.8-2-1.5v-1.2
                                            c0,0,1.9-0.1,2.7,0.7c0,0,1.1,0.8,0.8,2.8c0,0-0.4,2.4-0.3,2.5c0.1,0.1-0.4,1.9,1.7,1.8v1.1c0,0-1.5-0.2-1.7,1.3c0,0,0,1.2,0.1,1.3
                                            c0,0,0.5,2.9,0.2,3.2c0,0-0.2,2.4-3.5,2.1v-1.2c0,0,2.2,0.4,2.1-2l-0.3-2.3C29.8,23.1,29.3,20.9,31.3,20.2z"/>
                                            <g>
                                                <g>
                                                    <path className="css-st1" d="M22.4,42.9c0,1-0.4,2.6-2.7,2.6c-2.2,0-2.7-1.6-2.7-3.7c0-2.2,0.8-3.6,2.8-3.6c2.3,0,2.5,1.8,2.6,2.6h-2
                                                    c0-0.5,0-1-0.6-1c-0.5,0-0.7,0.5-0.7,2.1c0,1.6,0.1,2.2,0.7,2.2c0.5,0,0.6-0.5,0.6-1.1H22.4z"/>
                                                    <path className="css-st1" d="M24.8,43.2c0,0.4,0.2,0.9,0.7,0.9c0.4,0,0.6-0.2,0.6-0.6c0-0.4-0.2-0.6-1-0.9C23.5,42,23,41.4,23,40.3
                                                    c0-1.1,0.7-2.1,2.4-2.1c2.1,0,2.5,1.3,2.5,2.2h-1.9c0-0.3,0-0.8-0.6-0.8c-0.3,0-0.5,0.2-0.5,0.5c0,0.4,0.2,0.6,1,0.8
                                                    c1.5,0.6,2.1,1.2,2.1,2.3c0,1.4-0.8,2.3-2.6,2.3c-1.9,0-2.6-1.1-2.6-2.3H24.8z"/>
                                                    <path className="css-st1" d="M30.6,43.2c0,0.4,0.2,0.9,0.7,0.9c0.4,0,0.6-0.2,0.6-0.6c0-0.4-0.2-0.6-1-0.9c-1.6-0.6-2.1-1.2-2.1-2.3
                                                    c0-1.1,0.7-2.1,2.4-2.1c2.1,0,2.5,1.3,2.5,2.2h-1.9c0-0.3,0-0.8-0.6-0.8c-0.3,0-0.5,0.2-0.5,0.5c0,0.4,0.2,0.6,1,0.8
                                                    c1.5,0.6,2.1,1.2,2.1,2.3c0,1.4-0.8,2.3-2.6,2.3c-1.9,0-2.6-1.1-2.6-2.3H30.6z"/>
                                                </g>
                                            </g>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">
                                            <g>
                                                <g>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M13.2,4.6h13.5C33.9,4.6,38,8.3,38,15c0,5.1-2.3,7.4-4.8,8.4c2.9,1.2,5.9,3.7,5.9,9.7c0,8-4.9,12-12.7,12H13.2V4.6z
                                                     M24.7,20.4c3.4,0,4.2-1.4,4.2-4.5c0-3.2-1.3-4.5-4.1-4.5h-2.6v9H24.7z M22.2,38.4h2.9c2.9,0,4.4-1.4,4.4-5.6
                                                    c0-4.1-1.2-5.8-4.9-5.8h-2.4V38.4z"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                </g>
                                            </g>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path d="M7.1,35.2c0,0-1.1-0.3-1-1.5L3,9c0,0-0.4-1.4,0.8-1.5l18.8-6.6l1.1-0.4L43,7l1,0.4c0,0,1.4-0.1,0.6,2.5l-2.7,23.3
                                                c0,0,0.5,1.6-1.4,2L24.7,44c0,0-0.6,1-2.1-0.2L7.1,35.2z"/>
                                            <path className="angular-st0" d="M9.1,33.5c0,0-1-0.2-0.9-1.3L5.6,10.4c0,0-0.4-1.2,0.7-1.3l16.5-5.8l1-0.4l16.9,5.7L41.6,9c0,0,1.3-0.1,0.5,2.2
                                                l-2.4,20.5c0,0,0.4,1.4-1.3,1.8l-13.9,7.6c0,0-0.5,0.8-1.8-0.2L9.1,33.5z"/>
                                            <g>
                                                <g>
                                                    <path d="M22.5,24.9l-0.6,3.5h-3.7l3.2-16.2h5.2l3.2,16.2H26l-0.6-3.5H22.5z M24.9,21.8c-0.4-2.4-0.7-5-0.9-6.5h-0.1
                                                        c-0.2,1.6-0.6,4.1-0.9,6.5H24.9z"/>
                                                </g>
                                            </g>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path className="js-st0"
                                                  d="M11.7,47.5H9.5c0,0-2.5-0.6-2.8-2.9V3.9c0,0,1-2.6,3-2.6h19.8l12.4,11.9v21.4L11.7,47.5z"/>
                                            <path className="js-st3"
                                                  d="M30,4.1l8.9,8.5h-7.2c0,0-1.8,0.2-1.7-1.4S30,4.1,30,4.1z"/>
                                            <path className="js-st1" d="M11.5,45.7H9.4c0,0-1.2-0.2-1-2.2l0-39c0,0,0.5-2.2,2.4-1.7l17.4-0.1l0.4,9.1c0,0,0.8,2.5,3,2.3l8.6,0.1v20.2
                                        L11.5,45.7z"/>
                                            <path d="M22.4,30.6L22.4,30.6c-0.3-0.1-0.5-0.4-0.4-0.8l3.4-11.4c0.1-0.3,0.4-0.5,0.8-0.4l0,0c0.3,0.1,0.5,0.4,0.4,0.8l-3.4,11.4
                                        C23.1,30.5,22.8,30.7,22.4,30.6z"/>
                                            <path d="M21.4,25.1L17.9,22l4.5-2c0.4-0.2,0.6-0.6,0.4-1c-0.2-0.4-0.6-0.6-1-0.4l-5.3,2.3c-0.1,0-0.2,0.1-0.3,0.2
                                        c-0.1,0-0.1,0.1-0.2,0.1l0,0c-0.2,0.3-0.2,0.7,0.1,0.9l4.4,3.9c0.3,0.2,0.7,0.2,0.9-0.1C21.7,25.8,21.6,25.3,21.4,25.1z"/>
                                            <path d="M26.3,27.2l4.5-1.3l-3.3-3.7c-0.3-0.3-0.2-0.8,0.1-1.1c0.3-0.3,0.8-0.2,1.1,0.1l3.8,4.3c0.1,0.1,0.1,0.2,0.2,0.3
                                        c0,0.1,0.1,0.1,0.1,0.2v0c0.1,0.3-0.1,0.7-0.4,0.8l-5.6,1.6c-0.3,0.1-0.7-0.1-0.8-0.4C25.8,27.6,26,27.3,26.3,27.2z"/>
                                            <path
                                                d="M41,50.3H15c-2.4,0-4.3-2-4.3-4.3v-7c0-2.4,2-4.3,4.3-4.3h26c2.4,0,4.3,2,4.3,4.3v7C45.3,48.3,43.4,50.3,41,50.3z"/>
                                            <path className="js-st1" d="M16.1,48.5h24.2c1.9,0,3.4-1.5,3.4-3.4v-5.4c0-1.9-1.5-3.4-3.4-3.4H16.1c-1.9,0-3.4,1.5-3.4,3.4v5.4
                                        C12.6,47,14.2,48.5,16.1,48.5z"/>
                                            <rect x="16.8" y="44.4" width="1.5" height="1.5"/>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M22.4,44.1c0,1.2-0.3,1.9-1.7,1.9c-0.3,0-0.5,0-0.7-0.1v-1.2c0.1,0,0.2,0,0.4,0c0.4,0,0.5-0.2,0.5-0.6v-4.8h1.5V44.1z"/>
                                                    <path d="M24.5,44c0,0.5,0.2,0.9,0.6,0.9c0.4,0,0.6-0.3,0.6-0.7c0-0.4-0.2-0.7-1-1.1c-1.1-0.6-1.6-1.1-1.6-2c0-1.1,0.7-1.8,2-1.8
                                                c1.5,0,1.9,0.9,2,1.9h-1.4c0-0.5-0.1-0.8-0.5-0.8c-0.3,0-0.5,0.2-0.5,0.6c0,0.4,0.1,0.6,0.8,0.9c1.2,0.6,1.7,1.1,1.7,2.2
                                                c0,1.1-0.6,1.9-2.1,1.9c-1.6,0-2.1-0.9-2.1-2H24.5z"/>
                                                </g>
                                            </g>
                                            <polygon className="js-st2" points="23.6,41.6 29.1,41.6 29.1,41.6 23.6,41.6 "/>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px" viewBox="0 0 50 50">

                                            <path className="jq-st0" d="M9.3,7.9c0,0-5.6,5.7-4.6,13.1c0,0,0.8,6.9,5.2,11.1c0,0,3.5,3.5,4.2,3.6c0,0,8.8,6,17.6,2.9
                                            c0,0,5.8-1.6,8.9-8.2c0,0-6.8,5.2-14.9,3.5c0,0-11.7-3-15.7-12.2C10.1,21.7,7,16.7,9.3,7.9z"/>
                                            <path className="jq-st0" d="M41.5,19.9c0,0-2.3,5.2-7.4,6.4c0,0-4.8,1.3-8.6-0.5c0,0-3.2-1.4-3.5-1.9c0,0-6.2-4.2-6.5-10.8c0,0-0.4-4.2,3-8
                                            c0,0-1.7,5.8,1.6,10.7c0,0,5,6.9,12.1,7.1C32.2,23,36.3,23.8,41.5,19.9z"/>
                                            <path className="jq-st0" d="M41.5,11.5c0,0-1.5,3.4-4.8,4.2c0,0-3.1,0.8-5.6-0.4c0,0-2.1-0.9-2.2-1.2c0,0-4.1-2.7-4.2-7c0,0-0.3-2.7,2-5.2
                                            c0,0-1.1,3.8,1,7c0,0,3.3,4.5,7.9,4.6C35.4,13.5,38.1,14,41.5,11.5z"/>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <ellipse className="react-st0" cx="25" cy="24.3" rx="24" ry="6.2"/>
                                            <ellipse transform="matrix(0.787 -0.6169 0.6169 0.787 -9.7167 20.6039)"
                                                     className="react-st0" cx="25" cy="24.4" rx="6" ry="24.8"/>
                                            <ellipse transform="matrix(0.6169 -0.787 0.787 0.6169 -9.6134 28.9983)"
                                                     className="react-st0" cx="25" cy="24.4" rx="24.8" ry="6"/>
                                            <ellipse cx="25" cy="24.3" rx="1.6" ry="1.6"/>
                                        </svg>
                                    </section>
                                </div>

                            </section>
                            <section className="our-technology-margin">
                                <p>BACK END</p>
                                <div className="techo-div">
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path className="go-st0"
                                                  d="M12,10.7c0,0-3.8-1.4-1.8-4.5c0,0,2.2-2.5,4.6-0.6L12,10.7z"/>
                                            <path className="go-st0"
                                                  d="M34.4,4.9c0,0,3.6-1.9,5.2,0.9c0,0,2.5,3.3-1.4,4.7L34.4,4.9z"/>
                                            <path className="go-st0"
                                                  d="M12.4,25.2c0,0-1.4-1-3.2,1.3s0.9,0.7,0.9,0.7s-2.2,1.3,0,1.1c0,0,1.6-0.4,2.2-1.2S12.4,25.2,12.4,25.2z"/>
                                            <path className="go-st0"
                                                  d="M38.7,25.2c0,0,1.4-1,3.2,1.3s-0.9,0.7-0.9,0.7s2.2,1.3,0,1.1c0,0-1.6-0.4-2.2-1.2S38.7,25.2,38.7,25.2z"/>
                                            <path className="go-st0"
                                                  d="M17.2,45.7l-2.3-1.5c0,0-3.2,1.9-2,3.1l0.7-0.5c0,0-1.3,1.2,0.5,1.3L17.2,45.7z"/>
                                            <path className="go-st0"
                                                  d="M33.4,45.7l2.3-1.5c0,0,3.2,1.9,2,3.1L37,46.8c0,0,1.3,1.2-0.5,1.3L33.4,45.7z"/>
                                            <path className="go-st1" d="M11.6,32.6c0,0-0.4,5.9,0.9,8.3c0,0,1.7,3.8,5.1,5c0,0,4.4,1.8,8.1,1.4c0,0,6.6,0,9.7-2.9c0,0,3.6-2.5,4-8
                                            c0,0,0.4-4.8,0.2-5.5l-0.5-8.9c0,0,0.7-4.9-0.8-11.4c0,0-1-6.9-8.9-7.9S16.7,4.4,16.7,4.4s-3.3,1.3-4.6,6.3s-0.1,11.4-0.1,11.4
                                            s-0.1,1.4,0.1,2.1C12,24.2,11.6,32.1,11.6,32.6z"/>
                                            <path className="go-st0" d="M25.8,14.6c-0.2,0-0.5,0.2-0.6,0.5c-0.2-0.3-0.4-0.5-0.6-0.5c-0.5,0-0.8,0.6-0.8,1.4c0,0.8,0.4,1.4,0.8,1.4
                                            c0.2,0,0.5-0.2,0.6-0.5c0.2,0.3,0.4,0.5,0.6,0.5c0.5,0,0.8-0.6,0.8-1.4C26.6,15.2,26.3,14.6,25.8,14.6z"/>
                                            <ellipse className="go-st1" cx="19.4" cy="9.2" rx="4.5" ry="4.2"/>
                                            <ellipse className="go-st1" cx="30.4" cy="9" rx="4.5" ry="4.2"/>
                                            <circle className="go-st2" cx="17.6" cy="9.5" r="1.4"/>
                                            <circle className="go-st2" cx="28.5" cy="9.1" r="1.3"/>
                                            <ellipse className="go-st2" cx="25.2" cy="13.2" rx="2" ry="1.2"/>
                                            <path className="go-st2"
                                                  d="M23,13.2c0,0-2.9,1.9,0,2.7l2-0.5c0,0,1.6,0,2,0.5c0.4,0.5,2.8-0.6,0.9-2.4L27,13.2H23z"/>
                                            <path className="go-st3" d="M23.2,15.9"/>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path d="M9.8,49.4c0,0-1.4,0.1-1.9-1.6l0-46.1c0,0-0.1-1.2,1.4-1.9l24.3,0l10,11.2l0.2,35.9c0,0,0.8,2.5-1.9,2.5
                            C39.1,49.4,9.8,49.4,9.8,49.4z"/>
                                            <path className="php-st0"
                                                  d="M9.8,46.9V1.8h22.5v9.6c0,0-0.3,1.6,1.7,1.3h7.9l0,34.2H9.8z"/>
                                            <g>
                                                <g>
                                                    <path d="M19.8,27.4V30h-1.8v-6.7c0-0.8,0-1.4,0-1.8h1.8c0,0.2,0,0.4,0.1,0.6c0.2-0.4,0.5-0.8,1.4-0.8c1.1,0,1.8,0.9,1.8,3.2
                                    c0,2.5-0.8,3.4-2,3.4C20.4,28,20,27.7,19.8,27.4z M21,24.6c0-1.5-0.2-1.8-0.7-1.8c-0.5,0-0.6,0.5-0.6,1.7c0,1.4,0.1,1.9,0.6,1.9
                                    C20.8,26.5,21,26.1,21,24.6z"/>
                                                    <path d="M25.6,19.4v2.7c0.2-0.4,0.7-0.7,1.4-0.7c1.1,0,1.6,0.7,1.6,1.9v4.5h-1.8v-4.2c0-0.5-0.1-0.8-0.5-0.8c-0.5,0-0.6,0.3-0.6,1
                                    v4h-1.8v-8.5H25.6z"/>
                                                    <path d="M31.4,27.4V30h-1.8v-6.7c0-0.8,0-1.4,0-1.8h1.8c0,0.2,0,0.4,0.1,0.6c0.2-0.4,0.5-0.8,1.4-0.8c1.1,0,1.8,0.9,1.8,3.2
                                    c0,2.5-0.8,3.4-2,3.4C32,28,31.6,27.7,31.4,27.4z M32.7,24.6c0-1.5-0.2-1.8-0.7-1.8c-0.5,0-0.6,0.5-0.6,1.7c0,1.4,0.1,1.9,0.6,1.9
                                    C32.5,26.5,32.7,26.1,32.7,24.6z"/>
                                                </g>
                                            </g>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">
                                            <path className="net-st0" d="M1,34.4c0,0,5.5-16.5,12.4-17.3H25c0,0,3-2,5.9,10.9l0.9,2.7l3.7-10c0,0,1.3-3.8,4.7-3.7l8.7,0l-5.4,8.6
                                            c0,0-4.8,8.1-8.1,8.2l-11,0.5c0,0-3.4,0.6-5.9-10.4c0,0-0.5-3-1.1-3.2c-0.5-0.2-1,0-1,0s-3.7,5.3-4.8,10.7c0,0-2.4,2.9-4.1,2.9
                                            C5.7,34.4,1,34.4,1,34.4z"/>
                                            <path className="net-st0" d="M60.3,24.3"/>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path className="py-st0" d="M40.2,45.9H12.7c0,0-2.9,0.4-2.5-2.3V3.7c0,0,0.5-2.1,2.4-1.7l20.6,0.1l8.6,9.8L42,43.5
                                                C42,43.5,42.3,45.9,40.2,45.9z"/>
                                            <polygon className="py-st1"
                                                     points="11.9,3.7 11.9,31.2 40.2,31.2 40.2,13.4 31.7,13.3 31.8,3.7 "/>
                                            <path d="M20.6,21.6l0.1-2.1c0,0,0.8-1.9,2.4-1.9l4.4,0c0,0,1.8-0.3,1.8-1.9c0-1.6-0.1-4.4-0.1-4.4s-0.4-1.5-2.3-1.6
                                                c-1.8-0.1-4,0.1-4,0.1s-1.7,0.3-1.7,1.7l0,1.4c0,0,0.1,0.4,0.4,0.4c0.4,0,3.3,0,3.3,0s0.8,0.6-0.1,0.6s-5.7,0-5.7,0
                                                s-3.2,0.2-2.1,5.6c0,0,0.1,1.8,1.6,2.5l1.7,0L20.6,21.6z"/>
                                            <path d="M30.1,15.4l-0.1,2.1c0,0-0.8,1.9-2.4,1.9l-4.4,0c0,0-1.8,0.3-1.8,1.9c0,1.6,0.1,4.4,0.1,4.4s0.4,1.5,2.3,1.6s4-0.1,4-0.1
                                                s1.7-0.3,1.7-1.7l0-1.4c0,0-0.1-0.4-0.4-0.4c-0.4,0-3.3,0-3.3,0s-0.8-0.6,0.1-0.6c0.9,0,5.7,0,5.7,0s3.2-0.2,2.1-5.6
                                                c0,0-0.1-1.8-1.6-2.5l-1.7,0L30.1,15.4z"/>
                                            <circle className="py-st1" cx="23.9" cy="11.5" r="0.7"/>
                                            <circle className="py-st1" cx="27.9" cy="25.5" r="0.7"/>
                                            <g>
                                                <g>
                                                    <path className="py-st1" d="M20.7,34.9h3.2c1.7,0,2.9,0.9,2.9,2.9c0,2-1.1,3-3,3h-0.9v3.8h-2.2V34.9z M22.9,39.1h0.6
                                                        c0.8,0,1.1-0.4,1.1-1.3c0-0.9-0.4-1.3-1-1.3h-0.6V39.1z"/>
                                                    <path className="py-st1" d="M29.3,44.6v-3.2c0-0.1,0-0.3-0.1-0.4l-2.3-6.1h2.5c0.4,1.5,0.8,3.2,1.1,4.4c0.3-1.1,0.8-2.9,1.1-4.4h2.3
                                                        L31.6,41c0,0.1-0.1,0.2-0.1,0.4v3.2H29.3z"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                </g>
                                            </g>
                                        </svg>

                                    </section>

                                </div>

                            </section>
                        </div>
                        <div className="our-right-technology">
                            <section id="web">
                                <p>WEB DESIGN</p>
                                <div className="techo-div">
                                    <section>
                                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 240 234">

                                            <g>
                                                <path className="illustr-st0" d="M10,10h220v214H10V10z"/>
                                                <path className="illustr-st1" d="M0,0v234h240V0H0z M10,10h220v214H10V10z"/>
                                                <path className="illustr-st1" d="M83.3,132.5l-7.9,30c-0.2,0.8-0.5,1-1.5,1H59.2c-1,0-1.2-0.3-1-1.5l28.4-99.4c0.5-1.8,0.8-3.4,1-8.3
                                                    c0-0.7,0.3-1,0.8-1h21c0.7,0,1,0.2,1.2,1l31.8,107.9c0.2,0.8,0,1.3-0.8,1.3H125c-0.8,0-1.3-0.2-1.5-0.9l-8.3-30.1L83.3,132.5
                                                    L83.3,132.5z M111.1,116.3c-2.8-11.1-9.4-35.3-11.9-47h-0.2c-2.1,11.7-7.4,31.5-11.6,47H111.1z M156.1,60.7
                                                    c0-6.4,4.5-10.2,10.2-10.2c6.1,0,10.2,4.1,10.2,10.2c0,6.6-4.3,10.2-10.4,10.2C160.3,70.9,156.1,67.3,156.1,60.7L156.1,60.7z
                                                     M157.3,83.4c0-0.8,0.3-1.2,1.2-1.2h15.7c0.8,0,1.2,0.3,1.2,1.2v78.9c0,0.8-0.2,1.2-1.2,1.2h-15.5c-1,0-1.3-0.5-1.3-1.3V83.4z"/>
                                            </g>
                                        </svg>
                                    </section>
                                    <section>
                                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 240 234">

                                            <path className="photos-st0" d="M10,10h220v214H10V10z"/>
                                            <path className="photos-st1" d="M0,0v234h240V0H0z M10,10h220v214H10V10z M58,54.8c0-0.7,1.4-1.2,2.2-1.2c6.4-0.3,15.9-0.5,25.8-0.5
                                                c27.7,0,38.5,15.2,38.5,34.7c0,25.4-18.4,36.3-41,36.3c-3.8,0-5.1-0.2-7.8-0.2v38.4c0,0.8-0.3,1.2-1.2,1.2H59.2
                                                c-0.8,0-1.2-0.3-1.2-1.2L58,54.8L58,54.8z M75.8,107.9c2.3,0.2,4.1,0.2,8.1,0.2c11.7,0,22.7-4.1,22.7-20c0-12.7-7.9-19.1-21.2-19.1
                                                c-4,0-7.8,0.2-9.6,0.3V107.9L75.8,107.9z M161.8,96c-7.9,0-10.6,4-10.6,7.3c0,3.6,1.8,6.1,12.4,11.6c15.7,7.6,20.6,14.9,20.6,25.6
                                                c0,16-12.2,24.6-28.7,24.6c-8.7,0-16.2-1.8-20.5-4.3c-0.7-0.3-0.8-0.8-0.8-1.6v-14.7c0-1,0.5-1.3,1.2-0.8c6.3,4.1,13.5,5.9,20.1,5.9
                                                c7.9,0,11.2-3.3,11.2-7.8c0-3.6-2.3-6.8-12.4-12c-14.2-6.8-20.1-13.7-20.1-25.2c0-12.9,10.1-23.6,27.6-23.6c8.6,0,14.6,1.3,17.9,2.8
                                                c0.8,0.5,1,1.3,1,2v13.7c0,0.8-0.5,1.3-1.5,1C174.8,97.7,168.3,96,161.8,96L161.8,96z"/>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 240 234">

                                            <g>
                                                <path className="ae-st0" d="M10,10h220v214H10V10z"/>
                                                <path className="ae-st1" d="M0,0v234h240V0H0z M10,10h220v214H10V10z M67.8,132.5l-7.9,29.9c-0.2,0.8-0.5,1.1-1.5,1.1H43.7
                                                    c-1,0-1.2-0.3-1-1.5l28.4-99.3c0.5-1.8,0.8-3.2,1-8.2c0-0.7,0.3-1,0.8-1h21c0.7,0,1,0.2,1.2,1l31.8,107.7c0.2,0.8,0,1.3-0.8,1.3
                                                    h-16.5c-0.8,0-1.3-0.3-1.5-1l-8.3-30H67.8L67.8,132.5z M95.9,116.3c-2.8-11.1-9.6-35.3-12.1-47h-0.2c-2.1,11.7-7.6,31.5-11.7,47
                                                    C72,116.3,95.9,116.3,95.9,116.3z M149.5,126.5c0.2,13.5,6.6,22.6,21.8,22.6c5.9,0,11-0.8,16.3-3.1c0.7-0.3,1.2-0.2,1.2,0.7v12.5
                                                    c0,1-0.3,1.5-1,2c-5.3,2.6-11.9,3.8-20.1,3.8c-26.4,0-36.3-19.5-36.3-41.3c0-23.6,12.2-42.9,33.7-42.9c21.8,0,29.4,18.3,29.4,33.2
                                                    c0,4.8-0.3,8.7-0.8,10.6c-0.2,0.8-0.5,1.1-1.3,1.3c-2,0.3-7.9,0.7-16.7,0.7L149.5,126.5L149.5,126.5z M169.8,112.7
                                                    c5.1,0,6.9,0,7.4-0.2c0-0.7,0.2-1.2,0.2-1.7c0-5.4-2.6-15.4-13-15.4c-9.6,0-13.7,8.4-14.7,17.3L169.8,112.7L169.8,112.7z"/>
                                            </g>
                                        </svg>

                                    </section>

                                </div>

                            </section>
                            <section>
                                <p>OTHER</p>
                                <div className="techo-div">
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                             viewBox="0 0 50 50" >

                                            <circle className="press-st0" cx="25" cy="24.5" r="24.2"/>
                                            <circle className="press-st1" cx="25" cy="24.5" r="20.8"/>
                                            <path className="press-st2" d="M14.1,19.2h1.6v-0.9H5.1v0.9l9.9,24.6l3.6,1.5l6.9-15.7l6.2,15.7l3.7-1.6L44,21.4c0,0,1.2-8.5-3.6-8.4
                                            c-4.8,0.1-1.3,7.7-1.3,7.7l0.6,5.5c0,0-2.7,10.4-3.5,10.3C35.3,36.4,30,21.4,30,21.4s-1.3-2,2.6-2.2v-1.1l-14-0.1v1.1
                                            c0,0,3.7,0.4,3.6,2.3l2.4,5.3l-4.4,10.9l-6.8-16.1C13.4,21.4,13.4,19.2,14.1,19.2z"/>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path d="M9.8,49.4c0,0-1.4,0.1-1.9-1.6l0-46.1c0,0-0.1-1.2,1.4-1.9l24.3,0l10,11.2l0.2,35.9c0,0,0.8,2.5-1.9,2.5
                                                C39.1,49.4,9.8,49.4,9.8,49.4z"/>
                                            <path className="sql-st0"
                                                  d="M9.8,46.9V1.8h22.5v9.6c0,0-0.1,1.9,1.7,1.3h7.9l0,34.2H9.8z"/>
                                            <path d="M42.7,37.6H8.1c-2.3,0-4.2-1.9-4.2-4.2V22.1c0-2.3,1.9-4.2,4.2-4.2h34.6c2.3,0,4.2,1.9,4.2,4.2v11.3
                                                C46.9,35.7,45,37.6,42.7,37.6z"/>
                                            <g>
                                                <g>
                                                    <path className="sql-st0" d="M16.6,29.8c0.1,0.9,0.3,1.5,1.1,1.5c0.7,0,1-0.5,1-1.1c0-0.8-0.4-1.2-1.7-1.9c-1.9-1-2.6-1.8-2.6-3.4
                                                        c0-1.9,1.1-3.1,3.3-3.1c2.5,0,3.3,1.6,3.3,3.3h-2.4c0-0.8-0.2-1.4-0.9-1.4c-0.6,0-0.8,0.4-0.8,1c0,0.6,0.2,1,1.4,1.5
                                                        c2,1,2.9,1.9,2.9,3.7c0,1.8-1.1,3.3-3.5,3.3c-2.7,0-3.5-1.5-3.5-3.4H16.6z"/>
                                                    <path className="sql-st0" d="M29.5,27.4c0,4-1.1,5.7-3.8,5.7c-2.5,0-3.7-1.8-3.7-5.8c0-3.9,1.3-5.5,3.8-5.5C28.4,21.8,29.5,23.6,29.5,27.4
                                                        z M24.7,27.4c0,2.7,0.2,3.8,1.1,3.8c0.9,0,1.1-1,1.1-3.8c0-2.6-0.2-3.6-1.1-3.6C24.9,23.8,24.7,24.8,24.7,27.4z M28.6,31.5
                                                        l1.8,1.3l-1.3,1.6l-2.4-1.7L28.6,31.5z"/>
                                                    <path className="sql-st0" d="M30.9,22h2.5v8.9h3.5l-0.2,2h-5.8V22z"/>
                                                </g>
                                            </g>
                                        </svg>

                                    </section>
                                    <section>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             viewBox="0 0 50 50">

                                            <path className="android-st0" d="M9.5,32.1L9.5,32.1c-1.1,0-2-0.9-2-2V19.9c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2V30C11.6,31.1,10.7,32.1,9.5,32.1z
                                                    "/>
                                            <path className="android-st0"
                                                  d="M21,46.3L21,46.3c-1.1,0-2-0.9-2-2V34.1c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v10.1C23,45.3,22.1,46.3,21,46.3z"/>
                                            <path className="android-st0" d="M30.1,46.3L30.1,46.3c-1.1,0-2-0.9-2-2V34.1c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v10.1
                                                    C32.1,45.3,31.2,46.3,30.1,46.3z"/>
                                            <path className="android-st0" d="M41.5,31.7L41.5,31.7c-1.1,0-2-0.9-2-2V19.6c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v10.1
                                                    C43.6,30.8,42.6,31.7,41.5,31.7z"/>
                                            <path
                                                d="M13.3,17h24.4v17.3c0,0,0.1,2.8-2.4,3.3l-2.5,0l-16.6,0c0,0-2.5,0.1-3-2.5L13.3,17z"/>
                                            <path d="M13.2,16.1h24.6c0,0-0.2-11-12.6-11.3C25.2,4.8,14,5.1,13.2,16.1z"/>
                                            <circle className="android-st1" cx="20.8" cy="10.4" r="0.9"/>
                                            <circle className="android-st1" cx="29.7" cy="10.4" r="0.9"/>
                                            <path className="android-st0" d="M20,6.4L20,6.4c-0.2,0.1-0.4,0-0.5-0.1l-2.1-3.6c-0.1-0.2,0-0.4,0.1-0.5l0,0c0.2-0.1,0.4,0,0.5,0.1L20.2,6
                                                    C20.2,6.2,20.2,6.4,20,6.4z"/>
                                            <path className="android-st0" d="M31.7,6.5L31.7,6.5c-0.2-0.1-0.2-0.3-0.1-0.4l1.9-3.7c0.1-0.2,0.3-0.2,0.4-0.1l0,0c0.2,0.1,0.2,0.3,0.1,0.4
                                                    l-1.9,3.7C32.1,6.5,31.9,6.6,31.7,6.5z"/>
                                        </svg>

                                    </section>
                                </div>

                            </section>

                        </div>
                    </div>
                </div>
                </div>
                <footer>
                    <div className="footer-info float-left">Powered by <span>Floratechno Solutions Pvt. Ltd.</span>
                    </div>
                    <div className="footer-info float-right text-align-right"><span className="copyright-info">©2018 India</span>
                    </div>
                </footer>
            </div>
        );
    }
}
render(<Services/>, document.getElementById('floraService'));