import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        setError("");
        try {
            const{data} = await axios.post('http://local:5000/api/auth/register',{username, email, password});
            localStorage.setItem('user', JSON.stringify({ username: data.username, token: data.token }));
            navigate('/dashboard');
        } catch (error) {
            if(error.response&& error.response.data && error.response.data.message){
                setError(error.response.data.message);
            } else {
                setError("An unexpected error occurred. Please try again later.");
            }
        }
    };
    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label htmlFor="name"className="form-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-control" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="form-control" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        className="form-control" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            {error && <p className="text-danger mt-3">{error}</p>}
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};
export default Register;