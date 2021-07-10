import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Profile = props => {
    const [allUsers, setAllUsers] = useState({});
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const [loginUser] = useState({});

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = () => {
        axios.get('http://localhost:8000/api/users', { withCredentials: true })
            .then(response => setAllUsers(response.data.results))
            .catch(err => setAllUsers([]))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${props._id}`)
            .then(response => {
                setUser(response.data.results);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [props])

    if (loading) {
        return (
            <p>loading...</p>
        )
    }

    return (
        <div>
            <h1>this is {props.username}</h1>
        </div>
    )
}

export default Profile