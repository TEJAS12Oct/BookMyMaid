import React from 'react'
import mystore from './store';
import { Table } from 'react-bootstrap';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import E from './Images/E.jpg';

export default class BookingInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        }
    }

    componentDidMount = () => {

        fetch("http://localhost:8080/BookingInfo/bookinginfobyid/" + JSON.parse(localStorage.getItem('loggedincustomer')).userId)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ bookings: data }); console.log(this.state.bookings)

            })
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundImage: `url(${E})`, height: '1000px', backgroundPosition:"center", backgroundRepeat: "no-repeat", backgroundSize: 'cover', color: 'white' }}>
            <div class="nav">&nbsp;&nbsp;
            <button><a href="CustomerHome">BACK</a></button>
          </div>
            <h4 style={{ fontFamily: 'arial', fontSize: 36, color: 'black' }}><b><i>WELCOME {JSON.parse(localStorage.getItem('loggedincustomer')).c_name}</i></b></h4>
                
                <h5 style={{ color: 'black' }}>LIST OF BOOKING</h5>
                <div className="maids"  >
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Maid ID</th>
                                {/* <th>User ID</th> */}
                                <th>Service ID</th>
                                <th>Booking Date</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Time Slots</th>
                                <th>Month Charges</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.bookings.map(
                                    bookings => {
                                        return (<tr>
                                            <td>{bookings.bookingInfoId}</td>
                                            <td>{bookings.maidId.maidName}</td>
                                            {/* <td>{bookings.userId.userName}</td> */}
                                            <td>{bookings.services.servicesName}</td>
                                            <td>{bookings.maidBookingDate}</td>
                                            <td>{bookings.startDate}</td>
                                            <td>{bookings.endDate}</td>
                                            <td>{bookings.maidTimeSlots}</td>
                                            <td>{bookings.monthCharges}</td>

                                        </tr>)
                                    })
                            }
                        </tbody>
                    </Table>

                </div>
            </div>
        )
    }
}
