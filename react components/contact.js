import React, { Component } from 'react';
import contact from './Images/contact.jpg';

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(${contact})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <div >
                    <h1 style={{ text: "white" }}>CONTACT </h1><br />
                    <br />

                    <center>
                        <table border='4' className="table table-bordered table-solid" >

                            <tr >
                                &nbsp;<th>Name </th>  &nbsp;
                                <th>Email ID</th>&nbsp;
                                <th>Contact Number</th>&nbsp;&nbsp;


                            </tr>
                            <tr>
                                &nbsp; <td>Tejas jawale</td>&nbsp;
                                <td>tejas@gmail.com</td>&nbsp;
                                <td>7420871899</td>&nbsp;&nbsp;
                            </tr>



                            <tr>
                                &nbsp; <td>Ruchita Patil</td>&nbsp;
                                <td>ruchita@gmail.com</td>&nbsp;
                                <td>7058870782</td>&nbsp;&nbsp;
                            </tr>


                            <tr>
                                &nbsp; <td>Mayur Nigade</td>&nbsp;
                                <td>mayur@gmail.com</td>&nbsp;
                                <td>9637536765</td>&nbsp;&nbsp;
                            </tr>


                            <tr>
                                &nbsp; <td>Pankaj Desai</td>&nbsp;
                                <td>pankaj@gmail.com</td>&nbsp;
                                <td>9373454977</td>&nbsp;&nbsp;
                            </tr>


                            <tr>
                                &nbsp; <td>AkshayKumar Girmal</td>&nbsp;
                                <td>akshay@gmail.com</td>&nbsp;
                                <td>9341177331</td>&nbsp;&nbsp;
                            </tr>


                            <tr>
                                &nbsp; <td>Atharva Bondre</td>&nbsp;
                                <td>atharva@gmail.com</td>&nbsp;
                                <td>7387807425</td>&nbsp;&nbsp;
                            </tr>


                        </table>
                    </center>
                </div>
            </div>


        )
    }
}

export default Contact;