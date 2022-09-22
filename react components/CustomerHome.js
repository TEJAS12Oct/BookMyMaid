import React from 'react';
import { Table } from 'react-bootstrap';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import mystore from './store';
import Profile from './profile';
import Bookmaid from './bookmaid';
import Feedback from './feedback';
import Login from './login';
import BookingInfo from './bookinginfo';
import E from './Images/E.jpg';

export default class CustomerHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            maids: [],
            category: [],

            userName: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    logout = () => {

        mystore.dispatch({ type: 'LOGGEDOUT' });
        localStorage.removeItem("loggedincustomer");
        localStorage.setItem("loggedin", false);
        this.props.history.push("/login");

    }



    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log("selected :" + value);
        localStorage.setItem("selectedcategory", (value));
        this.setState({ userName: value })
        this.getAllMaids(value);
    }






    getAllMaids = (c) => {

        console.log(c);

        fetch("http://localhost:8080/maid/getAllMaidsByCategory/" + (c))
            .then(resp => resp.json())    //.then(data => alert(JSON.stringify(data)))
            .then(data => { this.setState({ maids: data }); console.log(this.state.maids) })

    }

    submit = (maids) => (ev) => {
        console.log('We need to get the details for ', maids);
        localStorage.setItem("bookedmaid", JSON.stringify(maids));


        window.location = "/bookmaid?maidinfo=" + maids;
        // localStorage.setItem("bookedmaid",true);
    }

    fetchmaids = (maids) => (e) => {

        //alert("hello");
        //const maids = e.target.getAttribute('data-item');
        console.log('We need to get the details for ', maids);

        // window.location="/bookmaid?maidinfo="+maids;


    }

    render() {
        const servicesName = require("./demo.json");

        return (
            <div style={{ backgroundImage: `url(${E})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <h4 style={{ fontFamily: 'arial', fontSize: 36 }}><b>Welcome {JSON.parse(localStorage.getItem('loggedincustomer')).userName}</b></h4>

                <div style={{ display: this.state.flag ? 'none' : 'block', backgroundColor: 'white' }} className="nav nav-tabs" >
                    <ul className="nav nav-tabs" >

                        <li className="nav-item"><Link className="nav-link" to="/profile" >PROFILE UPDATE</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/bookinginfo" >BOOKING INFO</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/feedback" >FEEDBACK</Link></li>
                        <li className="nav-item" style={{ flex: 1 }} >                                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button>< a href="/userLogin" onClick={this.logout} style={{ flex: 1 }}> LOGOUT </a> </button></li>
                    </ul>

                    <Routes>

                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/bookinginfo" element={<BookingInfo />} />
                        <Route path="/feedback" element={<Feedback />} />
                        <Route path="/bookmaid" element={<Bookmaid />} />
                    </Routes>
                </div>
                <div>
                    <br />
                    Select Services:
                    <select name="Services" onChange={this.handleChange}>

                        {
                            servicesName.cat.map(Services => {
                                return (<option key={Services.servicesName} value={Services.servicesName} >{Services.servicesName}</option>)


                            })

                        }

                    </select>
                    <br />
                    <br />
                    <h5>MAID LIST</h5>
                    <br />
                    <div className="maids"  >
                        <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>Maid id</th>
                                    <th>Name</th>
                                    <th> Age</th>
                                    <th>Address</th>
                                    <th>Contact No.</th>
                                    <th>Email Id</th>
                                    <th>Police Verification Certificte</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.maids.map((
                                        maids) => {
                                        return (<tr data-item={maids} onClick={this.fetchmaids(maids)} >
                                            <td>{maids.maidId}</td>
                                            <td>{maids.maidName}</td>
                                            <td>{maids.maidAge}</td>
                                            <td>{maids.maidAddress}</td>
                                            <td>{maids.maidMobileNo}</td>
                                            <td>{maids.maidEmailId}</td>
                                            <td>{maids.maidPoliceVerificationCertificate}</td>
                                            <td><button onClick={this.submit(maids)}>BOOK MAID</button></td>
                                        </tr>);
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
    <CustomerHome />
</BrowserRouter>