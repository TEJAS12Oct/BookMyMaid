import { data } from "jquery";
import React from "react";
import { Table } from 'react-bootstrap';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row, FormGroup } from 'reactstrap';
import E from './Images/E.jpg';

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

class AdminCustomer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userGender: '',
      userFamilyMembers: '',
      userAddress: '',
      userEmailId: '',
      userMobileNo: '',
      userUsername: '',
      userPassword: '',
      userRooms: '',
      userCity: '',
      userPincode: '',
      userAdharCard: '',
      userImages: '',
      customer: [],


      errors: {
        userName: '',
        userEmailId: '',
        userMobileNo: '',
      }
    }
    this.userName = this.userName.bind(this);
    this.userGender = this.userGender.bind(this);
    this.userFamilyMembers = this.userFamilyMembers.bind(this);
    this.userAddress = this.userAddress.bind(this);
    this.userEmailId = this.userEmailId.bind(this);
    this.userMobileNo = this.userMobileNo.bind(this);
    this.userUsername = this.userUsername.bind(this);
    this.userPassword = this.userPassword.bind(this);
    this.userRooms = this.userRooms.bind(this);
    this.userCity = this.userCity.bind(this);
    this.userPincode = this.userPincode.bind(this);
    this.userAdharCard = this.userAdharCard.bind(this);
    this.userImages = this.userImages.bind(this);
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

  userEmailId = (event) => {

    this.setState({ userEmailId: event.target.value })

  }
  userMobileNo = (event) => {

    this.setState({ userMobileNo: event.target.value })

  }
  userUsername = (event) => {

    this.setState({ userUsername: event.target.value })

  }

  userPassword = (event) => {

    this.setState({ userPassword: event.target.value })

  }

  userRooms = (event) => {

    this.setState({ userRooms: event.target.value })

  }

  userCity = (event) => {

    this.setState({ userCity: event.target.value })

  }

  userPincode = (event) => {

    this.setState({ userPincode: event.target.value })

  }
  userAdharCard = (event) => {

    this.setState({ userAdharCard: event.target.value })

  }
  userImages = (event) => {

    this.setState({ userImages: event.target.value })

  }


  componentDidMount = () => {
    fetch('http://localhost:8080/user/userlist')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ customer: data }); console.log(this.state.customer)
      })
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
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
  }


  render() {
    const { errors } = this.state;
    return (
      <div className="Container-fluid" style={{ backgroundImage: `url(${E})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
        <div class="nav">&nbsp;&nbsp;
          <button><a href="AdminHome">BACK</a></button>
        </div>
        <h4 style={{ fontFamily: 'arial', fontSize: 36 }}><b>CUSTOMER LIST</b></h4>
        <div style={{ display: this.state.flag ? 'none' : 'block', backgroundColor: 'white' }}>

          <h5>Customer List</h5>
          <div className="maids"  >
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Family Members</th>
                  <th>Address</th>
                  <th>Email Id</th>
                  <th>Mobile No</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Rooms</th>
                  <th>City</th>
                  <th>Pincode</th>
                  <th>AdharCard No</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.customer.map(
                    customer => {
                      return (<tr>
                        <td>{customer.userId}</td>
                        <td>{customer.userName}</td>
                        <td>{customer.userGender}</td>
                        <td>{customer.userFamilyMembers}</td>
                        <td>{customer.userAddress}</td>
                        <td>{customer.userEmailId}</td>
                        <td>{customer.userMobileNo}</td>
                        <td>{customer.userUsername}</td>
                        <td>{customer.userPassword}</td>
                        <td>{customer.userRooms}</td>
                        <td>{customer.userCity}</td>
                        <td>{customer.userPincode}</td>
                        <td>{customer.userAdharCard}</td>
                      </tr>)
                    })
                }
              </tbody>
            </Table>

          </div>

        </div>
      </div>
    );
  }

}


export default AdminCustomer;