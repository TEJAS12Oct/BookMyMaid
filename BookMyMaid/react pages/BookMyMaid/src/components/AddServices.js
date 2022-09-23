import React from "react";
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Button, Col, Form, Input, InputGroup } from 'reactstrap';
import axios from "axios";
import AS from './Images/AS.jpg';
class AddServices extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      servicesId: '',
      baseCharges: '',
      servicesName: '',
    }
  }
  Handler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  submitdata = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:8080/services/servicesinsert', this.state)

      .then(response => {
        alert("Service Added successfully........!");
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {

    const { servicesId, baseCharges, servicesName, } = this.state;
    return (
      <form onSubmit={this.submitdata}>
        <div className="Container-fluid" style={{ backgroundImage: `url(${AS})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
          <div class="nav">&nbsp;&nbsp;
            <button><a href="AdminHome">BACK</a></button>
          </div>
          <h1>ADD SERVICE</h1>

          <br />

          <br />
          <label>Service Id:</label>
          <input type="text" name="servicesId" value={servicesId} onChange={this.Handler} />   <br />
          <br />
          <label>Base Charges:</label>
          <input type="number" name="baseCharges" value={baseCharges} onChange={this.Handler} /><br />
          <br />
          <label>Service Name:</label>
          <input type="text" name="servicesName" value={servicesName} onChange={this.Handler} />   <br />
          <br />
          <Button onClick={this.submitdata} color="success" >SUBMIT</Button>
        </div>
      </form>

    );
  }
}
export default AddServices;


