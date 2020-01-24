import React from 'react';
import {render} from 'react-dom';

export default class HeaderComponent extends React.Component {

    constructor(props) {
				super(props); 
    }

    render (){
        return (
            <header className="header-section" id="myHeader">
                    <i className="fa fa-bars cates" onClick={() => this.show()}></i>
                    <div className="bind-header">
                        <div className="header-options-right" id="myHeaderSpan1">
                            <a href="/about" target="_parent" className="header-a">
                           <span className={"header-option-span " + (this.props.selectedTab == 'about-container' ? 'orange-color' : '')} onClick={(e) => this.goToElement(e, "about-container", 70, false)}>
                               <span class="head_title">ABOUT</span>
                                <span className="span-border"></span>
                            </span>
                            </a>
                            <a href="/team" target="_parent" className="header-a">
                            <span className="header-option-span"  onClick={(e) => this.goToElement(e, "team-containers", 101, false)}>
                                <span class="head_title">TEAM</span>
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
                            <span className="header-option-span" onClick={(e) => this.goToElement(e, "servicesContainer", 85, false)}>
                                <span class="head_title">SERVICES</span>
                             <span className="span-border"></span>
                            </span>
                            </a>
                            <a href="/contact" target="_parent" className="header-a">
                            <span className="header-option-span" onClick={(e) => this.goToElement(e, "contact-container", 40, false)}>
                                <span class="head_title">CONTACT</span>
                             <span className="span-border"></span>
                            </span>
                            </a>
                        </div>
                    </div>
                </header>
        )
    }
}