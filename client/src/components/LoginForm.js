import React, {useState} from 'react'
import axios from 'axios';
import Castle from './Castle';
import {navigate} from '@reach/router';

const LoginForm = () => {
    const initialLogin = {
        email: "",
        password: ""
    };

    const [loginUser, setLoginUser] = useState(initialLogin);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [errors] = useState([])
    const loginChangeHandler = (e) => {
        setLoginUser({
            ...loginUser,
            [e.target.name] : e.target.value
        })
    }
    const loginSubmitHandler = (e) => {
        e.preventDefault();
        console.log("login attempt");
        axios.post("http://localhost:8000/api/users/login", loginUser, {withCredentials: true})
            .then(response => {
                setIsAuthenticated(true)
                navigate("/profile/:id");
            })
            .catch(err => console.log("Error with login", err))
    }
    return (
        <div className="page-wrapper login">
            <h2>Login</h2>
            <form onSubmit={loginSubmitHandler}>
                <div>
                    <input type="email" name="email" placeholder="Email Address" onChange={e => loginChangeHandler(e)}/>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" onChange={e => loginChangeHandler(e)}/>
                </div>
                <button type="submit">Login</button>
                {
                    errors ? 
                    errors.map((err, index) => <p style={{color: 'red'}} key={index}>{err}</p>)
                    : ""
                }
            </form>
            <Castle />
        </div>
    )
}

export default LoginForm