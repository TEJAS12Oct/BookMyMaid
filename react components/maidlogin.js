import React, { useState, Component } from 'react'
import { useNavigate } from "react-router-dom";
import mystore from './store';
import C from "./Images/C.jpg";

function Maidlogin() {

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
                maidEmailId: customer.email_id,
                maidPassword: customer.password,
            })

        }

        if (customer.email_id === "admin@gmail.com" && customer.password === "admin@123") {
            mystore.dispatch({ type: 'LOGGEDIN' });
            alert("admin logged in successfully");
            navigate('/AdminHome');
        }
        else {
            fetch("http://localhost:8080/maid/CheckLogin", reqOptions)
                .then(resp => resp.text())
                .then((data) => {
                    setMsg(data);
                    if (data != '') {
                        const json = JSON.parse(data);
                        console.log(json);

                        mystore.dispatch({ type: 'LOGGEDIN' });

                        if (json.maidEmailId === customer.email_id && json.maidPassword === customer.password) {
                            alert("success");
                            localStorage.setItem("loggedinmaid", (data));

                            localStorage.setItem("loggedin", true);
                            navigate('/MaidHome');
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
            <div className="container-fluid" style={{ backgroundImage: `url(${C})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                {<style>{'body{background-color:#DFDFDE}'}</style>}
                <form>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    

                    <h2> MAID SIGN IN</h2><hr />
                    <div className="form-group" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <label><b>Maid Email :</b></label> &nbsp;&nbsp;&nbsp;
                        <input type="text" style={{ width: "400px" }} name="email_id" className="form-control" placeholder="Enter Email/User ID" onChange={handleInput} value={customer.email_id} />
                    </div>
                    <div className="form-group" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label><b>Password : </b></label> &nbsp;  &nbsp;
                        <input type="password" style={{ width: "400px" }} name="password" className="form-control" placeholder="Enter password" onChange={handleInput} value={customer.password} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-info" onClick={submitForm}>LOGIN</button>
                    </div>                   
                </form>
                <h4 style={{ color: 'green' }}>New Maid Register Here!!</h4>
                <h5>< a href="/registermaid">Register As Maid   </a> </h5>  &nbsp;  &nbsp;

            </div>

            <br />
            <h3 style={{ color: "red" }}><i>{msg}</i></h3>

        </center>
    );
}

export default Maidlogin;

