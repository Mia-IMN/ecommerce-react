import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';

const Login = () => {
    return (
        <div className="Login">
            <Header />
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Login;
