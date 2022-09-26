import { data, event } from "jquery";
import React from "react";
import { Button, Col, Form, Input, InputGroup } from 'reactstrap';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import MaidHome from "./MaidHome";
import personal from './Images/personal.jpg';

const validContactRegex = RegExp(
  / \+91-[\d]{10}$/
);

const ValidateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class UpdateMaid extends React.Component {
  constructor(props) {
    super(props);
    const token = (localStorage.getItem("updatemaid"));
    let loggedIn = true;
    this.state = {
      maidId: '',
      maidName: '',
      maidUsername: '',
      maidPassword: '',
      maidAge: '',
      maidMobileNo: '',
      maidEmailId: '',
      maidAddress: '',
      maidCity: '',
      maidPincode: '',
      maidAdharCard: '',
      maidPoliceVerificationCertificate: '',
      monthCharges: '',
      maidExperience: '',


      errors: {
        maidMobileNo: ''
      }
    }
  }
  maidName = (event) => {

    this.setState({ maidName: event.target.value })

  }

  maidUsername = (event) => {

    this.setState({ maidUsername: event.target.value })

  }
  maidPassword = (event) => {

    this.setState({ maidPassword: event.target.value })

  }


  maidAge = (event) => {

    this.setState({ maidAge: event.target.value })

  }



  maidMobileNo = (event) => {

    this.setState({ maidMobileNo: event.target.value })

  }

  maidEmailId = (event) => {

    this.setState({ maidEmailId: event.target.value })

  }
  maidAddress = (event) => {

    this.setState({ maidAddress: event.target.value })

  }
  maidCity = (event) => {

    this.setState({ maidCity: event.target.value })

  }
  maidAdharCard = (event) => {

    this.setState({ maidAdharCard: event.target.value })

  }

  maidPoliceVerificationCertificate = (event) => {

    this.setState({ maidPoliceVerificationCertificate: event.target.value })

  }


  monthCharges = (event) => {

    this.setState({ monthCharges: event.target.value })

  }

  maidExperience = (event) => {

    this.setState({ maidExperience: event.target.value })

  }
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {

      case 'maidMobileNo':
        errors.maidMobileNo =
          value.length === 10
            ? ''
            : 'Contact No must be 10 digits long!';
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  }

  cancel = () => {
  }


  update = (event) => {
    event.preventDefault();
    const maidId = (JSON.parse(localStorage.getItem('bookedmaid')).maidId);

    if (ValidateForm(this.state.errors)) {
      console.info('Valid Form')
    }
    else {
      console.error('Invalid Form')
    }



    const requestOption = {
      method: 'post',

      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
      "body": JSON.stringify({
        maidId: this.state.maidId ? this.state.maidId : (JSON.parse(localStorage.getItem('updatemaid')).maidId),
        maidName: this.state.maidName ? this.state.maidName : (JSON.parse(localStorage.getItem('updatemaid')).maidName),
        maidUsername: this.state.maidUsername ? this.state.maidUsername : (JSON.parse(localStorage.getItem('updatemaid')).maidUsername),
        maidPassword: this.state.maidPassword ? this.state.maidPassword : (JSON.parse(localStorage.getItem('updatemaid')).maidPasword),
        maidAge: this.state.maidAge ? this.state.maidAge : (JSON.parse(localStorage.getItem('updatemaid')).maidAge),
        maidMobileNo: this.state.maidMobileNo ? this.state.maidMobileNo : (JSON.parse(localStorage.getItem('updatemaid')).maidMobileNo),
        maidEmailId: this.state.maidEmailId ? this.state.maidEmailId : (JSON.parse(localStorage.getItem('updatemaid')).maidEmailId),
        maidAddress: this.state.maidAddress ? this.state.maidAddress : (JSON.parse(localStorage.getItem('updatemaid')).maidAddress),
        maidCity: this.state.maidCity ? this.state.maidCity : (JSON.parse(localStorage.getItem('updatemaid')).maidCity),
        maidPincode: this.state.maidPincode ? this.state.maidPincode : (JSON.parse(localStorage.getItem('updatemaid')).maidPincode),
        maidAdharCard: this.state.maidAdharCard ? this.state.maidAdharCard : (JSON.parse(localStorage.getItem('updatemaid')).maidAdharCard),
        maidPoliceVerificationCertificate: this.state.maidPoliceVerificationCertificate ? this.state.maidPoliceVerificationCertificate : (JSON.parse(localStorage.getItem('updatemaid')).maidPoliceVerificationCertificate),
        monthCharges: this.state.monthCharges ? this.state.monthCharges : (JSON.parse(localStorage.getItem('updatemaid')).monthCharges),
        maidExperience: this.state.maidExperience ? this.state.maidExperience : (JSON.parse(localStorage.getItem('updatemaid')).maidExperience),


      })
    };



    fetch('http://localhost:8080/maid/maidupdate/' + maidId, requestOption)
      .then(res => {
        if (res.status === 200) {
          alert("updated successfully");
          window.location = "/AdminHome";
        }
        else {
          alert("OOPS! Registration Failed !");
        }
      })

  }
  render() {

    const { errors } = this.state;

    return (
      <div className="container-fluid" style={{ backgroundImage: `url(${personal})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover', color: 'black' }} >
        <div class="nav">&nbsp;&nbsp;
          <button><a href="AdminHome">BACK</a></button>
        </div>
        {<style>{'body{background-color:#DFDFDE}'}</style>}
        <div class="nav">&nbsp;&nbsp;
          <button><a href="AdminHome">BACK</a></button>
        </div>
        <h4 style={{ fontFamily: 'arial', fontSize: 36 }}><b><i>Welcome Admin </i></b></h4>

        <div id="form" class="row" className="mb-3 pageheading" >

          <h2>UPDATE PERSONAL INFORMARTION</h2>
        </div>

        <center>
          <Col md="9" lg="7" xl="6">


            <Form noValidate>


              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <InputGroup className="mb-2">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Name : </label>&nbsp; &nbsp;
                  <Input type="text" name="maidName" placeholder={(JSON.parse(localStorage.getItem('loggedinmaid')).maidName)} disabled={true} noValidate required />
                </InputGroup>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>User Name : </label>&nbsp; &nbsp;
                  <Input type="text" name="maidUsername" placeholder={(JSON.parse(localStorage.getItem('loggedinmaid')).maidUsername)} onChange={this.maidUsername} noValidate />
                </InputGroup>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Password : </label>&nbsp; &nbsp;
                  <Input type="text" name="maidPassword" placeholder={(JSON.parse(localStorage.getItem('loggedinmaid')).maidPassword)} onChange={this.maidPassword} noValidate />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Age : </label> &nbsp; &nbsp;
                  <Input type="number" name="maidAge" placeholder={(JSON.parse(localStorage.getItem('loggedinmaid')).maidAge)} onChange={this.maidAge} noValidate />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Mobile NO : </label> &nbsp; &nbsp;
                  <Input type="text" name="maidMobileNo" placeholder={(JSON.parse(localStorage.getItem('loggedinmaid')).maidMobileNo)} onChange={this.maidMobileNo} noValidate />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Email ID : </label> &nbsp; &nbsp;
                  <Input type="text" name="maidEmailId" placeholder={(JSON.parse(localStorage.getItem('loggedinmaid')).maidEmailId)} onChange={this.maidEmailId} noValidate />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Address : </label> &nbsp; &nbsp;
                  <Input type="text" name="maidAddress" placeholder={(JSON.parse(localStorage.getItem('loggedinmaid')).maidAddress)} onChange={this.maidAddress} noValidate />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>City : </label> &nbsp; &nbsp;
                  <Input type="text" name="maidCity" placeholder={(JSON.parse(localStorage.getItem('loggedinmaid')).maidCity)} onChange={this.maidCity} noValidate />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Pincode : </label> &nbsp; &nbsp;
                  <Input type="text" name="maidPincode" placeholder={(JSON.parse(localStorage.getItem('loggedinmaid')).maidPincode)} onChange={this.maidPincode} noValidate />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Adhar Card : </label> &nbsp; &nbsp;
                  <Input type="text" name="maidAdharCard" placeholder={(JSON.parse(localStorage.getItem('loggedinmaid')).maidAdharCard)} disabled={true} noValidate required />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Police Verification Certificate : </label> &nbsp; &nbsp;
                  <Input type="text" name="maidPoliceVerificationCertificate" placeholder={(JSON.parse(localStorage.getItem('loggedinmaid')).maidPoliceVerificationCertificate)} disabled={true} noValidate required />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Month Charge: </label> &nbsp; &nbsp;
                  <Input type="number" name="monthCharges" placeholder={(JSON.parse(localStorage.getItem('loggedinmaid')).monthCharges)} onChange={this.monthCharges} noValidate />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Experience : </label> &nbsp; &nbsp;
                  <Input type="number" name="maidExperience" placeholder={(JSON.parse(localStorage.getItem('loggedinmaid')).maidExperience)} onChange={this.maidExperience} noValidate />
                </InputGroup>
              </div>


              <Button onClick={(event) => { this.update(event) }} color="success" >UPDATE</Button>
            </Form>
          </Col>
        </center>
        <Routes>
          <Route path="/MaidHome" element={<MaidHome />} />
        </Routes>
      </div>
    );

  }

}
export default UpdateMaid;