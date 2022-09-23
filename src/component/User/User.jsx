import React from 'react';
import './User.css'

const User = (props) => {
    const { name, email, phone, address } = props.user
    return (
        <div className='user'>
            <h1><small>Name: {name}</small></h1>
            <p>{email}</p>
            <p>{phone}</p>
            <h4>{address.street}</h4>
            <h4>{address.city}</h4>
        </div>
    );
};

export default User;