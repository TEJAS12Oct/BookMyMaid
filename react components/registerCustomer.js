import { data } from "jquery";
import React from "react";
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row, FormGroup } from 'reactstrap';
import register from './Images/register.jpg';
import mystore from "./store";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


const validContactRegex = RegExp(
  / \+91-[\d]{10}$/
);
const ValidateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class RegisterCustomer extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userGender: '',
      userFamilyMembers: '',
      userAddress: '',
      userCity: '',
      userPincode: '',
      userRooms: '',
      userUsername: '',
      userEmailId: '',
      userAdharCard: '',
      userPassword: '',
      userMobileNo: '',


      errors: {
        userName: '',
        userEmailId: '',
        userPassword: '',
        userMobileNo: '',
        userAdharCard: ''
      }
    }
    this.userName = this.userName.bind(this);
    this.userGender = this.userGender.bind(this);
    this.userFamilyMembers = this.userFamilyMembers.bind(this);
    this.userAddress = this.userAddress.bind(this);
    this.userCity = this.userCity.bind(this);
    this.userPincode = this.userPincode.bind(this)
    this.userRooms = this.userRooms.bind(this);
    this.userUsername = this.userUsername.bind(this);
    this.userEmailId = this.userEmailId.bind(this);
    this.userAdharCard = this.userAdharCard.bind(this);
    this.userPassword = this.userPassword.bind(this);
    this.userMobileNo = this.userMobileNo.bind(this);



  }

  userName = (event) => {

    this.setState({ userName: event.target.value })

  }

  userGender = (event) => {

    this.setState({ userGender: event.target.value })

  }

  userFamilyMembers = (event) => {

    this.setState({ userFamilyMembers: event.target.value })

  }

  userAddress = (event) => {

    this.setState({ userAddress: event.target.value })

  }
  userCity = (event) => {
    this.setState({ userCity: event.target.value })
  }
  userPincode = (event) => {
    this.setState({ userPincode: event.target.value })
  }
  userRooms = (event) => {
    this.setState({ userRooms: event.target.value })
  }
  userUsername = (event) => {
    this.setState({ userUsername: event.target.value })
  }

  userEmailId = (event) => {

    this.setState({ userEmailId: event.target.value })

  }

  userAdharCard = (event) => {

    this.setState({ userAdharCard: event.target.value })

  }

  userPassword = (event) => {

    this.setState({ userPassword: event.target.value })

  }

  userMobileNo = (event) => {

    this.setState({ userMobileNo: event.target.value })

  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'userName':
        errors.userName =
          value.length < 2
            ? ' Name must be at least 2 characters long!'
            : '';
        break;

      case 'userEmailId':
        errors.userEmailId =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;

      case 'userPassword':
        errors.userPassword =
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;

      case 'userMobileNo':
        errors.userMobileNo =
          value.length === 10
            ? ''
            : 'Contact No must be 10 digits long!';
        break;

      case 'userAdharCard':
        errors.userAdharCard =
          value.length === 12
            ? ''
            : 'Aadhar Card No must be 12 digits long!';
        break;

      default:
        break;
    }


    this.setState({ errors, [name]: value });
  }




  cancel = () => { window.location = "/login"; }

  reset = () => { window.location = "/registerCustomer"; }



  register = (event) => {
    event.preventDefault();

    if (ValidateForm(this.state.errors)) {
      console.info('Valid Form')
    }
    else {
      console.error('Invalid Form')
      alert("Enter valid details")
    }

    const user =
    {
      method: 'post',

      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
      "body": JSON.stringify({

        userName: this.state.userName,
        userUsername: this.state.userUsername,
        userPassword: this.state.userPassword,
        userGender: this.state.userGender,
        userFamilyMembers: this.state.userFamilyMembers,
        userRooms: this.state.userRooms,
        userMobileNo: this.state.userMobileNo,
        userEmailId: this.state.userEmailId,
        userAddress: this.state.userAddress,
        userCity: this.state.userCity,
        userPincode: this.state.userPincode,
        userAdharCard: this.state.userAdharCard,


      })
    };

    if(ValidateForm(this.state.errors)){
      fetch('http://localhost:8080/user/userinsert', user)
        .then(res => {
          if (res.status == 200) {
            alert("Your Registration Successfull !");
            window.location = "/userlogin";
            mystore.dispatch({ type: 'LOGGEDIN' });
          }
          else {
            alert("OOPS! Registration Failed !");
            window.location = "#";
          }
        })
    }
     



  }




  render() {

    const { errors } = this.state;
    return (
      <div className="container-fluid" style={{ backgroundImage: `url(${register})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>

        {<style>{'body{background-color:#DFDFDE}'}</style>}
        <div id="form" class="row" className="mb-3 pageheading" >
          <hr />
          <h2>Register yourself</h2>
        </div>

        <center>
          <Col md="9" lg="7" xl="6">


            <Form onSubmit={this.register} noValidate>


              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <InputGroup className="mb-2">
                  <Input type="text" name="userName" placeholder="Full Name" onChange={this.handleChange}  ValidateForm />
                  {errors.userName.length > 0 && <span className='error'>{errors.userName}</span>}
                </InputGroup>
              </div>
              <br />
              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Gender : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.userGender(event) }}>
                    <input type="radio" value="Male" name="userGender" /> &nbsp;Male   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <input type="radio" value="Female" name="userGender" /> &nbsp;Female  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <input type="radio" value="Other" name="userGender" /> &nbsp;Other<br />
                  </InputGroup>
                </label>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Family Members : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.userFamilyMembers(event) }} >
                    <input type="number" name="userFamilyMembers" placeholder="Enter no." onChange={this.handleChange}noValidate required />

                  </InputGroup>
                </label>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Address : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.userAddress(event) }}>
                    <Input type="text" name="userAddress" placeholder="Enter address here" onChange={this.handleChange} noValidate required />
                  </InputGroup>
                </label>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>City : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.userCity(event) }}>
                    <Input type="text" name="userCity" placeholder="Enter city here" onChange={this.handleChange} noValidate required />
                  </InputGroup>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Pincode : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.userPincode(event) }}>
                    <Input type="number" name="userPincode" placeholder="Enter pincode here" onChange={this.handleChange} noValidate required />
                  </InputGroup>
                </label>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>No.Of Rooms: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.userRooms(event) }}>
                    <Input type="number" name="userRooms" placeholder="Enter no. of rooms here" onChange={this.handleChange} noValidate required />
                  </InputGroup>
                </label>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Username : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.userUsername(event) }}>
                    <Input type="text" name="userUsername" placeholder="Enter username here" onChange={this.handleChange} noValidate required />
                  </InputGroup>
                </label>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Email ID : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.userEmailId(event) }}>
                    <Input type="email" name="userEmailId" placeholder="Email" onChange={this.handleChange} ValidateForm required />
                    {errors.userEmailId.length > 0 && <span className='error'>{errors.userEmailId}</span>}
                  </InputGroup>
                </label>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>AdharCard No. : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.userAdharCard(event) }}>
                    <Input type="number" name="userAdharCard" placeholder="aadhar no" onChange={this.handleChange} ValidateForm required />
                    {errors.userAdharCard.length > 0 && <span className='error'>{errors.userAdharCard}</span>}
                  </InputGroup>
                </label>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Password : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.userPassword(event) }}>
                    <Input type="password" name="userPassword" placeholder="Password" onChange={this.handleChange} ValidateForm required/>
                    {errors.userPassword.length > 0 && <span className='error'>{errors.userPassword}</span>}
                  </InputGroup>
                </label>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Contact No. : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.userMobileNo(event) }}>
                    <Input type="number" name="userMobileNo" placeholder="Contact No" onChange={this.handleChange} ValidateForm required />
                    {errors.userMobileNo.length > 0 && <span className='error'>{errors.userMobileNo}</span>}
                  </InputGroup>
                </label>
              </div>

              <Button onClick={(event) => { this.register(event) }} color="success" >Register</Button>
              <Button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</Button>
              <Button className="btn btn-primary" onClick={this.reset.bind(this)} style={{ marginLeft: "10px" }}>Reset</Button>
            </Form>

          </Col>
        </center>
      </div>

    );

  }

}
export default RegisterCustomer;