import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { user, signInUsingGoogle } = useFirebase();
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input className="input-field" type="email" placeholder="Your Email" />
                    <br />
                    <input className="input-field" type="password" name="" id="" />
                    <br />
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
                <p>New to Digital Helath Care ? <Link to="/register">Create Account</Link></p>
                <div>------or------</div>
                <button className="signIn-btn" onClick={signInUsingGoogle} >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;