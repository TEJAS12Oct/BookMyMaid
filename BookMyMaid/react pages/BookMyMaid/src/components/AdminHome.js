import React, { useState } from 'react'
import mystore from './store';
import { Table } from 'react-bootstrap';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './login';
import AdminMaid from './adminMaid';
import AdminCustomer from './adminCustomer';
import ViewFeedback from './viewfeedback';
import AddServices from './AddServices';
import E from './Images/E.jpg';

export default class AdminHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        }
    }

    componentDidMount = () => {

        fetch("http://localhost:8080/BookingInfo/getallbookings")
            .then(resp => resp.json())
            .then(data => {
                this.setState({ bookings: data }); console.log(this.state.bookings)

            })
    }

    logout = () => {

        mystore.dispatch({ type: 'LOGGEDOUT' });
        localStorage.removeItem("loggidincustomer");
        this.props.history.push("/login");
    }


    render() {
        return (
            <div style={{ backgroundImage: `url(${E})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <div style={{ display: this.state.flag ? 'none' : 'block', backgroundColor: 'white' }} className="nav nav-tabs" >
                    <h4 style={{ fontFamily: 'arial', fontSize: 36 }}><b>WELCOME ADMIN</b></h4><br />

                    <ul className="nav nav-tabs" >
                        <li className="nav-item"><Link className="nav-link" to="/adminMaid" >MAID LIST</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/adminCustomer" >CUSTOMER LIST</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/AddServices" > ADD SERVICES</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/viewfeedback" > VIEW FEEDBACK</Link></li>
                        <li className="nav-item" style={{ flex: 1 }} >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button>< a href="/AdminLogin" onClick={this.logout} style={{ right: 30 }}> LOGOUT </a> </button></li>

                    </ul>

                    <Routes>
                        <Route path="/adminMaid" element={<AdminMaid />} />
                        <Route path="/adminCustomer" element={<AdminCustomer />} />
                        <Route path="/AddServices" element={<AddServices />} />
                        <Route path="/viewfeedback" element={<ViewFeedback />} />
                        <Route path="/login" element={<Login />} />

                    </Routes>


                </div>
                <h5>List of Bookings</h5>
                <div className="maids"  >
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>User Name</th>
                                <th>Maid Name</th>
                                <th>Service Name</th>
                                <th>Month Charges</th>
                                <th>Booking Date</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Time Slots</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.bookings.map(
                                    bookings => {
                                        return (<tr>
                                            <td>{bookings.bookingInfoId}</td>
                                            <td>{bookings.userId.userName}</td>
                                            <td>{bookings.maidId.maidName}</td>
                                            <td>{bookings.services.servicesName}</td>
                                            <td>{bookings.monthCharges}</td>
                                            <td>{bookings.maidBookingDate}</td>
                                            <td>{bookings.startDate}</td>
                                            <td>{bookings.endDate}</td>
                                            <td>{bookings.maidTimeSlots}</td>

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
