import React from 'react'
import axios from 'axios'

const LogoutButton = () => {
    
    const logoutHandler = e => {
        e.preventDefault();
        axios.get("http://localhost:8000/api/users/logout", {withCredentials: true})
    }

    return (
        <div>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default LogoutButton