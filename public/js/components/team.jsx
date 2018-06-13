import React from 'react';
import {smoothScroll} from './commoncomponent/helper.js'
class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    componentDidMount(){
        smoothScroll("team-containers", 100);
    }
    render (){
        return(
            <section className="team-container" id="team-containers">
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
        );
    }
}
export default Team;