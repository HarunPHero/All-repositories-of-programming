import React, { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1>I have {users.length} freinds</h1>
            {
                users.map(user => <Friends key={user.id} name={user.name} mobile={user.phone} email={user.email} address={user.address.city} website={user.website} id={user.id} ></Friends>)
            }
        </div>
    );
};

export default Home;