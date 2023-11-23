import React, { useState } from 'react'
import { Link } from 'react-router-dom'; // Example import for a routing library

const Login = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // You can implement your login logic here
        console.log('Logging in with:', username, password);
    };
    return (
        <div>





            <div>
                <h2>Login</h2>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="button" onClick={handleLogin}>
                        Login
                    </button>
                </form>
            </div>






        </div>
    )
}

export default Login
