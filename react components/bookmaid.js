import React from 'react';
import { Button, Col, Form, Input, InputGroup } from 'reactstrap';
import E from './Images/E.jpg';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class Bookmaid extends React.Component {
  constructor(props) {

    var today = new Date(),

      date = today.getFullYear() + '-' + (today.getMonth()) + '-' + (today.getDate() + 1);
    super(props);
    this.state = {
      maidBookingDate: date,
      startDate: '',
      endDate: '',
      monthCharges: '',
      maidTimeSlots: '',
      userId: '',
      maidId: '',
      servicesId: ''
    }

    this.monthCharges = this.monthCharges.bind(this);
    this.maidTimeSlots = this.maidTimeSlots.bind(this);

  }
  changeStatus = () => {
    this.setState({ status: 'N' });
    console.log(this.state.status);
  }

  setStartDate = (startDate) => {
    this.setState({ startDate });
    this.changeStatus();
  }

  setEndDate = (endDate) => {
    this.setState({ endDate });
    this.changeStatus();
  }

  monthCharges = (event) => {
    this.setState({ monthCharges: event.target.value })

  }

  maidTimeSlots = (event) => {

    this.setState({ maidTimeSlots: event.target.value })

  }









  book = (event) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    this.setState({ maidBookingDate: date });
    event.preventDefault();
    const userId = (JSON.parse(localStorage.getItem('loggedincustomer')).userId);
    const maidId = (JSON.parse(localStorage.getItem('bookedmaid')).maidId);
    const monthCharges = (JSON.parse(localStorage.getItem('bookedmaid')).monthCharges);
    const servicesId = (JSON.parse(localStorage.getItem('bookedmaid')).servicesId["servicesId"]);
    console.log("PK", monthCharges)
    const requestOption =
    {
      method: 'post',

      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
      "body": JSON.stringify({
        // userId: (JSON.parse(localStorage.getItem('loggedincustomer')).userId),
        // maidId: (JSON.parse(localStorage.getItem('bookedmaid')).maidId),
        // servicesId: (JSON.parse(localStorage.getItem('bookedmaid')).servicesId),
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        maidBookingDate: new Date(this.state.maidBookingDate),
        monthCharges: this.state.monthCharges,
        maidTimeSlots: this.state.maidTimeSlots,
      })

    };

    fetch('http://localhost:8080/BookingInfo/insertbooking/' + maidId + '/' + userId + '/' + servicesId, requestOption)
      .then(res => {
        if (res.status == 200) {
          if (this.state.startDate !== '' && this.state.endDate !== '') {
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
        <h4 style={{ fontFamily: 'arial', fontSize: 36 }}><b><i>Welcome {JSON.parse(localStorage.getItem('loggedincustomer')).userName}</i></b></h4>

        <div id="form" class="row" className="mb-3 pageheading" >
          <br />
          <h2>BOOKING FORM</h2>
        </div>

        <center>
          <Col md="9" lg="7" xl="6">


            <Form noValidate>


              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <InputGroup className="mb-2">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Maid Name : </label>&nbsp; &nbsp;
                  <Input type="text" name="maidName" value={(JSON.parse(localStorage.getItem('bookedmaid')).maidName)} disabled={true} />

                </InputGroup>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Contact No. : &nbsp; &nbsp;
                  <Input type="number" className="mb-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }} value={(JSON.parse(localStorage.getItem('bookedmaid')).maidMobileNo)} disabled={true} />
                </label>
              </div>
              <div>
                <InputGroup className="mb-3">
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}></label>Month Charges: &nbsp; &nbsp;
                  <Input type="number" name="monthCharges" value={(JSON.parse(localStorage.getItem('bookedmaid')).monthCharges)} disabled={true} noValidate />

                </InputGroup>
              </div>

              <div>
                <InputGroup className="mb-3" onChange={(event) => { this.maidTimeSlots(event) }}>
                  <label>Time Slot:&nbsp; &nbsp;</label>
                  <select>
                    <option value="8 am to 10 am">8 am to 10 am </option>
                    <option value="10 am to 12 pm">10 am to 12 pm </option>
                    <option value="12 pm to 2 pm">12 pm to 2 pm </option>
                    <option value="2 pm to 4 pm">2 pm to 4 pm </option>
                  </select>
                </InputGroup>
              </div>
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
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>End Date : &nbsp; &nbsp; &nbsp; &nbsp;
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