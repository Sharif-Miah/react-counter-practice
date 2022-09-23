import React, { useState } from 'react';
import './User.css'

const User = (props) => {
    const [count, setCount] = useState(0)

    const { id, name, email, phone, address } = props.user
    const eventHandle = (id) => {
        setCount(id)
    }
    return (
        <div className='user'>
            <h1>Id: {count}</h1>
            <h1><small>Name: {name}</small></h1>
            <p>{email}</p>
            <p>{phone}</p>
            <h4>{address.street}</h4>
            <h4>{address.city}</h4>
            <button onClick={() => eventHandle(id)}>Click Here</button>
        </div>
    );
};

export default User;