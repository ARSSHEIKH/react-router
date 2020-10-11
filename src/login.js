import React, { useState } from 'react';
import axios from 'axios'
import History from './history';
import User from './user';
function LoginForm() {

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })
    const register = (e) => {
        e.preventDefault()
        fetchApi();
        History.push('./')
        User("user")
    }
    function ChangeHandler(e) {
        let { name, value } = e.target;
        setLoginForm(prev => ({
            ...prev,
            [name]: value
        }))
        return (
            <div>{}</div>
        );
    } 
    // let getid
    const fetchApi = () => {
        axios.get('http://localhost:3000/employees')
            .then((res1) => {
                // getid = res1.data[0].id;
                for (let i = 0; i < res1.data.length; i++) {
                    if ((loginForm.email === res1.data[i].email) && (loginForm.password === res1.data[i].password)) {
                        // alert("Login Successfully")
                        // document.getElementById('btnDeleteAccount').textContent = "Delete Account";
                        // document.getElementById('btnDeleteAccount').style.display = "inline"
                        return
                    }
                }
                alert("Invalid email or password!")
                document.getElementById('btnDeleteAccount').style.display = "none"
            })
    }
    // function deleteAccount() {
    //     console.log(getid);
    //     axios.delete(`http://localhost:3000/employees/` + getid)

    // }
    return (
        <div>
            <h3 class="headingLogin" text-wrap>User Login</h3>
            <div class="container" >
                <form onSubmit={register} action="./">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" value={loginForm.email} class="form-control" id="" aria-describedby="emailHelp" onChange={ChangeHandler} required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" value={loginForm.password} class="form-control" id="exampleInputPassword1" onChange={ChangeHandler} required/>
                    </div>
                    <button type="submit" class="btn btn-success form-control">Login</button>
                </form>
                <div>
                    <a href="/signup" type="button" class="btn btn-light">Donot have any account?</a>
                </div>
                <a href="/" class="lnkBacktoHome">
                    <svg class="bi bi-arrow-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clip-rule="evenodd" />
                    </svg>
                Back to home
            </a>
                {/* <span id="btnDeleteAccount" className="btn btn-outline-danger" onClick={deleteAccount}></span> */}
            </div>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

        </div>
    )
}

export default LoginForm;