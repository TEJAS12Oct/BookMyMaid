import React from "react";
import { Table } from 'react-bootstrap';
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

class AdminMaid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      maidName: '',
      maidAge: '',
      maidAddress: '',
      maidEmailId: '',
      maidMobileNo: '',
      maidUsername: '',
      maidPassword: '',
      maidAdharCard: '',
      maidCity: '',
      maidPincode: '',
      maidPoliceVerificationCertificate: '',
      monthCharges: '',
      maidExperience: '',
      maidImages: '',
      category: [],
      maids: [],


      errors: {
        maidMobileNo: '',
        maidAdharCard: '',
      }
    }
    this.maidName = this.maidName.bind(this);
    this.maidAge = this.maidAge.bind(this);
    this.maidAddress = this.maidAddress.bind(this);
    this.maidEmailId = this.maidEmailId.bind(this);
    this.maidMobileNo = this.maidMobileNo.bind(this);
    this.maidUsername = this.maidUsername.bind(this);
    this.maidPassword = this.maidPassword.bind(this);
    this.maidAdharCard = this.maidAdharCard?.bind(this);
    this.maidCity = this.maidCity.bind(this);
    this.maidPincode = this.maidPincode.bind(this);
    this.maidPoliceVerificationCertificate = this.maidPoliceVerificationCertificate.bind(this);
    this.monthCharges = this.monthCharges.bind(this);
    this.maidExperience = this.maidExperience.bind(this);
    this.maidImages = this.maidImages.bind(this);

  }

  maidName = (event) => {

    this.setState({ maidName: event.target.value })

  }

  maidAge = (event) => {

    this.setState({ maidAge: event.target.value })

  }
  maidAddress = (event) => {

    this.setState({ maidAddress: event.target.value })

  }
  maidEmailId = (event) => {

    this.setState({ maidEmailId: event.target.value })

  }

  maidMobileNo = (event) => {

    this.setState({ maidMobileNo: event.target.value })

  }

  maidUsername = (event) => {

    this.setState({ maidUsername: event.target.value })

  }

  maidPassword = (event) => {

    this.setState({ maidPassword: event.target.value })

  }

  aadhar_card = (event) => {

    this.setState({ aadhar_card: event.target.value })

  }
  maidCity = (event) => {

    this.setState({ maidCity: event.target.value })

  }

  maidPincode = (event) => {

    this.setState({ maidPincode: event.target.value })

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
  maidImages = (event) => {

    this.setState({ maidImages: event.target.value })

  }

  category = (event) => {

    this.setState({ category: event.target.value })

  }


  componentDidMount = () => {
    fetch('http://localhost:8080/maid/maidlist')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ maids: data }); console.log(this.state.maids)
      })
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
  }

  fetchmaids = (maids) => (e) => {
    console.log('We need to get the details for ', maids);

  }


  update = (maids) => (ev) => {
    console.log('We need to get the details for ', maids);
    localStorage.setItem("updatemaid", JSON.stringify(maids));


    window.location = "/updatemaid?maidinfo=" + maids;

  }

  delete = (maids) => (event) => {
    console.log('We need to get the details for ', maids);

    event.preventDefault();
    const requestOption = {
      method: 'delete',

      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
      "body": JSON.stringify({
        maidId: (JSON.parse(localStorage.getItem('deletemaid')).maidId),
      })
    };


    fetch('http://localhost:8080/maid/maiddelete/' + maids.maidId, requestOption)
      .then(res => {
        if (res.status === 200) {
          alert("deleted successfully");
          window.location = "/AdminHome";
        }
        else {
          alert("OOPS! Failed !");
        }
      })
  }



  render() {


    const { errors } = this.state;



    return (

      <div className="Container-fluid" style={{ backgroundImage: `url(${E})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
        <div class="nav">&nbsp;&nbsp;
          <button><a href="AdminHome">BACK</a></button>
        </div>
        <h4 style={{ fontFamily: 'arial', fontSize: 36 }}><b>MAID LIST</b></h4>
        <div className="maids"  >
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>EmailId</th>
                <th>Mobile No</th>
                <th>Username</th>
                <th>Password</th>
                <th>AdharCard</th>
                <th>City</th>
                <th>Pincode</th>
                <th>PoliceVerificationCertificate</th>
                <th>Month Charges</th>
                <th>Experience</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.maids.map(
                  maids => {
                    return (<tr data-item={maids} onClick={this.fetchmaids(maids)}>
                      <td>{maids.maidId}</td>
                      <td>{maids.maidName}</td>
                      <td>{maids.maidAge}</td>
                      <td>{maids.maidAddress}</td>
                      <td>{maids.maidEmailId}</td>
                      <td>{maids.maidMobileNo}</td>
                      <td>{maids.maidUsername}</td>
                      <td>{maids.maidPassword}</td>
                      <td>{maids.maidAdharCard}</td>
                      <td>{maids.maidCity}</td>
                      <td>{maids.maidPincode}</td>
                      <td>{maids.maidPoliceVerificationCertificate}</td>
                      <td>{maids.monthCharges}</td>
                      <td>{maids.maidExperience}</td>
                      {/* <td><button onClick={this.update(maids)}>UPDATE</button></td> */}
                      {/*<td><a href="/updatemaid">Update</a></td>*/}
                      <td><button onClick={this.delete(maids)} >DELETE</button></td>

                    </tr>)
                  })
              }
            </tbody>
          </Table>

        </div>
      </div>


    );
  }

}

export default AdminMaid;