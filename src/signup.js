import React, { useState } from 'react';
import axios from 'axios'
import History from './history';

const SignUpForm = () => {

    const [regForm, setRegForm] = useState({

        fullName: "",
        email: "",
        password: ""
    })
    const register = (e) => {
        e.preventDefault()
        fetchApi();
        History.push('./login');
    }
    function ChangeHandler(e) {
        let { name, value } = e.target;
        setRegForm(prev => ({
            ...prev,
            [name]: value
        }))
        console.log(regForm);
        return (
            <div>{}</div>
        );
    }

    const fetchApi = () => {

        axios.get('http://localhost:3000/employees')
            .then((res1) => {
                console.log(res1.data.length);

                try {
                    for (let i = 0; i < res1.data.length; i++) {
                        if ((regForm.email === res1.data[i].email) && (regForm.password === res1.data[i].password)) {
                            document.getElementById('lblAccountError').textContent = "Already have an account"
                            document.getElementById('lblAccountError').style.color = "red"
                         return
                        }
                    }
                }
                catch {
                    axios.post('http://localhost:3000/employees', regForm)
                        .then((res2) => {
                            console.log(res2.data);
                        })
                    return
                }
                axios.post('http://localhost:3000/employees', regForm)
                        .then((res2) => {
                            console.log(res2.data);
                        })
                    return
            })
    }
    return (
        // <Router>
        <div>
            <h3 class="headingLogin" text-wrap>Create an Account</h3>
            <div class="container" >
            {/* <Route>  */}
                <form onSubmit={register} action="./login">
                    <div class="form-group">
                        <label for="Full Name">Full Name</label>
                        <input type="text" name="fullName" value={regForm.fullName} class="form-control" onChange={ChangeHandler} required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" value={regForm.email} class="form-control" id="" aria-describedby="emailHelp" onChange={ChangeHandler} required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" value={regForm.password} class="form-control" id="exampleInputPassword1" onChange={ChangeHandler} required/>
                    </div>
                    <button type="submit" onClick="./login" class="btn btn-success form-control">Register</button>
                </form>
                {/* </Route> */}
                <div>
                    <a href="/login" type="button" class="btn btn-light">Already have an account</a>
                </div>
                <a href="/" class="lnkBacktoHome">
                    <svg class="bi bi-arrow-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clip-rule="evenodd" />
                    </svg>
                    Back to home
                </a>
             
                <label id="lblAccountError">You already have acount, You need to Login Instead.</label>
            </div>
            
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

        </div>

        // </Router>
    )
}

export default SignUpForm;