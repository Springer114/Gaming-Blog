import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [loading, setLoading] = useState(true);
    const [loginUser, setLoginUser] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${loginUser.id}`)
            .then(response => {
                setLoginUser(response.data.results);
                console.log(response)
                console.log(response.data.results)
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [])

    if (loading) {
        return (
            <p>loading...</p>
        )
    }

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <h1>this is {loginUser}</h1>
        </div>
    )
}

export default Profile