import React, { Component } from 'react'
import TC from './Images/TC.jpg';

class Termsandconditions extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            
           
<div  className="container-fluid"  style={{ backgroundImage:`url(${TC})`,height:'1000px', backgroundPosition:"center" ,backgroundRepeat:"no-repeat",backgroundSize:'cover'}}>
    {<style>{'body{background-color:#DFDFDE}'}</style>}
    <hr/>
        <h3>Terms and Conditions</h3>
        <br/>
        <hr/>
         <br/>

<h6>1. BY ENTERING THIS SITE YOU ACKNOWLEDGE AND AGREE TO ALL TERMS AND CONDITIONS STATED HEREIN. IF
        YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THIS SITE<br/>
        <br/>

        2. MaidPortal is the copyright owner of everything on this site and no portion of this site, including
        but not limited to the text, images, audio or video, may be used in any manner, or for any purpose, without
        MaidPortal express written permission, except as provided for herein. Without in any way waiving any of the
        foregoing rights, you may view and print one copy of the material on this site for your local use, provided you
        do not delete or change any copyright, trademark or other proprietary notices, and provided further that you do
        not reproduce or duplicate any of the material. Modification or use of the material on this site for any other
        purpose violates MaidPortal legal rights. Except for copies printed for local use, and not for resale, no part of
        this information may be reproduced, stored in a retrieval system, or transmitted without the prior written
        permission of MaidPortal.
    </h6>
                 
</div>
        )
    }
}
        export default Termsandconditions;