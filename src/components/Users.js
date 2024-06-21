import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <div className="content">
            <div className="header">
                <h1>Users</h1>
            </div>
            <ul className="users-list">
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
