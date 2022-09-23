import mystore from "./store";
import { data } from "jquery";
import React from "react";
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row, FormGroup } from 'reactstrap';
import register from './Images/register.jpg';
const serviceDropdown = require("./demo.json");

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
const current = new Date();
const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

class MaidRegistration extends React.Component {

  constructor(props) {
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    super(props);
    this.state = {
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
      services: [],
      serviceId: '',




      errors: {
        maidName: '',
        maidMobileNo: '',
        maidAdharCard: '',
      }
    }
    this.maidName = this.maidName.bind(this);
    this.maidUsername = this.maidUsername.bind(this);
    this.maidPassword = this.maidPassword.bind(this);
    this.maidAge = this.maidAge.bind(this);
    this.maidMobileNo = this.maidMobileNo.bind(this);
    this.maidEmailId = this.maidEmailId.bind(this);
    this.maidAddress = this.maidAddress.bind(this);
    this.maidCity = this.maidCity.bind(this);
    this.maidPincode = this.maidPincode.bind(this);
    this.maidAdharCard = this.maidAdharCard.bind(this);
    this.maidPoliceVerificationCertificate = this.maidPoliceVerificationCertificate.bind(this);
    this.monthCharges = this.monthCharges.bind(this);
    this.maidExperience = this.maidExperience.bind(this);
    //this.services = this.services.bind(this);


  }
  componentDidMount = () => {
    fetch('http://localhost:8080/services/serviceslist')
      .then(resp => resp.json())
      .then(data => {
        this.state.services = data;
        console.log(this.state.services)
      })
  }

  maidName = (event) => { this.setState({ maidName: event.target.value }) }
  maidUsername = (event) => { this.setState({ maidUsername: event.target.value }) }
  maidPassword = (event) => { this.setState({ maidPassword: event.target.value }) }
  maidAge = (event) => { this.setState({ maidAge: event.target.value }) }
  maidMobileNo = (event) => { this.setState({ maidMobileNo: event.target.value }) }
  maidEmailId = (event) => { this.setState({ maidEmailId: event.target.value }) }
  maidAddress = (event) => { this.setState({ maidAddress: event.target.value }) }
  maidCity = (event) => { this.setState({ maidCity: event.target.value }) }
  maidPincode = (event) => { this.setState({ maidPincode: event.target.value }) }
  maidAdharCard = (event) => { this.setState({ maidAdharCard: event.target.value }) }
  maidPoliceVerificationCertificate = (event) => { this.setState({ maidPoliceVerificationCertificate: event.target.value }) }
  monthCharges = (event) => { this.setState({ monthCharges: event.target.value }) }
  maidExperience = (event) => { this.setState({ maidExperience: event.target.value }) }
  services = (event) => { this.setState({ services: event.target.value }) }




  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;


    let errors = this.state.errors;

    switch (name) {
      case 'maidName':
        errors.maidName =
          value.length < 2
            ? ' Name must be at least 2 characters long!'
            : '';
        break;

      case 'maidMobileNo':
        errors.maidMobileNo =
          value.length === 10
            ? ''
            : 'Contact No must be 10 digits long!';
        break;

      case 'maidAdharCard':
        errors.maidAdharCard =
          value.length === 12
            ? ''
            : 'Aadhar Card No must be 12 digits long!';
        break;

      default:
        break;
    }
  }

  cancel = () => { window.location = "/login"; }

  reset = () => { window.location = "/registermaid"; }

  getServiceId = (event) => {
    event.preventDefault()
    let index = this.state.services.findIndex(obj => obj.servicesName == event.target.value);
    if (index != -1) {
      this.state.serviceId = this.state.services[index].servicesId;
    }
    // this.state.servicesId=event.target.value
    console.log(this.state.serviceId)
  }
  register = (event) => {
    event.preventDefault();

    if (ValidateForm(this.state.errors)) {
      console.info('Valid Form')
    }
    else {
      console.error('Invalid Form')
    }

    console.log(this.state.category);

    const requestOption = {
      method: 'post',

      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
      "body": JSON.stringify({
        maidName: this.state.maidName,
        maidUsername: this.state.maidUsername,
        maidPassword: this.state.maidPassword,
        maidAge: this.state.maidAge,
        maidMobileNo: this.state.maidMobileNo,
        maidEmailId: this.state.maidEmailId,
        maidAddress: this.state.maidAddress,
        maidCity: this.state.maidCity,
        maidPincode: this.state.maidPincode,
        maidAdharCard: this.state.maidAdharCard,
        maidPoliceVerificationCertificate: this.state.maidPoliceVerificationCertificate,
        monthCharges: this.state.monthCharges,
        maidExperience: this.state.maidExperience,

      })
    };


    fetch('http://localhost:8080/maid/maidinsert/' + this.state.serviceId, requestOption)
      .then(res => {
        if (res.status == 200) {
          alert("Your Registration Successful !");
          alert("Name : " + this.state.maidName);
          mystore.dispatch({ type: 'LOGGEDIN' });
          window.location = "/maidlogin";
          this.props.history.push("/maidlogin");
        }
      })
  }






  render() {
    const { errors } = this.state;
    console.log(this.state.services.map(ser => ser.servicesId))
    return (
      <div className="container-fluid" style={{ backgroundImage: `url(${register})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
        {<style>{'body{background-color:#DFDFDE}'}</style>}
        <div id="form" class="row" className="mb-3 pageheading" >
          <h2>Register As Maid</h2>
        </div>

        <center>
          <Col md="9" lg="7" xl="6">


            <Form onSubmit={this.register} noValidate>
              <div>
                <label style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Your Name: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-2" onChange={(event) => { this.maidName(event) }}>
                    <Input type="text" name="maidName" placeholder="Full Name" onChange={this.handleChange} required={true} />
                    {errors.maidName.length > 0 && <span className='error'>{errors.maidName}</span>}
                  </InputGroup>
                </label>
              </div>


              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Username : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.maidUsername(event) }}>
                    <Input type="text" name="maidUsername" placeholder="Enter username here" onChange={this.handleChange} noValidate />
                  </InputGroup>
                </label>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Password : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.maidPassword(event) }}>
                    <Input type="text" name="maidPassword" placeholder="Enter password here" onChange={this.handleChange} noValidate />
                  </InputGroup>
                </label>
              </div>


              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Age : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.maidAge(event) }}>
                    <Input type="number" name="maidAge" placeholder="Enter Age here" onChange={this.handleChange} noValidate />
                  </InputGroup>
                </label>
              </div>

              <div>

                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>MobileNo. : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" onChange={(event) => { this.maidMobileNo(event) }}>
                    <Input type="text" name="maidMobileNo" placeholder="Contact No" onChange={this.handleChange} noValidate />
                    {errors.maidMobileNo.length > 0 && <span className='error'>{errors.maidMobileNo}</span>}
                  </InputGroup>
                </label>

              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>E-mail: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.maidEmailId(event) }}>
                    <Input type="text" name="maidEmailId" placeholder="Enter mail Id here" onChange={this.handleChange} noValidate />
                  </InputGroup>
                </label>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Address : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.maidAddress(event) }}>
                    <Input type="text" name="maidAddress" placeholder="Enter address here" onChange={this.handleChange} noValidate />
                  </InputGroup>
                </label>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>City: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.maidCity(event) }}>
                    <Input type="text" name="maidCity" placeholder="Enter city here" onChange={this.handleChange} noValidate />
                  </InputGroup>
                </label>
              </div>


              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Pincode: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.maidPincode(event) }}>
                    <Input type="text" name="maidPincode" placeholder="Enter pincode here" onChange={this.handleChange} noValidate />
                  </InputGroup>
                </label>
              </div>


              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Adhar Card : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.maidAdharCard(event) }}>
                    <Input type="text" name="maidAdharCard" placeholder="aadhar no" onChange={this.handleChange} noValidate />
                    {errors.maidAdharCard.length > 0 && <span className='error'>{errors.maidAdharCard}</span>}
                  </InputGroup>
                </label>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>PoliceVerification certificate: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.maidPoliceVerificationCertificate(event) }}>
                    <Input type="text" name="maidPoliceVerificationCertificate" placeholder="YES OR NO" onChange={this.handleChange} noValidate />
                  </InputGroup>
                </label>
              </div>

              <div>
                Select Services:
                <select onChange={this.getServiceId}>

                  {
                    serviceDropdown.cat.map(Services => {
                      return (<option key={Services.servicesName} defaultvalue={Services.servicesName} >{Services.servicesName}</option>)


                    })

                  }

                </select>
              </div>
              <br />
              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Month Charge: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.monthCharges(event) }}>
                    <Input type="number" name="monthCharges" placeholder="Per Month" onChange={this.handleChange} noValidate />
                  </InputGroup>
                </label>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Experience: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <InputGroup className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} onChange={(event) => { this.maidExperience(event) }}>
                    <Input type="number" name="maidExperience" placeholder="Add in years" onChange={this.handleChange} noValidate />
                  </InputGroup>
                </label>
              </div>

              <div>

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

export default MaidRegistration;