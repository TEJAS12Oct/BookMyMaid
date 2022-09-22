import { data, event } from "jquery";
import React from "react";
import { Button, Col, Form, Input, InputGroup } from 'reactstrap';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import CustomerHome from "./CustomerHome";
import personal from './Images/personal.jpg';

const validContactRegex = RegExp(
  / \+91-[\d]{10}$/
);

const ValidateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class Profile extends React.Component {


  constructor(props) {
    super(props);
    const token = (localStorage.getItem("loggedincustomer"));
    let loggedIn = true;
    this.state = {
      userId: '',
      userName: '',
      userUsername: '',
      userPassword: '',
      userGender: '',
      userFamilyMembers: '',
      userRooms: '',
      userMobileNo: '',
      userEmailId: '',
      userAddress: '',
      userCity: '',
      userPincode: '',
      userAdharCard: '',


      errors: {
        userMobileNo: ''

      }
    }
  }

  userName = (event) => {

    this.setState({ userName: event.target.value })

  }

  userUsername = (event) => {

    this.setState({ userUsername: event.target.value })

  }
  userPassword = (event) => {

    this.setState({ PauserPasswordssword: event.target.value })
  }

  userGender = (event) => {

    this.setState({ userGender: event.target.value })

  }


  userFamilyMembers = (event) => {

    this.setState({ userFamilyMembers: event.target.value })

  }

  userRooms = (event) => {

    this.setState({ userRooms: event.target.value })

  }

  userMobileNo = (event) => {

    this.setState({ userMobileNo: event.target.value })

  }

  userEmailId = (event) => {

    this.setState({ userEmailId: event.target.value })

  }
  userAddress = (event) => {

    this.setState({ Address: event.target.value })

  }
  userCity = (event) => {

    this.setState({ City: event.target.value })

  }
  userPincode = (event) => {

    this.setState({ userPincode: event.target.value })

  }

  userAdharCard = (event) => {

    this.setState({ userAdharCard: event.target.value })

  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    // event.target.value()
    let errors = this.state.errors;

    switch (name) {

      case 'userMobileNo':
        errors.userMobileNo =
          value.length === 10
            ? ''
            : 'Contact No must be 10 digits long!';
        break;

      default:
        break;
    }



    this.setState({ errors, [name]: value });
  }

  cancel = (event) => {
    // window.location="/CustomerHome";

  }


  update = (event) => {
    event.preventDefault();

    if (ValidateForm(this.state.errors)) {
      console.info('Valid Form')
    }
    else {
      console.error('Invalid Form')
    }
    
    const userId= (JSON.parse(localStorage.getItem('loggedincustomer')).userId);

    const requestOption = {
      method: 'post',

      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
      "body": JSON.stringify({
        userId: this.state.userId ? this.state.userId :(JSON.parse(localStorage.getItem('loggedincustomer')).userId),
        userName: this.state.userName ? this.state.userName :(JSON.parse(localStorage.getItem('loggedincustomer')).userName),
        userUsername: this.state.userUsername ? this.state.userUsername :(JSON.parse(localStorage.getItem('loggedincustomer')).userUsername),
        userGender: this.state.userGender ? this.state.userGender :(JSON.parse(localStorage.getItem('loggedincustomer')).userGender),
        userPassword:this.state.userPassword ? this.state.userPassword : (JSON.parse(localStorage.getItem('loggedincustomer')).userPasword),
        userFamilyMembers:this.state.userFamilyMembers ? this.state.userFamilyMembers : (JSON.parse(localStorage.getItem('loggedincustomer')).userFamilyMembers),
        userRooms: this.state.userRooms ? this.state.userRooms :(JSON.parse(localStorage.getItem('loggedincustomer')).userRooms),
        userMobileNo: this.state.userMobileNo ? this.state.userMobileNo :(JSON.parse(localStorage.getItem('loggedincustomer')).userMobileNo),
        userEmailId: this.state.userEmailId ? this.state.userEmailId :(JSON.parse(localStorage.getItem('loggedincustomer')).userEmailId),
        userAddress:this.state.userAddress ? this.state.userAddress : this.state.userAddress,
        userCity: this.state.userCity ? this.state.userCity :(JSON.parse(localStorage.getItem('loggedincustomer')).userCity),
        userPincode: this.state.userPincode ? this.state.userPincode :(JSON.parse(localStorage.getItem('loggedincustomer')).userPincode),
        userAdharCard:this.state.userAdharCard ? this.state.userAdharCard : (JSON.parse(localStorage.getItem('loggedincustomer')).userAdharCard),

      })
    };

    fetch('http://localhost:8080/user/userupdate/'+userId, requestOption)
    // fetch('http://localhost:8080/user/userinsert', requestOption)
      .then(res => {
        if (res.status === 200) {
          alert("updated successfully");

          window.location = "/CustomerHome";
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
          <button><a href="CustomerHome">BACK</a></button>
        </div>
        <h4 style={{ fontFamily: 'arial', fontSize: 36 }}><b>Welcome {JSON.parse(localStorage.getItem('loggedincustomer')).userName}</b></h4>
        <br />
        <div id="form" class="row" className="mb-3 pageheading" >

          <h2>UPDATE PERSONAL INFORMATION</h2>
        </div>


        <center>
          <Col md="9" lg="7" xl="6">


            <Form noValidate>


              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <InputGroup className="mb-2">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Name : </label>&nbsp; &nbsp;
                  <Input type="text" name="userName" placeholder={(JSON.parse(localStorage.getItem('loggedincustomer')).userName)} disabled={true} noValidate required />
                </InputGroup>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>User Name : </label>&nbsp; &nbsp;
                  <Input type="text" name="userUsername" placeholder={(JSON.parse(localStorage.getItem('loggedincustomer')).userUsername)} onChange={this.userUsername} noValidate />
                </InputGroup>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Password : </label>&nbsp; &nbsp;
                  <Input type="text" name="userPassword" placeholder={(JSON.parse(localStorage.getItem('loggedincustomer')).userPassword)} onChange={this.userPassword} noValidate />
                </InputGroup>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Gender : </label>&nbsp; &nbsp;
                  <Input type="text" name="userGender" placeholder={(JSON.parse(localStorage.getItem('loggedincustomer')).userGender)} disabled={true} noValidate required />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Family Members : </label> &nbsp; &nbsp;
                  <Input type="text" name="userFamilyMembers" placeholder={(JSON.parse(localStorage.getItem('loggedincustomer')).userFamilyMembers)} onChange={this.userFamilyMembers} noValidate />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Rooms : </label> &nbsp; &nbsp;
                  <Input type="text" name="userRooms" placeholder={(JSON.parse(localStorage.getItem('loggedincustomer')).userRooms)} onChange={this.userRooms} noValidate />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Mobile NO : </label> &nbsp; &nbsp;
                  <Input type="text" name="userMobileNo" placeholder={(JSON.parse(localStorage.getItem('loggedincustomer')).userMobileNo)} onChange={this.userMobileNo} noValidate />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Email ID : </label> &nbsp; &nbsp;
                  <Input type="text" name="userEmailId" placeholder={(JSON.parse(localStorage.getItem('loggedincustomer')).userEmailId)} onChange={this.userEmailId} noValidate />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Address : </label> &nbsp; &nbsp;
                  <Input type="text" name="userAddress" placeholder={(JSON.parse(localStorage.getItem('loggedincustomer')).userAddress)} onChange={this.userAddress} noValidate />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>City : </label> &nbsp; &nbsp;
                  <Input type="text" name="userCity" placeholder={(JSON.parse(localStorage.getItem('loggedincustomer')).userCity)} onChange={this.userCity} noValidate />
                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Pincode : </label> &nbsp; &nbsp;
                  <Input type="text" name="userPincode" placeholder={(JSON.parse(localStorage.getItem('loggedincustomer')).userPincode)} onChange={this.userPincode} noValidate />
                </InputGroup>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Adhar Card : </label>&nbsp; &nbsp;
                  <Input type="text" name="userAdharCard" placeholder={(JSON.parse(localStorage.getItem('loggedincustomer')).userAdharCard)} disabled={true} noValidate required />
                </InputGroup>
              </div>

              <Button onClick={(event) => { this.update(event) }} color="success" >UPDATE</Button>
            </Form>
          </Col>
        </center>
        <Routes>
          <Route path="/CustomerHome" element={<CustomerHome />} />
        </Routes>

      </div>
    );

  }

}

export default Profile;