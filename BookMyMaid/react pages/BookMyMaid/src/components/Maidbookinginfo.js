import React from 'react';
import { Button, Col, Form, Input, InputGroup } from 'reactstrap';
import E from './Images/E.jpg';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class Maidbookinginfo extends React.Component {
  constructor(props) {
    var today = new Date(),

      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    super(props);
    this.state = {
      bookingInfoId: '',
      userId: '',
      maidBookingDate: '',
      startDate: '',
      endDate: '',
      monthCharges: '',
      maidTimeSlots: '',


      category: {},

      maids: []

    }
  }

  setStartDate = (startDate) => {
    this.setState({ startDate });
    this.changeStatus();
  }

  setEndDate = (endDate) => {
    this.setState({ endDate });
    this.changeStatus();
  }


  componentDidMount = (maidId, categoryname) => {
    maidId = (JSON.parse(localStorage.getItem('bookedmaid'))?.maid_id);
    categoryname = ((localStorage.getItem('selectedcategory')));

    fetch("http://localhost:8080/categoryId?maidId=" + maidId + "&categoryname=" + categoryname)
      .then(resp => resp.json())//.then(data => alert(JSON.stringify(data)))
      .then(data => { this.setState({ category: data }); console.log(this.state.category) });

  }
  getMaids = (maidId) => {
    fetch("http://localhost:8080/getmaids?maid_id=" + maidId)
      .then(resp => resp.json())//.then(data => alert(JSON.stringify(data)))
      .then(data => { this.setState({ maids: data }); console.log(this.state.maids) })
  }

  changeStatus = () => {
    this.setState({ status: 'N' });
    console.log(this.state.status);

    const requestOption =
    {
      method: 'post',

      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
      "body": JSON.stringify({
        adharCard: (JSON.parse(localStorage.getItem('bookedmaid')).adharCard),
        userAddress: (JSON.parse(localStorage.getItem('bookedmaid')).userAddress),
        userMobileNo: (JSON.parse(localStorage.getItem('bookedmaid')).userMobileNo),
        created_date: (JSON.parse(localStorage.getItem('bookedmaid')).created_date),
        userGender: (JSON.parse(localStorage.getItem('bookedmaid')).userGender),
        is_active: 'N',
        maidName: (JSON.parse(localStorage.getItem('bookedmaid')).maidName),
        maidId: (JSON.parse(localStorage.getItem('bookedmaid')).maidId),


      })
    }
    fetch("http://localhost:8080/updatemaid", requestOption)
      .then(res => {
        if (res.status == 200) { }
      })
  }

  book = (event) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    this.setState({ booking_date: date });
    event.preventDefault();

    const requestOption =
    {
      method: 'post',

      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
      "body": JSON.stringify({

        customerbooking: {
          userId: (JSON.parse(localStorage.getItem('loggedincustomer')).userId),
          userName: (JSON.parse(localStorage.getItem('loggedincustomer')).userName),
          userPassword: (JSON.parse(localStorage.getItem('loggedincustomer')).userPassword),
          userGender: (JSON.parse(localStorage.getItem('loggedincustomer')).userGender),
          userFamilyMembers: (JSON.parse(localStorage.getItem('loggedincustomer')).userFamilyMembers),
          userRooms: (JSON.parse(localStorage.getItem('loggedincustomer')).userRooms),
          userMobileNo: (JSON.parse(localStorage.getItem('loggedincustomer')).userMobileNo),
          userAddress: (JSON.parse(localStorage.getItem('loggedincustomer')).userAddress),
          userEmailId: (JSON.parse(localStorage.getItem('loggedincustomer')).userEmailId),
          userAdharCard: (JSON.parse(localStorage.getItem('loggedincustomer')).userAdharCard),


        },
        bookedmaid: {
          maidId: (JSON.parse(localStorage.getItem('bookedmaid')).maidId),
          maidName: (JSON.parse(localStorage.getItem('bookedmaid')).maidName),
          maidUsername: (JSON.parse(localStorage.getItem('loggedincustomer')).maidUsername),
          maidPassword: (JSON.parse(localStorage.getItem('loggedincustomer')).maidPassword),
          maidAge: (JSON.parse(localStorage.getItem('loggedincustomer')).maidAge),
          maidMobileNo: (JSON.parse(localStorage.getItem('bookedmaid')).maidMobileNo),
          maidEmailId: (JSON.parse(localStorage.getItem('bookedmaid')).maidEmailId),
          maidAddress: (JSON.parse(localStorage.getItem('bookedmaid')).maidAddress),
          maidCity: (JSON.parse(localStorage.getItem('bookedmaid')).maidCity),
          maidPincode: (JSON.parse(localStorage.getItem('bookedmaid')).maidPincode),
          maidAdharCard: (JSON.parse(localStorage.getItem('loggedincustomer')).maidAdharCard),
          maidPoliceVerificationCertificate: (JSON.parse(localStorage.getItem('loggedincustomer')).maidPoliceVerificationCertificate),
          maidExtraChargePerRoom: (JSON.parse(localStorage.getItem('loggedincustomer')).maidExtraChargePerRoom),
          maidExtraChargePerMember: (JSON.parse(localStorage.getItem('loggedincustomer')).maidExtraChargePerMember),
          maidExperience: (JSON.parse(localStorage.getItem('bookedmaid')).maidExperience),
          maidImages: (JSON.parse(localStorage.getItem('bookedmaid')).maidImages),

        },
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        bookingDate: this.state.bookingDate,
        payment: 4000,
        category: this.state.category
      })

    };

    fetch('http://localhost:8080/savebooking', requestOption)
      .then(res => {
        if (res.status == 200) {
          if (this.state.startDate !== '' && this.state.enDate !== '') {
            alert("booking confirmed");
            window.location = "/CustomerHome";
          }

          else {
            alert("failed");
            window.location = "/CustomerHome";
          }
        }
      })

  }

  cancel = () => {
    window.location = "/CustomerHome";
  }


  render() {

    const { startDate } = this.state;
    const { endDate } = this.state;

    return (

      <div className="container-fluid" style={{ backgroundImage: `url(${E})`, height: '895px', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>

        {<style>{'body{background-color:#DFDFDE}'}</style>}

        <h4 style={{ fontFamily: 'arial', fontSize: 36 }}><b><i>Welcome {JSON.parse(localStorage.getItem('loggedincustomer'))?.userId}</i></b></h4>

        <div id="form" class="row" className="mb-3 pageheading" >
          <hr />
          <h2>Booking form</h2>
        </div>
        <hr />
        <center>
          <Col md="9" lg="7" xl="6">


            <Form noValidate>



              <div className='d-flex justify-content-center align-items-center'>
                <InputGroup className="mb-2">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Name : </label>&nbsp; &nbsp;
                  <Input type="text" name="m_name" value={(JSON.parse(localStorage.getItem('bookedmaid'))?.maidName)} disabled={true} />

                </InputGroup>
              </div>
              <br />
              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Gender : &nbsp; &nbsp;
                  <Input type="text" className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} value={(JSON.parse(localStorage.getItem('bookedmaid'))?.gender)} disabled={true}>

                  </Input>
                </label>
              </div>

              <br />
              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Address : </label> &nbsp; &nbsp;
                  <Input type="text" name="address" value={(JSON.parse(localStorage.getItem('bookedmaid'))?.address)} disabled={true} noValidate />
                </InputGroup>
              </div>
              <br />


              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Contact No: </label> &nbsp; &nbsp;
                  <Input type="number" name="contact_no" value={(JSON.parse(localStorage.getItem('bookedmaid')).maidMobileNo)} disabled={true} noValidate />

                </InputGroup>
              </div>
              <br />
              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Start Date : &nbsp; &nbsp; &nbsp; &nbsp;
                    <DatePicker
                      className="custom-select"
                      dateFormat="dd/MM/yyyy"
                      selected={startDate}
                      minDate={new Date(new Date().setDate(17))}
                      onChange={this.setStartDate}
                    />
                  </label>

                </InputGroup>
              </div>

              <div>

                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Start Date : &nbsp; &nbsp; &nbsp; &nbsp;
                    <DatePicker
                      className="custom-select"
                      dateFormat="dd/MM/yyyy"
                      selected={endDate}
                      minDate={startDate}
                      onChange={this.setEndDate}
                    />
                  </label>
                </InputGroup>
              </div>

              <div>



                <Button color="success" onClick={this.book}>BOOK</Button>&nbsp; &nbsp;&nbsp;&nbsp;
                <Button onClick={this.cancel}>CANCEL</Button>
              </div>
            </Form>
            <br /><br /><br /><br /><br /><br /><br /><br />
          </Col>
        </center>
      </div>
    );
  }
} 
