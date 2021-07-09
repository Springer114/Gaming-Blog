import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Profile = props => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        _id: "",
        username: "",
        email: "",
        password: "",
        createdAt: "",
        updateAt: ""
    });

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = () => {
        axios.get("http://localhost:8000/api/users", { withCredentials: true })
            .then(response => setUsers(response.data.results))
            .catch(err => setUsers([]))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${props.id}`)
            .then(response => {
                setUser(response.data.results);
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
            {
                users.map((user, i) => 
                <p key={i}>{user.username}</p>
                )
            }
        </div>
    )
}

export default Profile