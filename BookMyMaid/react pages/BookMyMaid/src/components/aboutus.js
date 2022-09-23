import React, { Component } from 'react';
import aboutus from './Images/aboutus.jpg';

class AboutUs extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(${aboutus})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <h1 class="text-black"  >About Us </h1>
                <br />
                <p class=" text-red">We are giving platform for maids and users </p>
                <h2 >Our Team</h2>
                <hr />
                <div class="row">
                    <div class="column" >
                        <div >
                            <div >
                                <h2>Tejas Jawale</h2>
                                <p class="title">CDAC Pune</p>

                            </div>
                        </div>

                        <div class="column">
                            <div >
                                <div >
                                    <h2>Ruchita Patil</h2>
                                    <p class="title"> CDAC Pune</p>
                                </div>
                            </div>
                        </div>


                        <div class="column">
                            <div >

                                <div >
                                    <h2>Mayur Nigade</h2>
                                    <p class="title"> CDAC Pune</p>

                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div >

                                <div>
                                    <h2>Pankaj Desai</h2>
                                    <p class="title">CDAC Pune</p>

                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div >

                                <div >
                                    <h2>AkshayKumar Girmal</h2>
                                    <p class="title"> CDAC Pune</p>

                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div >

                                <div >
                                    <h2>Atharva Bondre</h2>
                                    <p class="title"> CDAC Pune</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;