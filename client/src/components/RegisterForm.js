import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const RegisterForm = () => {
    const initialRegister = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const [register, setRegister] = useState(initialRegister)

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const changeHandler = e => {
        setRegister({
        ...register,
        [e.target.name]: e.target.value,
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        console.log("Form submitted!");
        axios.post("http://localhost:8000/api/users/register", user)
        .then(response => {
            console.log(response);
            if (response.data.message === "error") {
            const errorResponse = response.data.errors;
            const errorArr = [];
            console.log(errorResponse);
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message);
            }
            setErrors(errorArr);
            } else {
            setUser({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            setErrors("");
            navigate("/profile/:id");
            }
        })
        .catch((err) => console.log("Errors with post", err));
    };

    return (
        <div className="page-wrapper register">
            <form onSubmit={submitHandler}>
                <h2>Register</h2>
                <div>
                    <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div>
                    <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div>
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div>
                    <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={(e) => changeHandler(e)}
                    />
                </div>
                <button type="submit">Register</button>
                {errors
                    ? errors.map((err, index) => (
                        <p style={{ color: "red" }} key={index}>
                        {err}
                        </p>
                    ))
                    : ""}
            </form>
        </div>
    );
};

export default RegisterForm;