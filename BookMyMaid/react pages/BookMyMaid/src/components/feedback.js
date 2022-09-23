import { data, event } from "jquery";
import React from "react";
import { Button, Col, Form, Input, InputGroup } from 'reactstrap';
import E from './Images/E.jpg';



class Feedback extends React.Component {

  
  constructor(props) {
    super(props);

    this.state = {
      user_id: '',
      maidRating: '',
      maidComments: '',
      custBook: {}
    }

    this.maidRating = this.maidRating.bind(this);
    this.maidComments = this.maidComments.bind(this);


  }

  maidRating = (event) => {

    this.setState({ maidRating: event.target.value })

  }

  maidComments = (event) => {

    this.setState({ maidComments: event.target.value })

  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;


    switch (name) {

      case 'maidComments':
        errors.comment =
          value.length === 200
            ? ''
            : 'Only 200 words allowed';
        break;

      default:
        break;
    }


    this.setState({ maidRating: event.target.value });
    this.setState({ maidComments: event.target.value });
    this.setState({ errors, [name]: value });
  }

  cancel = () => {
    window.location = "/CustomerHome";
  }

  submit = (event) => {
    event.preventDefault();
    const userId= (JSON.parse(localStorage.getItem('loggedincustomer')).userId);
    const maidId= (JSON.parse(localStorage.getItem('bookedmaid')).maidId)


    const requestOption =
    {
      method: 'post',

      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
      "body": JSON.stringify({
        comment: this.state.comment,
        custBook: {
          
          userId: (JSON.parse(localStorage.getItem('loggedincustomer')).userId),
          userName: (JSON.parse(localStorage.getItem('loggedincustomer'))?.userName),
          userUsername: (JSON.parse(localStorage.getItem('loggedincustomer')).userUsername),
          userGender: (JSON.parse(localStorage.getItem('loggedincustomer')).userGender),
          userPassword: (JSON.parse(localStorage.getItem('loggedincustomer')).userPasword),
          userFamilyMembers: (JSON.parse(localStorage.getItem('loggedincustomer')).userFamilyMembers),
          userRooms: this.state.userRooms,
          userMobileNo: (JSON.parse(localStorage.getItem('loggedincustomer')).userMobileNo),
          userEmailId: (JSON.parse(localStorage.getItem('loggedincustomer')).userEmailId),
          userAddress: this.state.userAddress,
          userCity: (JSON.parse(localStorage.getItem('loggedincustomer')).userCity),
          userPincode: (JSON.parse(localStorage.getItem('loggedincustomer')).userPincode),
          userAdharCard: (JSON.parse(localStorage.getItem('loggedincustomer')).userAdharCard),
        },
        maidRating: this.state.maidRating,
        maidComments:this.state.maidComments
      })

    };



    fetch('http://localhost:8080/MaidReview/maidreviewinsert/'+maidId+'/'+userId, requestOption)
      .then(res => {
        if (res.status == 200) {
          alert("Feedback Submitted Successfully !");
          window.location = "/CustomerHome";
        }
        else {
          alert("OOPS! Failed !");
        }
      })

  }



  render() {
    const { errors } = this.state;

    return (
      <div className="container-fluid" style={{ backgroundImage: `url(${E})`, height: '695px', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
        <h2 ><b>Welcome {JSON.parse(localStorage.getItem('loggedincustomer'))?.userName}</b></h2>

        <div style={{ display: this.state.flag ? 'none' : 'block' }} className="nav nav-tabs" >

          {<style>{'body{background-color:#DFDFDE}'}</style>}
          <div id="form" className="mb-3 pageheading" >
            <br />
            <h2>FEEDBACK</h2>
          </div>
          <center>
            <Col md="9" lg="7" xl="6">
              <Form onSubmit={this.submit} noValidate>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Rating :  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <InputGroup className="mb-3" onChange={(event) => { this.maidRating(event) }}>
                      <input type="radio" value="1" name="rate" />&nbsp; 1 &nbsp; &nbsp;
                      <input type="radio" value="2" name="rate" />&nbsp; 2 &nbsp; &nbsp;
                      <input type="radio" value="3" name="rate" />&nbsp; 3 &nbsp; &nbsp;
                      <input type="radio" value="4" name="rate" />&nbsp; 4 &nbsp; &nbsp;
                      <input type="radio" value="5" name="rate" />&nbsp; 5 <br /><br />

                    </InputGroup>
                  </label>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Comment : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <InputGroup className="mb-3" onChange={(event) => { this.maidComments(event) }}>
                      <textarea aria-multiline="true" rows="4" cols="50" placeholder="Write here..." name="maidComments" ></textarea>
                    </InputGroup>
                  </label>
                </div>
                <br />

                <Button onClick={this.submit} color="success" >SUBMIT</Button>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>CANCEL</button>
              </Form>
            </Col>
          </center>
        </div>
      </div>
    );
  }
}

export default Feedback;