import React from 'react';
import RegisterCustomer from './registerCustomer';
import Registermaid from './registermaid';
import Front from './front';
import { BrowserRouter, Route, Link, Routes, Redirect, Switch, Router } from 'react-router-dom';
import Login from './login';
import Adminlogin from './adminlogin';
import Maidlogin from './maidlogin';
import Userlogin from './userlogin';
import Contact from './contact';
import Aboutus from './aboutus';
import Termsandconditions from './termsandconditions';
import AdminHome from './AdminHome';
import mystore from './store';
import CustomerHome from './CustomerHome';
import Profile from './profile';
import Bookmaid from './bookmaid';
import Feedback from './feedback';
import AdminMaid from './adminMaid';
import AdminCustomer from './adminCustomer';
import ViewFeedback from './viewfeedback';
import UpdateMaid from './updatemaid';
import BookingInfo from './bookinginfo';
import MaidProfile from './maidProfile';
import MaidHome from './MaidHome';
import Maidbookinginfo from './Maidbookinginfo';
import AddServices from './AddServices';



class MainMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false
        }
    }
    render() {
        mystore.subscribe(() => { this.setState({ flag: mystore.getState().loggedin }) })
    

        return (
            <BrowserRouter>
                <div style={{ display: this.state.flag ? 'none' : 'block' }}>

                    <ul className="nav nav-tabs">

                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/AdminLogin">Admin</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/UserLogin">User</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/MaidLogin">Maid</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/aboutus">About Us</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/termsandconditions">T&C</Link> </li>
                    </ul>
                    <Routes>

                        <Route path="/" element={<Front />} />
                        <Route path="/AdminLogin" element={<Adminlogin />} />
                        <Route path="/UserLogin" element={<Userlogin />} />
                        <Route path="/MaidLogin" element={<Maidlogin />} />
                        <Route path="/registerCustomer" element={<RegisterCustomer />} />
                        <Route path="/registermaid" element={<Registermaid />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/aboutus" element={<Aboutus />} />
                        <Route path="/termsandconditions" element={<Termsandconditions />} />
                        {/* <routh path="/updatemaid" element={< UpdateMaid/>}/> */}
                    </Routes>
                </div>


                <Routes>
                    <Route path="/CustomerHome" element={<CustomerHome />} />  
                    <Route path="/AdminHome" element={<AdminHome />} />
                    <Route path="/profile/*" element={<Profile />} />
                    <Route path="/bookmaid" element={<Bookmaid />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/adminMaid" element={<AdminMaid />} />
                    <Route path="/adminCustomer" element={<AdminCustomer />} />
                    <Route path="/bookmaid" element={<Bookmaid />} />
                    <Route path="/viewfeedback" element={<ViewFeedback />} />
                    <Route path="/updatemaid" element={<UpdateMaid />} />
                    <Route path="/bookinginfo" element={<BookingInfo />} />
                    <Route path="/maidProfile" element={<MaidProfile />} />
                    <Route path="/MaidHome" element={<MaidHome />} />
                    <Route path="/Maidbookinginfo" element={<Maidbookinginfo />} />
                    <Route path="/AddServices" element={<AddServices/>}/> 
                </Routes>

            </BrowserRouter>
        )
    }
}
export default MainMenu;
