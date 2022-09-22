import React from 'react';
import { Table } from 'react-bootstrap';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import mystore from './store';
import Profile from './profile';
import Login from './login';
import BookingInfo from './bookinginfo';
import E from './Images/E.jpg';

export default class MaidHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            maids: [],
            booking: [],

            userName: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    logout = () => {

        mystore.dispatch({ type: 'LOGGEDOUT' });
        localStorage.removeItem("loggedinmaid");
        this.props.history.push("/login");
    }



    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log("selected :" + value);
        this.setState({ c_name: value })
        this.getAllMaids(value);
    }


    componentDidMount = () => {
        const maidId = (JSON.parse(localStorage.getItem('loggedinmaid')).maidId);
        console.log(maidId);
        fetch('http://localhost:8080/BookingInfo/bookinginfoformaid/' + maidId)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ booking: data }); console.log(this.state.category)

            });
    }



    getAllMaids = (c) => {
        console.log(c);

        fetch("http://localhost:8080/getAllMaidsByCategory/" + (c))
            .then(resp => resp.json())//.then(data => alert(JSON.stringify(data)))
            .then(data => { this.setState({ maids: data }); console.log(this.state.maids) })

    }

    submit = (maids) => (ev) => {
        console.log('We need to get the details for ', maids);
        localStorage.setItem("bookedmaid", JSON.stringify(maids));


        window.location = "/bookmaid?maidinfo=" + maids;
        // localStorage.setItem("bookedmaid",true);
    }

    fetchmaids = (maids) => (e) => {

        console.log('We need to get the details for ', maids);
    }

    render() {


        return (
            <div style={{ backgroundImage: `url(${E})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <h4 style={{ fontFamily: 'arial', fontSize: 36 }}><b>Welcome {JSON.parse(localStorage.getItem('loggedinmaid')).maidName}</b></h4>

                <div style={{ display: this.state.flag ? 'none' : 'block', backgroundColor: 'white' }} className="nav nav-tabs" >
                    <ul className="nav nav-tabs" >

                        <li className="nav-item"><Link className="nav-link" to="/maidProfile" >PROFILE UPDATE</Link></li>
                        <li className="nav-item" style={{ flex: 1 }} > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button>< a href="/maidLogin" onClick={this.logout} style={{ flex: 1 }}> LOGOUT </a> </button></li>
                    </ul>

                    <Routes>

                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path='"/maidProfile' element={<maidProfile />} />
                        <Route path="/bookinginfo" element={<BookingInfo />} />
                        <Route path='/maidbookinginfo' element={<maidbookinginfo />}></Route>
                        <Route exact path='/maidProfile' element={<maidProfile />}></Route>

                    </Routes>
                </div>
                <div>

                    <br />

                    <h3>BOOKING INFORMATION</h3><br />

                    <div className="maids"  >
                        <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>Service Name</th>
                                    <th>Booking Date</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Time Slots</th>
                                    <th>Month Charges</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.booking.map(
                                        bookings => {
                                            return (<tr>

                                                <td>{bookings.userId.userName}</td>
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
            </div>


        );

    }

}

<BrowserRouter>
    <MaidHome />
</BrowserRouter>


