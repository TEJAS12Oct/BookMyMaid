import React, { useState, Component } from 'react'
import { useNavigate } from "react-router-dom";
import mystore from './store';
import C from "./Images/C.jpg";

function Login() {

    let navigate = useNavigate();


    const [msg, setMsg] = useState("");
    const [customer, setCustomer] = useState({
        email_id: "",
        password: "",

    });


    const handleInput = (ev) => {

        setCustomer((customer) => ({
            ...customer,
            [ev.target.name]: ev.target.value
        }));
    }


    const submitForm = (ev) => {

        console.log(customer.email_id);
        console.log(customer.password);

        ev.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify({
                userEmailId: customer.email_id,
                userPassword: customer.password,
            })

        }

        if (customer.email_id === "admin@gmail.com" && customer.password === "admin@123") {
            mystore.dispatch({ type: 'LOGGEDIN' });
            alert("admin logged in successfully");
            navigate('/AdminHome');
        }
        else {
            fetch("http://localhost:8080/user/CheckLogin", reqOptions)
                .then(resp => resp.text())
                .then((data) => {
                    setMsg(data);
                    if (data != '') {
                        const json = JSON.parse(data);
                        console.log(json);

                        mystore.dispatch({ type: 'LOGGEDIN' });

                        if (json.userEmailId === customer.email_id && json.userPassword === customer.password) {
                            alert("success");
                            localStorage.setItem("loggedincustomer", (data));

                            localStorage.setItem("loggedin", true);
                            navigate('/CustomerHome');
                        }
                        else {
                            alert("invalid credintials");
                        }
                    }
                    else { alert("Enter valid details"); }
                })
        }

    }


    return (
        <center>
            <div className="container-fluid" style={{ backgroundImage: `url(${C})`, height: '595px', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                {<style>{'body{background-color:#DFDFDE}'}</style>}
                <form>
                    <h3>Sign In</h3> <hr />
                    <div className="form-group" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <label>User Email</label> &nbsp;&nbsp;&nbsp;
                        <input type="text" style={{ width: "400px" }} name="email_id" className="form-control" placeholder="Enter Email/User ID" onChange={handleInput} value={customer.email_id} />
                    </div><br />
                    <div className="form-group" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label>Password</label> &nbsp;  &nbsp;
                        <input type="password" style={{ width: "400px" }} name="password" className="form-control" placeholder="Enter password" onChange={handleInput} value={customer.password} />
                    </div><br />
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block" onClick={submitForm}>Login</button>
                    </div>
                    <br /><br />
                </form>
                <h4 style={{ color: '#DFB163' }}>New User Register Here!!</h4> <br />
                <h5> < a href="/registerCustomer">Register as Customer  </a> </h5>
                <h5>< a href="/registermaid">Register as Maid   </a> </h5>  &nbsp;  &nbsp;

            </div>

            <br />
            <h3 style={{ color: "red" }}><i>{msg}</i></h3>

        </center>
    );
}

export default Login;

